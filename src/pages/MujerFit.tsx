import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ClipboardList, Heart, Salad, MessageCircle, Video as VideoIcon, Stethoscope, Smartphone } from "lucide-react";
import foto3 from "@/assets/foto-3.png";
import foto4 from "@/assets/foto-4.png";
import mujerFitNew from "@/assets/mujer-fit-new.png";

const features = [
  { icon: ClipboardList, title: "Planificación Personalizada", text: "Rutinas diseñadas según tu nivel actual, tus objetivos, el material del que dispongas y lo que realmente te gusta. Entrenar no tiene que resultarte aburrido." },
  { icon: Heart, title: "Enfoque en Salud y Fuerza", text: "Mejora tu composición corporal y gana vitalidad con un método basado en la ciencia y la técnica correcta." },
  { icon: Salad, title: "Nutrición y Hábitos", text: "Dieta personalizada junto a herramientas para que aprendas a gestionar la comida y los antojos, logrando cambios que se mantienen en el tiempo." },
  { icon: MessageCircle, title: "Seguimiento por WhatsApp", text: "Estaremos en continua comunicación para que nunca te sientas sola en el proceso." },
  { icon: VideoIcon, title: "Videollamadas de Control", text: "Cada 3 semanas nos veremos para comentar tus avances, resolver dudas y planificar tus siguientes pasos." },
  { icon: Stethoscope, title: "Red de Salud VitalFem (Fisioterapia)", text: "Soporte de una fisioterapeuta especializada en suelo pélvico y salud femenina. Valoraciones online personalizadas. Servicio premium disponible bajo consulta." },
  { icon: Smartphone, title: "App VitalFem", text: "Todo tu progreso, vídeos de ejercicios y contenido exclusivo para tu etapa, siempre a mano en el mismo lugar." },
];

const photos = [foto3, foto4, mujerFitNew];

const MujerFit = () => (
  <div className="min-h-screen bg-background font-body">
    <Navbar />
    <section className="pt-32 pb-20 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 text-center">
          Mujer Fit
        </h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Mejora tu salud y crea hábitos sostenibles mientras fortaleces tu cuerpo con entrenamientos de fuerza real, totalmente adaptados a tu estilo de vida y a tu punto de partida.
        </p>

        {/* Photos */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {photos.map((photo, i) => (
            <img key={i} src={photo} alt={`Mujer Fit foto ${i + 1}`} className="rounded-xl w-full object-cover aspect-[3/4]" />
          ))}
        </div>

        {/* Intro */}
        <div className="mb-12">
          <h2 className="font-display font-bold text-xl text-foreground mb-3">Lo que te ofrece este programa</h2>
          <p className="text-muted-foreground leading-relaxed">
            Lleva tu entrenamiento al siguiente nivel. En el programa Mujer Fit nos alejamos de las rutinas genéricas. Aquí, el entrenamiento de fuerza y funcional se adapta a ti, tanto si entrenas en casa como en el gimnasio, para que consigas resultados reales sin que el deporte sea una carga en tu día a día.
          </p>
        </div>

        {/* Features */}
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

        {/* For you */}
        <div className="bg-secondary/50 rounded-xl p-6 mb-8">
          <h2 className="font-display font-bold text-foreground mb-2">¿Es para ti?</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Es el programa ideal si buscas dejar atrás la improvisación, quieres sentirte fuerte y ágil, y necesitas un plan profesional que respete tus tiempos y tu ritmo de vida actual.
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

export default MujerFit;
