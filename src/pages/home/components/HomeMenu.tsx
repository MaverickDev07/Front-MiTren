import MiTrenLogo from "@/assets/brand/mitren-logo.webp"
import ButtonLink from '@/components/ButtonLink'

const HomeMenu = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="w-full flex flex-col justify-center items-center">
        <img src={MiTrenLogo} alt="Mi Tren Logo" className="w-36 h-36 my-20" />
        <div className="flex flex-col gap-8 w-full sm:w-96">
          <ButtonLink to="/tickets" className="bg-white h-[82px]" fontSize="text-lg" fontFamily="font-sans">
            COMPRAR TICKET
          </ButtonLink>
          <ButtonLink to="/tarjetanfc" className="bg-white h-[82px]">
            RECARGAR TARJETA NFC
          </ButtonLink>
          <ButtonLink to="/transbordo" className="bg-white h-[82px]">
            TRANSBORDO
          </ButtonLink>
        </div>
      </div>
    </div>
  )
}

export default HomeMenu
