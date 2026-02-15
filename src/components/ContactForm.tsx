import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle } from "lucide-react";
import foto10 from "@/assets/foto-10.JPG";

const programOptions = ["Mujer Fit", "Embarazo Saludable", "Recuperación Posparto"];

const ContactForm = () => {
  const ref = useScrollAnimation();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    availability: "",
  });

  const canSubmit = !!form.name && !!form.email && !!form.program;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contacto" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <CheckCircle className="w-16 h-16 text-accent mx-auto mb-6" />
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">
            ¡Gracias, {form.name}!
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            He recibido tu formulario. Me pondré en contacto contigo muy pronto para agendar tu videollamada. ¡Estoy deseando empezar contigo!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="py-20 bg-secondary/30">
      <div ref={ref} className="container mx-auto px-4 opacity-0">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4">
          Contacto
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
          Rellena el formulario y me pondré en contacto contigo
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto items-center">
          <img
            src={foto10}
            alt="Pamela Alarcón"
            className="rounded-2xl shadow-xl w-full object-cover aspect-[3/4] hidden md:block"
          />

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Nombre completo *</label>
              <Input
                placeholder="Tu nombre"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Correo electrónico *</label>
              <Input
                type="email"
                placeholder="tu@email.com"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Teléfono</label>
              <Input
                type="tel"
                placeholder="Tu teléfono"
                value={form.phone}
                onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Programa que te interesa *</label>
              <select
                value={form.program}
                onChange={(e) => setForm((f) => ({ ...f, program: e.target.value }))}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                required
              >
                <option value="">Selecciona un programa</option>
                {programOptions.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Disponibilidad para videollamada (30-40 min)</label>
              <Input
                placeholder="Ej: Lunes y miércoles por la tarde"
                value={form.availability}
                onChange={(e) => setForm((f) => ({ ...f, availability: e.target.value }))}
              />
            </div>

            <Button
              type="submit"
              disabled={!canSubmit}
              className="w-full bg-cta text-cta-foreground hover:bg-cta/90 text-base py-3"
            >
              Enviar
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
