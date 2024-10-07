import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import SuspenseComponent from "@/components/SuspenseComponent";
import NotmatchPage from "@/pages/notmatch/NotmatchPage";
import RestLayout from "@/layouts/RestLayout";
import DecorationLayout from "@/layouts/DecorationLayout";

const HomeReposePage = lazy(() => import("@/pages/home/Repose/HomeReposePage"));
const HomeMenu = lazy(() => import("@/pages/home/menu/HomeMenu"));
const LinePage = lazy(() => import("@/pages/kiosk/tickets/line/LinePage"))
const TicketsPage = lazy(() => import("@/pages/kiosk/tickets/tickets-number/TicketNumberPage"))
const DestinationPage = lazy(() => import("@/pages/kiosk/tickets/Destination/DestinationPage"))
const TicketPaymentQR = lazy(() => import("@/pages/kiosk/tickets/payment-method/TicketPaymentQR"))
const PaymentQR = lazy(() => import("@/pages/kiosk/tickets/payment-method/PaymentQR"))
const VerificationQR = lazy(() => import("@/pages/kiosk/tickets/payment-method/VerificationQR"))
console.log(123)

const RouterList = () => {
  return (
    <Routes>
      <Route path="/repose" element={<RestLayout><HomeReposePage /></RestLayout>} />
      <Route path="/" element={
        <DecorationLayout>
          <SuspenseComponent><HomeMenu /></SuspenseComponent>
        </DecorationLayout>
      } />
      <Route path="/linea/destination/tickets/*" element={
        <DecorationLayout>
          <SuspenseComponent><TicketsPage /></SuspenseComponent>
        </DecorationLayout>
      } />
      <Route path="/linea/*" element={
        <DecorationLayout>
          <SuspenseComponent><LinePage /></SuspenseComponent>
        </DecorationLayout>
      } />
      <Route path="/linea/destination/*" element={
        <DecorationLayout>
          <SuspenseComponent><DestinationPage /></SuspenseComponent>
        </DecorationLayout>
      } />
      <Route path="/ticket-payment*" element={
        <DecorationLayout>
          <SuspenseComponent><TicketPaymentQR /></SuspenseComponent>
        </DecorationLayout>
      } />
      <Route path="/paymentQR/*" element={
        <DecorationLayout>
          <SuspenseComponent><PaymentQR /></SuspenseComponent>
        </DecorationLayout>
      } />
      <Route path="/verificationQR/*" element={
        <DecorationLayout>
          <SuspenseComponent><VerificationQR /></SuspenseComponent>
        </DecorationLayout>
      } />
      <Route path="*" element={<NotmatchPage />} />
    </Routes>
  )
}

export default RouterList