import MiTrenLogo from "@/assets/brand/mitren-logo.webp"
import BackgroundEffect from "@/components/BackgroundEffect"
import ButtonLink from '@/components/ButtonLink'
import { useLocation } from "react-router"

const HomeMenu = () => {
  const location = useLocation()
  const path = location.pathname
  const unnotted = path !== '/'
  return (
    <div className="w-full min-h-screen">
    <BackgroundEffect unnotted={unnotted}/>
      <div className="w-full flex flex-col justify-center items-center">
        <img src={MiTrenLogo} alt="Mi Tren Logo" className="w-36 h-36 my-20" />
        <div className="flex flex-col gap-8 w-full sm:w-96">
          <ButtonLink to="/tickets" className="bg-white h-[82px]">
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
