import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import SuspenseComponent from "@/components/SuspenseComponent";
import NotmatchPage from "@/pages/notmatch/NotmatchPage";
import RestLayout from "@/layouts/RestLayout";
import DecorationLayout from "@/layouts/DecorationLayout";

const HomeReposePage = lazy(() => import("@/pages/home/Repose/HomeReposePage"));
const HomeMenu = lazy(() => import("@/pages/home/menu/HomeMenu"));
const LinePage = lazy(() => import("@/pages/tickets/line/LinePage"))
const TicketsPage = lazy(() => import("@/pages/tickets/tickets-number/TicketNumberPage"))
const DestinationPage = lazy(() => import("@/pages/tickets/Destination/DestinationPage"))


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
      <Route path="*" element={<NotmatchPage />} />
    </Routes>
  )
}

export default RouterList