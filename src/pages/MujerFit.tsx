import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ClipboardList, Heart, Salad, MessageCircle, Video as VideoIcon, Stethoscope, Smartphone } from "lucide-react";
import foto3 from "@/assets/foto-3.png";
import foto4 from "@/assets/foto-4.png";
import mujerFitNew from "@/assets/mujer-fit-new.png";

const features = [
  { icon: ClipboardList, title: "Planificación personalizada", text: "Entrenamientos diseñados según tu punto de partida, tus objetivos y el material del que dispones." },
  { icon: Salad, title: "Nutrición personalizada", text: "Dieta personalizada junto a herramientas que te ayudarán a gestionar tu alimentación de forma práctica y sostenible." },
  { icon: MessageCircle, title: "Seguimiento continuo por WhatsApp", text: "Contacto directo para resolver dudas y ajustar el plan cuando sea necesario." },
  { icon: VideoIcon, title: "Videollamadas de control", text: "Revisión de avances, ajustes y planificación de los siguientes pasos." },
  { icon: Smartphone, title: "App VitalFem", text: "Todos tus entrenamientos, procesos y material exclusivo en un mismo lugar." },
  { icon: Stethoscope, title: "Red de salud VitalFem", text: "Acceso a valoración online de fisioterapia especializada en suelo pélvico y salud femenina (servicio premium bajo consulta)." },
];

const photos = [foto3, foto4, mujerFitNew];

const MujerFit = () => (
  <div className="min-h-screen bg-background font-body">
    <Navbar />
    <section className="pt-32 pb-20 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-4xl">
         <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 text-center">
           Entrena con estructura. Consigue resultados reales.
         </h1>
         <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
           Si quieres dejar de improvisar y empezar a entrenar con un plan claro, este programa es para ti.
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
            <p className="text-muted-foreground leading-relaxed mb-4">
              Mujer Fit es un servicio de entrenamiento de fuerza totalmente personalizado, adaptado a tu nivel, disponibilidad y estilo de vida. Ya sea en casa o en el gimnasio, tu planificación se adapta a ti, no tú al plan.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Aquí no hacemos rutinas genéricas. Entrenas con criterio y seguimiento para un objetivo claro: sentirte más fuerte, más ágil y con más energía.
            </p>
         </div>

         {/* Features */}
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

         {/* For you */}
         <div className="bg-secondary/50 rounded-xl p-6 mb-8">
           <h2 className="font-display font-bold text-foreground mb-2">¿Es para ti?</h2>
           <p className="text-muted-foreground text-sm leading-relaxed mb-4">
             Este programa es para ti si…
           </p>
           <ul className="space-y-2 text-muted-foreground text-sm leading-relaxed">
              <li>✔️ Estás cansada de improvisar y quieres un plan claro que te diga por dónde empezar.</li>
              <li>✔️ Quieres ganar fuerza y mejorar tus hábitos de una manera sostenible.</li>
              <li>✔️ Buscas resultados reales, pero sin dietas extremas ni entrenamientos imposibles.</li>
              <li>✔️ Necesitas estructura, seguimiento y a alguien que te guíe durante el proceso.</li>
              <li>✔️ Quieres sentirte más segura, con más energía y mejorar tus hábitos.</li>
            </ul>
            <p className="text-muted-foreground text-sm leading-relaxed mt-4 italic">
              Si te has identificado con alguno de estos puntos, estás a solo un paso de comenzar.
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

export default MujerFit;
