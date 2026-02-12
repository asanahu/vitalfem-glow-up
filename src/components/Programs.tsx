import { Video, Dumbbell, Salad, Smartphone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const programs = [
  {
    title: "Mujer Fit",
    subtitle: "Bienestar y condición física",
    description:
      "Programa diseñado para mujeres que quieren ganar fuerza, mejorar su composición corporal y sentirse más seguras. Entrenamientos adaptados a tu nivel y objetivos.",
    emoji: "💪",
  },
  {
    title: "Embarazo Saludable",
    subtitle: "Entrenamiento seguro por trimestre",
    description:
      "Mantente activa y saludable durante todo tu embarazo con ejercicios seguros adaptados a cada trimestre. Fortalece tu cuerpo para el parto.",
    emoji: "🤰",
  },
  {
    title: "Recuperación Postparto",
    subtitle: "Fuerza, suelo pélvico y movilidad",
    description:
      "Recupera tu fuerza y bienestar tras el parto. Trabajo específico de suelo pélvico, core y movilidad con progresión segura y personalizada.",
    emoji: "🌸",
  },
];

const services = [
  { icon: Video, label: "Entrevista por videollamada" },
  { icon: Dumbbell, label: "Entrenamientos personalizados" },
  { icon: Salad, label: "Dieta personalizada" },
  { icon: Smartphone, label: "Acompañamiento vía WhatsApp y videollamada" },
];

const Programs = () => {
  const ref = useScrollAnimation();

  return (
    <section id="programas" className="py-20">
      <div ref={ref} className="container mx-auto px-4 opacity-0">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4">
          Mis Programas
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Tres programas especializados para acompañarte en cada momento
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {programs.map((p) => (
            <div
              key={p.title}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <span className="text-4xl mb-4 block">{p.emoji}</span>
              <h3 className="text-xl font-display font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="text-sm font-semibold text-primary mb-3">{p.subtitle}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>

        {/* Servicios incluidos */}
        <div className="bg-secondary/50 rounded-2xl p-8 md:p-12">
          <h3 className="text-xl font-display font-bold text-center text-foreground mb-8">
            Todos los programas incluyen
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.label} className="flex flex-col items-center text-center gap-3">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
