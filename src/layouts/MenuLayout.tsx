import BackgroundEffectHome from "@/components/BackgroundEffectHome"
import { ReactNode } from "react"
import { useLocation } from "react-router"

const MenuLayout = ({ children }: MenuLayoutProps) => {
  const location = useLocation()
  const path = location.pathname
  const unnotted = path !== '/'

  return (
    <div className="relative w-full min-h-screen bg-mitren-primary bg-doodle bg-cover">
      <BackgroundEffectHome unnotted={unnotted} />
      {children}
    </div>
    
  )
}

type MenuLayoutProps = {
  children: ReactNode
}

export default MenuLayout