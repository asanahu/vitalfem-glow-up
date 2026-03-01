import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ClipboardList, Heart, Salad, MessageCircle, Video as VideoIcon, Stethoscope, Smartphone } from "lucide-react";
import embarazo1 from "@/assets/embarazo-1.png";
import embarazo2 from "@/assets/embarazo-2.png";
import embarazo3 from "@/assets/embarazo-3.jpeg";

const features = [
  { icon: ClipboardList, title: "Planificación Personalizada", text: "Rutinas diseñadas según el trimestre en el que te encuentres, tus sensaciones, el material del que dispongas y tus objetivos específicos para esta etapa." },
  { icon: Heart, title: "Enfoque en Salud y Fuerza", text: "Manténte activa y prepara tu cuerpo para el parto con un método basado en la ciencia y la técnica correcta; esto será clave para tu futura recuperación posparto." },
  { icon: Salad, title: "Nutrición y Hábitos", text: "Dieta personalizada junto a herramientas para que aprendas a gestionar los momentos de esta etapa. Buscamos educarte para que lleves una alimentación saludable que se pueda mantener en el tiempo." },
  { icon: MessageCircle, title: "Seguimiento por WhatsApp", text: "Estaremos en continua comunicación para que nunca te sientas sola en el proceso." },
  { icon: VideoIcon, title: "Videollamadas de Control", text: "Cada 3 semanas nos veremos para comentar tus avances, resolver dudas y planificar tus siguientes pasos." },
  { icon: Stethoscope, title: "Red de Salud VitalFem (Fisioterapia)", text: "Soporte de una fisioterapeuta especializada en suelo pélvico y salud femenina. Valoraciones online personalizadas. Servicio premium disponible bajo consulta." },
  { icon: Smartphone, title: "App VitalFem", text: "Todo tu progreso, vídeos de ejercicios y contenido exclusivo para tu etapa, siempre a mano en el mismo lugar." },
];

const photos = [embarazo1, embarazo2, embarazo3];

const EmbarazoSaludable = () => (
  <div className="min-h-screen bg-background font-body">
    <Navbar />
    <section className="pt-32 pb-20 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 text-center">
          Embarazo Saludable
        </h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Entrena segura en cada trimestre con un plan personalizado y ajustado a tus necesidades. Manténte activa, lidiando con posibles molestias y preparando tu cuerpo para el parto y una buena recuperación posparto.
        </p>

        <div className="grid grid-cols-3 gap-4 mb-12">
          {photos.map((photo, i) => (
            <img key={i} src={photo} alt={`Embarazo Saludable foto ${i + 1}`} className="rounded-xl w-full object-cover aspect-[3/4]" />
          ))}
        </div>

        <div className="mb-12">
          <h2 className="font-display font-bold text-xl text-foreground mb-3">Lo que te ofrece este programa</h2>
          <p className="text-muted-foreground leading-relaxed">
            Vive un embarazo consciente, fuerte y seguro. El programa Embarazo Saludable está diseñado para acompañarte en este viaje tan especial, eliminando las dudas sobre qué puedes o no hacer. Adaptamos el entrenamiento de fuerza a los cambios de cada trimestre para que te sientas ágil, reduzcas las molestias comunes, llegues al parto con la mejor preparación física posible y favorezcas tu recuperación posparto.
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
            Es el programa ideal si quieres vivir un embarazo activo y saludable, si buscas la tranquilidad de entrenar sin miedos bajo supervisión profesional y deseas prepararte físicamente para el momento del parto.
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

export default EmbarazoSaludable;
