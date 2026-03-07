import { useEffect, useRef, useState } from "react";
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
  const [showInfoBox, setShowInfoBox] = useState(true);

  useEffect(() => {
    const initCalendly = () => {
      if (window.Calendly && calendlyRef.current) {
        calendlyRef.current.innerHTML = "";
        window.Calendly.initInlineWidget({
          url: "https://calendly.com/pamela-alarcon-vitalfem/nueva-reunion?hide_event_type_details=1&hide_gdpr_banner=1",
          parentElement: calendlyRef.current,
          prefill: {},
          utm: {},
          theme: {
            backgroundColor: 'fbf8f5',
            textColor: '241e3d',
            brandColor: 'eb9eb0',
          }
        });
      }
    };

    let script = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');

    if (!script) {
      script = document.createElement("script");
      script.setAttribute("src", "https://assets.calendly.com/assets/external/widget.js");
      script.setAttribute("async", "true");
      script.addEventListener("load", initCalendly);
      document.body.appendChild(script);
    } else {
      initCalendly();
    }
  }, []);

  // Observe Calendly iframe height changes to hide info box when it grows
  useEffect(() => {
    if (!calendlyRef.current) return;

    const observer = new MutationObserver(() => {
      const iframe = calendlyRef.current?.querySelector("iframe");
      if (iframe) {
        const height = iframe.style.height ? parseInt(iframe.style.height) : 0;
        setShowInfoBox(height <= 680 || height === 0);
      }
    });

    observer.observe(calendlyRef.current, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["style"],
    });

    return () => observer.disconnect();
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

        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Left: Image */}
          <div className="hidden lg:block sticky top-20 self-start" style={{ height: "680px" }}>
            <img
              src={foto10}
              alt="Pamela Alarcón - Contacto Entrenadora Personal"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* Right: Calendly + Info box */}
          <div className="sticky top-20 self-start flex flex-col gap-4">
            <div
              ref={calendlyRef}
              className="w-full overflow-hidden bg-transparent rounded-2xl"
              style={{ minWidth: "320px", height: "680px" }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                  <div className="w-8 h-8 border-3 border-primary/30 border-t-primary rounded-full animate-spin" />
                  <span className="text-sm">Cargando calendario...</span>
                </div>
              </div>
            </div>

            {showInfoBox && (
              <div className="bg-card border border-border rounded-2xl py-4 px-6 text-center transition-all duration-300">
                <p className="text-sm text-muted-foreground font-body">
                  *30-40 minutos de valoración inicial
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
