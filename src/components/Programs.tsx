import { Dumbbell, Heart, Baby, Salad, BookOpen, MessageCircle, Video as VideoIcon } from "lucide-react";
import appPreview from "@/assets/app-preview.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  { icon: Dumbbell, label: "Entrenamientos personalizados" },
  { icon: Salad, label: "Nutrición personalizada" },
  { icon: BookOpen, label: "Material exclusivo para tu etapa" },
  { icon: MessageCircle, label: "Acompañamiento por WhatsApp" },
  { icon: VideoIcon, label: "Videollamada de control" },
];

const programs = [
  {
    id: "mujer-fit",
    title: "Mujer Fit",
    icon: Dumbbell,
    subtitle: "Gana fuerza, mejora tu salud y crea hábitos sostenibles.",
    summary: "Un plan de entrenamiento adaptado a tu nivel, tu tiempo y tu estilo de vida. Sin rutinas genéricas, sin improvisar.",
  },
  {
    id: "embarazo-saludable",
    title: "Embarazo Saludable",
    icon: Heart,
    subtitle: "Entrena segura en cada trimestre con un programa adaptado a tus necesidades.",
    summary: "Mantente activa, gestiona posibles molestias y prepara tu cuerpo para el parto y la recuperación posparto.",
  },
  {
    id: "recuperacion-posparto",
    title: "Recuperación Posparto",
    icon: Baby,
    subtitle: "Recupera tu fuerza empezando desde la base.",
    summary: "Trabajamos abdomen y suelo pélvico de forma progresiva y respetuosa para que vuelvas a moverte con confianza y seguridad.",
  },
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

        {/* Program cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {programs.map((p) => (
            <div key={p.id} id={p.id} className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col">
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                <p.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              {p.subtitle && <p className="text-foreground font-medium text-sm mb-1">{p.subtitle}</p>}
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">{p.summary}</p>
              <a
                href={`/${p.id}`}
                className="mt-6 text-sm font-semibold text-primary hover:text-accent-foreground transition-colors self-start underline underline-offset-4"
              >
                Ver programa completo →
              </a>
            </div>
          ))}
        </div>

        {/* Services included */}
        <div className="bg-secondary/50 rounded-2xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Heading + Icons list */}
            <div className="flex flex-col">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-10 text-left">
                Todos los programas incluyen:
              </h3>

              <div className="flex flex-col gap-y-8">
                {services.map((s) => (
                  <div key={s.label} className="flex items-center gap-5 group">
                    <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center shrink-0 transition-colors group-hover:bg-accent/30">
                      <s.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-lg md:text-xl font-display font-bold text-foreground leading-tight tracking-tight">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: App Preview Image (No background) */}
            <div className="flex flex-col items-center justify-center">
              <div className="max-w-[260px] md:max-w-[320px] relative">
                <img
                  src={appPreview}
                  alt="App VitalFem Preview - Planes de entrenamiento y nutrición personalizados"
                  className="w-full h-auto rounded-3xl transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>

              <p className="mt-8 text-sm italic text-primary/60 font-medium text-center max-w-[260px]">
                Tu nutrición y entrenamiento, siempre contigo en la App VitalFem
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Programs;
