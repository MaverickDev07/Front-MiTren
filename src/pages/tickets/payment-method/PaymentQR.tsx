import { useEffect, useState } from 'react';
import BackgroundEffect from "@/components/BackgroundEffect";
import { useLocation, useNavigate } from "react-router";
import NavigatorTop from "@/components/NavigatorTop";
import ButtonLink from '@/components/ButtonLink';
import Base64Image from "../components/Base64"; 

const PaymentQR = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;
  const unnotted = path !== '/';
  
  const { ticketCount } = location.state || {};
  const price = ticketCount * 1; // Cambia 1 por el precio real si es necesario
  const [qr, setQr] = useState(null);
  const [movimientoId, setMovimientoId] = useState(null);
  const [error, setError] = useState('');
  const [isChecking, setIsChecking] = useState(false); // Para controlar el estado de verificación

  // Credenciales estáticas
  const username = 'mitren';
  const password = '-+1eFHxrU*';
  const totalAmount = price;
  const vigencia = '0/00:00';

  useEffect(() => {
    const generateQR = async () => {
      const secretKey = 'd45b8d2d-9914-49cc-b337-2888cebf3d3e';
      const credentials = btoa(`${username}:${password}`);

      try {
        const response = await fetch(`https://veripagos.com/api/bcp/generar-qr?secret_key=${secretKey}&monto=${totalAmount}&vigencia=${vigencia}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${credentials}`,
          },
        });

        const data = await response.json();

        if (data.Codigo === 0) {
          setQr(`data:image/png;base64,${data.Data.qr}`);
          setMovimientoId(data.Data.movimiento_id); // Almacena el movimiento_id
          checkPaymentStatus(data.Data.movimiento_id); // Verifica el estado del pago
        } else {
          setError(data.Mensaje);
        }
      } catch (err) {
        setError("Ocurrió un error en la conexión.");
        console.error("Error en la solicitud:", err);
      }
    };

    if (ticketCount > 0) {
      generateQR();
    }
  }, [ticketCount]);

  const checkPaymentStatus = async (movimientoId) => {
    setIsChecking(true);
    const secretKey = 'd45b8d2d-9914-49cc-b337-2888cebf3d3e';
    const credentials = btoa(`${username}:${password}`);
    
    const intervalId = setInterval(async () => {
      try {
        const response = await fetch(`https://veripagos.com/api/bcp/verificar-estado-qr`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${credentials}`,
          },
          body: JSON.stringify({
            secret_key: secretKey,
            movimiento_id: String(movimientoId) 
          }),
        });

        const data = await response.json();
        console.log("Respuesta de verificación:", data); // Log de respuesta
        
        if (data.Codigo === 0) {
          clearInterval(intervalId);

          // Verifica el estado de la transacción
          if (data.Data.estado === 'Completado') {
            navigate('/verificationQR'); // Navegar a la pantalla de éxito
          } else {
            navigate('/pago-fallido'); // Manejar otros estados si es necesario
          }
        } else {
          setError(data.Mensaje);
        }
      } catch (err) {
        clearInterval(intervalId); 
        setError("Error al verificar el estado del pago.");
        console.error("Error en la verificación:", err);
      }
    }, 30000); // Verifica cada 30 segundos
    
    return () => clearInterval(intervalId);
  };

  return (
    <div className="container flex flex-col gap-6 mx-auto pt-8 px-4 min-h-screen justify-center items-center">
      <div className="w-full lg:px-20 xl:px-[101px]">
        <NavigatorTop />
      </div>
      <div className="w-full lg:px-20 xl:px-[101px] flex flex-col items-center">
        <BackgroundEffect unnotted={unnotted} />
        {ticketCount !== undefined ? (
          <div className="w-full mt-4 lg:mt-0 flex flex-col items-center">
            <h2 className="font-bold text-3xl sm:text-4xl text-white uppercase mb-8">Lectura QR {totalAmount} Bs</h2>
            <div className="w-full h-full flex flex-col bg-white rounded-[44px] p-8 items-center">
              {qr ? (
                <div className="flex flex-col items-center">
                  <h3>Código QR Generado:</h3>
                  <Base64Image base64={qr} alt="Código QR" />
                </div>
              ) : (
                <p>Generando código QR...</p>
              )}
            </div>
          </div>
        ) : (
          <p>No se recibieron datos sobre la cantidad de tickets.</p>
        )}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <ButtonLink to="/ticket-payment" className="flex items-center">
          <span className="text-sm sm:text-base">Cancelar</span>
        </ButtonLink>
      </div>
    </div>
  );
}

export default PaymentQR;