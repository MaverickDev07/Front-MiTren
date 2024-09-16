import MiTrenLogo from "@/assets/brand/mitren-logo.webp"
import ButtonLink from "./ButtonLink"
import { MenuIcon } from "@/assets/icons/menu-icon"

const NavigatorTop = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-9">
        <ButtonLink to="/">
          <MenuIcon className="w-8 h-8"/>
          <span>Menu</span>
        </ButtonLink>
        <h2 className="font-bold text-4xl text-white uppercase">Comprar Ticket - Linea</h2>
      </div>
      <img src={MiTrenLogo} alt="Mi Tren Logo" className="w-20 h-20" />
    </div>
  )
}

export default NavigatorTop
