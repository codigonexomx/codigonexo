import { BookOpen, BriefcaseBusiness, Building2, FileText, Cpu, GitBranch, Globe, Layers, Rocket, SearchCheck, Shield } from "lucide-react";

export const navigationConfig = {
  mainNav: [
    {
      title: "Servicios",
      items: [
        { title: "Ayuda digital desde $100", href: "/ayuda-digital", description: "Un pendiente concreto, una solución clara.", icon: FileText },
        { title: "Presentaciones", href: "/presentaciones", description: "Tu contenido organizado y listo para presentar.", icon: FileText },
        { title: "Diseño, CV y hojas de cálculo", href: "/ayuda-digital#diseno-y-archivos", description: "Para comunicarte, buscar trabajo y poner orden.", icon: FileText },
        { title: "Páginas web y aplicaciones", href: "/ayuda-digital#web-y-apps", description: "Para darte a conocer y organizar tus pendientes.", icon: Globe },
      ]
    },
    {
      title: "Empresa",
      items: [
        { title: "Nosotros", href: "/nosotros", description: "Cómo trabajamos y qué puede esperar un cliente.", icon: Building2 },
        { title: "Metodología", href: "/metodologia", description: "Etapas para descubrir, diseñar, construir y operar.", icon: Layers },
        { title: "Proceso", href: "/proceso", description: "Qué ocurre desde el primer contacto hasta el soporte.", icon: GitBranch },
        { title: "Tecnologías", href: "/tecnologias", description: "Criterios para seleccionar herramientas y stack.", icon: Cpu },
        { title: "Proyectos Destacados", href: "/proyectos", description: "Proyectos reales documentados con contexto técnico.", icon: BriefcaseBusiness },
        { title: "Centro de Conocimiento", href: "/recursos", description: "Guías para decidir con claridad antes de invertir.", icon: BookOpen },
        { title: "Diagnóstico Tecnológico", href: "/diagnostico", description: "Evalúa áreas de mejora en tu plataforma.", icon: SearchCheck },
      ]
    },
    {
      title: "Trust",
      items: [
        { title: "Seguridad & Compliance", href: "/trust/seguridad-compliance", description: "Protección de datos y SLAs.", icon: Shield },
        { title: "Portafolio", href: "/#portafolio", description: "Proyectos y casos presentados en el home.", icon: Rocket },
      ]
    }
  ],
  servicesIndex: [
    { title: "Documentos y exposiciones", href: "/ayuda-digital", description: "Corrección, formato y presentaciones desde tu material. Paquetes desde $100 MXN.", icon: "FileText" },
    { title: "Diseño, CV y hojas de cálculo", href: "/ayuda-digital#diseno-y-archivos", description: "Comunica tus servicios y ordena tus archivos con ayuda concreta.", icon: "Palette" },
    { title: "Páginas web y aplicaciones", href: "/ayuda-digital#web-y-apps", description: "Una página para que te conozcan y herramientas para organizar tu trabajo. Consulta precios y alcance.", icon: "Globe" },
  ],
  futureNav: {
    soluciones: [
      { title: "Fintech", href: "/soluciones/fintech" },
      { title: "HealthTech", href: "/soluciones/healthtech" },
      { title: "Startups", href: "/soluciones/startups" },
      { title: "Retail & E-commerce", href: "/soluciones/retail" }
    ],
    ingenieria: [
      { title: "Tech Stack", href: "/ingenieria/tech-stack" },
      { title: "Procesos", href: "/ingenieria/procesos" },
      { title: "Manifiesto", href: "/ingenieria/manifiesto" }
    ],
    legal: [
      { title: "Términos de Servicio", href: "/legal/terminos" },
      { title: "Política de Privacidad", href: "/legal/privacidad" },
      { title: "SLAs", href: "/legal/slas" }
    ]
  },
  footerNav: {
    servicios: [
      { title: "Ayuda digital y precios", href: "/ayuda-digital" },
      { title: "Diseño, CV y archivos", href: "/ayuda-digital#diseno-y-archivos" },
      { title: "Páginas web y aplicaciones", href: "/ayuda-digital#web-y-apps" },
    ],
    empresa: [
      { title: "Nosotros", href: "/nosotros" },
      { title: "Metodología", href: "/metodologia" },
      { title: "Proceso", href: "/proceso" },
      { title: "Tecnologías", href: "/tecnologias" },
      { title: "Proyectos Destacados", href: "/proyectos" },
      { title: "Centro de Conocimiento", href: "/recursos" },
      { title: "Diagnóstico Tecnológico", href: "/diagnostico" },
      { title: "Portafolio", href: "/#portafolio" },
      { title: "Seguridad y Compliance", href: "/trust/seguridad-compliance" },
      { title: "Contacto", href: "/#contacto" }
    ],
    legal: [] as { title: string; href: string }[]
  }
};
