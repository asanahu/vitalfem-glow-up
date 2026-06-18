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
          <div className="inline-flex items-center gap-2 bg-[#B85A7A] text-white font-semibold text-sm px-4 py-2 rounded-full mb-6 animate-fade-in-up">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
            <span>100% ONLINE</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Entrenamiento<br />seguro y progresivo<br />en el embarazo y<br />posparto
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
