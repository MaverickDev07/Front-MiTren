import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home,
  FileText,
  CreditCard,
  Users,
  Tag,
  Grid,
  BusFront,
  Smartphone,
  Radio,
  DollarSign,
  BarChart,
  LogOut 
} from 'lucide-react';

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  path: string;
}

const menuItems: MenuItem[] = [
  { 
    icon: <Home size={20} />, 
    label: 'Inicio', 
    path: '/admin-dashboard' 
  },
  { 
    icon: <FileText size={20} />, 
    label: 'Frases Institucionales', 
    path: '/admin-dashboard/phrases' 
  },
  { 
    icon: <CreditCard size={20} />, 
    label: 'Tarjetas NFC', 
    path: '/admin-dashboard/nfc' 
  },
  { 
    icon: <Users size={20} />, 
    label: 'Usuarios', 
    path: '/admin-dashboard/users' 
  },
  { 
    icon: <Tag size={20} />, 
    label: 'Promociones', 
    path: '/admin-dashboard/promotions' 
  },
  { 
    icon: <Grid size={20} />, 
    label: 'Líneas', 
    path: '/admin-dashboard/lines' 
  },
  { 
    icon: <Grid size={20} />, 
    label: 'Categorías', 
    path: '/admin-dashboard/categories' 
  },
  { 
    icon: <BusFront size={20} />, 
    label: 'Estaciones', 
    path: '/admin-dashboard/stations' 
  },
  { 
    icon: <Smartphone size={20} />, 
    label: 'Dispositivos', 
    path: '/admin-dashboard/devices' 
  },
  { 
    icon: <Radio size={20} />, 
    label: 'Rutas', 
    path: '/admin-dashboard/routes' 
  },
  { 
    icon: <DollarSign size={20} />, 
    label: 'Precios', 
    path: '/admin-dashboard/prices' 
  },
  { 
    icon: <BarChart size={20} />, 
    label: 'Reportes', 
    path: '/admin-dashboard/reports' 
  }
];

export const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();

  const handleLogout = () => {
    // Implementar lógica de logout
    console.log('Logout clicked');
  };

  return (
    <div 
      className={`
        fixed left-0 top-0 h-full bg-indigo-900 text-white 
        transition-all duration-300 ease-in-out
        ${isExpanded ? 'w-64' : 'w-16'}
      `}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="p-4 flex justify-center items-center">
          <img 
            src="/logo.png" 
            alt="Logo" 
            className={`
              transition-all duration-300
              ${isExpanded ? 'w-32' : 'w-10'}
            `}
          />
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1">
          <ul className="py-4">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`
                      flex items-center px-4 py-3 text-sm
                      transition-colors duration-200
                      ${isActive ? 'bg-indigo-800' : 'hover:bg-indigo-800'}
                      ${isExpanded ? 'justify-start' : 'justify-center'}
                    `}
                  >
                    <span className={isExpanded ? 'mr-3' : ''}>
                      {item.icon}
                    </span>
                    {isExpanded && (
                      <span className="whitespace-nowrap">{item.label}</span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className={`
            flex items-center px-4 py-3 text-sm
            hover:bg-indigo-800 transition-colors duration-200
            ${isExpanded ? 'justify-start' : 'justify-center'}
            border-t border-indigo-800
          `}
        >
          <span className={isExpanded ? 'mr-3' : ''}>
            <LogOut size={20} />
          </span>
          {isExpanded && (
            <span>Cerrar sesión</span>
          )}
        </button>
      </div>
    </div>
  );
};