import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Presentaciones profesionales desde tu contenido | Código Nexo',
  description: 'Ordenamos tus ideas y diseñamos tu presentación. Hasta 12 diapositivas, PowerPoint editable y PDF, con una ronda de ajustes. Paquete inicial de $1,500 MXN.',
  openGraph: { title: 'Tu presentación, lista para mostrar | Código Nexo', description: 'Hasta 12 diapositivas, PowerPoint editable y PDF. Paquete de $1,500 MXN.', url: 'https://codigonexo.mx/presentaciones', images: [{ url: '/muestras/presentaciones/slide-1.png', width: 1280, height: 720, alt: 'Ejemplo ficticio de presentación de capacitación' }] },
  alternates: { canonical: '/presentaciones' },
};
const whatsapp = 'https://wa.me/525529058845?text=' + encodeURIComponent('Hola, vi el paquete de presentaciones de Código Nexo. Necesito una presentación para: ___. Tengo este material: ___. Mi fecha objetivo es: ___. ¿Podemos revisar el alcance?');
const steps = [
  ['Nos cuentas qué necesitas', 'Comparte el objetivo, la audiencia y la fecha. Revisamos tu material y confirmamos el alcance antes de empezar.'],
  ['Preparamos tu presentación', 'Ordenamos el contenido y diseñamos las diapositivas. La primera versión llega en tres días hábiles desde la recepción del material completo y la confirmación del proyecto.'],
  ['Afinamos y entregamos', 'Incluimos una ronda de cambios sobre el contenido acordado. Recibes el PowerPoint editable y un PDF listo para compartir.'],
];
export default function PresentacionesPage() {
  return <main className={styles.page}>
    <section className={styles.hero}>
      <div>
        <p className={styles.eyebrow}>PARA PROFESIONALES INDEPENDIENTES</p>
        <h1>Tu próxima presentación,<br /><em>lista para mostrar.</em></h1>
        <p className={styles.intro}>Tú conoces tu trabajo. Nosotros organizamos tus ideas y las convertimos en una presentación clara, cuidada y editable.</p>
        <p className={styles.use}>Para ofrecer tus servicios, presentar un proyecto o impartir una capacitación.</p>
        <a className={styles.primary} href={whatsapp} target="_blank" rel="noopener noreferrer">Quiero preparar mi presentación ↗</a>
        <a className={styles.emailTop} href="mailto:codigonexo.rgz@gmail.com?subject=Mi%20presentaci%C3%B3n&body=Objetivo%3A%20%0AAudiencia%3A%20%0AFecha%20deseada%3A%20%0AMaterial%20disponible%3A%20">Prefiero consultar por correo</a>
        <p className={styles.trustLine}>Atención directa con Ricardo · México · Servicio en español</p>
        <a className={styles.secondary} href="#muestra">Ver una muestra ↓</a>
      </div>
      <aside className={styles.offer} aria-label="Paquete inicial">
        <p>PAQUETE INICIAL</p><strong>$1,500 <span>MXN</span></strong>
        <p>Precio total del paquete descrito.</p>
        <ul><li>Hasta 12 diapositivas</li><li>Organización y mejora de redacción</li><li>Diseño a partir de tu contenido</li><li>PowerPoint editable y PDF</li><li>Una ronda de ajustes</li></ul>
        <p className={styles.note}>Revisamos tus archivos antes de confirmar el proyecto. Trabajo adicional se cotiza por separado.</p>
      </aside>
    </section>
    <section aria-labelledby="para-quien">
      <p className={styles.eyebrow}>TAMBIÉN PARA TU PROYECTO PERSONAL</p>
      <h2 id="para-quien">No necesitas tener una empresa</h2>
      <div className={styles.audiences}>
        <article><h3>Ofrece tus servicios</h3><p>Convierte tus notas en una propuesta clara para tus próximos clientes, como profesional independiente o emprendedor.</p></article>
        <article><h3>Prepara tu taller</h3><p>Organiza tu material para una clase, una capacitación o una charla que tú vas a impartir.</p></article>
        <article><h3>Explica tu proyecto</h3><p>Presenta una idea propia, un portafolio o los avances de tu trabajo con una estructura fácil de seguir.</p></article>
      </div>
    </section>
    <section className={styles.sample} id="muestra">
      <p className={styles.eyebrow}>UNA IDEA, MEJOR PRESENTADA</p>
      <h2>Así podría verse tu contenido</h2>
      <p>Ejemplo ficticio de una propuesta de capacitación. Muestra de diseño, sin relación con un cliente real.</p>
      <div className={styles.previewGrid}>
        <figure><Image src="/muestras/presentaciones/slide-1.png" alt="Portada: Conversaciones que aclaran el siguiente paso" width={1280} height={720} /><figcaption>Un título que explica la propuesta.</figcaption></figure>
        <figure><Image src="/muestras/presentaciones/slide-3.png" alt="Programa del taller organizado en tres temas" width={1280} height={720} /><figcaption>Contenido organizado para seguir la explicación.</figcaption></figure>
      </div>
      <div className={styles.downloads}><a href="/muestras/presentaciones/muestra-capacitacion.pdf" target="_blank" rel="noopener noreferrer">Ver muestra completa en PDF ↗</a><a href="/muestras/presentaciones/muestra-capacitacion.pptx" download>Descargar PowerPoint editable ↓</a></div>
    </section>
    <section className={styles.process}>
      <h2>Un proceso sencillo</h2>
      <div className={styles.steps}>{steps.map(([title,description],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
    </section>
    <section className={styles.faq}>
      <h2>Antes de empezar</h2>
      <details><summary>¿Qué material necesito?</summary><p>Tus textos o notas, el objetivo de la presentación y a quién va dirigida. También tu logotipo, colores e imágenes si quieres que los usemos. El paquete cubre hasta 2,000 palabras de material base en español.</p></details>
      <details><summary>¿Qué incluye la ronda de ajustes?</summary><p>Una lista consolidada de correcciones de texto o diseño sobre el alcance acordado. Nuevos temas, diapositivas adicionales y un cambio completo de dirección se cotizan antes de trabajarlos.</p></details>
      <details><summary>¿Pueden investigar o escribir todo desde cero?</summary><p>Este paquete parte de tu material. La investigación, traducción, animaciones y creación de contenido desde cero requieren una cotización independiente.</p></details>
      <details><summary>¿Cómo revisan mi presentación?</summary><p>Revisamos redacción, consistencia visual y legibilidad antes de entregar. Tú confirmas los datos de tu actividad y recibes una ronda de ajustes dentro del alcance. Para cotizar, comparte una versión sin información confidencial.</p></details>
      <details><summary>¿Cómo contrato?</summary><p>Escríbenos por WhatsApp o correo. Confirmamos el material, el precio y las condiciones de pago por escrito antes de comenzar. Contactarnos no genera ningún cobro.</p></details>
    </section>
    <section className={styles.closing}><p className={styles.eyebrow}>EMPECEMOS CON TU IDEA</p><h2>¿Qué necesitas presentar?</h2><p>Cuéntanos para quién es y cuándo la necesitas.</p><a className={styles.primary} href={whatsapp} target="_blank" rel="noopener noreferrer">Consultar por WhatsApp ↗</a><a className={styles.email} href="mailto:codigonexo.rgz@gmail.com?subject=Consulta%20sobre%20presentaciones">codigonexo.rgz@gmail.com</a></section>
  </main>;
}
