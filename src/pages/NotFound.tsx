
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-nova-gray px-6">
      <div className="text-center max-w-md">
        <div className="inline-block mb-8 animate-float">
          <div className="relative">
            <div className="text-8xl font-bold text-nova-blue">404</div>
            <div className="absolute -bottom-4 left-0 right-0 bg-nova-blue/10 h-2 rounded-full"></div>
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-4 animate-fade-in">Página no encontrada</h1>
        <p className="text-nova-darkGray/80 mb-8 animate-fade-in animate-delay-200">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>
        <Link
          to="/"
          className="button-highlight bg-nova-blue text-white px-6 py-3 rounded-full font-medium inline-flex items-center shadow-button hover:bg-nova-darkBlue transition-colors animate-fade-in animate-delay-300"
        >
          <Home className="mr-2 h-5 w-5" /> Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
