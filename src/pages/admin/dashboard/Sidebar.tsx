import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import MiTrenLogo from "@/assets/brand/mitren-logo.webp";
import {
  Users,
  Menu,
  X,
  MapPin,
  Smartphone,
  BadgeDollarSign,
  BarChart3,
  LogOut,
  Bus,
  Bolt,
  MessageSquareText,
  SmartphoneNfc,
  Store,
  Split,
  Layers3,
} from "lucide-react";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sidebarRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { icon: <MessageSquareText size={24} />, text: "Frases institucionales", path: "/admin-dashboard/frases" },
    { icon: <SmartphoneNfc size={24} />, text: "Tarjetas NFC", path: "/admin-dashboard/tarjetas" },
    { icon: <Users size={24} />, text: "Usuarios", path: "/admin-dashboard/usuarios" },
    { icon: <Store size={24} />, text: "Promociones", path: "/admin-dashboard/promociones" },
    { icon: <Split size={24} />, text: "Líneas", path: "/admin-dashboard/lineas" },
    { icon: <Layers3 size={24} />, text: "Categorías", path: "/admin-dashboard/categorias" },
    { icon: <MapPin size={24} />, text: "Estaciones", path: "/admin-dashboard/estaciones" },
    { icon: <Smartphone size={24} />, text: "Dispositivos", path: "/admin-dashboard/dispositivos" },
    { icon: <Bus size={24} />, text: "Rutas", path: "/admin-dashboard/rutas" },
    { icon: <BadgeDollarSign size={24} />, text: "Precios", path: "/admin-dashboard/precios" },
    { icon: <BarChart3 size={24} />, text: "Reportes", path: "/admin-dashboard/reportes" },
  ];

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    console.log("Sesión cerrada");
    navigate("/");
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (event: any) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        if (window.innerWidth < 1024) {
          setIsMobileMenuOpen(false);
        } else if (event.clientX > 280) {
          setIsExpanded(false);
        }
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      if (window.innerWidth >= 1024) {
        const { clientX } = event;
        if (clientX <= 100) {
          setIsExpanded(true);
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-indigo-900 text-white"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {isMobileMenuOpen && <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30" />}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed lg:static h-screen flex transition-all duration-300 ease-in-out z-40
          ${isMobileMenuOpen ? "left-0" : "-left-full lg:left-0"}
          ${isExpanded ? "lg:w-[280px]" : "lg:w-16"}
        `}
      >
        <div className="w-16 bg-indigo-900 p-3 flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-3 p-3 text-white mb-8">
            <Bolt size={24} />
          </div>
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`p-2 rounded-lg hover:bg-indigo-800 transition-colors ${
                location.pathname === item.path ? "bg-indigo-800 text-white" : "text-gray-300 hover:text-white"
              }`}
              onClick={() => {
                if (window.innerWidth < 1024) {
                  setIsMobileMenuOpen(false);
                }
              }}
            >
              {item.icon}
            </Link>
          ))}
          <button
            onClick={handleLogout}
            className="p-2 rounded-lg hover:bg-indigo-800 text-gray-300 hover:text-white transition-colors mt-auto"
          >
            <LogOut size={24} />
          </button>
        </div>

        <div
          className={`${
            isExpanded || isMobileMenuOpen ? "w-64 opacity-100" : "w-0 opacity-0"
          } bg-indigo-800 overflow-hidden transition-all duration-300`}
        >
          <div className="p-4">
            <div className="flex items-center justify-center space-x-3 p-3">
              <img src={MiTrenLogo} alt="Logo" className="w-20 h-20" />
            </div>
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-indigo-700 transition-colors mb-1 ${
                  location.pathname === item.path ? "bg-indigo-700 text-white" : "text-gray-300 hover:text-white"
                }`}
                onClick={() => {
                  if (window.innerWidth < 1024) {
                    setIsMobileMenuOpen(false);
                  }
                }}
              >
                {item.icon}
                <span>{item.text}</span>
              </Link>
            ))}
            <button
              onClick={handleLogout}
              className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-indigo-700 text-gray-300 hover:text-white transition-colors mt-4"
            >
              <LogOut size={24} />
              <span>Cerrar sesión</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
