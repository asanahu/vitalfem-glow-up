import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle, ArrowRight, ArrowLeft, User, Mail, Phone, Dumbbell, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import foto10 from "@/assets/foto-10.JPG";

const twemojiUrl = (code: string) =>
  `https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/${code}.png`;

const programOptions = [
  { value: "Mujer Fit", icon: twemojiUrl("1f3cb-fe0f-200d-2640-fe0f") },
  { value: "Embarazo Saludable", icon: twemojiUrl("1f930") },
  { value: "Recuperación Posparto", icon: twemojiUrl("1f476") },
];

const steps = [
  { label: "Programa", icon: Dumbbell },
  { label: "Datos", icon: User },
  { label: "Agenda", icon: Calendar },
];

const ContactForm = () => {
  const ref = useScrollAnimation();
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [direction, setDirection] = useState(1);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    availability: "",
  });

  const canNext = [
    !!form.program,
    !!form.name && !!form.email,
    true,
  ];

  const next = () => {
    if (step < 2) { setDirection(1); setStep(s => s + 1); }
  };
  const prev = () => {
    if (step > 0) { setDirection(-1); setStep(s => s - 1); }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0 }),
  };

  if (submitted) {
    return (
      <section id="contacto" className="py-20 bg-secondary/30">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.6 }}
          className="container mx-auto px-4 text-center"
        >
          <CheckCircle className="w-16 h-16 text-accent mx-auto mb-6" />
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">
            ¡Gracias, {form.name}!
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            He recibido tu formulario. Me pondré en contacto contigo muy pronto para agendar tu videollamada. ¡Estoy deseando empezar contigo!
          </p>
        </motion.div>
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

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Progress bar */}
            <div className="flex items-center justify-between mb-2">
              {steps.map((s, i) => {
                const Icon = s.icon;
                const active = i <= step;
                return (
                  <div key={i} className="flex items-center flex-1">
                    <div className={`flex flex-col items-center transition-colors duration-300 ${active ? "text-primary" : "text-muted-foreground/40"}`}>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        i < step ? "bg-accent text-primary" :
                        i === step ? "bg-primary text-primary-foreground scale-110 shadow-lg" :
                        "bg-muted text-muted-foreground/40"
                      }`}>
                        {i < step ? <CheckCircle className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                      </div>
                      <span className="text-xs mt-1 font-medium">{s.label}</span>
                    </div>
                    {i < steps.length - 1 && (
                      <div className={`flex-1 h-0.5 mx-2 rounded transition-colors duration-500 ${i < step ? "bg-accent" : "bg-muted"}`} />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Step content */}
            <div className="relative overflow-hidden min-h-[220px]" style={{ minHeight: step === 2 ? 820 : 220 }}>
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={step}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="space-y-5"
                >
                  {step === 0 && (
                    <div>
                      <label className="text-sm font-medium text-foreground mb-3 block">
                        ¿Qué programa te interesa? *
                      </label>
                      <div className="grid gap-3">
                        {programOptions.map((p) => (
                          <motion.button
                            key={p.value}
                            type="button"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setForm(f => ({ ...f, program: p.value }))}
                            className={`flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                              form.program === p.value
                                ? "border-primary bg-primary/5 shadow-md"
                                : "border-border hover:border-accent hover:bg-accent/5"
                            }`}
                          >
                            <img src={p.icon} alt="" className="w-7 h-7" />
                            <span className={`font-medium ${form.program === p.value ? "text-primary" : "text-foreground"}`}>
                              {p.value}
                            </span>
                            {form.program === p.value && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="ml-auto"
                              >
                                <CheckCircle className="w-5 h-5 text-primary" />
                              </motion.div>
                            )}
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 1 && (
                    <>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1.5 flex items-center gap-2">
                          <User className="w-4 h-4 text-accent" /> Nombre completo *
                        </label>
                        <Input
                          placeholder="Tu nombre"
                          value={form.name}
                          onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
                          required
                          className="transition-all focus:scale-[1.01]"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1.5 flex items-center gap-2">
                          <Mail className="w-4 h-4 text-accent" /> Correo electrónico *
                        </label>
                        <Input
                          type="email"
                          placeholder="tu@email.com"
                          value={form.email}
                          onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))}
                          required
                          className="transition-all focus:scale-[1.01]"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1.5 flex items-center gap-2">
                          <Phone className="w-4 h-4 text-accent" /> Teléfono
                        </label>
                        <Input
                          type="tel"
                          placeholder="Tu teléfono"
                          value={form.phone}
                          onChange={(e) => setForm(f => ({ ...f, phone: e.target.value }))}
                          className="transition-all focus:scale-[1.01]"
                        />
                      </div>
                    </>
                  )}

                  {step === 2 && (
                    <div className="space-y-4">
                      <div className="p-3 rounded-xl bg-accent/10 border border-accent/20 flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                        <div className="text-sm">
                          <span className="font-semibold text-foreground">{form.name}</span>
                          <span className="text-muted-foreground"> · {form.email}</span>
                          <span className="text-primary font-medium block">{form.program}</span>
                        </div>
                      </div>

                      <div className="text-center space-y-1">
                        <h3 className="text-lg font-display font-semibold text-foreground flex items-center justify-center gap-2">
                          <Calendar className="w-5 h-5 text-primary" />
                          Elige fecha y hora para tu videollamada
                        </h3>
                        <p className="text-sm text-muted-foreground">Selecciona el horario que mejor te venga (30-40 min)</p>
                      </div>

                      <div className="rounded-2xl overflow-hidden border-2 border-primary/20 shadow-lg bg-white relative">
                        <div className="absolute inset-0 flex items-center justify-center bg-white z-0">
                          <div className="flex flex-col items-center gap-2 text-muted-foreground">
                            <div className="w-8 h-8 border-3 border-primary/30 border-t-primary rounded-full animate-spin" />
                            <span className="text-sm">Cargando calendario...</span>
                          </div>
                        </div>
                        <iframe
                          src="https://calendly.com/pamela-alarcon-vitalfem/nueva-reunion?hide_gdpr_banner=1&hide_landing_page_details=1&background_color=ffffff&text_color=3d3d3d&primary_color=8e7fb3"
                          width="100%"
                          height="660"
                          frameBorder="0"
                          title="Agendar videollamada"
                          className="w-full relative z-10"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation buttons */}
            <div className="flex gap-3">
              {step > 0 && (
                <Button type="button" variant="outline" onClick={prev} className="flex-1 gap-2">
                  <ArrowLeft className="w-4 h-4" /> Atrás
                </Button>
              )}
              {step < 2 && (
                <Button
                  type="button"
                  onClick={next}
                  disabled={!canNext[step]}
                  className="flex-1 bg-cta text-cta-foreground hover:bg-cta/90 gap-2"
                >
                  Siguiente <ArrowRight className="w-4 h-4" />
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
