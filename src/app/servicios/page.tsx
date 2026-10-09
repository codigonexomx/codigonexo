import type { Metadata } from 'next';
import Link from 'next/link';
import type * as LucideIcons from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import PageHero from '@/components/page/PageHero';
import PageSection from '@/components/page/PageSection';
import PageContainer from '@/components/page/PageContainer';
import PageGrid from '@/components/page/PageGrid';
import PageIconCard from '@/components/page/PageIconCard';
import PageCTA from '@/components/page/PageCTA';
import { navigationConfig } from '@/config/navigation';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Servicios digitales para tus pendientes | CódigoNexo',
  description: 'Documentos, presentaciones, diseño, páginas web y herramientas sencillas con alcance y precio claros.',
  alternates: {
    canonical: 'https://codigonexo.mx/servicios',
  },
};

export default function ServiciosPage() {
  return (
    <main>
      <Breadcrumbs />

      <PageHero
        title="Servicios digitales para tus pendientes"
        subtitle="Ayuda con tus archivos, tu presentación y tu presencia en internet. Para personas, estudiantes y negocios."
      />

      <PageSection>
        <PageContainer>
          <PageGrid columns={3}>
            {navigationConfig.servicesIndex.map((service) => (
              <Link key={service.href} href={service.href} className={styles.serviceLink}>
                <PageIconCard
                  icon={service.icon as keyof typeof LucideIcons}
                  title={service.title}
                  text={service.description}
                />
              </Link>
            ))}
          </PageGrid>
        </PageContainer>
      </PageSection>

      <PageSection theme="darker">
        <PageContainer width="narrow">
          <PageCTA
            title="¿Qué necesitas dejar listo?"
            subtitle="Comparte tu material, el resultado que necesitas y la fecha. Confirmaremos el alcance antes de empezar."
            ctaLabel="Consultar mi caso"
            microcopy="Precio, entregables y fecha acordados por escrito."
          />
        </PageContainer>
      </PageSection>
    </main>
  );
}
