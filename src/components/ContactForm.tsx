import { useEffect, useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Calendar } from "lucide-react";
import foto10 from "@/assets/foto-10.JPG";

declare global {
  interface Window {
    Calendly: any;
  }
}

const ContactForm = () => {
  const ref = useScrollAnimation();
  const calendlyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Function to initialize Calendly
    const initCalendly = () => {
      if (window.Calendly && calendlyRef.current) {
        // Clear previous content to avoid duplicates if React remounts
        calendlyRef.current.innerHTML = "";
        window.Calendly.initInlineWidget({
          url: "https://calendly.com/pamela-alarcon-vitalfem/nueva-reunion?hide_event_type_details=1&hide_gdpr_banner=1",
          parentElement: calendlyRef.current,
          prefill: {},
          utm: {},
          // Matching site aesthetic
          theme: {
            backgroundColor: 'fbf8f5',
            textColor: '241e3d',
            brandColor: 'eb9eb0',
          }
        });
      }
    };

    // Check if script is already present
    let script = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');

    if (!script) {
      script = document.createElement("script");
      script.setAttribute("src", "https://assets.calendly.com/assets/external/widget.js");
      script.setAttribute("async", "true");
      script.addEventListener("load", initCalendly);
      document.body.appendChild(script);
    } else {
      // If script is already loaded, initialize immediately
      initCalendly();
    }
  }, []);

  return (
    <section id="contacto" className="py-20 bg-secondary/30">
      <div ref={ref} className="container mx-auto px-4 opacity-0">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4">
          Contacto
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Agenda tu videollamada conmigo directamente a través del calendario
        </p>

        <div className="grid lg:grid-cols-[380px_1fr] gap-12 max-w-6xl mx-auto items-start">
          <div className="space-y-6 sticky top-24 hidden lg:block pt-10">
            <img
              src={foto10}
              alt="Pamela Alarcón - Contacto Entrenadora Personal"
              className="rounded-2xl shadow-lg w-full object-cover aspect-[3/4]"
            />
            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-2xl border border-primary/5 shadow-sm">
              <h3 className="font-display font-bold text-lg text-foreground mb-3">¿Qué esperar de la sesión?</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>30-40 minutos de charla personalizada.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Valoración de tus objetivos y etapa actual.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Resolución de dudas sobre los programas.</span>
                </li>
              </ul>
            </div>
          </div>

          <div
            ref={calendlyRef}
            className="w-full rounded-2xl overflow-hidden bg-transparent -mt-6 lg:-mt-8"
            style={{ minWidth: "320px", height: "1100px" }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <div className="w-8 h-8 border-3 border-primary/30 border-t-primary rounded-full animate-spin" />
                <span className="text-sm">Cargando calendario...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
