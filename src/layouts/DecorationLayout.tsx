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
