// i18n.js - Sistema de internacionalización
const translations = {
    es: {
        "hero.badge": "✦ Full Stack Developer ✦",
        "hero.title": "Construyo, <span class='gradient-text'>escalo</span> y <span class='gradient-text'>optimizo</span>",
        "hero.subtitle": "Ingeniero en Informática con +4 años como <strong>Full Stack Developer</strong>.<br>Especialista en <strong>backend</strong>, <strong>bases de datos (SQL Server, PostgreSQL)</strong>, <strong>PowerBuilder</strong>, <strong>Odoo</strong> y <strong>optimización extrema</strong>.",
        "hero.download_cv": "<i class='fas fa-download'></i> Descargar CV",
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
        
        "exp.drocer.title": "Backend Developer & Technical Lead",
        "exp.drocer.li1": "<strong>Ingeniería inversa de ERP legacy (30+ años):</strong> Lideré el rescate de ProteoERP (desde 1995) sin documentación, aplicando técnicas de ingeniería inversa para mapear lógica de negocio, estructuras de datos y dependencias. Reduje <strong>bugs críticos en 70%</strong> y mejoré rendimiento en <strong>40%</strong>.",
        "exp.drocer.li2": "<strong>Optimización extrema en SQL Server:</strong> Implementé índices estratégicos, refactoring de consultas, y uso avanzado de procedimientos almacenados y triggers. Reduje reportes financieros de <strong>8 minutos a 5 segundos (98.96% mejora)</strong>.",
        "exp.drocer.li3": "<strong>API de facturación digital (SENIAT):</strong> Diseñé e implementé API REST para facturación electrónica, integrando validación de datos, cálculo de impuestos (IVA, ISLR, IGTF) y generación de XML.",
        "exp.drocer.li4": "<strong>Prueba de concepto con PowerBuilder:</strong> Evalué PowerBuilder (DataWindow, cliente/servidor) para unificar consultas entre 3 bases de datos distribuidas. Desarrollé un módulo de facturación como prueba, comprendiendo la arquitectura y el lenguaje PowerScript.",
        "exp.drocer.li5": "<strong>Análisis estructural y debugging:</strong> Realicé análisis exhaustivo del ERP identificando cuellos de botella, dependencias ocultas y código obsoleto. Apliqué debugging a nivel de base de datos y aplicación para corregir errores sin documentación.",
        
        "exp.odoo.title": "Odoo Developer (Project-based)",
        "exp.odoo.company": "Consultoría · Múltiples clientes",
        "exp.odoo.li1": "Módulos personalizados para logística, ventas y manufactura",
        "exp.odoo.li2": "Integración contabilidad + inventario + facturación electrónica",
        "exp.odoo.li3": "Optimización PostgreSQL: <strong>-40% tiempos de carga</strong>",
        "exp.odoo.li4": "Debugging de sistemas legacy sin documentación",
        
        "exp.liceo.title": "Full Stack Developer",
        "exp.liceo.li1": "Sistema académico completo en <strong>dos instituciones en paralelo</strong>",
        "exp.liceo.li2": "Matrícula de alto volumen + optimización de consultas",
        "exp.liceo.li3": "Módulos: alumnos, materias, grados, notas, boletines",
        "exp.liceo.li4": "Dashboards con métricas estadísticas en tiempo real",
        
        "exp.qualitas.title": "Web Master",
        "exp.qualitas.li1": "Optimización SEO y performance web: <strong>+40% Core Web Vitals</strong>",
        "exp.qualitas.li2": "Gestión técnica de múltiples sitios de alto tráfico",
        "exp.qualitas.li3": "Caching, minificación de assets y buenas prácticas SEO",
        
        "featured.badge": "✦ Proyecto estrella ✦",
        "featured.title": "ProteoERP · Legacy Recovery (30+ años)",
        "featured.desc": "ERP sin documentación, con 30+ años de evolución (desde 1995), bugs críticos y bajo rendimiento. En un año lo estudié, mejoré, optimicé y continué desarrollando: desde inventario hasta finanzas y facturación digital. Logré reducir consultas de <strong>8 minutos a 5 segundos (98.96%)</strong>.",
        "featured.stat1": "<i class='fas fa-bug'></i> -70% bugs críticos",
        "featured.stat2": "<i class='fas fa-chart-line'></i> +40% performance",
        "featured.stat3": "<i class='fas fa-clock'></i> 8 min → 5s (98.96%)",
        
        "portfolio.tag": "Portafolio",
        "portfolio.title": "Proyectos <span class='gradient-text'>destacados</span>",
        "portfolio.subtitle": "5 proyectos reales · Carrusel con 3 imágenes cada uno",
        
        "proj1.title": "📚 Sistema de Gestión Académica",
        "proj1.tech_label": "Tecnologías:",
        "proj1.tech": "PHP, MySQL, JavaScript, Bootstrap",
        "proj1.desc": "Sistema implementado en <strong>dos instituciones educativas en paralelo</strong>. Manejo de alto volumen de alumnos, gestión de notas, generación automatizada de boletines y dashboards estadísticos.",
        
        "proj2.title": "🚀 Optimización Web · Core Web Vitals +40%",
        "proj2.tech_label": "Tecnologías:",
        "proj2.tech": "WordPress, SEO, Caching, Minificación",
        "proj2.desc": "Mejora del <strong>40% en Core Web Vitals</strong> para múltiples sitios de alto tráfico mediante caching, optimización de assets y buenas prácticas SEO.",
        
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
        "hero.download_cv": "<i class='fas fa-download'></i> Download CV",
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
        
        "exp.drocer.title": "Backend Developer & Technical Lead",
        "exp.drocer.li1": "<strong>Reverse engineering of legacy ERP (30+ years):</strong> Led the rescue of ProteoERP (since 1995) with no documentation, applying reverse engineering to map business logic, data structures, and dependencies. Reduced <strong>critical bugs by 70%</strong> and improved performance by <strong>40%</strong>.",
        "exp.drocer.li2": "<strong>Extreme SQL Server optimization:</strong> Implemented strategic indexing, query refactoring, advanced stored procedures and triggers. Reduced financial reports from <strong>8 minutes to 5 seconds (98.96% improvement)</strong>.",
        "exp.drocer.li3": "<strong>Digital invoicing API (SENIAT):</strong> Designed and implemented REST API for e-invoicing, integrating data validation, tax calculation (VAT, ISLR, IGTF), and XML generation.",
        "exp.drocer.li4": "<strong>PowerBuilder Proof of Concept:</strong> Evaluated PowerBuilder (DataWindow, client/server) to unify queries across 3 distributed databases. Developed a billing module PoC, gaining deep understanding of PowerBuilder architecture and PowerScript.",
        "exp.drocer.li5": "<strong>Structural analysis and debugging:</strong> Conducted thorough ERP analysis identifying bottlenecks, hidden dependencies, and obsolete code. Applied database and application-level debugging to fix errors without documentation.",
        
        "exp.odoo.title": "Odoo Developer (Project-based)",
        "exp.odoo.company": "Consulting · Multiple clients",
        "exp.odoo.li1": "Custom modules for logistics, sales and manufacturing",
        "exp.odoo.li2": "Accounting + inventory + e-invoicing integration",
        "exp.odoo.li3": "PostgreSQL optimization: <strong>-40% load time</strong>",
        "exp.odoo.li4": "Debugging legacy systems with no documentation",
        
        "exp.liceo.title": "Full Stack Developer",
        "exp.liceo.li1": "Complete academic system in <strong>two institutions in parallel</strong>",
        "exp.liceo.li2": "High-volume enrollment + query optimization",
        "exp.liceo.li3": "Modules: students, subjects, grades, reports",
        "exp.liceo.li4": "Dashboards with real-time statistical metrics",
        
        "exp.qualitas.title": "Web Master",
        "exp.qualitas.li1": "SEO and web performance: <strong>+40% Core Web Vitals</strong>",
        "exp.qualitas.li2": "Technical management of multiple high-traffic sites",
        "exp.qualitas.li3": "Caching, asset minification and SEO best practices",
        
        "featured.badge": "✦ Featured Project ✦",
        "featured.title": "ProteoERP · Legacy Recovery (30+ years)",
        "featured.desc": "ERP with no documentation, 30+ years of evolution (since 1995), critical bugs and poor performance. In one year I studied, improved, optimized and continued developing: from inventory to finance and digital invoicing. Achieved query reduction from <strong>8 minutes to 5 seconds (98.96%)</strong>.",
        "featured.stat1": "<i class='fas fa-bug'></i> -70% critical bugs",
        "featured.stat2": "<i class='fas fa-chart-line'></i> +40% performance",
        "featured.stat3": "<i class='fas fa-clock'></i> 8 min → 5s (98.96%)",
        
        "portfolio.tag": "Portfolio",
        "portfolio.title": "Featured <span class='gradient-text'>Projects</span>",
        "portfolio.subtitle": "5 real projects · Carousel with 3 images each",
        
        "proj1.title": "📚 Academic Management System",
        "proj1.tech_label": "Technologies:",
        "proj1.tech": "PHP, MySQL, JavaScript, Bootstrap",
        "proj1.desc": "System deployed in <strong>two educational institutions in parallel</strong>. Handles high-volume student enrollment, grade management, automated report cards and statistical dashboards.",
        
        "proj2.title": "🚀 Web Optimization · Core Web Vitals +40%",
        "proj2.tech_label": "Technologies:",
        "proj2.tech": "WordPress, SEO, Caching, Minification",
        "proj2.desc": "<strong>40% improvement in Core Web Vitals</strong> for multiple high-traffic websites through caching, asset optimization and SEO best practices.",
        
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
            if (translation.includes('<') || element.innerHTML.includes('<')) {
                element.innerHTML = translation;
            } else {
                element.innerText = translation;
            }
        }
    });
    
    const downloadBtn = document.getElementById('downloadCvBtn');
    if (downloadBtn) {
        if (lang === 'es') {
            downloadBtn.href = "Luis Díaz · Full Stack Developer · CV 2026.pdf";
        } else {
            downloadBtn.href = "Luis Díaz · Full Stack Developer · Resume 2026.pdf";
        }
    }
    
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