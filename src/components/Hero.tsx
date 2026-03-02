import heroBackground from "@/assets/hero-new.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Pamela Alarcón - Entrenadora personal"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/50 md:to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent md:hidden" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6 animate-fade-in-up">
            Entrenamiento seguro y progresivo en el embarazo y posparto
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Planes de entrenamiento y nutrición personalizados, porque cada mujer merece un acompañamiento adaptado a su etapa y objetivos.
          </p>
          <a
            href="#contacto"
            className="inline-block bg-cta text-cta-foreground font-semibold px-8 py-4 rounded-lg text-lg hover:opacity-90 transition-opacity shadow-lg animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Empieza tu transformación
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
