import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactForm from "@/components/ContactForm";

const Contacto = () => {
  return (
    <div className="min-h-screen bg-background font-body">
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
