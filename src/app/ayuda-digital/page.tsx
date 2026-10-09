import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../presentaciones/page.module.css';

export const metadata: Metadata = {
  title: 'Documentos, diseño, páginas web y apps sencillas | Código Nexo',
  description: 'Resuelve tus pendientes: documentos desde $100 MXN, web de presentación por $1,200 y app personal de organización por $1,800. Consulta alcances y entregas.',
  alternates: { canonical: '/ayuda-digital' },
};

const packages = [
  { name: 'Corrige mi texto', price: '$100 MXN', scope: 'Hasta 500 palabras en español, en un archivo editable.', result: 'Ortografía, puntuación y ajustes de claridad sin cambiar tus ideas. Entrega con cambios señalados y versión limpia.', time: '2 días hábiles' },
  { name: 'Dale formato a mi documento', price: '$150 MXN', scope: 'Hasta 3 páginas y 900 palabras, con un máximo de 1 tabla o imagen proporcionada.', result: 'Títulos, márgenes, tipografía y numeración consistentes. Word editable y PDF. Partimos de tu texto terminado.', time: '2 días hábiles' },
  { name: 'Prepara mi exposición', price: '$250 MXN', scope: 'Hasta 6 diapositivas y 800 palabras de contenido proporcionado.', result: 'Orden del contenido, diseño legible y corrección ortográfica. PowerPoint editable y PDF para que presentes tus ideas.', time: '3 días hábiles' },
];
const creativePackages = [
  { name: 'Ordena mi CV', price: '$200 MXN', scope: 'CV existente de hasta 2 páginas y 900 palabras.', result: 'Corrección, orden y formato legible. Word y PDF. Trabajamos con tu experiencia real y tus datos; la entrega no garantiza una contratación.', time: '2 días hábiles' },
  { name: 'Dale imagen a mi publicación', price: '$150 MXN por pieza', scope: 'Una imagen estática, un formato, con tu texto final, logotipo y fotografías autorizadas. También 4 piezas por $500 o 8 por $900 MXN.', result: 'Diseños consistentes para explicar tu servicio o anunciar una actividad. Entrega PNG o JPG; no incluye publicar, administrar redes ni campañas.', time: '2 días hábiles por pieza; 3 días para 4 y 5 días para 8' },
  { name: 'Ordena mi hoja de cálculo', price: '$250 MXN', scope: 'Una hoja de hasta 200 filas y 10 columnas, con hasta 3 fórmulas sencillas.', result: 'Orden, filtros, formato y fórmulas de sumas, porcentajes o totales. Archivo Excel revisado con una muestra. Macros, integraciones y recuperación de datos se cotizan aparte.', time: '2 días hábiles' },
];
const webPackages = [
  { name: 'Mi página para darme a conocer', price: '$1,200 MXN', scope: 'Una página de hasta 5 secciones, en español, adaptada a celular, con tu texto, logo y hasta 8 imágenes autorizadas.', result: 'Presentación de tus servicios, botones a WhatsApp, correo y redes. Archivos del sitio y una publicación en alojamiento compatible que acordemos contigo. Dominio y alojamiento se pagan aparte; confirmamos esos costos antes de contratar. Sin tienda, pagos ni panel de administración.', time: '5 días hábiles' },
  { name: 'Mi organizador personal', price: '$1,800 MXN', scope: 'Aplicación sencilla en el navegador para un proceso: tareas, seguimiento de pedidos o cotizaciones. Hasta 3 pantallas y 8 campos por registro.', result: 'Agregar, editar, buscar y marcar estados; respaldo mediante exportación e importación de archivo. Uso individual en un navegador, con datos guardados en ese dispositivo: debes descargar tus respaldos. Incluye código e instrucciones. Sin cuentas, nube compartida, cobros ni publicación en tiendas de apps.', time: '7 días hábiles' },
  { name: 'Una aplicación para mi equipo', price: 'Cotización según funciones', scope: 'Cuando varias personas necesitan compartir clientes, pedidos, inventario o pendientes.', result: 'Primero acordamos el problema y una primera versión concreta. Accesos, almacenamiento compartido, respaldos y costos de operación se detallan en la propuesta. Te mostramos avances y comprobamos los casos de uso antes de entregar.', time: 'Fecha acordada después de revisar el alcance' },
];
const contact = (service: string) => 'https://wa.me/525529058845?text=' + encodeURIComponent(`Hola, necesito ayuda con: ${service}. Tengo este material: ___. Lo necesito para: ___. ¿Podemos revisar el alcance?`);

export default function AyudaDigitalPage() {
  return <main className={styles.page}>
    <section className={styles.hero}>
      <div>
        <p className={styles.eyebrow}>PERSONAS · ESTUDIANTES · NEGOCIOS</p>
        <h1>¿Se te complica?<br /><em>Te ayudamos a dejarlo listo.</em></h1>
        <p className={styles.intro}>Se acerca la entrega, tu documento no queda como quieres o llevas los pendientes entre notas y mensajes. Cuéntame qué está pasando: soy Ricardo y te ayudo a encontrar una solución práctica, desde arreglar un archivo hasta crear tu página o una aplicación sencilla.</p>
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
    <section id="diseno-y-archivos">
      <h2>Para buscar trabajo, comunicarte y poner orden</h2>
      <div className={styles.audiences}>{creativePackages.map(item => <article key={item.name}>
        <h3>{item.name}</h3><p><strong>{item.price}</strong></p><p>{item.scope}</p><p>{item.result}</p><p>Entrega: {item.time}, desde material completo y confirmación.</p>
        <a href={contact(item.name)} target="_blank" rel="noopener noreferrer">Cuéntame qué necesitas ↗</a>
      </article>)}</div>
      <p>Precios totales en MXN. Una ronda de ajustes sobre el contenido acordado, en una sola lista dentro de los 7 días siguientes a la entrega.</p>
    </section>
    <section id="web-y-apps">
      <p className={styles.eyebrow}>TU IDEA, EN UNA SOLUCIÓN CONCRETA</p>
      <h2>Una página para que te conozcan. Una aplicación para organizarte.</h2>
      <p>No necesitas saber de programación. Dime qué repites todos los días, qué se te pierde o qué quieres mostrar. Revisamos juntos qué conviene construir y cuánto costará mantenerlo.</p>
      <div className={styles.audiences}>{webPackages.map(item => <article key={item.name}>
        <h3>{item.name}</h3><p><strong>{item.price}</strong></p><p>{item.scope}</p><p>{item.result}</p><p>Entrega: {item.time}. Los paquetes empiezan al recibir los materiales y confirmar el proyecto.</p>
        <a href={contact(item.name)} target="_blank" rel="noopener noreferrer">Revisemos mi idea ↗</a>
      </article>)}</div>
      <p>Los paquetes de $1,200 y $1,800 MXN son precios totales para el alcance descrito. Incluyen una ronda de ajustes y corrección de fallos del alcance acordado reportados dentro de 15 días de la entrega. Nuevas funciones y mantenimiento continuo se cotizan antes de trabajar.</p>
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
