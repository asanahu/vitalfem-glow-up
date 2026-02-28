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
                Acompaño a mujeres que quieren sentirse fuertes, seguras y tranquilas en una de las etapas más transformadoras de sus vidas: el embarazo y el posparto. Mi objetivo es que entrenes con confianza, sabiendo que cada ejercicio tiene sentido y está adaptado a ti.
              </p>

              {expanded && (
                <div className="space-y-4">
                  <img
                    src={foto2}
                    alt="Pamela Alarcón entrenando ejercicios de fuerza en el gimnasio"
                    className="rounded-2xl shadow-lg w-full max-w-sm object-cover aspect-[3/4] float-left mr-6 mb-4"
                  />
                  <p>
                    Nací en Argentina y me mudé a Zaragoza con 10 años. Fue mi abuela quien me apuntó a una academia de baile sin imaginar que ahí empezaría todo. La danza me llevó a competir y me enseñó algo que hoy sigue marcando mi forma de trabajar: la disciplina, la constancia y el compromiso construyen resultados reales.
                  </p>
                  <p>
                    Con el tiempo cambié el escenario por las mancuernas. Descubrí que mi vocación no era solo entrenar, sino ayudar a otras personas a superarse y a conseguir sus objetivos. Me titulé en <strong className="text-foreground">TSEAS</strong> y continué mi formación en <strong className="text-foreground">Ciencias de la Actividad Física y del Deporte (CAFYD)</strong>, especializándome en <strong className="text-foreground">entrenamiento femenino, embarazo</strong> y <strong className="text-foreground">posparto</strong>.
                  </p>
                  <p>
                    Desde 2017 trabajo en el sector del fitness en diferentes ámbitos, pero con el paso de los años fue el entrenamiento en embarazo y recuperación posparto lo que terminó de darle verdadero sentido a mi profesión. Acompañar a una mujer a mantenerse activa durante el embarazo, prepararse físicamente para el parto y conseguir una recuperación posparto es mucho más que entrenar: es guiarla en un proceso de cambio físico y emocional.
                  </p>
                  <div className="clear-both" />
                  <p>
                    Y por seguir apostando por ello nació <strong className="text-foreground">VitalFem</strong>, una plataforma de entrenamiento y nutrición online personalizada. Aquí encontrarás un acompañamiento adaptado a ti, tanto si entrenas en casa como en el gimnasio. Mi objetivo es ayudarte a construir un estilo de vida activo, fuerte y sostenible, respetando cada etapa de tu proceso.
                  </p>
                  <p>
                    Si estás aquí porque buscas sentirte mejor, acompañada, recuperarte o simplemente vivir esta etapa con más calma y confianza, estaré encantada de acompañarte.
                  </p>
                </div>
              )}

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
      </div>
    </section>
  );
};

export default AboutMe;
