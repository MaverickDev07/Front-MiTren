import { ReactNode } from "react";

const RestLayout = ({ children }: RestLayout) => {
  return (
    <div className="relative w-full min-h-screen bg-mitren-primary bg-opacity-890">
      <div className="absolute inset-0 bg-train bg-cover opacity-50"></div>
      {children}
    </div>
  )
}
type RestLayout = {
    children: ReactNode
  }
export default RestLayout