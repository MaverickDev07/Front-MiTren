import cn from "classnames";
import { memo } from "react";

const BackgroundEffect = ({
  unnotted = false
}: BackgroundEffectProps) => {
  return (
    <>
      <div className={cn(
        "fixed top-0 -left-2 min-h-screen w-1/4 sm:w-24 md:w-24 lg:w-48 4xl:w-48 bg-pattern-left bg-cover bg-right-bottom transition duration-75",
        unnotted ? 'animate-unnotted-decoration-left' : 'animate-notted-decoration-left'
      )}></div>
      <div className={cn(
        "fixed top-0 -right-2 min-h-screen w-1/4 sm:w-24 md:w-24 lg:w-48 4xl:w-48 bg-pattern-right bg-cover bg-left-bottom transition duration-75",
        unnotted ? 'animate-unnotted-decoration-right' : 'animate-notted-decoration-right'
      )}></div>
    </>
  );
}

type BackgroundEffectProps = {
  unnotted?: boolean;
};

export default BackgroundEffect;

export const BackgroundEffectMemo = memo(BackgroundEffect);


