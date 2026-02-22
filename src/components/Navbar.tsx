import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/navbar-logo.png";

const programs = [
  { label: "Mujer Fit", href: "#mujer-fit", id: "mujer-fit" },
  { label: "Embarazo Saludable", href: "#embarazo-saludable", id: "embarazo-saludable" },
  { label: "Recuperación Posparto", href: "#recuperacion-posparto", id: "recuperacion-posparto" },
];

const openProgramDetail = (id: string) => {
  window.dispatchEvent(new CustomEvent("open-program-detail", { detail: id }));
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Logo VitalFem - Entrenadora Personal para Mujeres" className="h-11 object-contain" />
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <a href="#quien-soy" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
              Quién soy
            </a>
          </li>
          <li className="relative group">
            <button className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors flex items-center gap-1">
              Programas <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <ul className="absolute top-full left-0 mt-2 w-52 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
              {programs.map((p) => (
                <li key={p.href}>
                  <button onClick={() => openProgramDetail(p.id)} className="block w-full text-left px-4 py-2 text-sm text-foreground/70 hover:text-primary hover:bg-secondary/50 transition-colors">
                    {p.label}
                  </button>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <a href="#contacto" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
              Contacto
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground" aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border animate-fade-in">
          <ul className="flex flex-col items-center gap-4 py-6">
            <li>
              <a href="#quien-soy" onClick={() => setOpen(false)} className="text-base font-medium text-foreground/70 hover:text-primary transition-colors">
                Quién soy
              </a>
            </li>
            <li className="flex flex-col items-center gap-2">
              <button onClick={() => setProgramsOpen(!programsOpen)} className="text-base font-medium text-foreground/70 hover:text-primary transition-colors flex items-center gap-1">
                Programas <ChevronDown className={`w-4 h-4 transition-transform ${programsOpen ? "rotate-180" : ""}`} />
              </button>
              {programsOpen && (
                <ul className="flex flex-col items-center gap-2 mt-1">
                  {programs.map((p) => (
                    <li key={p.href}>
                      <button onClick={() => { openProgramDetail(p.id); setOpen(false); setProgramsOpen(false); }} className="text-sm text-foreground/60 hover:text-primary transition-colors">
                        {p.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <a href="#contacto" onClick={() => setOpen(false)} className="text-base font-medium text-foreground/70 hover:text-primary transition-colors">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
