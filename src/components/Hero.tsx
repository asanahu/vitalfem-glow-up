import heroBackground from "@/assets/fuerza-hero.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Pamela Alarcón - Entrenadora personal"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6 animate-fade-in-up">
            Entrenamiento de fuerza para mujeres, adaptado a cada etapa de tu vida
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Planes de entrenamiento y nutrición 100% personalizados. Porque cada mujer merece un acompañamiento profesional que entienda su cuerpo y sus objetivos.
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
