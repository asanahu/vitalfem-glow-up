import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ClipboardList, Video, Smartphone } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Rellena el formulario",
    description: "Cuéntame sobre ti, tus objetivos y tu momento vital. Es rápido y sencillo.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Contacto y videollamada",
    description: "Nos conocemos, resolvemos dudas y diseñamos juntas tu plan personalizado.",
    icon: Video,
  },
  {
    number: "03",
    title: "Alta en la app y ¡empezamos!",
    description: "Te doy de alta en la aplicación con tu plan y comenzamos a entrenar.",
    icon: Smartphone,
  },
];

const Steps = () => {
  const ref = useScrollAnimation();

  return (
    <section id="pasos" className="py-20 bg-secondary/30">
      <div ref={ref} className="container mx-auto px-4 opacity-0">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4">
          ¿Cómo funciona?
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Solo 3 pasos para empezar tu transformación
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <div key={s.number} className="relative text-center">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-border" />
              )}
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 relative z-10">
                <span className="text-2xl font-display font-bold text-primary">{s.number}</span>
              </div>
              <s.icon className="w-6 h-6 text-primary mx-auto mb-3" />
              <h3 className="text-lg font-display font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>

        {/* App mockup */}
        <div className="mt-16 flex justify-center">
          <div className="relative">
            <div className="w-48 h-80 bg-foreground/5 border-4 border-foreground/10 rounded-[2rem] p-2 shadow-2xl">
              <div className="w-full h-full bg-card rounded-[1.5rem] flex flex-col items-center justify-center gap-3 p-4">
                <div className="w-8 h-1 bg-foreground/20 rounded-full" />
                <div className="text-xs font-bold text-primary">VitalFem App</div>
                <div className="w-full space-y-2">
                  <div className="h-2 bg-primary/20 rounded-full w-3/4" />
                  <div className="h-2 bg-cta/30 rounded-full w-full" />
                  <div className="h-2 bg-primary/20 rounded-full w-1/2" />
                </div>
                <div className="w-full h-16 bg-primary/5 rounded-lg mt-2" />
                <div className="w-full h-12 bg-cta/10 rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
