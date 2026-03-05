import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ClipboardList, Salad, MessageCircle, Video as VideoIcon, Smartphone, Stethoscope } from "lucide-react";
import foto8 from "@/assets/foto-8.JPEG";
import foto9 from "@/assets/foto-9.png";
import pospartoNew from "@/assets/posparto-new.jpeg";

const features = [
  { icon: ClipboardList, title: "Planificación personalizada", text: "Entrenamiento enfocado en la recuperación funcional de abdomen y suelo pélvico para poder introducir cargas con seguridad." },
  { icon: Salad, title: "Nutrición personalizada", text: "Dieta personalizada y pautas enfocadas en tu recuperación (adaptadas a si estás en periodo de lactancia o no)." },
  { icon: MessageCircle, title: "Seguimiento continuo por WhatsApp", text: "Contacto directo para resolver dudas y que te sientas acompañada en este camino." },
  { icon: VideoIcon, title: "Videollamadas de control", text: "Revisión de tu progreso y ajustes de los siguientes pasos." },
  { icon: Smartphone, title: "App VitalFem", text: "Tus entrenamientos, progresos y contenido exclusivo en un mismo lugar." },
  { icon: Stethoscope, title: "Red de salud VitalFem", text: "Acceso a valoración online de fisioterapia especializada en salud femenina (servicio premium bajo consulta)." },
];

const photos = [foto8, foto9, pospartoNew];

const RecuperacionPosparto = () => (
  <div className="min-h-screen bg-background font-body">
    <Navbar />
    <section className="pt-32 pb-20 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <p className="text-center text-primary font-display font-semibold text-sm tracking-widest uppercase mb-3">
          Recuperación Posparto
        </p>
        <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 text-center">
          Recupera tu fuerza y bienestar tras el parto.
        </h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Porque tú también importas, es momento de cuidarte.
        </p>

        <div className="grid grid-cols-3 gap-4 mb-12">
          {photos.map((photo, i) => (
            <img key={i} src={photo} alt={`Recuperación Posparto foto ${i + 1}`} className="rounded-xl w-full object-cover aspect-[3/4]" />
          ))}
        </div>

        <div className="mb-12">
          <h2 className="font-display font-bold text-xl text-foreground mb-3">Lo que te ofrece este programa</h2>
          <p className="text-muted-foreground leading-relaxed">
            Recuperación Posparto es un programa integral de entrenamiento de fuerza y nutrición diseñado para ayudarte a volver a entrenar de forma progresiva y respetuosa. Personalizamos cada etapa de tu recuperación, trabajando la funcionalidad del abdomen y el suelo pélvico, además de recuperar la movilidad y la fuerza necesarias para que afrontes tu día a día con máxima energía.
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
            <li>✔️ Has dado a luz y quieres volver a entrenar de forma segura y sin miedos.</li>
            <li>✔️ Sientes debilidad en abdomen o suelo pélvico y quieres trabajarlo correctamente.</li>
            <li>✔️ Quieres recuperar tu fuerza y movilidad de forma progresiva.</li>
            <li>✔️ Buscas sentirte fuerte por ti y por tu bebé.</li>
          </ul>
          <p className="text-muted-foreground text-sm leading-relaxed mt-4 italic">
            Si quieres volver a entrenar con confianza, estás a solo un paso.
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
