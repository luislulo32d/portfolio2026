// i18n.js - Sistema de internacionalización
const translations = {
    es: {
        "hero.badge": "✦ Full Stack Developer ✦",
        "hero.title": "Construyo, <span class='gradient-text'>escalo</span> y <span class='gradient-text'>optimizo</span>",
        "hero.subtitle": "Ingeniero en Informática con +4 años como <strong>Full Stack Developer</strong>.<br>Especialista en <strong>backend</strong>, <strong>bases de datos</strong>, <strong>Odoo</strong>, <strong>resolución de problemas</strong> y <strong>UX</strong>.",
        "hero.download_cv": "<i class='fas fa-download'></i> Descargar CV",
        "hero.contact": "<i class='fas fa-paper-plane'></i> Contactar",
        "hero.scroll": "<span>Desliza</span> <i class='fas fa-chevron-down'></i>",
        
        "kpis.tag": "Impacto real",
        "kpis.title": "Resultados <span class='gradient-text'>cuantificables</span>",
        "kpis.subtitle": "Métricas que hablan por sí solas",
        "kpis.transactions": "transacciones/día",
        "kpis.query": "consultas más rápidas<br>(5s → <1s)",
        "kpis.performance": "mejora rendimiento",
        "kpis.modules": "módulos migrados",
        
        "experience.tag": "Trayectoria",
        "experience.title": "Experiencia <span class='gradient-text'>profesional</span>",
        "experience.subtitle": "+4 años construyendo y escalando",
        
        "exp.drocer.title": "Backend Developer & Technical Lead",
        "exp.drocer.li1": "Diseñé 3 módulos de inventario para <strong>1,000+ transacciones/día</strong>",
        "exp.drocer.li2": "Lideré migración de <strong>+15 módulos críticos</strong> en plazo",
        "exp.drocer.li3": "Optimización PostgreSQL: <strong>5s → &lt;1s</strong>",
        "exp.drocer.li4": "Mejora rendimiento general: <strong>+40%</strong>",
        "exp.drocer.li5": "Estabilicé ProteoERP: <strong>-70% bugs críticos</strong>",
        
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
        "featured.title": "ProteoERP · Legacy Recovery",
        "featured.desc": "ERP sin documentación, con bugs críticos y bajo rendimiento. En un año lo estudié, mejoré, optimicé y continué desarrollando: desde inventario hasta finanzas y facturación digital.",
        "featured.stat1": "<i class='fas fa-bug'></i> -70% bugs críticos",
        "featured.stat2": "<i class='fas fa-chart-line'></i> +40% performance",
        "featured.stat3": "<i class='fas fa-clock'></i> 5s → <1s",
        
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
        "contact.subtitle": "Disponible para roles remotos como Full Stack Developer.",
        "contact.portfolio_btn": "Portafolio anterior",
        
        "footer": "© 2026 Luis David Díaz Guillén · Full Stack Developer"
    },
    en: {
        "hero.badge": "✦ Full Stack Developer ✦",
        "hero.title": "I build, <span class='gradient-text'>scale</span> and <span class='gradient-text'>optimize</span>",
        "hero.subtitle": "Computer Engineer with +4 years as <strong>Full Stack Developer</strong>.<br>Specialist in <strong>backend</strong>, <strong>databases</strong>, <strong>Odoo</strong>, <strong>problem-solving</strong> and <strong>UX</strong>.",
        "hero.download_cv": "<i class='fas fa-download'></i> Download CV",
        "hero.contact": "<i class='fas fa-paper-plane'></i> Contact me",
        "hero.scroll": "<span>Scroll</span> <i class='fas fa-chevron-down'></i>",
        
        "kpis.tag": "Real Impact",
        "kpis.title": "Quantifiable <span class='gradient-text'>Results</span>",
        "kpis.subtitle": "Metrics that speak for themselves",
        "kpis.transactions": "transactions/day",
        "kpis.query": "faster queries<br>(5s → <1s)",
        "kpis.performance": "performance improvement",
        "kpis.modules": "modules migrated",
        
        "experience.tag": "Career",
        "experience.title": "Work <span class='gradient-text'>Experience</span>",
        "experience.subtitle": "+4 years building and scaling",
        
        "exp.drocer.title": "Backend Developer & Technical Lead",
        "exp.drocer.li1": "Designed 3 inventory modules for <strong>1,000+ daily transactions</strong>",
        "exp.drocer.li2": "Led migration of <strong>+15 critical modules</strong> on deadline",
        "exp.drocer.li3": "PostgreSQL optimization: <strong>5s → <1s</strong>",
        "exp.drocer.li4": "Overall performance improvement: <strong>+40%</strong>",
        "exp.drocer.li5": "Stabilized ProteoERP: <strong>-70% critical bugs</strong>",
        
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
        "featured.title": "ProteoERP · Legacy Recovery",
        "featured.desc": "ERP with no documentation, critical bugs and poor performance. In one year I studied, improved, optimized and continued developing: from inventory to finance and digital invoicing.",
        "featured.stat1": "<i class='fas fa-bug'></i> -70% critical bugs",
        "featured.stat2": "<i class='fas fa-chart-line'></i> +40% performance",
        "featured.stat3": "<i class='fas fa-clock'></i> 5s → <1s",
        
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
        "contact.subtitle": "Available for remote roles as Full Stack Developer.",
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