import { lazy } from "react";
import SuspenseComponent from "@/components/SuspenseComponent";
import DecorationLayout from "@/layouts/DecorationLayout";
import RestLayout from "@/layouts/RestLayout";
import { Routes, Route } from "react-router-dom"
import MenuLayout from "@/layouts/MenuLayout";


const HomeMenu = lazy(() => import("@/pages/kiosk/home/HomeMenu"));
const HomeReposePage = lazy(() => import("@/pages/kiosk/home/HomeReposePage"));
const LinePage = lazy(() => import("@/pages/kiosk/tickets/line/LinePage"));
const TicketsPage = lazy(() => import("@/pages/kiosk/tickets/tickets-number/TicketNumberPage"));
const DestinationPage = lazy(() => import("@/pages/kiosk/tickets/Destination/DestinationPage"));
const TicketPaymentQR = lazy(() => import("@/pages/kiosk/tickets/payment-method/TicketPaymentQR"));
const PaymentQR = lazy(() => import("@/pages/kiosk/tickets/payment-method/PaymentQR"));
const VerificationQR = lazy(() => import("@/pages/kiosk/tickets/payment-method/VerificationQR"));

const KioskPage = () => {
  return (
    <Routes>
      <Route path="/" element={<MenuLayout><SuspenseComponent><HomeMenu /></SuspenseComponent></MenuLayout>} />
      <Route path="/repose" element={<RestLayout><HomeReposePage /></RestLayout>} />
      <Route path="/linea/:id/destination/*" element={<DecorationLayout><SuspenseComponent><DestinationPage /></SuspenseComponent></DecorationLayout>} />
      <Route path="/linea/destination/tickets/*" element={<DecorationLayout><SuspenseComponent><TicketsPage /></SuspenseComponent></DecorationLayout>} />
      <Route path="/linea/*" element={<DecorationLayout><SuspenseComponent><LinePage /></SuspenseComponent></DecorationLayout>} />
      <Route path="/ticket-payment*" element={<DecorationLayout><SuspenseComponent><TicketPaymentQR /></SuspenseComponent></DecorationLayout>} />
      <Route path="/paymentQR/*" element={<DecorationLayout><SuspenseComponent><PaymentQR /></SuspenseComponent></DecorationLayout>} />
      <Route path="/verificationQR/*" element={<DecorationLayout><SuspenseComponent><VerificationQR /></SuspenseComponent></DecorationLayout>} />
    </Routes>
  )
}

export default KioskPage