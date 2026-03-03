import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ClipboardList, ShieldCheck, Dumbbell, MessageCircle, Video as VideoIcon, Smartphone } from "lucide-react";
import foto8 from "@/assets/foto-8.JPEG";
import foto9 from "@/assets/foto-9.png";
import pospartoNew from "@/assets/posparto-new.jpeg";

const features = [
  { icon: ClipboardList, title: "Valoración inicial personalizada", text: "Analizamos tu punto de partida tras el embarazo y el parto." },
  { icon: ShieldCheck, title: "Trabajo específico de abdomen y suelo pélvico", text: "Recuperación funcional antes de introducir cargas más exigentes." },
  { icon: Dumbbell, title: "Progresión segura hacia entrenamiento de fuerza", text: "Reintroducimos el ejercicio de forma estructurada y adaptada." },
  { icon: MessageCircle, title: "Seguimiento continuo por WhatsApp", text: "Ajustes y apoyo durante todo el proceso." },
  { icon: VideoIcon, title: "Videollamadas de control", text: "Revisión de evolución y adaptación del plan." },
  { icon: Smartphone, title: "App VitalFem", text: "Acceso a tu planificación, vídeos explicativos y seguimiento." },
];

const photos = [foto8, foto9, pospartoNew];

const RecuperacionPosparto = () => (
  <div className="min-h-screen bg-background font-body">
    <Navbar />
    <section className="pt-32 pb-20 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 text-center">
          Recupera tu fuerza desde la base.
        </h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          El posparto no es momento de exigirte más, sino de reconstruir con criterio.
        </p>

        <div className="grid grid-cols-3 gap-4 mb-12">
          {photos.map((photo, i) => (
            <img key={i} src={photo} alt={`Recuperación Posparto foto ${i + 1}`} className="rounded-xl w-full object-cover aspect-[3/4]" />
          ))}
        </div>

        <div className="mb-12">
          <h2 className="font-display font-bold text-xl text-foreground mb-3">Lo que te ofrece este programa</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Recuperación Posparto es un programa diseñado para ayudarte a volver a entrenar de forma progresiva y respetuosa, trabajando la funcionalidad del abdomen y el suelo pélvico antes de dar el siguiente paso.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Aquí no buscamos "recuperar tu cuerpo de antes", sino ayudarte a sentirte fuerte, estable y segura en esta nueva etapa.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Avanzas a tu ritmo, con acompañamiento y sin presión.
          </p>
        </div>

        <h2 className="font-display font-bold text-xl text-foreground mb-6">¿Qué incluye?</h2>
        <div className="space-y-5 mb-12">
          {features.map((f) => (
            <div key={f.title} className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">{f.title}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-secondary/50 rounded-xl p-6 mb-8">
          <h2 className="font-display font-bold text-foreground mb-2">¿Es para ti?</h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            Este programa es para ti si…
          </p>
          <ul className="space-y-2 text-muted-foreground text-sm leading-relaxed">
            <li>✔️ Has dado a luz y no sabes cómo volver a entrenar de forma segura.</li>
            <li>✔️ Sientes debilidad en abdomen o suelo pélvico y quieres trabajarlo bien.</li>
            <li>✔️ Te preocupa hacerlo demasiado rápido o de forma incorrecta.</li>
            <li>✔️ Quieres recuperar fuerza y movilidad sin presión ni comparaciones.</li>
            <li>✔️ Buscas acompañamiento profesional en esta etapa.</li>
          </ul>
          <p className="text-muted-foreground text-sm leading-relaxed mt-4 italic">
            Si quieres volver a sentirte fuerte, con confianza y segura en tu cuerpo, este es tu siguiente paso.
          </p>
        </div>

        <div className="text-center">
          <a href="/contacto" className="inline-block bg-cta text-cta-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity shadow-lg">
            Quiero empezar ya
          </a>
        </div>
      </div>
    </section>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default RecuperacionPosparto;
