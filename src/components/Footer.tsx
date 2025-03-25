
import React from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="bg-nova-darkGray text-white pt-16 pb-10 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <div className="mb-6">
              <a href="#" className="flex items-center">
                <span className="text-2xl font-bold text-white">Nova<span className="text-nova-lightBlue">GPS</span></span>
              </a>
            </div>
            <p className="text-white/70 mb-6">
              Sistema de monitoreo GPS en tiempo real para vehículos y flotillas, con tecnología de última generación.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors inline-flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4" /> Inicio
                </a>
              </li>
              <li>
                <a href="#features" className="text-white/70 hover:text-white transition-colors inline-flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4" /> Características
                </a>
              </li>
              <li>
                <a href="#app" className="text-white/70 hover:text-white transition-colors inline-flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4" /> Aplicación
                </a>
              </li>
              <li>
                <a href="https://novagps.mx/plataforma" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors inline-flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4" /> Plataforma
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors inline-flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4" /> Contacto
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-nova-lightBlue mr-3 shrink-0" />
                <span className="text-white/70">
                  Calle Principal #123, Ciudad de México, México
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-nova-lightBlue mr-3 shrink-0" />
                <a href="tel:+525512345678" className="text-white/70 hover:text-white transition-colors">
                  +52 (55) 1234-5678
                </a>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-nova-lightBlue mr-3 shrink-0" />
                <a href="mailto:info@novagps.mx" className="text-white/70 hover:text-white transition-colors">
                  info@novagps.mx
                </a>
              </li>
              <li className="flex">
                <Clock className="h-5 w-5 text-nova-lightBlue mr-3 shrink-0" />
                <span className="text-white/70">
                  Lun - Vie: 9:00 - 18:00
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Suscríbete</h3>
            <p className="text-white/70 mb-4">
              Recibe actualizaciones y novedades sobre nuestros productos y servicios.
            </p>
            <form className="mb-4">
              <div className="flex items-center">
                <input 
                  type="email" 
                  placeholder="Tu correo electrónico" 
                  className="bg-white/10 border border-white/20 text-white rounded-l-full py-3 px-4 w-full focus:outline-none focus:border-nova-lightBlue" 
                />
                <button 
                  type="submit" 
                  className="bg-nova-blue hover:bg-nova-lightBlue transition-colors py-3 px-4 rounded-r-full"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </form>
            <p className="text-white/50 text-sm">
              Nunca compartiremos tu correo. Puedes darte de baja en cualquier momento.
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm mb-4 md:mb-0">
              © {currentYear} NovaGPS. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
                Términos de Servicio
              </a>
              <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
                Política de Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
