import { ReactNode } from "react"

const SafeContainer = ({ className = "", children }: SafeContainerProps) => {
  return (
    <div className="flex justify-center w-full">
      <div className={`container px-10 2xl:px-0 ${className}`}>{children}</div>
    </div>
  )
}

type SafeContainerProps = {
  className?: string
  children: ReactNode
}

export default SafeContainer
