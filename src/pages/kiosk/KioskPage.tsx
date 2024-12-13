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
const PaymentMoney = lazy(() => import("@/pages/kiosk/tickets/payment-method/PaymentMoney"));
const PaymentCard = lazy(() => import("@/pages/kiosk/tickets/payment-method/PaymentCard"));
const ReloadPage = lazy(() => import("@/pages/kiosk/NFC/reload/ReloadPage"));
const CreditNFCPage = lazy(() => import("@/pages/kiosk/NFC/reload/CreditPage"));
const RechargeCard = lazy(()=> import("@/pages/kiosk/NFC/creditNfc/RechargeCard"));
const NFCPayment = lazy(()=> import("@/pages/kiosk/NFC/creditNfc/NFCPaymet"));
const PaymentQRNFC = lazy(() => import("@/pages/kiosk/NFC/payment-method/PaymentQR"));
const VerificationQRNFC = lazy(() => import("@/pages/kiosk/NFC/payment-method/VerificationQR"));
const PaymentMoneyNFC = lazy(() => import("@/pages/kiosk/NFC/payment-method/PaymentMoney"));
const PaymentCardNFC = lazy(() => import("@/pages/kiosk/NFC/payment-method/PaymentCard"))

const KioskPage = () => {
  return (
    <Routes>
      <Route path="/" element={<RestLayout><HomeReposePage /></RestLayout>} />
      <Route path="/menu" element={<MenuLayout><SuspenseComponent><HomeMenu /></SuspenseComponent></MenuLayout>} />
      <Route path="/destination/*" element={<DecorationLayout><SuspenseComponent><DestinationPage /></SuspenseComponent></DecorationLayout>} />
      <Route path="/destination/tickets/*" element={<DecorationLayout><SuspenseComponent><TicketsPage /></SuspenseComponent></DecorationLayout>} />
      <Route path="/ticket-payment*" element={<DecorationLayout><SuspenseComponent><TicketPaymentQR /></SuspenseComponent></DecorationLayout>} />
      <Route path="/ticket-payment/paymentQR/*" element={<SuspenseComponent><PaymentQR /></SuspenseComponent>} />
      <Route path="/ticket-payment/paymentMoney/*" element={<DecorationLayout><SuspenseComponent><PaymentMoney /></SuspenseComponent></DecorationLayout>} />
      <Route path="/ticket-payment/paymentCard/*" element={<SuspenseComponent><PaymentCard /></SuspenseComponent>} />
      <Route path="/verificationQR/*" element={<DecorationLayout><SuspenseComponent><VerificationQR /></SuspenseComponent></DecorationLayout>} />
      <Route path="/reload/*" element={<DecorationLayout><SuspenseComponent><ReloadPage /></SuspenseComponent></DecorationLayout>} />
      <Route path="/creditNFC/*" element={<DecorationLayout><SuspenseComponent><CreditNFCPage /></SuspenseComponent></DecorationLayout>} />
      <Route path="/creditNFC/rechargeCard/*" element={<DecorationLayout><SuspenseComponent><RechargeCard /></SuspenseComponent></DecorationLayout>} />
      <Route path="/PaymentNFC/*" element={<DecorationLayout><SuspenseComponent><NFCPayment /></SuspenseComponent></DecorationLayout>} />
      <Route path="/PaymentNFC/paymentQR/*" element={<SuspenseComponent><PaymentQRNFC /></SuspenseComponent>} />
      <Route path="/PaymentNFC/paymentMoney/*" element={<SuspenseComponent><PaymentMoneyNFC /></SuspenseComponent>} />
      <Route path="/PaymentNFC/paymentCard/*" element={<SuspenseComponent><PaymentCardNFC /></SuspenseComponent>} />
      <Route path="/VerificationQRNFC/*" element={<DecorationLayout><SuspenseComponent><VerificationQRNFC /></SuspenseComponent></DecorationLayout>} />

      <Route path="*" element={<NotmatchPage />} />
    </Routes>
  )
}

export default KioskPage