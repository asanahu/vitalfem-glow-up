import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle, ArrowLeft, ArrowRight } from "lucide-react";

const TOTAL_STEPS = 5;

const profiles = [
  { id: "activa", label: "Mujer activa", emoji: "💪" },
  { id: "embarazada", label: "Embarazada", emoji: "🤰" },
  { id: "postparto", label: "Postparto", emoji: "🌸" },
];

const objectives = [
  "Ganar fuerza",
  "Mejorar hábitos",
  "Suelo pélvico",
  "Perder grasa",
  "Tonificar",
  "Bienestar general",
];

const ageRanges = ["18–25", "26–35", "36–45", "46–55", "55+"];

const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const timeSlots = ["Mañana (9–12h)", "Mediodía (12–15h)", "Tarde (15–18h)", "Noche (18–21h)"];

const ContactForm = () => {
  const ref = useScrollAnimation();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    profile: "",
    objectives: [] as string[],
    age: "",
    days: [] as string[],
    time: "",
    name: "",
    email: "",
    phone: "",
  });

  const progress = (step / TOTAL_STEPS) * 100;

  const canNext = () => {
    switch (step) {
      case 1: return !!form.profile;
      case 2: return form.objectives.length > 0;
      case 3: return !!form.age;
      case 4: return form.days.length > 0 && !!form.time;
      case 5: return !!form.name && !!form.email;
      default: return false;
    }
  };

  const toggleObjective = (o: string) =>
    setForm((f) => ({
      ...f,
      objectives: f.objectives.includes(o)
        ? f.objectives.filter((x) => x !== o)
        : [...f.objectives, o],
    }));

  const toggleDay = (d: string) =>
    setForm((f) => ({
      ...f,
      days: f.days.includes(d) ? f.days.filter((x) => x !== d) : [...f.days, d],
    }));

  const handleSubmit = () => setSubmitted(true);

  if (submitted) {
    return (
      <section id="contacto" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <CheckCircle className="w-16 h-16 text-cta mx-auto mb-6" />
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
          Empieza aquí
        </h2>
        <p className="text-center text-muted-foreground mb-8 max-w-xl mx-auto">
          Rellena este breve cuestionario y me pondré en contacto contigo
        </p>

        <div className="max-w-lg mx-auto">
          <Progress value={progress} className="mb-8 h-2" />

          <div className="bg-card border border-border rounded-2xl p-8 min-h-[320px] flex flex-col">
            {/* Step 1: Profile */}
            {step === 1 && (
              <div className="flex-1">
                <h3 className="font-display font-bold text-lg text-foreground mb-6">
                  ¿Cuál es tu perfil?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {profiles.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setForm((f) => ({ ...f, profile: p.id }))}
                      className={`p-6 rounded-xl border-2 transition-all text-center hover:shadow-md ${
                        form.profile === p.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/40"
                      }`}
                    >
                      <span className="text-3xl block mb-2">{p.emoji}</span>
                      <span className="text-sm font-medium text-foreground">{p.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Objectives */}
            {step === 2 && (
              <div className="flex-1">
                <h3 className="font-display font-bold text-lg text-foreground mb-6">
                  ¿Cuáles son tus objetivos?
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {objectives.map((o) => (
                    <button
                      key={o}
                      onClick={() => toggleObjective(o)}
                      className={`p-3 rounded-lg border-2 text-sm font-medium transition-all ${
                        form.objectives.includes(o)
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-border text-foreground hover:border-primary/40"
                      }`}
                    >
                      {o}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Age */}
            {step === 3 && (
              <div className="flex-1">
                <h3 className="font-display font-bold text-lg text-foreground mb-6">
                  ¿Cuál es tu franja de edad?
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {ageRanges.map((a) => (
                    <button
                      key={a}
                      onClick={() => setForm((f) => ({ ...f, age: a }))}
                      className={`p-4 rounded-lg border-2 text-sm font-medium transition-all ${
                        form.age === a
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-border text-foreground hover:border-primary/40"
                      }`}
                    >
                      {a}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Availability */}
            {step === 4 && (
              <div className="flex-1">
                <h3 className="font-display font-bold text-lg text-foreground mb-4">
                  ¿Cuándo puedes hacer la videollamada?
                </h3>
                <p className="text-sm text-muted-foreground mb-4">Selecciona los días disponibles:</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {days.map((d) => (
                    <button
                      key={d}
                      onClick={() => toggleDay(d)}
                      className={`px-3 py-2 rounded-lg border text-xs font-medium transition-all ${
                        form.days.includes(d)
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-border text-foreground hover:border-primary/40"
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-3">Franja horaria preferida:</p>
                <div className="grid grid-cols-2 gap-2">
                  {timeSlots.map((t) => (
                    <button
                      key={t}
                      onClick={() => setForm((f) => ({ ...f, time: t }))}
                      className={`p-3 rounded-lg border text-xs font-medium transition-all ${
                        form.time === t
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-border text-foreground hover:border-primary/40"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 5: Contact */}
            {step === 5 && (
              <div className="flex-1">
                <h3 className="font-display font-bold text-lg text-foreground mb-6">
                  Tus datos de contacto
                </h3>
                <div className="space-y-4">
                  <Input
                    placeholder="Nombre completo"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  />
                  <Input
                    type="tel"
                    placeholder="Teléfono (opcional)"
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  />
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              {step > 1 ? (
                <Button variant="ghost" onClick={() => setStep((s) => s - 1)}>
                  <ArrowLeft className="w-4 h-4 mr-1" /> Atrás
                </Button>
              ) : (
                <div />
              )}
              {step < TOTAL_STEPS ? (
                <Button
                  onClick={() => setStep((s) => s + 1)}
                  disabled={!canNext()}
                  className="bg-cta text-cta-foreground hover:bg-cta/90"
                >
                  Siguiente <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!canNext()}
                  className="bg-cta text-cta-foreground hover:bg-cta/90"
                >
                  Enviar
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
