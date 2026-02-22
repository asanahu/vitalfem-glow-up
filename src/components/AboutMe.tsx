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
                Hola, soy <strong className="text-foreground">Pamela Alarcón</strong>, entrenadora especializada en acompañar a mujeres en las diferentes etapas de su vida.
              </p>
              <p>
                Mi trayectoria con el deporte comenzó en la danza, donde descubrí que la constancia y la disciplina son la base de cualquier logro. Tras años de competición, mi paso por el gimnasio me reveló mi verdadera vocación: el entrenamiento funcional.
              </p>
              <p>
                Esta pasión me impulsó a titularme en TSEAS y a continuar mi formación superior en Ciencias de la Actividad Física y del Deporte, buscando siempre seguir progresando para cumplir mis objetivos.
              </p>

              {expanded && (
                <>
                  <img
                    src={foto2}
                    alt="Pamela Alarcón entrenando ejercicios de fuerza en el gimnasio"
                    className="rounded-2xl shadow-lg w-full max-w-sm mx-auto object-cover aspect-[3/4] my-6"
                  />
                  <p>
                    Ese compromiso con la salud me ha llevado a profundizar en distintas modalidades de entrenamiento personal, con un <strong className="text-foreground">enfoque específico en el ámbito del embarazo y el posparto</strong>. Entiendo que nuestras necesidades cambian, por lo que he centrado mi carrera en ofrecer un soporte técnico y humano en cada ciclo vital.
                  </p>
                  <p>
                    Desde 2016, formo parte del sector del fitness acompañando a mujeres en diferentes etapas: desde quienes buscan divertirse y desconectar a través del movimiento, mejorando sus hábitos y alcanzando objetivos de salud o imagen física, hasta futuras mamás que desean entrenar de forma segura en cada trimestre de su embarazo, o mujeres en posparto que necesitan recuperar progresivamente fuerza, movilidad y confianza, sintiéndose acompañadas en todo momento.
                  </p>
                  <p>
                    Fruto de esta trayectoria nace <strong className="text-foreground">VitalFem by Pamela Alarcón</strong>, un servicio que, mediante una app de entrenamiento y nutrición personalizada, te ofrece el acompañamiento necesario para que cumplas tus objetivos. Todo está diseñado a medida para ti, ya sea para entrenar desde casa o en el gimnasio, convirtiendo la actividad física y los buenos hábitos en el camino hacia tu vida más saludable.
                  </p>
                </>
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
