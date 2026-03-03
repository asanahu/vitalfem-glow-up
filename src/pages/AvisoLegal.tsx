import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AvisoLegal = () => (
  <>
    <Navbar />
    <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl text-foreground [&_h2]:text-xl [&_h2]:font-display [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-4 [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-4 [&_li]:text-muted-foreground [&_a]:text-primary [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">Aviso Legal</h1>
        <p className="text-sm text-muted-foreground mb-8">Última actualización: enero de 2026</p>

        <h2>Datos identificativos</h2>
        <p>En cumplimiento del artículo 10 de la Ley 34/2002 de Servicios de la Sociedad de la Información (LSSI-CE), te informo de que la titular de esta web es Pamela Soledad Alarcón, con DNI Y2472704B, domiciliada en C/ Marqués de la Cadena 52, Esc. Izq. 7G. Puedes contactar conmigo en pamela.alarcon@vitalfem.es.</p>

        <h2>Condiciones de uso</h2>
        <p>El acceso a www.vitalfem.es implica la aceptación de las condiciones recogidas en este aviso. Si no estás de acuerdo, te pido que no utilices el sitio web. Como usuaria, te comprometes a hacer un uso adecuado de los contenidos y, en particular, a no:</p>
        <ul>
          <li>Utilizar la web con fines ilícitos o contrarios a la buena fe.</li>
          <li>Difundir contenidos que vulneren derechos fundamentales de terceros.</li>
          <li>Realizar acciones que puedan dañar o sobrecargar el sitio.</li>
          <li>Reproducir o distribuir los contenidos sin mi autorización expresa.</li>
        </ul>

        <h2>Propiedad intelectual</h2>
        <p>Todos los contenidos de esta web —textos, fotografías, imágenes, logotipos, diseños y código— son de mi propiedad o cuento con autorización para su uso, y están protegidos por la legislación española e internacional sobre propiedad intelectual. Queda prohibida su reproducción, distribución o comunicación pública sin mi autorización previa y por escrito.</p>

        <h2>Responsabilidad</h2>
        <p>No me responsabilizo de los daños que puedan derivarse del uso de la web, incluyendo fallos técnicos, interrupciones del servicio o la presencia de virus. Los contenidos de esta web tienen carácter informativo. La información sobre entrenamiento y nutrición no sustituye en ningún caso el asesoramiento médico personalizado. Ante cualquier duda sobre tu salud, consulta siempre a un profesional sanitario. Me reservo el derecho a modificar, suspender o interrumpir el acceso a la web sin previo aviso.</p>

        <h2>Enlaces externos</h2>
        <p>Esta web puede contener enlaces a páginas de terceros. No controlo ni me responsabilizo de su contenido ni de sus políticas de privacidad.</p>

        <h2>Legislación aplicable</h2>
        <p>Este aviso legal se rige por la legislación española. Para cualquier controversia, las partes se someten a los Juzgados y Tribunales del domicilio de la titular, salvo que la normativa aplicable establezca otro fuero imperativo.</p>

        <h2>Actualizaciones</h2>
        <p>Me reservo el derecho a modificar este aviso en cualquier momento. La versión actualizada siempre estará disponible en www.vitalfem.es.</p>
      </div>
    </main>
    <Footer />
  </>
);

export default AvisoLegal;
