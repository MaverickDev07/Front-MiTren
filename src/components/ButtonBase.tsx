import { ReactNode } from 'react'
import cn from 'classnames'

const ButtonBase = ({
  children,
  className = "",
  type = "button"
}: ButtonBaseProps) => {
  return (
    <div className="inline-flex relative">
      <button
        type={type}
        className={cn(
          "relative z-[1]",
          "inline-flex justify-center items-center gap-4 p-8",
          "w-full",
          "text-2xl uppercase font-interTight font-bold select-none",
          "rounded-[44px] box-border border-black border-[10px]",
          "active:translate-y-1 transition duration-[25ms] ease-linear active:opacity-85",
          "bg-white h-[82px]",
          className
        )}
      >
        {children}
      </button>
      <span className="absolute w-full h-[82px] bg-black z-0 rounded-[44px] top-2"></span>
    </div>
  )
}

type ButtonBaseProps = {
  children?: ReactNode
  className?: string
  type?: "submit" | "button" | "reset"
}

export default ButtonBase
