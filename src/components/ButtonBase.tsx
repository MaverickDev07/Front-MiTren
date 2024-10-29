import { ReactNode } from "react";
import cn from "classnames";

type ButtonBaseProps = {
  children?: ReactNode;
  className?: string;
  type?: "submit" | "button" | "reset";
  onClick?: () => void;
  disabled?: boolean; // Ajustado a boolean en lugar de función
  fontSize?: string;
  fontFamily?: string; 
  rounded?: string; 
  textColor?: string; 
  borderColor?: string;
  borderVisible?: boolean; 
  backgroundColor?: string;
  height?: string; 
};

const ButtonBase = ({
  children,
  className = "inline-flex justify-center items-center gap-4 p-3 sm:p-4 md:p-1 lg:p-6",
  type = "button",
  onClick,
  disabled = false, // Valor por defecto
  fontSize = "text-lg md:text-base lg:text-xl 4xl:text-xl",
  fontFamily = "font-interTight",
  rounded = "rounded-[44px]", 
  textColor = "text-black", 
  borderColor = "border-black border-[2px]",
  borderVisible = true,
  backgroundColor = "bg-white",
  height = "h-[60px] sm:h-[70px] md:h-[68px] lg:h-[80px] xl:h[80px] 4xl:h-[100px]"
}: ButtonBaseProps) => {
  return (
    <div className="inline-flex relative w-full">
      <button
        type={type}
        onClick={onClick}
        disabled={disabled} // Aplica el prop `disabled` al botón
        className={cn(
          "relative z-[1]",
          fontSize,
          "uppercase",
          fontFamily,
          textColor, 
          "font-bold select-none",
          rounded,
          borderVisible ? `${borderColor}` : "border-0",
          backgroundColor,
          height,
          className,
          disabled ? "opacity-50 cursor-not-allowed" : "active:translate-y-1 transition duration-[25ms] ease-linear active:opacity-85" // Estilos para botón deshabilitado
        )}
      >
        {children}
      </button>
    </div>
  );
};

export default ButtonBase;
