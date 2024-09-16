import { ReactNode } from "react"
import cn from "classnames"
import { NavLink } from "react-router-dom"

const ButtonLink = ({
  children,
  to = "/",
  className = "",
  type = "button",
  fontSize = "text-2xl", // Prop para tamaño de letra
  fontFamily = "font-interTight", // Prop para tipografía
  rounded = "rounded-[44px]", // Prop para redondeo
  textColor = "text-black", // Prop para color de letra
  borderColor = "border-black", // Prop para color de borde
  borderVisible = true, // Prop para visibilidad del borde
  backgroundColor = "bg-white", // Prop para color de fondo
}: ButtonLinkProps) => {
  return (
    <NavLink to={to} className="inline-flex relative">
      <button
        type={type}
        className={cn(
          "relative z-[1]",
          "inline-flex justify-center items-center gap-4 p-8",
          "w-full",
          fontSize, // Usar la prop fontSize
          "uppercase",
          fontFamily, // Usar la prop fontFamily
          textColor, // Usar la prop textColor
          "font-bold select-none",
          rounded, // Usar la prop rounded
          borderVisible ? `${borderColor} border-[10px]` : "border-0", // Condicional para el borde
          backgroundColor, // Usar la prop backgroundColor
          "active:translate-y-1 transition duration-[25ms] ease-linear active:opacity-85",
          "h-[82px]",
          className
        )}
      >
        {children}
      </button>
      <span className="absolute w-full h-full bg-black z-0 rounded-[44px] top-2"></span>
    </NavLink>
  )
}

type ButtonLinkProps = {
  children?: ReactNode
  to?: string
  className?: string
  type?: "submit" | "button" | "reset"
  fontSize?: string // Prop para tamaño de letra
  fontFamily?: string // Prop para tipografía
  rounded?: string // Prop para redondeo
  textColor?: string // Prop para color de letra
  borderColor?: string // Prop para color de borde
  borderVisible?: boolean // Prop para visibilidad del borde
  backgroundColor?: string // Prop para color de fondo
}

export default ButtonLink