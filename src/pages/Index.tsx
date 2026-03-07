import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Programs from "@/components/Programs";
import Steps from "@/components/Steps";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Entrenadora Personal para Mujeres"
        description="Entrenadora personal experta en fuerza para mujeres. Entrenamientos y planes de nutrición online personalizados a tu medida."
      />
      <Navbar />
      <Hero />
      <AboutMe />
      <Programs />
      <Steps />
      <Testimonials />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
