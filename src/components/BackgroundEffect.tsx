import cn from "classnames";

const BackgroundEffect = ({
  unnotted = false,
}: BackgroundEffectProps & { width?: string }) => {
  return (
    <>
      <div
        className={cn(
          "fixed top-0 -left-2 min-h-screen bg-pattern-left w-48 bg-cover bg-right-bottom transition duration-75",
          unnotted ? "animate-unnotted-decoration-left" : "animate-notted-decoration-left"
        )}
      ></div>
      <div
        className={cn(
          "fixed top-0 -right-2 min-h-screen bg-pattern-right w-48 bg-cover bg-left-bottom transition duration-75 ",
          unnotted ? "animate-unnotted-decoration-right" : "animate-notted-decoration-right"
        )}
      ></div>
    </>
  );
};

{ /*const BackgroundEffect = ({ arreglar componente no funcionan el cambio de ancho 
  unnotted = false,
  width = 'w-14'
}: BackgroundEffectProps & { width?: string }) => {
  return (
    <>
      <div
        className={cn(
          "fixed top-0 -left-2 min-h-screen bg-pattern-left bg-cover bg-right-bottom transition duration-75",
          width,
          unnotted ? "animate-unnotted-decoration-left" : "animate-notted-decoration-left"
        )}
      ></div>
      <div
        className={cn(
          "fixed top-0 -right-2 min-h-screen bg-pattern-right bg-cover bg-left-bottom transition duration-75",
          width,
          unnotted ? "animate-unnotted-decoration-right" : "animate-notted-decoration-right"
        )}
      ></div>
    </>
  );
};*/}

type BackgroundEffectProps = {
  unnotted?: boolean;
  // width?: string;
};

export default BackgroundEffect;



