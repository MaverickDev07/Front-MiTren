import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import NotmatchPage from "@/pages/notmatch/NotmatchPage";


const KioskPage = lazy(() => import("@/pages/kiosk/KioskPage"));

const RouterList = () => {
  return (
    <Routes>
      <Route path="*" element={<NotmatchPage />} />
      <Route path="/kiosk/*" element={<KioskPage />} />
    </Routes>
  )
}

export default RouterList