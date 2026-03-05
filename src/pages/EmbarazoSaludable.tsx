import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ClipboardList, Salad, MessageCircle, Video as VideoIcon, Smartphone, Stethoscope } from "lucide-react";
import embarazo1 from "@/assets/embarazo-1.png";
import embarazo2 from "@/assets/embarazo-2.png";
import embarazo3 from "@/assets/embarazo-3.jpeg";

const features = [
  { icon: ClipboardList, title: "Planificación personalizada", text: "Entrenamientos de fuerza, movilidad, abdomen y suelo pélvico adaptados a cada trimestre." },
  { icon: Salad, title: "Nutrición personalizada", text: "Dieta personalizada y herramientas exclusivas para tu bienestar y el de tu bebé." },
  { icon: MessageCircle, title: "Seguimiento continuo por WhatsApp", text: "Contacto directo para que te sientas siempre acompañada y motivada." },
  { icon: VideoIcon, title: "Videollamadas de control", text: "Revisión de tu evolución para ajustar el plan según tus sensaciones y necesidades." },
  { icon: Smartphone, title: "App VitalFem", text: "Tus entrenamientos, progreso y material exclusivo en un mismo lugar." },
  { icon: Stethoscope, title: "Red de salud VitalFem", text: "Valoración online con fisioterapia de suelo pélvico (servicio premium bajo consulta)." },
];

const photos = [embarazo1, embarazo2, embarazo3];

const EmbarazoSaludable = () => (
  <div className="min-h-screen bg-background font-body">
    <Navbar />
    <section className="pt-32 pb-20 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-center text-primary font-display font-bold text-3xl md:text-4xl tracking-wide uppercase mb-3">
          Embarazo Saludable
        </h2>
        <p className="text-lg md:text-xl font-display font-semibold text-foreground mb-4 text-center">
          Entrena con seguridad en cada trimestre de tu embarazo.
        </p>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Tu embarazo es una etapa única, no te limites. Siéntete capaz, empoderada y fuerte.
        </p>

        <div className="grid grid-cols-3 gap-4 mb-12">
          {photos.map((photo, i) => (
            <img key={i} src={photo} alt={`Embarazo Saludable foto ${i + 1}`} className="rounded-xl w-full object-cover aspect-[3/4]" />
          ))}
        </div>

        <div className="mb-12">
          <h2 className="font-display font-bold text-xl text-foreground mb-3">Lo que te ofrece este programa</h2>
          <p className="text-muted-foreground leading-relaxed">
            Embarazo Saludable te permite seguir entrenando fuerza o empezar a hacerlo con total seguridad. Personalizamos cada rutina a tu trimestre y nivel, acompañado de una alimentación adaptada a tu etapa. Combinamos el entrenamiento con ejercicios específicos para que te sientas fuerte, gestiones las posibles molestias y prepares tu cuerpo para el parto y el posparto.
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
            <li>✔️ Quieres mantenerte activa y fuerte, sin miedos sobre lo que puedes hacer o no.</li>
            <li>✔️ Buscas entrenar fuerza de forma segura y estructurada en cada trimestre.</li>
            <li>✔️ Quieres preparar tu cuerpo para el parto y reducir posibles molestias.</li>
            <li>✔️ Necesitas acompañamiento profesional y una guía clara en este proceso.</li>
          </ul>
          <p className="text-muted-foreground text-sm leading-relaxed mt-4 italic">
            Si quieres vivir un embarazo fuerte y acompañada, estás a solo un paso de comenzar.
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
