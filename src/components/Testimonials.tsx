import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Quote, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    initials: "P. M.",
    program: "Embarazo saludable",
    text: "MIL GRACIAS DE CORAZÓN por acompañarme en este proceso. He sido muy consciente de todo lo que hemos ido practicando y poder ponerlo en práctica el día del parto y poder estar en mi casa fue un sueño. Mil gracias Pame 🤍",
  },
  {
    initials: "A. G.",
    program: "Mujer Fit",
    text: "Gracias Pam por haberme hecho conseguir lo que en su día veía imposible, el poder sentirme más fuerte y ágil sabiendo como empecé me hace estar eternamente agradecida. Sigue siendo igual de profesional, tan sargento, tan tú… porque es un placer trabajar contigo.",
  },
  {
    initials: "M. L.",
    program: "Recuperación posparto",
    text: "Una experiencia muy positiva y que recomiendo a las futuras madres ya que me he sentido con mucha energía tanto física como mental durante el embarazo y que me ayudaba a sentirme activa en esta etapa. El entrenar la fuerza con pesas ha sido un descubrimiento muy gratificante y lo más importante, el sentir que lo estás haciendo bien ya que estás asesorada y guiada durante todo el entrenamiento. Además, para el posparto sigues trabajando con esa seguridad que hace que todo sea más fácil y salir de los entrenos con esa energía tan necesaria para seguir con el día.",
  },
  {
    initials: "S. P.",
    program: "Recuperación posparto",
    text: "La fisio me ha dado la enhorabuena por lo bien que hemos trabajado la diástasis. Ya hay menos de 2.3, estoy muy feliz. Gracias, gracia y gracias Pam por no dejarme tirar la toalla. No sabes las ganas que tengo de volver a darle caña, sé que primero tenía que hacer esto, pero que ganas tengo de volver a entrenar fuerte. Otra vez gracias por tu profesionalidad y sobre todo por tu paciencia.🤍",
  },
  {
    initials: "P. M.",
    program: "Embarazo saludable",
    text: "Confianza plena en trasmitir mi estado, acompañamiento cercano y profesional. Y, sobre todo, lo más diferenciador es el reto constante (adaptado) pero siempre intentas que evolucione.",
  },
  {
    initials: "L. P.",
    program: "Recuperación posparto",
    text: "Estoy encantada de haber podido conocerte y que hayas sido mi entrenadora en esta etapa por el rigor de conocimientos que tienes, la supervisión del más mínimo detalle y la implicación para que mejorará en mis entrenamientos. En lo personal has transmitido siempre positividad, seguridad y tranquilidad que es muy necesaria.",
  },
  {
    initials: "C. G.",
    program: "Mujer Fit",
    text: "Con respecto a mis objetivos que eran sobre todo mejorar abdomen y eliminar dolor de espalda: Abdomen casi recuperado y la espalda no me dueleeeee. Valoro el contacto diario con Pam y la adaptación de los entrenos a mi día a día. Recomendaría trabajar con ella: Porque Pam siempre te va a cuidar, va a tener las palabras perfectas para cada momento, te va a ayudar a mejorar, te va a motivar, ¡¡te va a hacerte sentir mejor persona!! ♥️ aparte de ser mi entrenadora, casi la considero ya amiga jajajaja. Trabajar juntas me ha transmitido confianza, cercanía y motivación para lograr mis objetivos y siempre con muy buen rollo.",
  },
  {
    initials: "M. L.",
    program: "Embarazo saludable",
    text: "Durante el embarazo me he sentido con energía y con ganas de estar activa hasta el final. Gracias a los entrenamientos sentía fuerza y seguridad en mi día a día y sobre todo muy preparada para afrontar el parto.",
  },
  {
    initials: "L. P.",
    program: "Embarazo saludable",
    text: "Durante mi embarazo me he sentido con fuerza incluso hasta el último día y durante el parto. Y también con la tranquilidad de haber trabajado la elasticidad de los tejidos del suelo pélvico -caderas etc. respecto a la pregunta 2, puntúo con 10 puntos porque Pamela ha transmitido seguridad en todo el entrenamiento, conocimientos, y además en lo personal transmitías mucha tranquilidad y dedicación.",
  },
];

const MAX_CHARS = 140;

const TestimonialCard = ({
  t,
  onReadMore,
}: {
  t: (typeof testimonials)[0];
  onReadMore: () => void;
}) => {
  const needsTruncate = t.text.length > MAX_CHARS;
  const truncated = needsTruncate
    ? t.text.slice(0, MAX_CHARS).trimEnd() + "…"
    : t.text;

  return (
    <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow relative flex flex-col justify-between h-[280px]">
      <div className="flex-1 min-h-0">
        <Quote className="w-8 h-8 text-accent mb-4 shrink-0" />
        <p className="text-muted-foreground text-sm leading-relaxed italic">
          "{truncated}"
          {needsTruncate && (
            <button
              onClick={onReadMore}
              className="text-muted-foreground font-bold hover:underline text-sm not-italic inline ml-1"
            >
              leer más
            </button>
          )}
        </p>
      </div>
      <div className="mt-4 shrink-0">
        <p className="font-bold text-foreground">{t.initials}</p>
        <p className="text-xs text-primary font-medium">{t.program}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const ref = useScrollAnimation();
  const [current, setCurrent] = useState(0);
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const total = testimonials.length;

  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);

  const getVisible = () => {
    const count =
      typeof window !== "undefined" && window.innerWidth >= 768 ? 3 : 1;
    return Array.from({ length: count }, (_, i) => ({
      testimonial: testimonials[(current + i) % total],
      globalIndex: (current + i) % total,
    }));
  };

  return (
    <>
      <section id="testimonios" className="py-20">
        <div ref={ref} className="container mx-auto px-4 opacity-0">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4">
            Lo que dicen las mujeres que entrenan conmigo
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            Historias reales de transformación y bienestar
          </p>

          <div className="relative">
            <button
              onClick={prev}
              aria-label="Anterior"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 z-10 w-10 h-10 rounded-full bg-foreground/10 hover:bg-foreground/20 flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-foreground/60" />
            </button>

            <div className="grid md:grid-cols-3 gap-8 px-8 md:px-12">
              {getVisible().map(({ testimonial, globalIndex }, idx) => (
                <TestimonialCard
                  key={`${globalIndex}-${idx}`}
                  t={testimonial}
                  onReadMore={() => setModalIndex(globalIndex)}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Siguiente"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 z-10 w-10 h-10 rounded-full bg-foreground/10 hover:bg-foreground/20 flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-foreground/60" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === current ? "bg-primary" : "bg-foreground/20"
                }`}
                aria-label={`Ir al testimonio ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal overlay */}
      {modalIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={() => setModalIndex(null)}
        >
          <div
            className="bg-card border border-border rounded-2xl p-8 max-w-lg w-full relative shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalIndex(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-foreground/10 hover:bg-foreground/20 flex items-center justify-center transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-4 h-4 text-foreground/60" />
            </button>
            <Quote className="w-8 h-8 text-accent mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed italic mb-6">
              "{testimonials[modalIndex].text}"
            </p>
            <p className="font-bold text-foreground">
              {testimonials[modalIndex].initials}
            </p>
            <p className="text-xs text-primary font-medium">
              {testimonials[modalIndex].program}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Testimonials;
