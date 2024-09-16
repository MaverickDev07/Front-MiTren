import { Suspense, ReactNode } from "react"

const SuspenseComponent = ({children}: SuspenseComponentProps) => {
  return (
    <Suspense fallback={<div>Cargando Componente</div>}>{children}</Suspense>
  )
}

type SuspenseComponentProps = {
  children: ReactNode
}

export default SuspenseComponent
