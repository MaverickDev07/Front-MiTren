import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AdminLayout } from '@/layouts/AdminLayout';

import { 
  Dashboard,
  Phrases,
  NfcCards,
  Users,
  Promotions,
  Lines,
  Categories,
  Stations,
  Devices,
  BusRoutes,
  Prices,
  Reports
} from './pages';

const KioskPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin-dashboard" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="phrases" element={<Phrases />} />
          <Route path="nfc" element={<NfcCards />} />
          <Route path="users" element={<Users />} />
          <Route path="promotions" element={<Promotions />} />
          <Route path="lines" element={<Lines />} />
          <Route path="categories" element={<Categories />} />
          <Route path="stations" element={<Stations />} />
          <Route path="devices" element={<Devices />} />
          <Route path="routes" element={<BusRoutes />} />
          <Route path="prices" element={<Prices />} />
          <Route path="reports" element={<Reports />} />
        </Route>
        <Route path="*" element={<Navigate to="/admin-dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default KioskPage