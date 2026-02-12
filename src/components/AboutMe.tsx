import foto2 from "@/assets/Foto_2.JPG";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutMe = () => {
  const ref = useScrollAnimation();

  return (
    <section id="quien-soy" className="py-20 bg-secondary/30">
      <div ref={ref} className="container mx-auto px-4 opacity-0">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={foto2}
              alt="Pamela Alarcón"
              className="rounded-2xl shadow-xl w-full max-w-md mx-auto object-cover aspect-[3/4]"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/30 rounded-full -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full -z-10" />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Quién Soy
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Soy <strong className="text-foreground">Pamela Alarcón</strong>, graduada en Ciencias de la Actividad Física y del Deporte (CAFYD), especializada en entrenamiento de fuerza para mujeres en todas las etapas de su vida.
              </p>
              <p>
                Mi enfoque profesional combina la ciencia del ejercicio con un acompañamiento cercano y personalizado. Creo firmemente que cada mujer merece un plan adaptado a sus necesidades, objetivos y momento vital.
              </p>
              <p>
                Ya sea que busques mejorar tu condición física, mantenerte activa durante el embarazo o recuperarte tras el parto, diseño programas seguros y efectivos basados en evidencia científica.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
