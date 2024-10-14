import BackgroundEffect from "@/components/BackgroundEffect";
import { ReactNode } from "react";
import { useLocation } from "react-router";

const RestLayout = ({ children }: RestLayout) => {
  const location = useLocation();
  const path = location.pathname;
  const unnotted = path !== '/';

  return (
    <div className="relative w-full min-h-screen bg-mitren-primary bg-opacity-890">
      <BackgroundEffect unnotted={unnotted} />
      <div className="absolute inset-0 bg-train bg-cover opacity-50"></div>
      {children}
    </div>
  )
}
type RestLayout = {
    children: ReactNode
  }
export default RestLayout