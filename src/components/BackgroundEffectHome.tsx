import cn from "classnames";
import { memo } from "react";
import DateTimeDisplay from "./DateTimeDisplay";

const BackgroundEffectHome = ({
  unnotted = false
}: BackgroundEffectHomeProps) => {
  return (
    <>
      <div className={cn(
        "fixed top-0 -left-2 min-h-screen w-1/4 sm:w-48 md:w-64 bg-pattern-left bg-cover bg-right-bottom transition duration-75",
        unnotted ? 'animate-unnotted-decoration' : 'animate-notted-decoration-left'
      )}></div>
      <div className={cn(
        "fixed top-0 -right-2 min-h-screen w-1/4 sm:w-48 md:w-64 bg-pattern-right bg-cover bg-left-bottom transition duration-75",
        unnotted ? 'animate-unnotted-decoration' : 'animate-notted-decoration-right'
      )}></div>
      {/* Elemento en la parte inferior */}
      <div className={cn(
      "fixed bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-circle bg-cover transition duration-75",
      "h-48 w-48 sm:h-64 sm:w-64 md:h-80 md:w-80 lg:h-96 lg:w-96 xl:h-[500px] xl:w-[500px]",
      "flex items-start justify-center pt-4 text-center",
      unnotted ? 'animate-unnotted-decoration-right' : 'animate-notted-decoration-right'
      )}>
        <DateTimeDisplay fontSize="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl" />
      </div>
    </>
  );
}

type BackgroundEffectHomeProps = {
  unnotted?: boolean;
};

export default BackgroundEffectHome;
export const BackgroundEffectHomeMemo = memo(BackgroundEffectHome);

