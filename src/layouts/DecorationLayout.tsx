import { ReactNode } from "react"


const DecorationLayout = ({ children }: DecorationLayoutProps) => {

  return (
    <div className="relative w-full min-h-screen bg-mitren-primary bg-opacity-890">
      <div className="absolute inset-0 bg-train bg-cover opacity-50"></div>
      {children}
    </div>
  )
}

type DecorationLayoutProps = {
  children: ReactNode
}

export default DecorationLayout

/* examinar como areglar con esto para crear dos layouts uno de reposo y otro de la aplicacion
import { ReactNode } from "react"

const DecorationLayout = ({ children }: DecorationLayoutProps) => {

  return (
    <div className="w-full min-h-screen bg-mitren-primary bg-doodle bg-cover">
      {children}
    </div>
  )
}

type DecorationLayoutProps = {
  children: ReactNode
}

export default DecorationLayout
*/ 
