import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ClipboardList, Heart, Salad, MessageCircle, Video as VideoIcon, Stethoscope, Smartphone } from "lucide-react";
import foto8 from "@/assets/foto-8.JPEG";
import foto9 from "@/assets/foto-9.png";
import pospartoNew from "@/assets/posparto-new.jpeg";

const features = [
  { icon: ClipboardList, title: "Planificación Personalizada", text: "Rutinas diseñadas según tu punto de partida, tus sensaciones, el material del que dispongas y los objetivos específicos para tu recuperación." },
  { icon: Heart, title: "Enfoque en Salud y Fuerza", text: "Recupera tu forma física, movilidad y confianza con un método basado en la ciencia y la técnica correcta, tratando con especial cuidado el suelo pélvico y la faja abdominal." },
  { icon: Salad, title: "Nutrición y Hábitos", text: "Dieta personalizada junto a herramientas para que aprendas a gestionar tu alimentación en esta etapa, buscando educarte para que lleves un estilo de vida saludable que se mantenga en el tiempo." },
  { icon: MessageCircle, title: "Seguimiento por WhatsApp", text: "Estaremos en continua comunicación para que nunca te sientas sola en el proceso." },
  { icon: VideoIcon, title: "Videollamadas de Control", text: "Cada 3 semanas nos veremos para comentar tus avances, resolver dudas y planificar tus siguientes pasos." },
  { icon: Stethoscope, title: "Red de Salud VitalFem (Fisioterapia)", text: "Soporte de una fisioterapeuta especializada en suelo pélvico y salud femenina. Valoraciones online personalizadas. Servicio premium disponible bajo consulta." },
  { icon: Smartphone, title: "App VitalFem", text: "Todo tu progreso, vídeos de ejercicios y contenido exclusivo para tu etapa, siempre a mano en el mismo lugar." },
];

const photos = [foto8, foto9, pospartoNew];

const RecuperacionPosparto = () => (
  <div className="min-h-screen bg-background font-body">
    <Navbar />
    <section className="pt-32 pb-20 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 text-center">
          Recuperación Posparto
        </h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Un acompañamiento cercano diseñado para trabajar la funcionalidad del abdomen y el suelo pélvico de forma respetuosa con tu cuerpo. Recupera tu fuerza, movilidad y confianza de forma progresiva.
        </p>

        <div className="grid grid-cols-3 gap-4 mb-12">
          {photos.map((photo, i) => (
            <img key={i} src={photo} alt={`Recuperación Posparto foto ${i + 1}`} className="rounded-xl w-full object-cover aspect-[3/4]" />
          ))}
        </div>

        <div className="mb-12">
          <h2 className="font-display font-bold text-xl text-foreground mb-3">Lo que te ofrece este programa</h2>
          <p className="text-muted-foreground leading-relaxed">
            Vuelve a sentirte fuerte y segura. El programa de Recuperación Posparto está diseñado para acompañarte en esta nueva etapa, ofreciéndote una planificación progresiva que respeta los tiempos de tu cuerpo. No solo nos enfocamos en la salud de tu suelo pélvico y abdomen, sino en devolverte la movilidad y la fuerza necesarias para que afrontes tu día a día con máxima vitalidad.
          </p>
        </div>

        <h2 className="font-display font-bold text-xl text-foreground mb-6">¿Qué incluye el programa?</h2>
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
          <p className="text-muted-foreground text-sm leading-relaxed">
            Es el programa ideal si has sido madre recientemente y buscas un acompañamiento cercano para recuperar tu cuerpo de forma segura y guiada, permitiéndote ganar fuerza y movilidad mientras recuperas la confianza en ti misma.
          </p>
        </div>

        <div className="text-center">
          <a href="/#contacto" className="inline-block bg-cta text-cta-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity shadow-lg">
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
