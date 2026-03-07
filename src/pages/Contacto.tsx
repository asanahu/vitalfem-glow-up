import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactForm from "@/components/ContactForm";
import SEO from "@/components/SEO";

const Contacto = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <SEO
        title="Contacto - VitalFem"
        description="Reserva tu cita o videollamada de valoración gratuita con Pamela Alarcón. Empieza tu cambio con VitalFem."
        url="https://www.vitalfem.es/contacto"
      />
      <Navbar />
      <div className="pt-16">
        <ContactForm />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contacto;
