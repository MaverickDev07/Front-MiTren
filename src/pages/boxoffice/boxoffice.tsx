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
const VerificationCheck = lazy(() => import("./tickets/payment-method/VerificationCheck"));
const PaymentMoney = lazy(() => import("../boxoffice/tickets/payment-method/PaymentMoney"));
const PaymentCard = lazy(() => import("../boxoffice/tickets/payment-method/PaymentCard"));

const MenuNFC = lazy(() => import("../boxoffice/home/MenuNFC"));
const VerifiNFC = lazy(() => import("../boxoffice/NFC/Verify/VerifiNFC"));
const ReloadPage = lazy(() => import("./NFC/reload/ReloadPage"));
const RechargeCard = lazy(() => import("./NFC/reload/RechargeCard"));
const NFCPayment = lazy(() => import("./NFC/reload/NFCPaymet"));
const VerificationCheckNFC = lazy(() => import("./NFC/reload/VerificationCheck"));
const PaymentQRNFC = lazy(() => import("./NFC/reload/payment-method/PaymentQR"));
const PaymentMoneyNFC = lazy(() => import("./NFC/reload/payment-method/PaymentMoney"));
const PaymentCardNFC = lazy(() => import("./NFC/reload/payment-method/PaymentCard"));

const PayPageNFC = lazy(() => import("./NFC/payNFC/PayPageNFC"));
const PayCardNFC = lazy(() => import("./NFC/payNFC/PayCardNFC"));
const NFCPay = lazy(() => import("./NFC/payNFC/NFCPay"));
const VerificationPay = lazy(() => import("./NFC/payNFC/VerificationPay"));
// const PaymentQRNFC = lazy(() => import("../boxoffice/NFC/payment-method/PaymentQR"));
// const PaymentMoneyNFC = lazy(() => import("../boxoffice/NFC/payment-method/PaymentMoney"));
// const PaymentCardNFC = lazy(() => import("../boxoffice/NFC/payment-method/PaymentCard"));

// const ReloadPage = lazy(() => import("./NFC/reload/ReloadPage"));
// const RechargeCard = lazy(() => import("./NFC/reload/RechargeCard"));
// const NFCPayment = lazy(() => import("./NFC/reload/NFCPaymet"));
// const VerificationCheckNFC = lazy(() => import("./NFC/reload/VerificationCheck"));
// const PaymentQRNFC = lazy(() => import("../boxoffice/NFC/payment-method/PaymentQR"));
// const PaymentMoneyNFC = lazy(() => import("../boxoffice/NFC/payment-method/PaymentMoney"));
// const PaymentCardNFC = lazy(() => import("../boxoffice/NFC/payment-method/PaymentCard"));


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
      <Route path="/VerificationCheck/*" element={<DecorationLayout><SuspenseComponent><VerificationCheck /></SuspenseComponent></DecorationLayout>} />
      <Route path="/NFC" element={<SuspenseComponent><MenuNFC /></SuspenseComponent>} />
      <Route path="/Verify" element={<SuspenseComponent><VerifiNFC /></SuspenseComponent>} />
      
      <Route path="/ReloadPage/*" element={<DecorationLayout><SuspenseComponent><ReloadPage /></SuspenseComponent></DecorationLayout>} />
      <Route path="/ReloadPage/rechargeCard/*" element={<DecorationLayout><SuspenseComponent><RechargeCard /></SuspenseComponent></DecorationLayout>} />
      <Route path="/PaymentNFC/*" element={<DecorationLayout><SuspenseComponent><NFCPayment /></SuspenseComponent></DecorationLayout>} />
      <Route path="/PaymentNFC/paymentQR/*" element={<SuspenseComponent><PaymentQRNFC /></SuspenseComponent>} />
      <Route path="/PaymentNFC/paymentMoney/*" element={<SuspenseComponent><PaymentMoneyNFC /></SuspenseComponent>} />
      <Route path="/PaymentNFC/paymentCard/*" element={<SuspenseComponent><PaymentCardNFC /></SuspenseComponent>} />
      <Route path="/VerificationCheckNFC/*" element={<DecorationLayout><SuspenseComponent><VerificationCheckNFC /></SuspenseComponent></DecorationLayout>} />
      
      <Route path="/payNFC/*" element={<DecorationLayout><SuspenseComponent><PayPageNFC /></SuspenseComponent></DecorationLayout>} />
      <Route path="/payNFC/PayCardNFC/*" element={<DecorationLayout><SuspenseComponent><PayCardNFC /></SuspenseComponent></DecorationLayout>} />
      <Route path="/payNFC/PayCardNFC/NFCPay/*" element={<DecorationLayout><SuspenseComponent><NFCPay /></SuspenseComponent></DecorationLayout>} />
      <Route path="/payNFC/paymentQR/*" element={<SuspenseComponent><PaymentQRNFC /></SuspenseComponent>} />
      <Route path="/payNFC/paymentMoney/*" element={<SuspenseComponent><PaymentMoneyNFC /></SuspenseComponent>} />
      <Route path="/payNFC/paymentCard/*" element={<SuspenseComponent><PaymentCardNFC /></SuspenseComponent>} />
      <Route path="/VerificationPay/*" element={<DecorationLayout><SuspenseComponent><VerificationPay /></SuspenseComponent></DecorationLayout>} />
      
      {/* <Route path="/ReloadPage/*" element={<DecorationLayout><SuspenseComponent><ReloadPage /></SuspenseComponent></DecorationLayout>} />
      <Route path="/ReloadPage/rechargeCard/*" element={<DecorationLayout><SuspenseComponent><RechargeCard /></SuspenseComponent></DecorationLayout>} />
      <Route path="/PaymentNFC/*" element={<DecorationLayout><SuspenseComponent><NFCPayment /></SuspenseComponent></DecorationLayout>} />
      <Route path="/PaymentNFC/paymentQR/*" element={<SuspenseComponent><PaymentQRNFC /></SuspenseComponent>} />
      <Route path="/PaymentNFC/paymentMoney/*" element={<SuspenseComponent><PaymentMoneyNFC /></SuspenseComponent>} />
      <Route path="/PaymentNFC/paymentCard/*" element={<SuspenseComponent><PaymentCardNFC /></SuspenseComponent>} />
      <Route path="/VerificationCheckNFC/*" element={<DecorationLayout><SuspenseComponent><VerificationCheckNFC /></SuspenseComponent></DecorationLayout>} /> */}
      
      <Route path="*" element={<NotmatchPage />} />
    </Routes>
  )
}

export default boxoffice