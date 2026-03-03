import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PoliticaPrivacidad = () => (
  <>
    <Navbar />
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-3xl text-foreground [&_h2]:text-xl [&_h2]:font-display [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-4 [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-4 [&_li]:text-muted-foreground [&_a]:text-primary [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">Política de Privacidad</h1>
        <p className="text-sm text-muted-foreground mb-8">Última actualización: enero de 2026</p>

        <h2>Responsable del tratamiento</h2>
        <p>En cumplimiento del Reglamento (UE) 2016/679 (RGPD) y de la Ley Orgánica 3/2018 de Protección de Datos (LOPDGDD), te informo de que los datos que me facilites serán tratados por Pamela Soledad Alarcón, con DNI Y2472704B, domiciliada en C/ Marqués de la Cadena 52, Esc. Izq. 7G, y con email de contacto pamela.alarcon@vitalfem.es.</p>

        <h2>¿Qué datos recojo?</h2>
        <p>Al contactar conmigo o reservar una videollamada, es posible que me facilites alguno de los siguientes datos:</p>
        <ul>
          <li>Nombre y apellidos</li>
          <li>Correo electrónico y teléfono</li>
          <li>Información sobre tu estado de salud y objetivos de entrenamiento</li>
          <li>Datos de navegación a través de cookies (ver <a href="/politica-cookies">Política de Cookies</a>)</li>
        </ul>

        <h2>¿Para qué los uso?</h2>
        <p>Solo uso tus datos para lo que realmente necesitas:</p>
        <ul>
          <li>Gestionar tu consulta o reserva de videollamada inicial.</li>
          <li>Elaborar y hacer seguimiento de tu plan personalizado de entrenamiento y nutrición.</li>
          <li>Enviarte información sobre mis servicios, únicamente si me das tu consentimiento expreso.</li>
        </ul>

        <h2>¿Cuánto tiempo los conservo?</h2>
        <p>Guardo tus datos mientras dure nuestra relación y, una vez finalizada, durante los plazos que exige la ley (generalmente 5 años para obligaciones contractuales y fiscales).</p>

        <h2>¿Los comparto con alguien?</h2>
        <p>No vendo ni cedo tus datos a terceros. Trabajo con proveedores como Calendly (gestión de citas) y la app de entrenamiento, que tratan tus datos bajo las garantías del RGPD como encargados del tratamiento. Algunos de estos proveedores pueden estar fuera del Espacio Económico Europeo; en esos casos, se garantiza un nivel de protección adecuado mediante los mecanismos reconocidos por el RGPD.</p>

        <h2>¿Cuáles son tus derechos?</h2>
        <p>En cualquier momento puedes acceder a tus datos, rectificarlos, solicitar que los eliminemos, pedir que limitemos su uso, solicitar una copia en formato portable u oponerte a su tratamiento. También puedes retirar tu consentimiento en cualquier momento sin que ello afecte al uso previo que hayamos hecho de ellos.</p>
        <p>Para ejercer cualquiera de estos derechos, escríbeme a pamela.alarcon@vitalfem.es indicando tu nombre y lo que necesitas. Si no quedas satisfecha, puedes presentar una reclamación ante la Agencia Española de Protección de Datos en <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>.</p>

        <h2>Seguridad</h2>
        <p>Aplico medidas técnicas y organizativas para proteger tus datos frente a accesos no autorizados o pérdidas accidentales.</p>

        <h2>Actualizaciones</h2>
        <p>Esta política puede actualizarse en cualquier momento. Siempre encontrarás la versión vigente con su fecha en www.vitalfem.es.</p>
      </div>
    </main>
    <Footer />
  </>
);

export default PoliticaPrivacidad;
