import { useState } from "react";
import foto1 from "@/assets/foto-1.JPG";
import foto2 from "@/assets/foto-2.JPG";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";

const AboutMe = () => {
  const ref = useScrollAnimation();
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="quien-soy" className="py-20 bg-secondary/30">
      <div ref={ref} className="container mx-auto px-4 opacity-0">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={foto1}
              alt="Pamela Alarcón - Entrenadora Personal para Mujeres"
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
                ¡Hola! Soy <strong className="text-foreground">Pamela Alarcón</strong>, entrenadora personal especializada en <strong className="text-foreground">embarazo y posparto</strong>.
              </p>
              <p>
                Acompaño a mujeres que quieren sentirse fuertes, seguras y tranquilas en una de las etapas más transformadoras de sus vidas. Mi objetivo es que entrenes con confianza, sabiendo que cada ejercicio tiene sentido y está adaptado a ti.
              </p>

              <Button
                variant="outline"
                onClick={() => setExpanded(!expanded)}
                className="mt-2 border-accent text-accent-foreground hover:bg-accent/20"
              >
                {expanded ? "Leer menos" : "Leer más sobre mi historia"}
              </Button>
            </div>
          </div>
        </div>

        {expanded && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start text-muted-foreground leading-relaxed">
            {/* Top-left: image */}
            <img
              src={foto1}
              alt="Pamela Alarcón entrenando"
              className="rounded-2xl shadow-lg w-full object-cover aspect-[3/4]"
            />
            {/* Top-right: text */}
            <div className="space-y-4 flex flex-col justify-center h-full">
              <p>
                Nací en Argentina y me mudé a Zaragoza con 10 años. Mi historia con el deporte comenzó en la danza, llegando a competir a nivel nacional. Esto me enseñó disciplina, constancia y compromiso.
              </p>
              <p>
                Con el tiempo cambié el escenario por las mancuernas y descubrí que mi vocación era ayudar a otras personas a superarse a través del entrenamiento. Me titulé en <strong className="text-foreground">TSEAS</strong> y continué mi formación en <strong className="text-foreground">Ciencias de la Actividad Física y del Deporte (CAFYD)</strong>, especializándome en <strong className="text-foreground">entrenamiento femenino</strong>, <strong className="text-foreground">embarazo</strong> y <strong className="text-foreground">posparto</strong>.
              </p>
            </div>
            {/* Bottom-left: text */}
            <div className="space-y-4 flex flex-col justify-center h-full">
              <p>
                Desde 2017 trabajo en el sector del fitness, pero fue el acompañamiento en embarazo y recuperación posparto lo que dio verdadero sentido a mi profesión. Guiar a una mujer en este proceso es mucho más que entrenar: es acompañar un cambio físico y emocional.
              </p>
              <p>
                Así nació <strong className="text-foreground">VitalFem</strong>, una plataforma de entrenamiento y nutrición online personalizada. Aquí te ayudo a construir un estilo de vida activo, fuerte y sostenible, respetando cada etapa de tu proceso.
              </p>
            </div>
            {/* Bottom-right: image */}
            <img
              src={foto2}
              alt="Pamela Alarcón ejercicio con pelota"
              className="rounded-2xl shadow-lg w-full object-cover aspect-[3/4]"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutMe;
