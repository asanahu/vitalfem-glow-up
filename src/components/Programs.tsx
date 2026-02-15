import { useState } from "react";
import { Dumbbell, Heart, Baby, ClipboardList, Salad, BookOpen, MessageCircle, Video as VideoIcon, Stethoscope, Smartphone, X, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import foto3 from "@/assets/foto-3.png";
import foto4 from "@/assets/foto-4.png";
import foto5 from "@/assets/foto-5.png";
import foto6 from "@/assets/foto-6.JPEG";
import foto7 from "@/assets/foto-7.PNG";
import foto8 from "@/assets/foto-8.JPEG";
import foto9 from "@/assets/foto-9.png";

const services = [
  { icon: Dumbbell, label: "Entrenamientos personalizados" },
  { icon: Salad, label: "Nutrición personalizada" },
  { icon: BookOpen, label: "Material exclusivo para tu etapa" },
  { icon: MessageCircle, label: "Acompañamiento por WhatsApp" },
  { icon: VideoIcon, label: "Videollamada de control" },
];

type Program = {
  id: string;
  title: string;
  icon: typeof Dumbbell;
  summary: string;
  photos: string[];
  intro: string;
  features: { icon: typeof Dumbbell; title: string; text: string }[];
  forYou: string;
};

const programs: Program[] = [
  {
    id: "mujer-fit",
    title: "Mujer Fit",
    icon: Dumbbell,
    summary: "Mejora tu salud y crea hábitos sostenibles mientras fortaleces tu cuerpo con entrenamientos de fuerza real, totalmente adaptados a tu estilo de vida y a tu punto de partida.",
    photos: [foto3, foto4],
    intro: "Lleva tu entrenamiento al siguiente nivel. En el programa Mujer Fit nos alejamos de las rutinas genéricas. Aquí, el entrenamiento de fuerza y funcional se adapta a ti, tanto si entrenas en casa como en el gimnasio, para que consigas resultados reales sin que el deporte sea una carga en tu día a día.",
    features: [
      { icon: ClipboardList, title: "Planificación Personalizada", text: "Rutinas diseñadas según tu nivel actual, tus objetivos, el material del que dispongas y lo que realmente te gusta. Entrenar no tiene que resultarte aburrido." },
      { icon: Heart, title: "Enfoque en Salud y Fuerza", text: "Mejora tu composición corporal y gana vitalidad con un método basado en la ciencia y la técnica correcta." },
      { icon: Salad, title: "Nutrición y Hábitos", text: "Dieta personalizada junto a herramientas para que aprendas a gestionar la comida y los antojos, logrando cambios que se mantienen en el tiempo." },
      { icon: MessageCircle, title: "Seguimiento por WhatsApp", text: "Estaremos en continua comunicación para que nunca te sientas sola en el proceso." },
      { icon: VideoIcon, title: "Videollamadas de Control", text: "Cada 3 semanas nos veremos para comentar tus avances, resolver dudas y planificar tus siguientes pasos." },
      { icon: Stethoscope, title: "Red de Salud VitalFem (Fisioterapia)", text: "Soporte de una fisioterapeuta especializada en suelo pélvico y salud femenina. Valoraciones online personalizadas. Servicio premium disponible bajo consulta." },
      { icon: Smartphone, title: "App VitalFem", text: "Todo tu progreso, vídeos de ejercicios y contenido exclusivo para tu etapa, siempre a mano en el mismo lugar." },
    ],
    forYou: "Es el programa ideal si buscas dejar atrás la improvisación, quieres sentirte fuerte y ágil, y necesitas un plan profesional que respete tus tiempos y tu ritmo de vida actual.",
  },
  {
    id: "embarazo-saludable",
    title: "Embarazo Saludable",
    icon: Heart,
    summary: "Entrena segura en cada trimestre con un plan personalizado y ajustado a tus necesidades. Manténte activa, lidiando con posibles molestias y preparando tu cuerpo para el parto y una buena recuperación posparto.",
    photos: [foto5, foto6, foto7],
    intro: "Vive un embarazo consciente, fuerte y seguro. El programa Embarazo Saludable está diseñado para acompañarte en este viaje tan especial, eliminando las dudas sobre qué puedes o no hacer. Adaptamos el entrenamiento de fuerza a los cambios de cada trimestre para que te sientas ágil, reduzcas las molestias comunes, llegues al parto con la mejor preparación física posible y favorezcas tu recuperación posparto.",
    features: [
      { icon: ClipboardList, title: "Planificación Personalizada", text: "Rutinas diseñadas según el trimestre en el que te encuentres, tus sensaciones, el material del que dispongas y tus objetivos específicos para esta etapa." },
      { icon: Heart, title: "Enfoque en Salud y Fuerza", text: "Manténte activa y prepara tu cuerpo para el parto con un método basado en la ciencia y la técnica correcta; esto será clave para tu futura recuperación posparto." },
      { icon: Salad, title: "Nutrición y Hábitos", text: "Dieta personalizada junto a herramientas para que aprendas a gestionar los momentos de esta etapa. Buscamos educarte para que lleves una alimentación saludable que se pueda mantener en el tiempo." },
      { icon: MessageCircle, title: "Seguimiento por WhatsApp", text: "Estaremos en continua comunicación para que nunca te sientas sola en el proceso." },
      { icon: VideoIcon, title: "Videollamadas de Control", text: "Cada 3 semanas nos veremos para comentar tus avances, resolver dudas y planificar tus siguientes pasos." },
      { icon: Stethoscope, title: "Red de Salud VitalFem (Fisioterapia)", text: "Soporte de una fisioterapeuta especializada en suelo pélvico y salud femenina. Valoraciones online personalizadas. Servicio premium disponible bajo consulta." },
      { icon: Smartphone, title: "App VitalFem", text: "Todo tu progreso, vídeos de ejercicios y contenido exclusivo para tu etapa, siempre a mano en el mismo lugar." },
    ],
    forYou: "Es el programa ideal si quieres vivir un embarazo activo y saludable, si buscas la tranquilidad de entrenar sin miedos bajo supervisión profesional y deseas prepararte físicamente para el momento del parto.",
  },
  {
    id: "recuperacion-posparto",
    title: "Recuperación Posparto",
    icon: Baby,
    summary: "Un acompañamiento cercano diseñado para trabajar la funcionalidad del abdomen y el suelo pélvico de forma respetuosa con tu cuerpo. Recupera tu fuerza, movilidad y confianza de forma progresiva.",
    photos: [foto8, foto9],
    intro: "Vuelve a sentirte fuerte y segura. El programa de Recuperación Posparto está diseñado para acompañarte en esta nueva etapa, ofreciéndote una planificación progresiva que respeta los tiempos de tu cuerpo. No solo nos enfocamos en la salud de tu suelo pélvico y abdomen, sino en devolverte la movilidad y la fuerza necesarias para que afrontes tu día a día con máxima vitalidad.",
    features: [
      { icon: ClipboardList, title: "Planificación Personalizada", text: "Rutinas diseñadas según tu punto de partida, tus sensaciones, el material del que dispongas y los objetivos específicos para tu recuperación." },
      { icon: Heart, title: "Enfoque en Salud y Fuerza", text: "Recupera tu forma física, movilidad y confianza con un método basado en la ciencia y la técnica correcta, tratando con especial cuidado el suelo pélvico y la faja abdominal." },
      { icon: Salad, title: "Nutrición y Hábitos", text: "Dieta personalizada junto a herramientas para que aprendas a gestionar tu alimentación en esta etapa, buscando educarte para que lleves un estilo de vida saludable que se mantenga en el tiempo." },
      { icon: MessageCircle, title: "Seguimiento por WhatsApp", text: "Estaremos en continua comunicación para que nunca te sientas sola en el proceso." },
      { icon: VideoIcon, title: "Videollamadas de Control", text: "Cada 3 semanas nos veremos para comentar tus avances, resolver dudas y planificar tus siguientes pasos." },
      { icon: Stethoscope, title: "Red de Salud VitalFem (Fisioterapia)", text: "Soporte de una fisioterapeuta especializada en suelo pélvico y salud femenina. Valoraciones online personalizadas. Servicio premium disponible bajo consulta." },
      { icon: Smartphone, title: "App VitalFem", text: "Todo tu progreso, vídeos de ejercicios y contenido exclusivo para tu etapa, siempre a mano en el mismo lugar." },
    ],
    forYou: "Es el programa ideal si has sido madre recientemente y buscas un acompañamiento cercano para recuperar tu cuerpo de forma segura y guiada, permitiéndote ganar fuerza y movilidad mientras recuperas la confianza en ti misma.",
  },
];

const Programs = () => {
  const ref = useScrollAnimation();
  const [activeProgram, setActiveProgram] = useState<string | null>(null);

  const active = programs.find((p) => p.id === activeProgram);

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
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">{p.summary}</p>
              <button
                onClick={() => setActiveProgram(p.id)}
                className="mt-6 text-sm font-semibold text-primary hover:text-accent-foreground transition-colors self-start underline underline-offset-4"
              >
                Ver programa completo →
              </button>
            </div>
          ))}
        </div>

        {/* Services included */}
        <div className="bg-secondary/50 rounded-2xl p-8 md:p-12">
          <h3 className="text-xl font-display font-bold text-center text-foreground mb-8">
            Todos los programas incluyen
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {services.map((s) => (
              <div key={s.label} className="flex flex-col items-center text-center gap-3">
                <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{s.label}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8 flex items-center justify-center gap-2">
            <Clock className="w-4 h-4" />
            Si el tiempo es un problema, no te preocupes: nuestros programas cuentan con entrenamientos de 20', 30' o 40'. Nos adaptamos totalmente a tus rutinas.
          </p>
        </div>
      </div>

      {/* Program detail modal */}
      {active && (
        <div className="fixed inset-0 z-50 bg-foreground/50 backdrop-blur-sm flex items-start justify-center overflow-y-auto py-8 px-4" onClick={() => setActiveProgram(null)}>
          <div className="bg-background rounded-2xl max-w-3xl w-full shadow-2xl relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setActiveProgram(null)} className="absolute top-4 right-4 p-2 text-foreground/60 hover:text-foreground transition-colors z-10">
              <X className="w-6 h-6" />
            </button>

            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <active.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">{active.title}</h3>
              </div>

              {/* Photos */}
              <div className={`grid ${active.photos.length >= 3 ? "grid-cols-3" : "grid-cols-2"} gap-4 mb-8`}>
                {active.photos.map((photo, i) => (
                  <img key={i} src={photo} alt={`${active.title} foto ${i + 1}`} className="rounded-xl w-full object-cover aspect-[3/4]" />
                ))}
              </div>

              <h4 className="font-display font-bold text-lg text-foreground mb-3">Lo que te ofrece este programa</h4>
              <p className="text-muted-foreground leading-relaxed mb-8">{active.intro}</p>

              <h4 className="font-display font-bold text-lg text-foreground mb-6">¿Qué incluye el programa?</h4>
              <div className="space-y-5 mb-8">
                {active.features.map((f) => (
                  <div key={f.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                      <f.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{f.title}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{f.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-secondary/50 rounded-xl p-6">
                <h4 className="font-display font-bold text-foreground mb-2">¿Es para ti?</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{active.forYou}</p>
              </div>

              <div className="mt-8 text-center">
                <a href="#contacto" onClick={() => setActiveProgram(null)} className="inline-block bg-cta text-cta-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity shadow-lg">
                  Quiero empezar ya
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Programs;
