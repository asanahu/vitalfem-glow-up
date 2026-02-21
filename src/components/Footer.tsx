import logo from "@/assets/footer-logo.png";

const Footer = () => (
  <footer className="bg-foreground/5 border-t border-border py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        {/* Logo & brand */}
        <div className="flex flex-col items-start gap-3">
          <div className="flex items-center gap-2">
            <img src={logo} alt="VitalFem" className="h-20 md:h-24 object-contain" />
          </div>
          <p className="text-sm text-muted-foreground">
            Entrenamiento de fuerza para mujeres, adaptado a cada etapa de tu vida.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold text-foreground mb-3 text-sm">Enlaces</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#quien-soy" className="hover:text-primary transition-colors">Quién Soy</a></li>
            <li><a href="#programas" className="hover:text-primary transition-colors">Programas</a></li>
            <li><a href="#pasos" className="hover:text-primary transition-colors">Cómo funciona</a></li>
            <li><a href="#testimonios" className="hover:text-primary transition-colors">Testimonios</a></li>
            <li><a href="#contacto" className="hover:text-primary transition-colors">Contacto</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-foreground mb-3 text-sm">Contacto</h4>
          <p className="text-sm text-muted-foreground">info@vitalfem.es</p>
          <div className="mt-4 text-xs text-muted-foreground space-y-1">
            <p><a href="#" className="hover:text-primary transition-colors">Política de privacidad</a></p>
            <p><a href="#" className="hover:text-primary transition-colors">Aviso legal</a></p>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        © 2026 VitalFem by Pamela Alarcón. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
