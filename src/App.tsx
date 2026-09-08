import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import type { ReactNode } from "react";
import Index from "./pages/Index";
import QuienSoy from "./pages/QuienSoy";
import MujerFit from "./pages/MujerFit";
import EmbarazoSaludable from "./pages/EmbarazoSaludable";
import RecuperacionPosparto from "./pages/RecuperacionPosparto";
import Contacto from "./pages/Contacto";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad";
import AvisoLegal from "./pages/AvisoLegal";
import PoliticaCookies from "./pages/PoliticaCookies";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/quien-soy" element={<QuienSoy />} />
    <Route path="/mujer-fit" element={<MujerFit />} />
    <Route path="/embarazo-saludable" element={<EmbarazoSaludable />} />
    <Route path="/recuperacion-posparto" element={<RecuperacionPosparto />} />
    <Route path="/contacto" element={<Contacto />} />
    <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
    <Route path="/aviso-legal" element={<AvisoLegal />} />
    <Route path="/politica-cookies" element={<PoliticaCookies />} />
    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export const AppProviders = ({ children, helmetContext }: { children: ReactNode; helmetContext?: Record<string, unknown> }) => (
  <HelmetProvider context={helmetContext}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {children}
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

const App = () => (
  <AppProviders>
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AppRoutes />
    </BrowserRouter>
  </AppProviders>
);

export default App;
