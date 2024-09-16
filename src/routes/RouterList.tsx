import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import SuspenseComponent from "@/components/SuspenseComponent";
import NotmatchPage from "@/pages/notmatch/NotmatchPage";


const HomePage = lazy(() => import("@/pages/home/HomePage"))
const TicketsPage = lazy(() => import("@/pages/tickets/TicketsPage"))

const RouterList = () => {
  return (
    <Routes>
      <Route path="*" element={<NotmatchPage />} />
      <Route
        path="/"
        element={<SuspenseComponent><HomePage /></SuspenseComponent>}
      />
      <Route
        path="/tickets/*"
        element={<SuspenseComponent><TicketsPage /></SuspenseComponent>}
      />
    </Routes>
  )
}

export default RouterList