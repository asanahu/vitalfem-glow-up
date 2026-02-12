import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Laura López",
    program: "Recuperación Postparto",
    text: "Después de mi segundo hijo no sabía por dónde empezar. Pamela me guió paso a paso con un plan totalmente adaptado. En tres meses me sentía fuerte y con energía. ¡Una experiencia increíble!",
  },
  {
    name: "Ana Páez",
    program: "Mujer Fit",
    text: "Siempre me había costado ser constante en el gimnasio. Con VitalFem encontré la motivación y el acompañamiento que necesitaba. He ganado fuerza y confianza en mí misma.",
  },
  {
    name: "María Fernández",
    program: "Embarazo Saludable",
    text: "Entrenar durante el embarazo me daba mucho respeto, pero con Pamela me sentí segura en todo momento. Adapta cada ejercicio y está siempre disponible para cualquier duda.",
  },
];

const Testimonials = () => {
  const ref = useScrollAnimation();

  return (
    <section id="testimonios" className="py-20">
      <div ref={ref} className="container mx-auto px-4 opacity-0">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4">
          Lo que dicen las mujeres que entrenan conmigo
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Historias reales de transformación y bienestar
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow relative"
            >
              <Quote className="w-8 h-8 text-accent mb-4" />
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div>
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-primary font-medium">{t.program}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
