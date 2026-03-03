import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ClipboardList, ShieldCheck, Activity, MessageCircle, Video as VideoIcon, Smartphone } from "lucide-react";
import embarazo1 from "@/assets/embarazo-1.png";
import embarazo2 from "@/assets/embarazo-2.png";
import embarazo3 from "@/assets/embarazo-3.jpeg";

const features = [
  { icon: ClipboardList, title: "Planificación personalizada por trimestre", text: "Entrenamientos adaptados a los cambios físicos del embarazo y a tu experiencia previa." },
  { icon: ShieldCheck, title: "Trabajo específico de suelo pélvico y core", text: "Fortalece desde la base para proteger tu abdomen y preparar el cuerpo para el parto." },
  { icon: Activity, title: "Gestión de molestias habituales", text: "Ejercicios adaptados para aliviar tensión en espalda, cadera y pelvis." },
  { icon: MessageCircle, title: "Seguimiento continuo por WhatsApp", text: "Resolución de dudas y ajustes según cómo te vayas sintiendo." },
  { icon: VideoIcon, title: "Videollamadas de control", text: "Revisamos evolución, sensaciones y adaptamos el plan si es necesario." },
  { icon: Smartphone, title: "App VitalFem", text: "Tu planificación, vídeos y seguimiento siempre accesibles." },
];

const photos = [embarazo1, embarazo2, embarazo3];

const EmbarazoSaludable = () => (
  <div className="min-h-screen bg-background font-body">
    <Navbar />
    <section className="pt-32 pb-20 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 text-center">
          Entrena con seguridad en cada etapa de tu embarazo.
        </h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Tu cuerpo está cambiando, y tu entrenamiento también debe hacerlo.
        </p>

        <div className="grid grid-cols-3 gap-4 mb-12">
          {photos.map((photo, i) => (
            <img key={i} src={photo} alt={`Embarazo Saludable foto ${i + 1}`} className="rounded-xl w-full object-cover aspect-[3/4]" />
          ))}
        </div>

        <div className="mb-12">
          <h2 className="font-display font-bold text-xl text-foreground mb-3">Lo que te ofrece este programa</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Embarazo Saludable es un programa diseñado para que te mantengas activa con confianza, sabiendo que cada ejercicio está adaptado a tu trimestre, tu nivel y tus sensaciones.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            No se trata solo de "no dejar de moverte", sino de entrenar con sentido: gestionar molestias, fortalecer lo que realmente necesitas y preparar tu cuerpo para el parto y la recuperación posterior.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Entrenas con estructura, acompañamiento y la tranquilidad de estar haciendo lo adecuado en cada momento.
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
            <li>✔️ Estás embarazada y quieres mantenerte activa sin miedo a hacerlo mal.</li>
            <li>✔️ Te preocupa cómo entrenar de forma segura en cada trimestre.</li>
            <li>✔️ Quieres preparar tu cuerpo para el parto desde la fuerza y el control.</li>
            <li>✔️ Buscas acompañamiento profesional y seguimiento real.</li>
            <li>✔️ No quieres dejar tu salud en manos de entrenamientos genéricos.</li>
          </ul>
          <p className="text-muted-foreground text-sm leading-relaxed mt-4 italic">
            Si quieres vivir tu embarazo sintiéndote fuerte y acompañada, este programa es para ti.
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

export default EmbarazoSaludable;
