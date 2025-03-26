
import React, { useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Smartphone, Laptop, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import AnimatedImage from './ui/AnimatedImage';

const AppSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isSectionVisible = useIntersectionObserver(sectionRef, { threshold: 0.1, initiallyVisible: true });
  
  const phoneRef = useRef<HTMLDivElement>(null);
  const isPhoneVisible = useIntersectionObserver(phoneRef, { threshold: 0.1, initiallyVisible: true });
  
  const appFeatures = [
    "Interfaz sencilla e intuitiva",
    "Notificaciones en tiempo real",
    "Múltiples vehículos en un solo panel",
    "Reportes personalizados",
    "Análisis de comportamiento vehicular",
    "Acceso desde cualquier dispositivo"
  ];

  return (
    <section id="app" className="py-24 px-6 md:px-12 lg:px-16 relative overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-nova-orange/5 rounded-l-[100px] -z-10 hidden lg:block"></div>
      <div className="absolute bottom-20 left-20 w-[400px] h-[400px] rounded-full bg-nova-orange/5 blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div ref={sectionRef}>
            <div className="flex items-center space-x-2 mb-4 opacity-0 transition-opacity duration-500" style={{ transitionDelay: '100ms' }} ref={sectionRef}>
              <div className={cn("", isSectionVisible && "opacity-100")}>
                <Smartphone className="h-5 w-5 text-nova-orange" />
              </div>
              <span className={cn(
                "text-sm font-medium text-nova-orange bg-nova-orange/10 px-3 py-1 rounded-full opacity-0 transition-opacity duration-500",
                isSectionVisible && "opacity-100"
              )}>
                Aplicación Móvil y Plataforma Web
              </span>
            </div>
            
            <h2 className={cn(
              "text-3xl md:text-4xl font-bold mb-6 opacity-0 transition-opacity duration-500",
              isSectionVisible && "opacity-100"
            )} style={{ transitionDelay: '200ms' }}>
              Control total desde <span className="text-gradient">cualquier lugar</span>
            </h2>
            
            <p className={cn(
              "text-lg text-nova-darkGray/80 mb-8 opacity-0 transition-opacity duration-500",
              isSectionVisible && "opacity-100"
            )} style={{ transitionDelay: '300ms' }}>
              Gestiona tu flotilla vehicular desde nuestra aplicación móvil o plataforma web con la misma potencia y flexibilidad. Toma decisiones informadas basadas en datos precisos en tiempo real.
            </p>
            
            <div className="mb-10">
              <div className="flex items-center mb-4 space-x-4">
                <div className={cn(
                  "p-2.5 bg-nova-orange text-white rounded-full opacity-0 transition-opacity duration-500",
                  isSectionVisible && "opacity-100"
                )} style={{ transitionDelay: '400ms' }}>
                  <Smartphone className="h-5 w-5" />
                </div>
                <div className={cn(
                  "p-2.5 bg-white border border-nova-orange/30 text-nova-orange rounded-full opacity-0 transition-opacity duration-500",
                  isSectionVisible && "opacity-100"
                )} style={{ transitionDelay: '450ms' }}>
                  <Laptop className="h-5 w-5" />
                </div>
              </div>
              
              <ul className="grid grid-cols-1 gap-3">
                {appFeatures.map((feature, index) => (
                  <li 
                    key={index}
                    className={cn(
                      "flex items-start space-x-3 opacity-0 transition-opacity duration-500",
                      isSectionVisible && "opacity-100"
                    )}
                    style={{ transitionDelay: `${500 + index * 100}ms` }}
                  >
                    <div className="bg-nova-orange/10 rounded-full p-1 mt-0.5">
                      <Check className="h-4 w-4 text-nova-orange" />
                    </div>
                    <span className="text-nova-darkGray">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className={cn(
              "flex flex-col sm:flex-row gap-4 opacity-0 transition-opacity duration-500",
              isSectionVisible && "opacity-100"
            )} style={{ transitionDelay: '1000ms' }}>
              <a 
                href="https://novagps.mx/plataforma" 
                target="_blank" 
                rel="noopener noreferrer"
                className="button-highlight bg-nova-orange text-white px-8 py-4 rounded-full font-medium shadow-button text-center hover:bg-nova-darkOrange transition-colors"
              >
                Acceder a la plataforma
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 rounded-full border border-nova-orange/30 text-nova-orange font-medium hover:bg-nova-orange/5 transition-colors text-center"
              >
                Solicitar demostración
              </a>
            </div>
          </div>
          
          <div ref={phoneRef} className="relative flex justify-center items-center">
            <div className={cn(
              "relative max-w-[280px] transform transition-all duration-1000 opacity-0 translate-y-8",
              isPhoneVisible && "opacity-100 translate-y-0"
            )}>
              <AnimatedImage
                src="https://images.unsplash.com/photo-1601972599720-36938d4ecd31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Nova GPS App"
                className="w-full h-auto rounded-3xl shadow-premium border-8 border-white"
                animation="scale-up"
              />
              
              {/* App UI elements */}
              <div className="absolute -right-16 top-20 glass-panel rounded-xl p-4 max-w-[180px] shadow-premium">
                <div className="font-medium text-nova-orange mb-1">Interfaz intuitiva</div>
                <div className="text-sm text-nova-darkGray/80">Acceso rápido a todas las funciones</div>
              </div>
              
              <div className="absolute -left-16 bottom-32 glass-panel rounded-xl p-4 max-w-[180px] shadow-premium">
                <div className="font-medium text-nova-orange mb-1">Notificaciones</div>
                <div className="text-sm text-nova-darkGray/80">Alertas en tiempo real</div>
              </div>
              
              {/* Decoration */}
              <div className="absolute -z-10 inset-0 rounded-3xl bg-nova-orange/10 blur-xl"></div>
              <div className="absolute -z-10 -top-5 -left-5 w-full h-full rounded-3xl border-2 border-nova-orange/20"></div>
              <div className="absolute -z-10 -bottom-5 -right-5 w-full h-full rounded-3xl border-2 border-nova-orange/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
