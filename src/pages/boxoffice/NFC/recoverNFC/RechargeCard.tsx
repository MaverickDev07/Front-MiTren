import { useEffect, useState } from "react";
import ButtonLink from "@/components/ButtonLink";
import NavigatorTop from "@/components/NavigatorTop";
import RecargaForm from "./RecargaFormProps";
import MultiColumnLayout from "@/components/MultiColumnLayout";
import { useLocation, useNavigate } from "react-router";
import ButtonBase from "@/components/ButtonBase";

const RechargeCard = () => {
  const [monto, setMonto] = useState<string>("");
  const location = useLocation();
  const navigate = useNavigate();

  const montoReturn = location.state?.monto || 0;
  useEffect(()=>{
    if (montoReturn) {
      setMonto(montoReturn);
    }
  }, [montoReturn])

  const handleSubmit = (monto: string) => {
    console.log("Monto recargado:", monto);

    navigate("/boleteria/PaymentNFC", {
      state: {
        monto: monto,
      },
    });
  };

  const handleMontoChange = (nuevoMonto: string) => {
    setMonto(nuevoMonto);
  };

  const columns = [
    {
      id: "col1",
      content: (
        <div className="flex flex-col justify-end h-full">
          <ButtonLink
            to="/boleteria/ReloadPage"
            className="text-black inline-flex items-center gap-4 px-6 ml-8"
            height="h-[60px] md:h-[60px] md:w-[200px] lg:h-[100px] lg:w-[360px]"
            backgroundColor="bg-red-500"
            borderColor="box-border border-black border-[5px]"
          >
            <div className="flex-1 text-center text-white md:text-2xl lg:text-4xl">
              Cancelar
            </div>
          </ButtonLink>
        </div>
      ),
    },
    {
      id: "col2",
      content: (
        <RecargaForm
          onSubmit={handleSubmit}
          onMontoChange={handleMontoChange}
          initialMonto={monto}
        />
      ),
    },
    {
      id: "col3",
      content: monto.trim() ? (
        <div className="flex flex-col justify-end h-full">
          <ButtonBase
            height="h-[60px] md:h-[60px] md:w-[200px] lg:h-[100px] lg:w-[360px]"
            className="text-black inline-flex items-center gap-4 px-6"
            borderColor="box-border border-black border-[5px]"
            backgroundColor="bg-green-500"
            onClick={() => handleSubmit(monto)}
          >
            <div className="flex-1 text-center text-white md:text-2xl lg:text-4xl">
              Continuar
            </div>
          </ButtonBase>
        </div>
      ) : null,
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="w-full lg:px-20 xl:px-[101px]">
        <NavigatorTop title="Comprar Ticket - QR"  LinkTo="/boleteria"/>
      </div>
      <div
        className="fixed md:bottom-[100px] left-1/2 transform -translate-x-1/2 translate-y-1/4 bg-circle2 bg-cover
        md:h-[25rem] md:w-[45rem] lg:h-[70rem] lg:w-[130rem] flex items-start justify-center pt-4 text-center"
      ></div>
      {!monto.trim() && (
        <p className="font-bold text-2xl sm:text-4xl text-white mb-4">
          Saldo actual:...
        </p>
      )}
      <MultiColumnLayout columns={columns} />
    </div>
  );
};

export default RechargeCard;
