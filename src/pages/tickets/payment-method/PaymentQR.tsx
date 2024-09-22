import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BackgroundEffect from "@/components/BackgroundEffect";
import NavigatorTop from "@/components/NavigatorTop";
import ButtonLink from '@/components/ButtonLink';

// Base URL de la API de VeriPagos
const API_URL = 'https://veripagos.com/api';
const USERNAME = 'mitren'; // Nombre de usuario
const PASSWORD = '-+1eFHxrU*'; // Contraseña
const SECRET_KEY = 'd45b8d2d-9914-49cc-b337-2888cebf3d3e'; // Clave secreta de la API

const PaymentQR = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;
  const unnotted = path !== '/';
  const { ticketCount } = location.state || {};
  const [qr, setQr] = useState(null);
  const [movimientoId, setMovimientoId] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true); // Indicador de carga
  const [qrGenerated, setQrGenerated] = useState(false);
  const totalAmount = ticketCount; // Suponiendo que el ticketCount es el monto total
  const vigencia = '0/00:15'; // Vigencia del QR

  // Función para generar el código QR
  const generateQR = useCallback(async () => {
    const credentials = btoa(`${USERNAME}:${PASSWORD}`);
    try {
      const response = await fetch(`${API_URL}/bcp/generar-qr`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${credentials}`,
        },
        body: JSON.stringify({
          secret_key: SECRET_KEY,
          monto: totalAmount,
          vigencia: vigencia,
          uso_unico: false,
          detalle: 'Compra de ticket de tren',
        }),
      });

      const data = await response.json();
      if (data.Codigo === 0) {
        setQr(`data:image/png;base64,${data.Data.qr}`);
        setMovimientoId(data.Data.movimiento_id);
      } else {
        setError(data.Mensaje);
      }
    } catch (err) {
      setError("Ocurrió un error en la conexión.");
      console.error("Error en la solicitud:", err);
    } finally {
      setLoading(false);
    }
  }, [totalAmount]); // Dependencia de totalAmount

  // Función para verificar el estado del pago
  const checkPaymentStatus = useCallback(async () => {
    if (!movimientoId) return;

    const credentials = btoa(`${USERNAME}:${PASSWORD}`);
    try {
      const response = await fetch(`${API_URL}/bcp/verificar-estado-qr`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${credentials}`,
        },
        body: JSON.stringify({
          secret_key: SECRET_KEY,
          movimiento_id: String(movimientoId),
        }),
      });

      const data = await response.json();
      if (data.Codigo === 0) {
        if (data.Data.estado === 'Completado') {
          navigate('/verificationQR'); // Navega a la pantalla de transacción exitosa
        }
      } else {
        setError(data.Mensaje);
      }
    } catch (err) {
      setError('Error al verificar el estado del pago: ' + err.message);
      console.error('Error al verificar el estado del pago:', err);
    }
  }, [movimientoId, navigate]); // Dependencias

  // Efecto para cargar el QR al montar el componente
  useEffect(() => {
    if (ticketCount > 0 && !qrGenerated) {
      generateQR(); // Genera el QR solo una vez
      setQrGenerated(true); // Establecemos qrGenerated en true después de generar el QR
    }
  
    // Configuramos el intervalo para verificar el estado del pago cada 10 segundos
    const intervalId = setInterval(checkPaymentStatus, 10000); // 10000 ms = 10 segundos
  
    // Limpiamos el intervalo al desmontar el componente
    return () => clearInterval(intervalId);
  }, [ticketCount, generateQR, checkPaymentStatus, qrGenerated]);

  return (
    <div className="container flex flex-col gap-6 mx-auto pt-8 px-4 min-h-screen justify-center items-center">
      <div className="w-full lg:px-20 xl:px-[101px]">
        <NavigatorTop />
      </div>
      <div className="w-full lg:px-20 xl:px-[101px] flex flex-col items-center">
        <BackgroundEffect unnotted={unnotted} />
        <h2 className="font-bold text-3xl sm:text-4xl text-white uppercase mb-8">Escanea el código QR para pagar</h2>
        {loading ? (
          <p>Cargando QR...</p>
        ) : (
          <img src={qr} alt="Código QR" />
        )}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <ButtonLink to="/linea/destination/tickets/" className="flex items-center">
          <span className="text-sm sm:text-base">Cancelar</span>
        </ButtonLink>
      </div>
    </div>
  );
};

export default PaymentQR;