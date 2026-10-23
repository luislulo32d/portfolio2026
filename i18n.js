// i18n.js - Sistema de internacionalización
const translations = {
    es: {
        "hero.badge": "✦ Full Stack Developer ✦",
        "hero.title": "Construyo, <span class='gradient-text'>escalo</span> y <span class='gradient-text'>optimizo</span>",
        "hero.subtitle": "Ingeniero en Informática con +4 años como <strong>Full Stack Developer</strong>.<br>Especialista en <strong>backend</strong>, <strong>bases de datos (SQL Server, PostgreSQL)</strong>, <strong>PowerBuilder</strong>, <strong>Odoo</strong> y <strong>optimización extrema</strong>.",
        "hero.view_cv": "<i class='fas fa-file-alt'></i> Ver CV Online",
        "hero.contact": "<i class='fas fa-paper-plane'></i> Contactar",
        "hero.scroll": "<span>Desliza</span> <i class='fas fa-chevron-down'></i>",

        "kpis.tag": "Impacto real",
        "kpis.title": "Resultados <span class='gradient-text'>cuantificables</span>",
        "kpis.subtitle": "Métricas que hablan por sí solas",
        "kpis.transactions": "transacciones/día",
        "kpis.query": "mejora en consultas<br>(8 min → 5s)",
        "kpis.performance": "mejora rendimiento",
        "kpis.modules": "módulos migrados",

        "experience.tag": "Trayectoria",
        "experience.title": "Experiencia <span class='gradient-text'>profesional</span>",
        "experience.subtitle": "+4 años construyendo y escalando",

        "exp.proteo.title": "Desarrollador Full Stack & Migración de Datos",
        "exp.proteo.li1": "<strong>Modernización y Agentes AI:</strong> Equipo central (junto al creador original) creando la nueva versión del ERP, integrando agentes de IA (DeepSeek).",
        "exp.proteo.li2": "<strong>Migración a Tiempo Récord:</strong> Lideré la migración de BD y funciones críticas hacia la nueva arquitectura.",
        "exp.proteo.li3": "<strong>Estabilidad:</strong> Despliegue de versión altamente estable para la gestión operativa actual.",

        "exp.vibecoding.title": "Proyecto Personal · Prueba de Concepto",
        "exp.vibecoding.li1": "Desarrollo de proyecto bajo la técnica de <strong>vibecoding</strong>.",
        "exp.vibecoding.li2": "Exploración práctica del uso de <strong>Agentes de Inteligencia Artificial</strong> en el ciclo de desarrollo de software.",

        "exp.freelance.title": "Full Stack Developer · Freelance",
        "exp.freelance.li1": "Módulos personalizados en <strong>Odoo (Python/PostgreSQL)</strong>.",
        "exp.freelance.li2": "Optimización de consultas y diagnóstico en sistemas legacy.",

        "exp.drocer.title": "Backend Developer & Technical Lead",
        "exp.drocer.li1": "<strong>Ingeniería inversa de ERP legacy (30+ años):</strong> Rescate de ProteoERP sin documentación. Reduje bugs en 70% y mejoré rendimiento en 40%.",
        "exp.drocer.li2": "<strong>Optimización extrema:</strong> Reportes financieros de <strong>8 minutos a 5 segundos (98.96%)</strong> en SQL Server.",
        "exp.drocer.li3": "<strong>API de facturación digital:</strong> Integración con SENIAT (IVA, ISLR, IGTF) y generación de XML.",
        "exp.drocer.li4": "<strong>PowerBuilder:</strong> Evaluación de DataWindow y cliente/servidor para múltiples BD distribuidas.",

        "exp.odoo.title": "Odoo Developer (Project-based)",
        "exp.odoo.company": "Consultoría · Múltiples clientes",
        "exp.odoo.li1": "Módulos personalizados para logística, ventas y manufactura",
        "exp.odoo.li2": "Integración contabilidad + inventario + facturación electrónica",
        "exp.odoo.li3": "Optimización PostgreSQL: <strong>-40% tiempos de carga</strong>",

        "exp.liceo.title": "Full Stack Developer",
        "exp.liceo.li1": "Sistema académico completo en <strong>dos instituciones en paralelo</strong>",
        "exp.liceo.li2": "Matrícula de alto volumen + optimización de consultas",

        "exp.qualitas.title": "Web Master",
        "exp.qualitas.li1": "Optimización SEO y performance web: <strong>+40% Core Web Vitals</strong>",
        "exp.qualitas.li2": "Gestión técnica de múltiples sitios de alto tráfico",

        "featured.badge": "✦ Proyecto estrella ✦",
        "featured.title": "ProteoERP · Legacy Recovery (30+ años)",
        "featured.desc": "ERP sin documentación, con 30+ años de evolución (desde 1995), bugs críticos y bajo rendimiento. En un año lo estudié, mejoré, optimicé y continué desarrollando: desde inventario hasta finanzas y facturación digital. Logré reducir consultas de <strong>8 minutos a 5 segundos (98.96%)</strong>.",
        "featured.stat1": "<i class='fas fa-bug'></i> -70% bugs críticos",
        "featured.stat2": "<i class='fas fa-chart-line'></i> +40% performance",
        "featured.stat3": "<i class='fas fa-clock'></i> 8 min → 5s (98.96%)",

        "portfolio.tag": "Portafolio",
        "portfolio.title": "Proyectos <span class='gradient-text'>destacados</span>",
        "portfolio.subtitle": "Proyectos reales · Carrusel con imágenes",

        "proj1.title": "📚 Sistema de Gestión Académica",
        "proj1.tech_label": "Tecnologías:",
        "proj1.tech": "PHP, MySQL, JavaScript, Bootstrap",
        "proj1.desc": "Sistema implementado en <strong>dos instituciones educativas en paralelo</strong>. Manejo de alto volumen de alumnos, gestión de notas, generación automatizada de boletines y dashboards estadísticos.",

        "proj2.title": "🚀 Optimización Web · Core Web Vitals +40%",
        "proj2.tech_label": "Tecnologías:",
        "proj2.tech": "WordPress, SEO, Caching, Minificación",
        "proj2.desc": "Mejora del <strong>40% en Core Web Vitals</strong> para múltiples sitios de alto tráfico mediante caching, optimización de assets y buenas prácticas SEO.",

        "proj3.title": "🏭 Nuevo ProteoERP · Modernización e IA",
        "proj3.tech_label": "Tecnologías:",
        "proj3.tech": "Python, PostgreSQL, Agentes AI (DeepSeek), Arquitectura Backend",
        "proj3.desc": "Creación de la nueva versión del ERP aplicando tecnologías actuales e integrando agentes de Inteligencia Artificial. Lideré la migración de la base de datos y funciones críticas del sistema antiguo a la nueva arquitectura, logrando un despliegue altamente estable en tiempo récord.",

        "tech.tag": "Herramientas",
        "tech.title": "Tech <span class='gradient-text'>Stack</span>",
        "tech.subtitle": "Tecnologías que domino",

        "contact.title": "¿Hablamos?",
        "contact.subtitle": "Disponible para roles presenciales o remotos como Full Stack Developer.",
        "contact.portfolio_btn": "Portafolio anterior",

        "footer": "© 2026 Luis David Díaz Guillén · Full Stack Developer"
    },
    en: {
        "hero.badge": "✦ Full Stack Developer ✦",
        "hero.title": "I build, <span class='gradient-text'>scale</span> and <span class='gradient-text'>optimize</span>",
        "hero.subtitle": "Computer Engineer with +4 years as <strong>Full Stack Developer</strong>.<br>Specialist in <strong>backend</strong>, <strong>databases (SQL Server, PostgreSQL)</strong>, <strong>PowerBuilder</strong>, <strong>Odoo</strong> and <strong>extreme optimization</strong>.",
        "hero.view_cv": "<i class='fas fa-file-alt'></i> View Online CV",
        "hero.contact": "<i class='fas fa-paper-plane'></i> Contact me",
        "hero.scroll": "<span>Scroll</span> <i class='fas fa-chevron-down'></i>",

        "kpis.tag": "Real Impact",
        "kpis.title": "Quantifiable <span class='gradient-text'>Results</span>",
        "kpis.subtitle": "Metrics that speak for themselves",
        "kpis.transactions": "transactions/day",
        "kpis.query": "query improvement<br>(8 min → 5s)",
        "kpis.performance": "performance improvement",
        "kpis.modules": "modules migrated",

        "experience.tag": "Career",
        "experience.title": "Work <span class='gradient-text'>Experience</span>",
        "experience.subtitle": "+4 years building and scaling",

        "exp.proteo.title": "Full Stack Developer & Data Migration",
        "exp.proteo.li1": "<strong>Modernization & AI Agents:</strong> Core team (alongside the original creator) building the new ERP version, integrating AI agents (DeepSeek).",
        "exp.proteo.li2": "<strong>Record-Time Migration:</strong> Led the migration of DB and critical functions to the new architecture.",
        "exp.proteo.li3": "<strong>Stability:</strong> Deployment of a highly stable version for current operational management.",

        "exp.vibecoding.title": "Personal Project · Proof of Concept",
        "exp.vibecoding.li1": "Project development under the <strong>vibecoding</strong> technique.",
        "exp.vibecoding.li2": "Practical exploration of <strong>Artificial Intelligence Agents</strong> in the software development cycle.",

        "exp.freelance.title": "Full Stack Developer · Freelance",
        "exp.freelance.li1": "Custom modules in <strong>Odoo (Python/PostgreSQL)</strong>.",
        "exp.freelance.li2": "Query optimization and legacy systems diagnostics.",

        "exp.drocer.title": "Backend Developer & Technical Lead",
        "exp.drocer.li1": "<strong>Legacy ERP reverse engineering (30+ years):</strong> Rescued ProteoERP with no documentation. Reduced bugs by 70% and improved performance by 40%.",
        "exp.drocer.li2": "<strong>Extreme optimization:</strong> Financial reports from <strong>8 minutes to 5 seconds (98.96%)</strong> in SQL Server.",
        "exp.drocer.li3": "<strong>Digital invoicing API:</strong> Integration with SENIAT (VAT, ISLR, IGTF) and XML generation.",
        "exp.drocer.li4": "<strong>PowerBuilder:</strong> Evaluation of DataWindow and client/server for multiple distributed DBs.",

        "exp.odoo.title": "Odoo Developer (Project-based)",
        "exp.odoo.company": "Consulting · Multiple clients",
        "exp.odoo.li1": "Custom modules for logistics, sales and manufacturing",
        "exp.odoo.li2": "Accounting + inventory + e-invoicing integration",
        "exp.odoo.li3": "PostgreSQL optimization: <strong>-40% load time</strong>",

        "exp.liceo.title": "Full Stack Developer",
        "exp.liceo.li1": "Complete academic system in <strong>two institutions in parallel</strong>",
        "exp.liceo.li2": "High-volume enrollment + query optimization",

        "exp.qualitas.title": "Web Master",
        "exp.qualitas.li1": "SEO and web performance: <strong>+40% Core Web Vitals</strong>",
        "exp.qualitas.li2": "Technical management of multiple high-traffic sites",

        "featured.badge": "✦ Featured Project ✦",
        "featured.title": "ProteoERP · Legacy Recovery (30+ years)",
        "featured.desc": "ERP with no documentation, 30+ years of evolution (since 1995), critical bugs and poor performance. In one year I studied, improved, optimized and continued developing: from inventory to finance and digital invoicing. I reduced queries from <strong>8 minutes to 5 seconds (98.96%)</strong>.",
        "featured.stat1": "<i class='fas fa-bug'></i> -70% critical bugs",
        "featured.stat2": "<i class='fas fa-chart-line'></i> +40% performance",
        "featured.stat3": "<i class='fas fa-clock'></i> 8 min → 5s (98.96%)",

        "portfolio.tag": "Portfolio",
        "portfolio.title": "Featured <span class='gradient-text'>Projects</span>",
        "portfolio.subtitle": "Real projects · Carousel with images",

        "proj1.title": "📚 Academic Management System",
        "proj1.tech_label": "Technologies:",
        "proj1.tech": "PHP, MySQL, JavaScript, Bootstrap",
        "proj1.desc": "System deployed in <strong>two educational institutions in parallel</strong>. Handles high-volume student enrollment, grade management, automated report cards and statistical dashboards.",

        "proj2.title": "🚀 Web Optimization · Core Web Vitals +40%",
        "proj2.tech_label": "Technologies:",
        "proj2.tech": "WordPress, SEO, Caching, Minification",
        "proj2.desc": "<strong>40% improvement in Core Web Vitals</strong> for multiple high-traffic websites through caching, asset optimization and SEO best practices.",

        "proj3.title": "🏭 New ProteoERP · Modernization & AI",
        "proj3.tech_label": "Technologies:",
        "proj3.tech": "Python, PostgreSQL, AI Agents (DeepSeek), Backend Architecture",
        "proj3.desc": "Creation of the new ERP version applying modern technologies and integrating Artificial Intelligence agents. I led the migration of the database and critical functions from the old system to the new architecture, achieving a highly stable deployment in record time.",

        "tech.tag": "Tools",
        "tech.title": "Tech <span class='gradient-text'>Stack</span>",
        "tech.subtitle": "Technologies I master",

        "contact.title": "Let's talk?",
        "contact.subtitle": "Available for on-site or remote roles as Full Stack Developer.",
        "contact.portfolio_btn": "Previous Portfolio",

        "footer": "© 2026 Luis David Díaz Guillén · Full Stack Developer"
    }
};

let currentLang = 'es';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio_lang', lang);

    document.documentElement.lang = lang;

    document.getElementById('langEs').classList.toggle('active', lang === 'es');
    document.getElementById('langEn').classList.toggle('active', lang === 'en');

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        let translation = translations[lang][key];

        if (translation) {
            // Si el texto contiene etiquetas HTML (como <strong> o <i>), usamos innerHTML
            if (translation.includes('<') || element.innerHTML.includes('<')) {
                element.innerHTML = translation;
            } else {
                element.innerText = translation;
            }
        }
    });

    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('portfolio_lang');
    const browserLang = navigator.language.startsWith('es') ? 'es' : 'en';
    const initialLang = savedLang || browserLang;

    setLanguage(initialLang);

    document.getElementById('langEs').addEventListener('click', () => setLanguage('es'));
    document.getElementById('langEn').addEventListener('click', () => setLanguage('en'));
});
