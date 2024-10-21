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
};

const ButtonLink = ({
  children,
  to = "/",
  className = "",
  type = "button",
  onClick,  
  fontSize = "text-2xl",
  fontFamily = "font-interTight",
  rounded = "rounded-[44px]", 
  textColor = "text-black", 
  borderColor = "border-black",
  borderVisible = true,
  backgroundColor = "bg-white", 
}: ButtonLinkProps) => {
  return (
    <NavLink to={to} className="inline-flex relative w-full">
      <button
        type={type}
        onClick={onClick} 
        className={cn(
          "relative z-[1]",
          "inline-flex justify-center items-center gap-4 p-4 sm:p-6 lg:p-8",
          "w-full",
          fontSize,
          "uppercase",
          fontFamily,
          textColor, 
          "font-bold select-none",
          rounded,
          borderVisible ? `${borderColor} border-[10px]` : "border-0",
          backgroundColor,
          "active:translate-y-1 transition duration-[25ms] ease-linear active:opacity-85",
          "h-[82px]",
          className
        )}
      >
        {children}
      </button>
      <span className="absolute w-full h-full bg-black z-0 rounded-[44px] top-2"></span>
    </NavLink>
  );
}

export default ButtonLink;
