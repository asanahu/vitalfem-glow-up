import foto1 from "@/assets/foto-1.JPG";
import foto2 from "@/assets/foto-2.JPG";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const QuienSoy = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      <section className="pt-32 pb-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12 text-center">
            Quién Soy
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start text-muted-foreground leading-relaxed">
            {/* Row 1: image + text */}
            <img
              src={foto1}
              alt="Pamela Alarcón - Entrenadora Personal para Mujeres"
              className="rounded-2xl shadow-lg w-full object-cover aspect-[3/4]"
            />
            <div className="space-y-4 flex flex-col justify-center h-full">
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
            <div className="space-y-4 flex flex-col justify-center h-full">
              <p>
                Con el tiempo cambié el escenario por las mancuernas y descubrí que mi vocación era ayudar a otras personas a superarse a través del entrenamiento. Me titulé en <strong className="text-foreground">TSEAS</strong> y continué mi formación en <strong className="text-foreground">Ciencias de la Actividad Física y del Deporte (CAFYD)</strong>, especializándome en <strong className="text-foreground">entrenamiento femenino</strong>, <strong className="text-foreground">embarazo</strong> y <strong className="text-foreground">posparto</strong>.
              </p>
              <p>
                Desde 2017 trabajo en el sector del fitness, pero fue el acompañamiento en embarazo y recuperación posparto lo que dio verdadero sentido a mi profesión. Guiar a una mujer en este proceso es mucho más que entrenar: es acompañar un cambio físico y emocional.
              </p>
            </div>
            <img
              src={foto2}
              alt="Pamela Alarcón ejercicio con pelota"
              className="rounded-2xl shadow-lg w-full object-cover aspect-[3/4]"
            />

            {/* Final paragraph spanning full width */}
            <div className="md:col-span-2 text-center max-w-3xl mx-auto space-y-4 mt-4">
              <p>
                Así nació <strong className="text-foreground">VitalFem</strong>, una plataforma de entrenamiento y nutrición online personalizada. Aquí te ayudo a construir un estilo de vida activo, fuerte y sostenible, respetando cada etapa de tu proceso.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default QuienSoy;
