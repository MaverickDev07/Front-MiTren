import { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NavigatorTop from "@/components/NavigatorTop";
import ButtonLink from '@/components/ButtonLink';

const PaymentQR = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const payQr = location.state || {};
  const [qr, setQr] = useState('');
  const [movimientoId, setMovimientoId] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true); // Indicador de carga
  const [qrGenerated, setQrGenerated] = useState(false);

  // Función para generar el código QR
    // const generateQR = useCallback(async () => {
    //   try {
    //     const response = await fetch('http://64.176.6.53/v1/qr/generate', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         monto: parseFloat(payQr.monto),
    //         start_station: payQr.start_station,
    //         end_station: payQr.end_station,
    //       }),
    //     });
  
    //     const data = await response.json();
    //     if (data.Codigo === 0) {
    //       setQr(`data:image/png;base64,${data.Data.qr}`);
    //       setMovimientoId(data.Data.movimiento_id);
    //     } else {
    //       setError(data.Mensaje);
    //     }
    //   } catch (err) {
    //     setError("Ocurrió un error en la conexión.");
    //     console.error("Error en la solicitud:", err);
    //   } finally {
    //     setLoading(false);
    //   }
    // }, [payQr]);
    const datosE = {
      "Codigo": 0,
      "Data": {
        "movimiento_id": 114568,
        "qr": "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"
      },
      "Mensaje": "Qr generado exitosamente"
    };
    
    const generateQR = useCallback(async () => {
      try {
        const response = await fetch('http://64.176.6.53/v1/qr/generate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            monto: parseFloat(payQr.monto),
            start_station: payQr.start_station,
            end_station: payQr.end_station,
          }),
        });
    
        if (!response.ok) {
          throw new Error("Fallo en la solicitud, usando datos simulados por CORS");
        }
    
        const data = await response.json();
        if (data.Codigo === 0) {
          setQr(`data:image/png;base64,${data.Data.qr}`);
          setMovimientoId(data.Data.movimiento_id);
        } else {
          setError(data.Mensaje);
        }
      } catch (err) {
        // En caso de un error (como un bloqueo de CORS), usa el objeto `datosE`
        console.error("Error en la solicitud o CORS bloqueado, usando datos simulados:", err);
    
        // Usa los datos simulados
        setQr(`data:image/png;base64,${datosE.Data.qr}`);
        setMovimientoId(datosE.Data.movimiento_id);
        setError(datosE.Mensaje);
      } finally {
        setLoading(false);
      }
    }, [payQr]);



  // Función para verificar el estado del pago
  const checkPaymentStatus = useCallback(async () => {
    if (!movimientoId) return;
    try {
      const response = await fetch(`http://64.176.6.53/v1/qr/verify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
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

  const handleClearLocalStorage = () => {
    localStorage.clear();
  };

  useEffect(() => {
    if (payQr.monto > 0 && !qrGenerated) {
      generateQR(); // Genera el QR solo una vez
      setQrGenerated(true); // Establecemos qrGenerated en true después de generar el QR
    }
  
    // Configuramos el intervalo para verificar el estado del pago cada 10 segundos
    const intervalId = setInterval(checkPaymentStatus, 10000); // 10000 ms = 10 segundos
  
    // Limpiamos el intervalo al desmontar el componente
    return () => clearInterval(intervalId);
  }, [payQr.monto, generateQR, checkPaymentStatus, qrGenerated]);

  return (
    <div className="w-full min-h-screen bg-mitren-primary bg-doodle bg-cover ">
      <div className="w-full lg:px-20 xl:px-[101px]">
        <NavigatorTop title='Comprar Ticket - QR'/>
      </div>
      <div className="fixed top-0 -left-2 min-h-screen xs:w-[2rem] sm:w-[3rem] md:w-[3rem] lg:w-[4rem] bg-pattern-left bg-cover bg-right-bottom transition duration-75"></div>
      <div className="fixed top-0 -right-2 min-h-screen xs:w-[2rem] sm:w-[3rem] md:w-[3rem] lg:w-[4rem] bg-pattern-right bg-cover bg-left-bottom transition duration-75"></div>
      {/* Elemento en la parte inferior */}
      <div className="fixed md:bottom-[100px] left-1/2 transform -translate-x-1/2 translate-y-1/4 bg-circle2 bg-cover
      md:h-[25rem] md:w-[45rem] lg:h-[70rem] lg:w-[130rem] flex items-start justify-center pt-4 text-center">
      {/* {loading ? (
        <p>Cargando QR...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
          <div className="border-2 border-black p-6 bg-white rounded-[44px] sm:h-64 md:h-72 md:w-72 lg:h-96 lg:w-96">
            <img src={qr} alt="Código QR" />
          </div>
          <button>
          <span className="text-sm sm:text-base">Cancelar</span>
          </button>
        </div>
      )} */}
      </div>
      <div className="relative w-full lg:px-20 xl:px-[101px] flex flex-col items-center">
          <h2 className="font-bold text-3xl md:text-2xl lg:text-4xl text-white uppercase mb-4">Lectura QR</h2>
          <h2 className="font-bold text-3xl md:text-2xl lg:text-4xl text-white uppercase mb-4">{payQr.monto} Bs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 justify-items-center">
          <div className="border-2 border-black p-6 bg-white rounded-[44px] sm:h-64 md:h-72 md:w-72 lg:h-[35rem] lg:w-[35rem] flex flex-col justify-center items-center">
            <img src={qr} alt="Código QR" className='h-[100%]' />
          </div>
          <ButtonLink
            to="/kiosk/menu"
            className="bg-red-600 text-black inline-flex justify-end items-center gap-4 px-6 mt-4" 
            height="h-[60px] md:h-[60px] md:w-[300px] lg:h-[100px] lg:w-[560px] xl:h[60px] 4xl:h-[60px]"
            backgroundColor="bg-red-600"
            borderColor="box-border border-black border-[10px]"
            onClick={handleClearLocalStorage}
          >
            <div className="flex-1 text-center text-white md:text-2xl lg:text-4xl">Cancelar</div>
          </ButtonLink>
        </div>
      </div>
    </div>
    
  );
};

export default PaymentQR;

