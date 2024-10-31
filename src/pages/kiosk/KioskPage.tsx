import { lazy } from "react";
import SuspenseComponent from "@/components/SuspenseComponent";
import DecorationLayout from "@/layouts/DecorationLayout";
import RestLayout from "@/layouts/RestLayout";
import { Routes, Route } from "react-router-dom"
import MenuLayout from "@/layouts/MenuLayout";
import NotmatchPage from "../notmatch/NotmatchPage";


const HomeMenu = lazy(() => import("@/pages/kiosk/home/HomeMenu"));
const HomeReposePage = lazy(() => import("@/pages/kiosk/home/HomeReposePage"));
const TicketsPage = lazy(() => import("@/pages/kiosk/tickets/tickets-number/TicketNumberPage"));
const DestinationPage = lazy(() => import("@/pages/kiosk/tickets/Destination/DestinationPage"));
const TicketPaymentQR = lazy(() => import("@/pages/kiosk/tickets/payment-method/TicketPaymentQR"));
const PaymentQR = lazy(() => import("@/pages/kiosk/tickets/payment-method/PaymentQR"));
const VerificationQR = lazy(() => import("@/pages/kiosk/tickets/payment-method/VerificationQR"));

const KioskPage = () => {
  return (
    <Routes>
      <Route path="/" element={<RestLayout><HomeReposePage /></RestLayout>} />
      <Route path="/menu" element={<MenuLayout><SuspenseComponent><HomeMenu /></SuspenseComponent></MenuLayout>} />
      <Route path="/destination/*" element={<DecorationLayout><SuspenseComponent><DestinationPage /></SuspenseComponent></DecorationLayout>} />
      <Route path="/destination/tickets/*" element={<DecorationLayout><SuspenseComponent><TicketsPage /></SuspenseComponent></DecorationLayout>} />
      <Route path="/ticket-payment*" element={<DecorationLayout><SuspenseComponent><TicketPaymentQR /></SuspenseComponent></DecorationLayout>} />
      <Route path="/ticket-payment/paymentQR/*" element={<SuspenseComponent><PaymentQR /></SuspenseComponent>} />
      <Route path="/verificationQR/*" element={<DecorationLayout><SuspenseComponent><VerificationQR /></SuspenseComponent></DecorationLayout>} />
      <Route path="*" element={<NotmatchPage />} />
    </Routes>
  )
}

export default KioskPage