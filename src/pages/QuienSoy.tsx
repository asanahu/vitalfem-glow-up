import foto1 from "@/assets/foto-1.JPG";
import foto2 from "@/assets/foto-2.JPG";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { Dumbbell, Heart, Baby } from "lucide-react";
import { useEffect } from "react";

const programs = [
  { id: "mujer-fit", title: "Mujer Fit", icon: Dumbbell, description: "Gana fuerza, mejora tu salud y crea hábitos sostenibles." },
  { id: "embarazo-saludable", title: "Embarazo Saludable", icon: Heart, description: "Entrena segura en cada trimestre con un programa adaptado." },
  { id: "recuperacion-posparto", title: "Recuperación Posparto", icon: Baby, description: "Recupera tu fuerza empezando desde la base." },
];

const QuienSoy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background font-body">
      <SEO
        title="Sobre Mí - Mi Historia"
        description="Conoce la historia de Pamela Alarcón y cómo a través de VitalFem te ayudo a conseguir un estilo de vida activo y saludable mediante el entrenamiento."
        url="https://www.vitalfem.es/quien-soy"
      />
      <Navbar />
      <section className="pt-32 pb-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12 text-center">
            Quién Soy
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start text-muted-foreground leading-relaxed">
            {/* Row 1: image + text */}
            <div className="order-1 md:order-1">
              <img
                src={foto1}
                alt="Pamela Alarcón - Entrenadora Personal para Mujeres"
                className="rounded-2xl shadow-lg w-full object-cover aspect-[3/4]"
              />
            </div>
            <div className="order-2 md:order-2 space-y-4 flex flex-col justify-center h-full">
              <p>
                ¡Hola! Soy <strong className="text-foreground">Pamela Alarcón</strong>, entrenadora personal especializada en <strong className="text-foreground">embarazo y posparto</strong>.
              </p>
              <p>
                Acompaño a mujeres que quieren sentirse fuertes, seguras y tranquilas en una de las etapas más transformadoras de sus vidas. Mi objetivo es que entrenes con confianza, sabiendo que cada ejercicio tiene sentido y está adaptado a ti.
              </p>
              <p>
                Nací en Argentina y me mudé a Zaragoza con 10 años. Mi historia con el deporte comenzó en la danza, llegando a competir a nivel nacional. Esto me enseñó disciplina, constancia y compromiso.
              </p>
            </div>

            {/* Row 2: text + image */}
            <div className="order-4 md:order-3 space-y-4 flex flex-col justify-center h-full">
              <p>
                Con el tiempo cambié el escenario por las mancuernas y descubrí que mi vocación era ayudar a otras personas a superarse a través del entrenamiento. Me titulé en <strong className="text-foreground">TSEAS</strong> y continué mi formación en <strong className="text-foreground">Ciencias de la Actividad Física y del Deporte (CAFYD)</strong>, especializándome en <strong className="text-foreground">entrenamiento femenino</strong>, <strong className="text-foreground">embarazo</strong> y <strong className="text-foreground">posparto</strong>.
              </p>
              <p>
                Desde 2017 trabajo en el sector del fitness, pero fue el acompañamiento en embarazo y recuperación posparto lo que dio verdadero sentido a mi profesión. Guiar a una mujer en este proceso es mucho más que entrenar: es acompañar un cambio físico y emocional.
              </p>
              <p>
                Así nació <strong className="text-foreground">VitalFem</strong>, una plataforma de entrenamiento y nutrición online personalizada. Aquí te ayudo a construir un estilo de vida activo, fuerte y sostenible, respetando cada etapa de tu proceso.
              </p>
            </div>
            <div className="order-3 md:order-4">
              <img
                src={foto2}
                alt="Pamela Alarcón ejercicio con pelota"
                className="rounded-2xl shadow-lg w-full object-cover aspect-[3/4]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-12">
            ¿Cómo puedo ayudarte?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {programs.map((p) => (
              <a
                key={p.id}
                href={`/${p.id}`}
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <p.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {p.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default QuienSoy;
