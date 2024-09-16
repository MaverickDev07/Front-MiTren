import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import SuspenseComponent from "@/components/SuspenseComponent";
import NotmatchPage from "@/pages/notmatch/NotmatchPage";
import RestLayout from "@/layouts/RestLayout";
import DecorationLayout from "@/layouts/DecorationLayout";


const HomeReposePage = lazy(() => import("@/pages/home/components/HomeReposePage"));
const HomeMenu = lazy(() => import("@/pages/home/components/HomeMenu"));
const TicketsPage = lazy(() => import("@/pages/tickets/TicketsPage"))

const RouterList = () => {
  return (
    <Routes>
      <Route path="/" element={<RestLayout><HomeReposePage /></RestLayout>} />
      <Route path="/menu/*" element={
        <DecorationLayout>
          <SuspenseComponent><HomeMenu /></SuspenseComponent>
        </DecorationLayout>
      } />
      <Route path="/tickets/*" element={
        <DecorationLayout>
          <SuspenseComponent><TicketsPage /></SuspenseComponent>
        </DecorationLayout>
      } />
      <Route path="*" element={<NotmatchPage />} />
    </Routes>
  )
}

export default RouterList