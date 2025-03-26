
import React, { useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { ChevronDown } from 'lucide-react';
import AnimatedImage from './ui/AnimatedImage';
import { cn } from '@/lib/utils';

const Hero = () => {
  const featureRef1 = useRef<HTMLDivElement>(null);
  const featureRef2 = useRef<HTMLDivElement>(null);
  const featureRef3 = useRef<HTMLDivElement>(null);
  
  const isFeature1Visible = useIntersectionObserver(featureRef1, { initiallyVisible: true });
  const isFeature2Visible = useIntersectionObserver(featureRef2, { initiallyVisible: true });
  const isFeature3Visible = useIntersectionObserver(featureRef3, { initiallyVisible: true });

  return (
    <section className="relative pt-24 pb-16 md:py-32 px-6 md:px-12 lg:px-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-full hero-gradient -z-10"></div>
      <div className="absolute top-20 left-1/2 w-[800px] h-[800px] -translate-x-1/2 rounded-full bg-nova-orange/5 blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-block px-3 py-1 bg-nova-orange/10 text-nova-orange rounded-full text-sm font-medium mb-4 animate-fade-in">
              La Mejor Solución de Rastreo GPS
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight mb-6 animate-fade-in animate-delay-200">
              Monitoreo y rastreo <span className="text-gradient">en tiempo real</span> de tus vehículos
            </h1>
            <p className="text-lg text-nova-darkGray/80 mb-8 max-w-xl animate-fade-in animate-delay-300">
              Sistema avanzado de GPS que te permite dar seguimiento en tiempo real a tus vehículos, optimizando rutas y garantizando la seguridad de tu flotilla.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-fade-in animate-delay-400">
              <a href="#features" className="button-highlight bg-nova-orange text-white px-8 py-4 rounded-full font-medium shadow-button text-center hover:bg-nova-darkOrange transition-colors">
                Conoce más
              </a>
              <a href="https://novagps.mx/plataforma" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full border border-nova-orange/30 text-nova-orange font-medium hover:bg-nova-orange/5 transition-colors text-center">
                Ir a la plataforma
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative animate-fade-in">
            <div className="relative">
              <AnimatedImage
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Nova GPS Dispositivo"
                className="w-full h-auto rounded-2xl shadow-premium"
                animation="scale-up"
              />
              
              {/* Floating UI elements */}
              <div 
                ref={featureRef1}
                className={cn(
                  "absolute top-10 -left-6 glass-panel rounded-xl p-4 max-w-[200px] shadow-premium opacity-0 transition-opacity duration-500",
                  isFeature1Visible && "opacity-100 animate-float"
                )}
              >
                <div className="font-medium text-nova-orange mb-1">Localización en vivo</div>
                <div className="text-sm text-nova-darkGray/80">Monitoreo en tiempo real con mapas detallados</div>
              </div>
              
              <div 
                ref={featureRef2}
                className={cn(
                  "absolute top-1/2 -right-6 glass-panel rounded-xl p-4 max-w-[200px] shadow-premium opacity-0 transition-opacity duration-500 delay-300",
                  isFeature2Visible && "opacity-100 animate-float animate-delay-200"
                )}
              >
                <div className="font-medium text-nova-orange mb-1">Historial de rutas</div>
                <div className="text-sm text-nova-darkGray/80">Revisa recorridos anteriores con facilidad</div>
              </div>
              
              <div 
                ref={featureRef3}
                className={cn(
                  "absolute bottom-10 left-1/4 glass-panel rounded-xl p-4 max-w-[200px] shadow-premium opacity-0 transition-opacity duration-500 delay-500",
                  isFeature3Visible && "opacity-100 animate-float animate-delay-400"
                )}
              >
                <div className="font-medium text-nova-orange mb-1">Ahorro de combustible</div>
                <div className="text-sm text-nova-darkGray/80">Optimiza rutas y reduce costos operativos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce-light hidden md:block">
        <a href="#features" aria-label="Scroll down">
          <ChevronDown className="text-nova-orange/60 h-8 w-8" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
