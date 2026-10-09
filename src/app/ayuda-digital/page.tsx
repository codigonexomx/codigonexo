import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../presentaciones/page.module.css';

export const metadata: Metadata = {
  title: 'Ayuda con documentos, exposiciones y archivos | Código Nexo',
  description: 'Corrección desde $100 MXN, formato de documentos y exposiciones a partir de tu material. Para estudiantes, personas y trabajadores. Precio y alcance antes de empezar.',
  alternates: { canonical: '/ayuda-digital' },
};

const packages = [
  { name: 'Corrige mi texto', price: '$100 MXN', scope: 'Hasta 500 palabras en español, en un archivo editable.', result: 'Ortografía, puntuación y ajustes de claridad sin cambiar tus ideas. Entrega con cambios señalados y versión limpia.', time: '2 días hábiles' },
  { name: 'Dale formato a mi documento', price: '$150 MXN', scope: 'Hasta 3 páginas y 900 palabras, con un máximo de 1 tabla o imagen proporcionada.', result: 'Títulos, márgenes, tipografía y numeración consistentes. Word editable y PDF. Partimos de tu texto terminado.', time: '2 días hábiles' },
  { name: 'Prepara mi exposición', price: '$250 MXN', scope: 'Hasta 6 diapositivas y 800 palabras de contenido proporcionado.', result: 'Orden del contenido, diseño legible y corrección ortográfica. PowerPoint editable y PDF para que presentes tus ideas.', time: '3 días hábiles' },
];
const contact = (service: string) => 'https://wa.me/525529058845?text=' + encodeURIComponent(`Hola, necesito ayuda con: ${service}. Tengo este material: ___. Lo necesito para: ___. ¿Podemos revisar el alcance?`);

export default function AyudaDigitalPage() {
  return <main className={styles.page}>
    <section className={styles.hero}>
      <div>
        <p className={styles.eyebrow}>PERSONAS · ESTUDIANTES · INDEPENDIENTES</p>
        <h1>¿Se te complica?<br /><em>Te ayudamos a dejarlo listo.</em></h1>
        <p className={styles.intro}>Ese documento que se desacomoda, el texto que necesita una revisión o la exposición que todavía no tiene forma. Trabajamos con tu material y te entregamos archivos listos para usar.</p>
        <p className={styles.use}>Puedes delegar un pendiente concreto, aunque sea pequeño. Confirmamos qué haremos, cuánto cuesta y cuándo lo recibirás.</p>
        <a className={styles.primary} href={contact('un pendiente digital')} target="_blank" rel="noopener noreferrer">Cuéntanos qué necesitas resolver ↗</a>
        <a className={styles.emailTop} href="mailto:codigonexo.rgz@gmail.com?subject=Ayuda%20con%20un%20pendiente">Prefiero escribir por correo</a>
        <p className={styles.trustLine}>Atención directa con Ricardo · Servicio en español · Consulta inicial sin costo</p>
      </div>
      <aside className={styles.offer} aria-label="Cómo funciona">
        <p>PENDIENTES PEQUEÑOS, ACUERDOS CLAROS</p>
        <h2>Empieza con lo que ya tienes</h2>
        <ul><li>Nos cuentas qué se te complica.</li><li>Revisamos una muestra de tu material.</li><li>Confirmamos precio, alcance y fecha.</li><li>Recibes el archivo y una revisión incluida.</li></ul>
        <p className={styles.note}>No necesitas saber cómo pedirlo técnicamente. Explícanos qué quieres conseguir.</p>
      </aside>
    </section>
    <section id="paquetes">
      <p className={styles.eyebrow}>PRECIOS DE LANZAMIENTO</p>
      <h2>Elige el pendiente que quieres resolver</h2>
      <p>Precios totales en MXN para el alcance descrito. Cada paquete incluye una ronda de ajustes, solicitada en una sola lista dentro de los 7 días siguientes a la entrega.</p>
      <div className={styles.audiences}>{packages.map(item => <article key={item.name}>
        <h3>{item.name}</h3><p><strong>{item.price}</strong></p><p>{item.scope}</p><p>{item.result}</p><p>Entrega: {item.time} desde la recepción del material completo y la confirmación del proyecto.</p>
        <a href={contact(item.name)} target="_blank" rel="noopener noreferrer">Consultar este paquete ↗</a>
      </article>)}</div>
      <p>Los paquetes parten de contenido que tú proporcionas. Investigación, traducción, referencias bibliográficas, ecuaciones, diagramas nuevos y requisitos editoriales especiales requieren revisión y cotización independiente. Confirmamos cualquier cambio de alcance antes de trabajar.</p>
    </section>
    <section>
      <h2>También resolvemos otros pendientes</h2>
      <div className={styles.audiences}>
        <article><h3>Archivos y hojas de cálculo</h3><p>¿Necesitas ordenar una lista, revisar una fórmula o simplificar un reporte? Envíanos una muestra sin datos confidenciales. Revisamos la dificultad y te damos una cotización.</p></article>
        <article><h3>Estructura y revisión</h3><p>Te ayudamos a ordenar las secciones de tu documento y señalar lo que necesita aclararse. Si tienes instrucciones de entrega, las revisamos contigo para definir el trabajo.</p></article>
        <article><h3>Diseño, web y aplicaciones</h3><p>Seguimos creando piezas gráficas, páginas web y herramientas a la medida. Podemos combinar servicios cuando tu proyecto lo necesite.</p><Link href="/#servicios">Explorar otros servicios →</Link></article>
      </div>
    </section>
    <section className={styles.faq}>
      <h2>Antes de empezar</h2>
      <details><summary>¿Puedo contratar si soy estudiante?</summary><p>Sí. Trabajamos con tu propio contenido: corrección, formato, estructura y diseño de exposiciones. Comparte las instrucciones de tu institución para que el apoyo sea compatible con ellas. La autoría, los argumentos y la explicación de tu trabajo siguen siendo tuyos; no sustituimos exámenes ni inventamos datos o fuentes.</p></details>
      <details><summary>¿Necesito contratar varios servicios?</summary><p>No. Puedes pedir ayuda con un solo pendiente. También podemos cotizar varios juntos después de revisar el material.</p></details>
      <details><summary>¿Qué pasa si mi archivo tiene más páginas o es más complejo?</summary><p>Te indicamos el alcance y el precio antes de empezar. No aplicamos un paquete pequeño a un trabajo que requiera otra solución. Puedes decidir sin compromiso.</p></details>
      <details><summary>¿Qué incluye la revisión?</summary><p>Una ronda de ajustes sobre el material y el objetivo acordados. Agregar contenido nuevo, cambiar de tema o rehacer el proyecto con otras instrucciones se cotiza por separado. Revisamos los archivos antes de entregar y te indicamos cómo abrirlos y utilizarlos.</p></details>
      <details><summary>¿Pueden entregarlo hoy?</summary><p>Consulta disponibilidad antes de contratar. Los tiempos publicados son en días hábiles; cualquier urgencia requiere confirmar viabilidad, precio y horario por escrito.</p></details>
      <details><summary>¿Cómo envío mi material y contrato?</summary><p>Escríbenos por WhatsApp o correo con el tipo de archivo, lo que necesitas y la fecha. Para la primera revisión, comparte una muestra sin datos confidenciales. Confirmamos los archivos necesarios, las condiciones de pago y la entrega antes de comenzar. Contactarnos no genera ningún cobro.</p></details>
    </section>
    <section className={styles.closing}><h2>Cuéntanos qué tienes pendiente</h2><p>No hace falta tener una empresa ni un proyecto grande para pedir ayuda.</p><a className={styles.primary} href={contact('mi archivo o documento')} target="_blank" rel="noopener noreferrer">Consultar mi caso ↗</a><Link className={styles.email} href="/presentaciones">¿Necesitas una presentación más amplia? Ver paquete profesional</Link></section>
  </main>;
}
