
import React, { useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { MapPin, Clock, Shield, Battery, BarChart, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import AnimatedImage from './ui/AnimatedImage';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isVisible: boolean;
  delay: number;
}

const FeatureCard = ({ icon, title, description, isVisible, delay }: FeatureCardProps) => (
  <div 
    className={cn(
      "bg-white rounded-xl p-6 shadow-card border border-gray-100 transition-all duration-500 opacity-0 translate-y-8",
      isVisible && "opacity-100 translate-y-0"
    )}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="p-3 bg-nova-orange/10 rounded-full w-12 h-12 flex items-center justify-center text-nova-orange mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-nova-darkGray/80">{description}</p>
  </div>
);

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isSectionVisible = useIntersectionObserver(sectionRef, { threshold: 0.1, initiallyVisible: true });
  
  const imageRef = useRef<HTMLDivElement>(null);
  const isImageVisible = useIntersectionObserver(imageRef, { threshold: 0.1, initiallyVisible: true });

  const features = [
    {
      icon: <MapPin size={20} />,
      title: "Localización precisa",
      description: "Ubica tus vehículos en tiempo real con precisión de hasta 2.5 metros.",
    },
    {
      icon: <Clock size={20} />,
      title: "Historial detallado",
      description: "Accede al historial de rutas de hasta 90 días con detalle por hora y día.",
    },
    {
      icon: <Shield size={20} />,
      title: "Alertas de seguridad",
      description: "Recibe notificaciones ante comportamientos inusuales o situaciones de riesgo.",
    },
    {
      icon: <Battery size={20} />,
      title: "Batería duradera",
      description: "Batería de larga duración para funcionamiento continuo y confiable.",
    },
    {
      icon: <BarChart size={20} />,
      title: "Reportes y estadísticas",
      description: "Análisis detallado de rutas, tiempos y eficiencia de tus vehículos.",
    },
    {
      icon: <ArrowRight size={20} />,
      title: "Integración sencilla",
      description: "Compatible con múltiples dispositivos y plataformas para mayor flexibilidad.",
    },
  ];

  return (
    <section id="features" className="py-20 px-6 md:px-12 lg:px-16 relative overflow-hidden bg-nova-gray">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <div ref={sectionRef} className="text-center mb-16">
          <span className={cn(
            "inline-block px-3 py-1 bg-nova-orange/10 text-nova-orange rounded-full text-sm font-medium mb-4 opacity-0 transition-opacity duration-500",
            isSectionVisible && "opacity-100"
          )}>
            Características Principales
          </span>
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-6 opacity-0 transition-opacity duration-500 delay-100",
            isSectionVisible && "opacity-100"
          )}>
            Diseñado para superar tus <span className="text-gradient">expectativas</span>
          </h2>
          <p className={cn(
            "text-lg text-nova-darkGray/80 max-w-2xl mx-auto opacity-0 transition-opacity duration-500 delay-200",
            isSectionVisible && "opacity-100"
          )}>
            Nuestro sistema GPS integra tecnología de vanguardia para brindarte control total sobre tu flotilla vehicular.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="grid grid-cols-1 gap-6">
              {features.slice(0, 3).map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  isVisible={isSectionVisible}
                  delay={index * 100 + 300}
                />
              ))}
            </div>
          </div>
          
          <div ref={imageRef} className="lg:col-span-1 order-1 lg:order-2 flex justify-center items-center">
            <div className={cn(
              "relative w-full max-w-[300px] aspect-square opacity-0 transition-all duration-700",
              isImageVisible && "opacity-100"
            )}>
              <AnimatedImage
                src="https://images.unsplash.com/photo-1604405010066-c76322e4a6c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Nova GPS Dispositivo"
                className="w-full h-full object-cover rounded-3xl shadow-premium"
                animation="scale-up"
              />
              
              {/* Decorative elements */}
              <div className="absolute -z-10 -top-5 -left-5 w-full h-full rounded-3xl border-2 border-nova-orange/30"></div>
              <div className="absolute -z-10 -bottom-5 -right-5 w-full h-full rounded-3xl border-2 border-nova-orange/30"></div>
              
              {/* Animation pulse */}
              <div className="absolute -z-10 inset-0 rounded-3xl bg-nova-orange/10 animate-pulse-soft"></div>
            </div>
          </div>
          
          <div className="lg:col-span-1 order-3">
            <div className="grid grid-cols-1 gap-6">
              {features.slice(3).map((feature, index) => (
                <FeatureCard
                  key={index + 3}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  isVisible={isSectionVisible}
                  delay={(index + 3) * 100 + 300}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className={cn(
          "text-center opacity-0 transition-opacity duration-500 delay-900",
          isSectionVisible && "opacity-100"
        )}>
          <a 
            href="https://novagps.mx/plataforma" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="button-highlight inline-flex items-center bg-nova-orange text-white px-8 py-4 rounded-full font-medium shadow-button hover:bg-nova-darkOrange transition-colors"
          >
            Ver todas las características <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
