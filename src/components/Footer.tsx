import logo from "@/assets/footer-logo.png";
import { Instagram, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground/5 border-t border-border py-12">
    <div className="container mx-auto px-4 flex flex-col items-center text-center">
      {/* Logo */}
      <img src={logo} alt="Logo VitalFem - Entrenamiento de fuerza para mujeres" className="h-20 md:h-24 object-contain mb-4" />
      
      {/* Tagline */}
      <p className="text-sm text-muted-foreground mb-6">
        Entrenamiento de fuerza para mujeres, adaptado a cada etapa de tu vida.
      </p>

      {/* Social icons */}
      <div className="flex items-center gap-6 mb-8">
        <a href="https://www.instagram.com/vitalfem.es/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Instagram className="w-6 h-6" />
        </a>
        <a href="mailto:info@vitalfem.es" className="text-muted-foreground hover:text-primary transition-colors">
          <Mail className="w-6 h-6" />
        </a>
      </div>

      {/* Legal links */}
      <div className="flex flex-wrap justify-center gap-6 text-xs text-muted-foreground mb-6">
        <a href="/politica-privacidad" className="hover:text-primary transition-colors">Política de privacidad</a>
        <a href="/aviso-legal" className="hover:text-primary transition-colors">Aviso legal</a>
        <a href="/politica-cookies" className="hover:text-primary transition-colors">Política de cookies</a>
      </div>

      {/* Copyright */}
      <div className="pt-4 border-t border-border w-full text-xs text-muted-foreground">
        © 2026 VitalFem by Pamela Alarcón. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
