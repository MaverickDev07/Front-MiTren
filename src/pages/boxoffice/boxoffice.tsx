import { lazy } from "react";
import SuspenseComponent from "@/components/SuspenseComponent";
import DecorationLayout from "@/layouts/DecorationLayout";
import { Routes, Route } from "react-router-dom"
import MenuLayout from "@/layouts/MenuLayout";
import NotmatchPage from "../notmatch/NotmatchPage";


const HomeMenu = lazy(() => import("../boxoffice/home/HomeMenu"));
const DestinationPage = lazy(() => import("../boxoffice/tickets/Destination/DestinationPage"));
const TicketsPage = lazy(() => import("../boxoffice/tickets/tickets-number/TicketNumberPage"));
const TicketPaymentQR = lazy(() => import("../boxoffice/tickets/payment-method/TicketPaymentQR"));
const PaymentQR = lazy(() => import("../boxoffice/tickets/payment-method/PaymentQR"));
const VerificationQR = lazy(() => import("../boxoffice/tickets/payment-method/VerificationQR"));
const PaymentMoney = lazy(() => import("../boxoffice/tickets/payment-method/PaymentMoney"));
const PaymentCard = lazy(() => import("../boxoffice/tickets/payment-method/PaymentCard"));

const boxoffice = () => {
  return (
    <Routes>
      <Route path="/" element={<MenuLayout><SuspenseComponent><HomeMenu /></SuspenseComponent></MenuLayout>} />
      <Route path="/destination/*" element={<DecorationLayout><SuspenseComponent><DestinationPage /></SuspenseComponent></DecorationLayout>} />
      <Route path="/destination/tickets/*" element={<DecorationLayout><SuspenseComponent><TicketsPage /></SuspenseComponent></DecorationLayout>} />
      <Route path="/ticket-payment*" element={<DecorationLayout><SuspenseComponent><TicketPaymentQR /></SuspenseComponent></DecorationLayout>} />
      <Route path="/ticket-payment/paymentQR/*" element={<SuspenseComponent><PaymentQR /></SuspenseComponent>} />
      <Route path="/ticket-payment/paymentMoney/*" element={<SuspenseComponent><PaymentMoney /></SuspenseComponent>} />
      <Route path="/ticket-payment/paymentCard/*" element={<SuspenseComponent><PaymentCard /></SuspenseComponent>} />
      <Route path="/verificationQR/*" element={<DecorationLayout><SuspenseComponent><VerificationQR /></SuspenseComponent></DecorationLayout>} />
      <Route path="*" element={<NotmatchPage />} />
    </Routes>
  )
}

export default boxoffice