import { ReactNode } from "react"

const SafeMainContent = ({
  className = "",
  children,
}: SafeMainContentProps) => {
  return <main className={`pt-[4.5rem] ${className}`}>{children}</main>
}

type SafeMainContentProps = {
  className?: string
  children: ReactNode
}

export default SafeMainContent
