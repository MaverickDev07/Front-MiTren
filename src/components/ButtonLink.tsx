import { ReactNode } from "react";
import cn from "classnames";
import { NavLink } from "react-router-dom";

type ButtonLinkProps = {
  children?: ReactNode;
  to?: string;
  className?: string;
  type?: "submit" | "button" | "reset";
  onClick?: () => void;
  fontSize?: string;
  fontFamily?: string; 
  rounded?: string; 
  textColor?: string; 
  borderColor?: string;
  borderVisible?: boolean; 
  backgroundColor?: string;
  height?: string; 
};

const ButtonLink = ({
  children,
  to = "/",
  className = "inline-flex justify-center items-center gap-4 p-3 sm:p-4 md:p-5 lg:p-6",
  type = "button",
  onClick,  
  fontSize = "text-lg md:text-base lg:text-xl 4xl:text-xl", // Ajuste de tamaño de fuente para mejor responsividad
  fontFamily = "font-interTight",
  rounded = "rounded-[44px]", 
  textColor = "text-black", 
  borderColor = "border-black border-[2px]", // box-border border-black border-[10px]
  borderVisible = true,
  backgroundColor = "bg-white",
  height = "h-[60px] sm:h-[70px] md:h-[68px] lg:h-[80px] xl:h[80px] 4xl:h-[100px]"
  
}: ButtonLinkProps) => {
  return (
    <NavLink to={to} className="inline-flex relative w-full">
      <button
        type={type}
        onClick={onClick} 
        className={cn(
          "relative z-[1]",
          fontSize,
          "uppercase",
          fontFamily,
          textColor, 
          "font-bold select-none",
          rounded,
          borderVisible ? `${borderColor}` : "border-0", // Ajuste del borde
          backgroundColor,
          "active:translate-y-1 transition duration-[25ms] ease-linear active:opacity-85",
          height, // Ajuste de altura
          className
        )}
      >
        {children}
      </button>
      <span className="absolute w-full h-full z-0 rounded-[44px] top-1"></span> {/* Ajuste para que el fondo se vea mejor */}
    </NavLink>
  );
}

export default ButtonLink;
