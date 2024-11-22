import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ButtonBase from "@/components/ButtonBase";
import ButtonLink from "@/components/ButtonLink";
import NavigatorTop from "@/components/NavigatorTop";

const PayCardNFC: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    documento: "",
    celular: "",
    correo: "",
    monto: "",
  });

  const [isComplete, setIsComplete] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Cargar datos desde location.state si existen
  useEffect(() => {
    if (location.state) {
      setFormData((prevData) => ({
        ...prevData,
        ...location.state,
      }));
      setIsComplete(true);
    }
  }, [location.state]);

  // Manejar cambios en los campos del formulario
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Validar si todos los campos están llenos
    const allFieldsFilled = Object.values({
      ...formData,
      [name]: value,
    }).every((field) => field.trim() !== "");

    setIsComplete(allFieldsFilled);
  };

  // Manejar el envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isComplete) {
      navigate("/boleteria/payNFC/PayCardNFC/NFCPay", {
        state: { ...formData },
      });
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen px-4">
      {/* Navegador Superior */}
      <div className="w-full lg:px-20 xl:px-[101px]">
        <NavigatorTop title="Venta de tarjeta nfc"  LinkTo="/boleteria"/>
      </div>
      <p className="font-bold text-xl sm:text-2xl lg:text-4xl text-white my-4 text-center">
        Inserte los datos del comprador
      </p>

      <form onSubmit={handleSubmit} className="w-full max-w-4xl p-6">
        {/** Campo: Nombre */}
        <label className="block font-bold text-xl sm:text-2xl lg:text-4xl text-white mb-2">Nombre completo</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleInputChange}
          placeholder="Nombre completo"
          className="w-full p-3 mb-4 border rounded-lg"
        />

        {/** Campo: Documento */}
        <label className="block font-bold text-xl sm:text-2xl lg:text-4xl text-white mb-2">Número de documento de identidad</label>
        <input
          type="text"
          name="documento"
          value={formData.documento}
          onChange={handleInputChange}
          placeholder="Número de documento"
          className="w-full p-3 mb-4 border rounded-lg"
        />

        {/** Campo: Celular */}
        <label className="block font-bold text-xl sm:text-2xl lg:text-4xl text-white mb-2">Número de celular</label>
        <input
          type="text"
          name="celular"
          value={formData.celular}
          onChange={handleInputChange}
          placeholder="Número de celular"
          className="w-full p-3 mb-4 border rounded-lg"
        />

        {/** Campo: Correo */}
        <label className="block font-bold text-xl sm:text-2xl lg:text-4xl text-white mb-2">Correo electrónico</label>
        <input
          type="email"
          name="correo"
          value={formData.correo}
          onChange={handleInputChange}
          placeholder="Correo electrónico"
          className="w-full p-3 mb-4 border rounded-lg"
        />

        {/** Campo: Monto */}
        <label className="block font-bold text-xl sm:text-2xl lg:text-4xl text-white mb-2">Monto de la primera recarga</label>
        <input
          type="number"
          name="monto"
          value={formData.monto}
          onChange={handleInputChange}
          placeholder="Monto de la primera recarga"
          className="w-full p-3 mb-4 border rounded-lg"
        />
        <div className="flex justify-between mt-6 ml-[12rem]">
          <ButtonLink
            to="/boleteria"
            className="w-[45%] flex items-center justify-center text-white font-bold py-3 rounded-lg hover:bg-red-600"
            backgroundColor="bg-red-500"
            height = "h-[60px] sm:h-[70px] md:h-[68px] lg:h-[80px]"
            rounded = "sm:rounded-[44px] lg:rounded-[48px]"
          >
            Cancelar
          </ButtonLink>
          <ButtonBase
            type="submit"
            disabled={!isComplete}
            className={`w-[45%] flex items-center justify-center font-bold py-3 rounded-lg ${
              isComplete ? "hover:bg-green-600 text-white" : "bg-gray-400 cursor-not-allowed text-gray-700"
            }`}
            backgroundColor="bg-green-500"
            height = "h-[60px] sm:h-[70px] md:h-[68px] lg:h-[80px]"
            rounded = "sm:rounded-[44px] lg:rounded-[48px]"
          >
            Continuar
          </ButtonBase>
        </div>
      </form>
    </div>
  );
};

export default PayCardNFC;