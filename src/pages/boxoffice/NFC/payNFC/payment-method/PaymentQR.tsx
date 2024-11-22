import { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NavigatorTop from "@/components/NavigatorTop";
import ButtonLink from '@/components/ButtonLink';
import useCreate from "@/hook/useCreate";

const PaymentQR = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const payQr = location.state || {};
  const [qrGenerated, setQrGenerated] = useState(false);

  // `useCreate` para generar el QR
  const { data, loading, error, create: generateQR } = useCreate<{ Codigo: number; Data: { qr: string; movimiento_id: string }; Mensaje: string }>('/v1/qr/generate');
  
  // `useCreate` para verificar el estado del pago
  const { data: statusData, error: statusError, create: verifyPayment } = useCreate<{ Codigo: number; Data: { estado: string }; Mensaje: string }>('/v1/ticket_flow/step-4/pqr/verify');

  // Generar el QR al montar el componente
  useEffect(() => {
    if (!qrGenerated) {
      generateQR({
        monto: parseFloat(payQr.monto)
      });
      setQrGenerated(true);
    }
  }, [generateQR, payQr, qrGenerated]);

  // Actualizar ID de movimiento cuando el QR se genera correctamente
  const movimientoId = data?.Data.movimiento_id;

  // Función para verificar el estado de pago
  const checkPaymentStatus = useCallback(() => {
    if (movimientoId) {
      verifyPayment({ movimiento_id: String(movimientoId) });
    }
  }, [movimientoId, verifyPayment]);

  // Redirige si el estado es "Completado"
  useEffect(() => {
    if (statusData && statusData.Codigo === 0 && statusData.Data.estado === 'Completado') {
      localStorage.clear();
      navigate('/boleteria/VerificationCheckNFC');
    }
  }, [statusData, navigate]);

  // Configuración del intervalo para verificar el estado de pago
  useEffect(() => {
    const intervalId = setInterval(checkPaymentStatus, 10000); // 10 segundos
    return () => clearInterval(intervalId);
  }, [checkPaymentStatus]);

  return (
    <div className="w-full min-h-screen bg-mitren-primary bg-doodle bg-cover ">
      <div className="w-full lg:px-20 xl:px-[101px]">
        <NavigatorTop title='VENTA TAJETA NFC - QR'/>
      </div>
      <div className="fixed top-0 -left-2 min-h-screen xs:w-[2rem] sm:w-[3rem] md:w-[3rem] lg:w-[4rem] bg-pattern-left bg-cover bg-right-bottom transition duration-75"></div>
      <div className="fixed top-0 -right-2 min-h-screen xs:w-[2rem] sm:w-[3rem] md:w-[3rem] lg:w-[4rem] bg-pattern-right bg-cover bg-left-bottom transition duration-75"></div>
      <div className="fixed md:bottom-[100px] left-1/2 transform -translate-x-1/2 translate-y-1/4 bg-circle2 bg-cover
      md:h-[25rem] md:w-[45rem] lg:h-[70rem] lg:w-[130rem] flex items-start justify-center pt-4 text-center">
      </div>
      <div className="relative w-full lg:px-20 xl:px-[101px] flex flex-col items-center">
          <h2 className="font-bold text-3xl md:text-2xl lg:text-4xl text-white uppercase mb-4">Lectura QR</h2>
          <h2 className="font-bold text-3xl md:text-2xl lg:text-4xl text-white uppercase mb-4">{payQr.monto} Bs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 justify-items-center">
          <div className="border-2 border-black p-6 bg-white rounded-[44px] sm:h-64 md:h-72 md:w-72 lg:h-[35rem] lg:w-[35rem] flex flex-col justify-center items-center">
            {loading ? <p>Cargando QR...</p> : <img src={`data:image/png;base64,${data?.Data.qr}`} alt="Código QR" className="h-full" />}
            {error && <p className="text-red-600">{error}</p>}
          </div>
          <ButtonLink
            to="/boleteria"
            className="bg-red-600 text-black inline-flex justify-end items-center gap-4 px-6 mt-4" 
            height="h-[60px] md:h-[60px] md:w-[300px] lg:h-[100px] lg:w-[560px] xl:h[60px] 4xl:h-[90px]"
            backgroundColor="bg-red-600"
            borderColor="box-border border-black border-[10px]"
          >
            <div className="flex-1 text-center text-white md:text-2xl lg:text-4xl">Cancelar</div>
          </ButtonLink>
          {statusError && <p className="text-red-600">{statusError}</p>}
        </div>
      </div>
    </div>
  );
};

export default PaymentQR;
