import type { Metadata } from 'next';
import Link from 'next/link';
import PageContainer from '@/components/page/PageContainer';
import PageFeatureGrid from '@/components/page/PageFeatureGrid';
import PageGrid from '@/components/page/PageGrid';
import PageIconCard from '@/components/page/PageIconCard';
import PageSection from '@/components/page/PageSection';
import HomeHero from '@/components/home-modern/HomeHero';
import ProcessCards from '@/components/home-modern/ProcessCards';
import PortfolioPreviewGrid from '@/components/home-modern/PortfolioPreviewGrid';
import AboutCompact from '@/components/home-modern/AboutCompact';
import ContactSection from '@/components/home-modern/ContactSection';
import FloatingActions from '@/components/home-modern/FloatingActions';
import styles from './home.module.css';

export const metadata: Metadata = {
  title: 'Código Nexo | Soluciones digitales para estudiar, trabajar y crear',
  description: 'Corrección, formato, presentaciones y ayuda con archivos para estudiantes, personas e independientes. También diseño gráfico, páginas web y aplicaciones.',
  alternates: {
    canonical: 'https://codigonexo.mx/',
  },
  openGraph: {
    title: 'Código Nexo | Soluciones digitales para estudiar, trabajar y crear',
    description: 'Soluciones digitales para estudiar, trabajar y crear para dar forma a tu proyecto digital.',
    url: 'https://codigonexo.mx/',
    siteName: 'Código Nexo',
    type: 'website',
    images: [
      {
        url: 'https://codigonexo.mx/assets/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Código Nexo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Código Nexo | Soluciones digitales para estudiar, trabajar y crear',
    description: 'Soluciones digitales para estudiar, trabajar y crear para dar forma a tu proyecto digital.',
    images: ['https://codigonexo.mx/assets/images/og-image.jpg'],
  },
};

const references = ['Su Voz a Diario', 'Club Colombia FC', 'Joga Bonito', 'Esdras'];

const technologies = ['Next.js', 'React', 'Node.js', 'Firebase', 'AWS', 'Python'];

const services = [
  { title: 'Ayuda para estudiar y trabajar', text: 'Corrección, formato de documentos, exposiciones y ayuda con archivos. Paquetes pequeños desde $100 MXN.', href: '/ayuda-digital', icon: 'FileText' },
  { title: 'Diseño gráfico', text: 'Piezas para redes sociales, material promocional y diseño visual para comunicar tus servicios.', href: '#contacto', icon: 'Palette' },
  { title: 'Documentos y redacción', text: 'Redacción, corrección y organización de documentos a partir de tus ideas y materiales, con revisión del contenido.', href: '#contacto', icon: 'FileText' },
  { title: 'Páginas web', text: 'Páginas de servicios, portafolios y sitios adaptados a celulares para que puedan conocerte y contactarte.', href: '/servicios/desarrollo-web', icon: 'Globe' },
  { title: 'Aplicaciones y software', text: 'Herramientas a la medida para organizar información y resolver tareas. Definimos una primera versión con alcance concreto.', href: '/servicios/desarrollo-software', icon: 'Code' },
  { title: 'Presentaciones editables', text: 'Organización de contenido y diseño en PowerPoint. Consulta el paquete de hasta 12 diapositivas y su muestra.', href: '/presentaciones', icon: 'Presentation' },
  { title: 'Automatización e integraciones', text: 'Conecta herramientas y reduce tareas repetitivas mediante flujos acordados para tu proyecto.', href: '/servicios/automatizacion', icon: 'Bot' },
] as const;

const processSteps = [
  { title: 'Tu idea y objetivo', description: 'Nos cuentas qué necesitas, para quién y qué materiales tienes disponibles.' },
  { title: 'Propuesta clara', description: 'Acordamos entregables, precio, fechas y revisiones antes de comenzar.' },
  { title: 'Creación por etapas', description: 'Revisas avances de diseño, contenido o desarrollo para validar el rumbo del proyecto.' },
  { title: 'Revisión y entrega', description: 'Comprobamos los entregables y compartimos los archivos y las indicaciones acordadas.' },
];

const advantages = [
  { title: 'Servicios combinables', description: 'Puedes solicitar una pieza puntual o reunir diseño, documentos y desarrollo en un mismo proyecto.' },
  { title: 'También para estudiantes', description: 'Te ayudamos a corregir, organizar y presentar tu propio material, con servicios de alcance pequeño y precio claro.' },
  { title: 'Comunicación directa', description: 'Conversamos en español y explicamos las decisiones de cada etapa con claridad.' },
  { title: 'Alcance por escrito', description: 'Definimos qué incluye la propuesta y cotizamos por separado las ampliaciones.' },
  { title: 'Experiencia creativa', description: 'Más de 10 años de experiencia en diseño gráfico y PowerPoint.' },
  { title: 'Entregas revisadas', description: 'Comprobamos el formato y el funcionamiento acordado, y te explicamos cómo utilizar tus archivos.' },
];

const portfolioItems = [
  {
    name: 'Integriti Test',
    category: 'Evaluación técnica',
    description: 'Plataforma orientada a gestionar evaluaciones y reportes dentro de procesos de talento.',
  },
  {
    name: 'Plataforma de Capacitación Sector Salud',
    category: 'Capacitación digital',
    description: 'LMS a la medida para organizar contenidos, seguimiento y emisión de certificados.',
  },
];

const aboutHighlights = [
  'Diseño, documentos y desarrollo en un mismo lugar.',
  'Comunicación directa durante el proyecto.',
  'Servicios puntuales o combinados según tu necesidad.',
];

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <HomeHero
          eyebrow="Para personas · Estudiantes · Independientes"
          title="¿Se te complica o no tienes tiempo? Te ayudamos a dejarlo listo."
          description="Corregimos y damos formato a tus documentos, organizamos tus presentaciones y te ayudamos con archivos de trabajo. También creamos diseño gráfico, páginas web y aplicaciones. Cuéntanos qué necesitas resolver."
          primaryCta={{ label: 'Necesito ayuda con un pendiente', href: '#contacto' }}
          secondaryCta={{ label: 'Ver opciones desde $100 MXN', href: '/ayuda-digital' }}
          brands={references}
          technologies={technologies}
        />

        <PageSection id="profesionales">
          <PageContainer>
            <div className={styles.sectionIntro}>
              <p className={styles.eyebrow}>Ayuda para estudiar y trabajar</p>
              <h2 className={styles.title}>Tu pendiente puede empezar a resolverse hoy</h2>
              <p className={styles.description}>Un texto por corregir, un documento que se desacomoda o una exposición por preparar. Tenemos paquetes pequeños desde $100 MXN y revisamos tu material antes de confirmar precio y entrega.</p>
              <div className={styles.sectionAction}><Link href="/ayuda-digital" className={styles.secondaryLink}>Ver paquetes, precios y qué incluyen →</Link></div>
            </div>
          </PageContainer>
        </PageSection>

        <PageSection id="servicios" theme="darker">
          <PageContainer>
            <div className={styles.sectionIntro}>
              <p className={styles.eyebrow}>Servicios</p>
              <h2 className={styles.title}>Lo que necesitas para comunicar, publicar y crear</h2>
              <p className={styles.description}>
                Elige un servicio o reúne varios en una propuesta. Puedes empezar con un pendiente pequeño o solicitar una solución completa. Confirmamos el alcance y el precio antes de trabajar.
              </p>
            </div>
            <PageGrid columns={3}>
              {services.map((service) => (
                <Link key={service.title} href={service.href} className={styles.serviceLink}>
                  <PageIconCard icon={service.icon} title={service.title} text={service.text} />
                </Link>
              ))}
            </PageGrid>
            <div className={styles.sectionAction}>
              <Link href="#contacto" className={styles.secondaryLink}>Solicitar una propuesta</Link>
            </div>
          </PageContainer>
        </PageSection>

        <PageSection id="metodologia">
          <PageContainer>
            <div className={styles.sectionIntroLeft}>
              <p className={styles.eyebrow}>Metodología</p>
              <h2 className={styles.title}>De tu idea a una entrega concreta</h2>
              <p className={styles.description}>
                Trabajamos por etapas para que sepas qué recibirás, cuánto cuesta y cómo avanza tu proyecto.
              </p>
            </div>
            <ProcessCards steps={processSteps} />
          </PageContainer>
        </PageSection>

        <PageSection theme="darker">
          <PageContainer>
            <div className={styles.sectionIntro}>
              <p className={styles.eyebrow}>Ventajas</p>
              <h2 className={styles.title}>Un proyecto a tu medida, con acuerdos claros</h2>
              <p className={styles.description}>
                La propuesta se adapta a lo que necesitas crear, publicar o mejorar.
              </p>
            </div>
            <PageFeatureGrid features={advantages} />
          </PageContainer>
        </PageSection>

        <PageSection id="portafolio">
          <PageContainer>
            <div className={styles.sectionIntro}>
              <p className={styles.eyebrow}>Portafolio</p>
              <h2 className={styles.title}>Proyectos en desarrollo</h2>
              <p className={styles.description}>
                Una selección de iniciativas en las que trabajamos. Consulta su estado y alcance antes de solicitar una solución similar.
              </p>
            </div>
            <PortfolioPreviewGrid items={portfolioItems} />
          </PageContainer>
        </PageSection>

        <PageSection id="nosotros" theme="darker">
          <PageContainer>
            <div className={styles.sectionIntroLeft}>
              <p className={styles.eyebrow}>Nosotros</p>
              <h2 className={styles.title}>Creatividad y tecnología para tu proyecto</h2>
            </div>
            <AboutCompact
              title="Código Nexo reúne diseño gráfico, documentos y desarrollo digital."
              body="Soy Ricardo. Trabajo contigo para convertir tus ideas en piezas visuales, documentos, páginas web y aplicaciones, con comunicación directa y entregables definidos."
              highlights={aboutHighlights}
            />
          </PageContainer>
        </PageSection>

        <PageSection id="contacto">
          <PageContainer>
            <div className={styles.sectionIntro}>
              <p className={styles.eyebrow}>Contacto</p>
              <h2 className={styles.title}>¿Qué necesitas resolver?</h2>
              <p className={styles.description}>
                Cuéntanos qué se te complica, qué material tienes y para cuándo lo necesitas. Revisar tu solicitud no genera ningún cobro.
              </p>
            </div>
            <ContactSection
              email="codigonexo.rgz@gmail.com"
              phoneLabel="+52 55 2905 8845"
              phoneHref="tel:525529058845"
              location="México · Atención internacional"
            />
          </PageContainer>
        </PageSection>
      </main>
      <FloatingActions whatsappHref="https://wa.me/525529058845?text=Hola%20CódigoNexo,%20me%20interesa%20una%20solución%20digital." />
    </>
  );
}
