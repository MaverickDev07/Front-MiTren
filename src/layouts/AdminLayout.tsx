import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';

export const AdminLayout = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-16 p-6 transition-all duration-300">
        <Outlet />
      </main>
    </div>
  );
};