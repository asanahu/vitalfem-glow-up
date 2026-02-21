import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ClipboardList, Video, Smartphone } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Rellena el formulario",
    description: "Cuéntame tus objetivos y disponibilidad para conocer tu caso y concretar nuestra videollamada inicial.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Videollamada inicial",
    description: "Vamos a conocernos mejor y analizar tu situación. Si nuestros servicios se adaptan a lo que necesitas, estarás a solo un paso de comenzar.",
    icon: Video,
  },
  {
    number: "03",
    title: "¡Darte de alta en la App!",
    description: "Recibirás tu acceso personal y tendrás a tu disposición todo el material necesario para que empecemos este viaje juntas.",
    icon: Smartphone,
  },
];

const Steps = () => {
  const ref = useScrollAnimation();

  return (
    <section id="pasos" className="py-20 bg-secondary/30">
      <div ref={ref} className="container mx-auto px-4 opacity-0">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4">
          ¿Cómo empezamos?
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Solo 3 pasos para empezar tu transformación
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <div key={s.number} className="relative text-center">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-border" />
              )}
              <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4 relative z-10">
                <span className="text-2xl font-display font-bold text-primary">{s.number}</span>
              </div>
              <s.icon className="w-6 h-6 text-primary mx-auto mb-3" />
              <h3 className="text-lg font-display font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>


        <div className="mt-12 text-center">
          <a
            href="#contacto"
            className="inline-block bg-cta text-cta-foreground font-semibold px-8 py-4 rounded-lg text-lg hover:opacity-90 transition-opacity shadow-lg"
          >
            QUIERO EMPEZAR YA
          </a>
        </div>
      </div>
    </section>
  );
};

export default Steps;
