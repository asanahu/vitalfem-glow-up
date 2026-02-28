import { useState } from "react";
import foto1 from "@/assets/foto-1.JPG";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutMe = () => {
  const ref = useScrollAnimation();

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
                asChild
                variant="outline"
                className="mt-2 border-accent text-accent-foreground hover:bg-accent/20"
              >
                <Link to="/quien-soy">Leer más sobre mi historia</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
