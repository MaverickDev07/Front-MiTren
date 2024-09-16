import BackgroundEffect from "@/components/BackgroundEffect"
import { ReactNode } from "react"
import { useLocation } from "react-router"

const DecorationLayout = ({ children }: DecorationLayoutProps) => {
  const location = useLocation()
  const path = location.pathname
  const unnotted = path !== '/'

  return (
    <div className="w-full min-h-screen bg-mitren-primary bg-doodle bg-cover">
      <BackgroundEffect unnotted={unnotted} />
      {children}
    </div>
  )
}

type DecorationLayoutProps = {
  children: ReactNode
}

export default DecorationLayout
