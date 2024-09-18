import { ReactNode } from "react";
import cn from "classnames";
import { NavLink } from "react-router-dom";

type ButtonHomeProps = {
  children?: ReactNode;
  to?: string;
  className?: string;
  type?: "submit" | "button" | "reset";
  fontSize?: string;
  fontFamily?: string;
  textColor?: string;
  backgroundColor?: string;
};

const ButtonHome = ({
  children,
  to = "/",
  className = "",
  type = "button",
  fontSize = "text-2xl",
  fontFamily = "font-sans",
  textColor = "text-white",
  backgroundColor = "bg-transparent",
}: ButtonHomeProps) => {
  return (
    <div className="absolute bottom-10 flex justify-center w-full">
      <NavLink to={to} className="inline-flex relative">
        <button
          type={type}
          className={cn(
            "relative z-10",
            "flex flex-col justify-center items-center py-4 px-6",
            fontSize,
            fontFamily,
            textColor,
            backgroundColor,
            "font-semibold",
            "hover:text-gray-300",
            "transition duration-200 ease-in-out",
            className
          )}
        >
          {children}
          <svg
            className={`h-6 w-6 ${textColor} mt-2`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
        <span className="absolute w-full h-full opacity-10 z-0 top-1"></span>
      </NavLink>
    </div>
  );
};

export default ButtonHome;
