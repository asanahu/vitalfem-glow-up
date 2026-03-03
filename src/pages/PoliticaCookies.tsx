import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PoliticaCookies = () => (
  <>
    <Navbar />
    <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl text-foreground [&_h2]:text-xl [&_h2]:font-display [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-4 [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-4 [&_li]:text-muted-foreground [&_a]:text-primary [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_th]:text-foreground [&_th]:font-bold [&_th]:p-3 [&_th]:text-left [&_td]:text-muted-foreground [&_td]:p-3 [&_table]:w-full [&_table]:border-collapse [&_tr]:border-b [&_tr]:border-border">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">Política de Cookies</h1>
        <p className="text-sm text-muted-foreground mb-8">Última actualización: enero de 2026</p>

        <h2>¿Qué son las cookies?</h2>
        <p>Las cookies son pequeños archivos de texto que se guardan en tu dispositivo cuando visitas una web. Permiten que el sitio recuerde tus preferencias y mejore tu experiencia de navegación.</p>

        <h2>¿Qué cookies utiliza esta web?</h2>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Cookie</th>
                <th>Tipo</th>
                <th>Proveedor</th>
                <th>Finalidad</th>
                <th>Duración</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>__cf_bm</td>
                <td>Técnica</td>
                <td>Cloudflare</td>
                <td>Protección frente a bots y gestión del tráfico</td>
                <td>30 min</td>
              </tr>
              <tr>
                <td>calendly.session</td>
                <td>Funcional</td>
                <td>Calendly</td>
                <td>Gestión de la sesión de reserva de citas</td>
                <td>Sesión</td>
              </tr>
              <tr>
                <td>_ga, _ga_*</td>
                <td>Analítica</td>
                <td>Google Analytics</td>
                <td>Análisis del comportamiento de usuarios en el sitio</td>
                <td>2 años</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Cookies de terceros</h2>
        <p>Esta web integra servicios externos que pueden instalar sus propias cookies:</p>
        <ul>
          <li><strong>Calendly:</strong> para gestionar la reserva de videollamadas. Puedes consultar su política en <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer">calendly.com/privacy</a>.</li>
          <li><strong>Cloudflare:</strong> para seguridad y rendimiento. Más información en <a href="https://www.cloudflare.com/privacypolicy" target="_blank" rel="noopener noreferrer">cloudflare.com/privacypolicy</a>.</li>
        </ul>

        <h2>¿Cómo puedes gestionarlas?</h2>
        <p>Puedes configurar tu navegador para aceptar, rechazar o eliminar cookies cuando quieras. Ten en cuenta que desactivar algunas puede afectar al funcionamiento de la web. Las instrucciones las encontrarás en la sección de privacidad o configuración de tu navegador (Chrome, Firefox, Safari, Edge).</p>

        <h2>¿Tienes dudas?</h2>
        <p>Si tienes cualquier pregunta sobre el uso de cookies en esta web, puedes escribirme a pamela.alarcon@vitalfem.es.</p>
      </div>
    </main>
    <Footer />
  </>
);

export default PoliticaCookies;
