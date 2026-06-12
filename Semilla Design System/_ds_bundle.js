/* @ds-bundle: {"format":3,"namespace":"SemillaDesignSystem_0573dd","components":[],"sourceHashes":{"ui_kits/website/Footer.jsx":"64db82d3c0dd","ui_kits/website/Header.jsx":"b2509941725f","ui_kits/website/Sections.jsx":"b721e2dc6296"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SemillaDesignSystem_0573dd = window.SemillaDesignSystem_0573dd || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/website/Footer.jsx
try { (() => {
// Semilla Footer — real content
Object.assign(window, {
  Footer: function () {
    return React.createElement('footer', {
      style: {
        background: '#102621',
        color: '#fff',
        padding: '64px 48px 40px'
      }
    }, React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
        gap: 48,
        marginBottom: 48
      }
    },
    // Brand col
    React.createElement('div', null, React.createElement('img', {
      src: '../../assets/logo-full-white-on-forest.png',
      alt: 'Semilla',
      style: {
        height: 64,
        objectFit: 'contain',
        marginBottom: 20
      }
    }), React.createElement('p', {
      style: {
        fontFamily: 'Betm, sans-serif',
        fontWeight: 300,
        fontSize: 13,
        lineHeight: 1.75,
        color: 'rgba(255,255,255,0.5)',
        maxWidth: 220
      }
    }, 'Una comunidad en el corazón de Laureles para creadores, nómadas digitales, empresarios y amantes del café.')),
    // Nav cols
    ...[{
      title: 'Coworking',
      links: ['Escritorio Individual', 'Oficinas Privadas', 'Salas de Reuniones', 'Estudio de Contenido']
    }, {
      title: 'Semilla',
      links: ['Cafetería', 'Eventos', 'Acerca de', 'Contacto']
    }, {
      title: 'Info',
      links: ['Cl. 39c #73-7', 'Laureles, Medellín', '317 515 9876', 'gerencia@semilla.com.co']
    }].map(col => React.createElement('div', {
      key: col.title
    }, React.createElement('div', {
      style: {
        fontFamily: 'Betm, sans-serif',
        fontWeight: 600,
        fontSize: 9,
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        color: '#c09762',
        marginBottom: 16
      }
    }, col.title), React.createElement('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, ...col.links.map(link => React.createElement('span', {
      key: link,
      style: {
        fontFamily: 'Betm, sans-serif',
        fontWeight: 300,
        fontSize: 12,
        color: 'rgba(255,255,255,0.55)',
        letterSpacing: '0.02em'
      }
    }, link)))))),
    // Hours strip
    React.createElement('div', {
      style: {
        borderTop: '1px solid rgba(255,255,255,0.08)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        padding: '16px 0',
        marginBottom: 24,
        display: 'flex',
        gap: 40
      }
    }, React.createElement('span', {
      style: {
        fontFamily: 'Betm, sans-serif',
        fontWeight: 400,
        fontSize: 9,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: '#c09762'
      }
    }, 'Horario'), ...['Lun – Vie: 7:30am – 7pm', 'Sáb: 7:30am – 6pm', 'Dom: 9am – 4pm'].map(h => React.createElement('span', {
      key: h,
      style: {
        fontFamily: 'Betm, sans-serif',
        fontWeight: 300,
        fontSize: 11,
        color: 'rgba(255,255,255,0.5)',
        letterSpacing: '0.04em'
      }
    }, h))),
    // Bottom bar
    React.createElement('div', {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, React.createElement('span', {
      style: {
        fontFamily: 'Betm, sans-serif',
        fontWeight: 300,
        fontSize: 10,
        letterSpacing: '0.08em',
        color: 'rgba(255,255,255,0.3)'
      }
    }, '© 2020–2026 Semilla Café Coworking S.A.S.'), React.createElement('div', {
      style: {
        display: 'flex',
        gap: 20
      }
    }, ...['Instagram', 'Facebook'].map(s => React.createElement('a', {
      key: s,
      href: s === 'Instagram' ? 'https://www.instagram.com/semillacafecoworking' : 'https://www.facebook.com/semillacafecoworking',
      target: '_blank',
      style: {
        fontFamily: 'Betm, sans-serif',
        fontWeight: 400,
        fontSize: 9,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.4)',
        textDecoration: 'none'
      }
    }, s)))));
  }
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
// Semilla Header Component
Object.assign(window, {
  Header: function ({
    activePage,
    onNavigate
  }) {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);
    React.useEffect(() => {
      const handleScroll = () => setScrolled(window.scrollY > 40);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const links = ['Coworking', 'Cafetería', 'Eventos', 'Acerca de'];
    return React.createElement('header', {
      style: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(251,243,231,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        borderBottom: scrolled ? '1px solid #ede0c8' : 'none',
        transition: 'all 0.3s ease',
        padding: '0 48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 72
      }
    },
    // Logo
    React.createElement('div', {
      onClick: () => onNavigate && onNavigate('home'),
      style: {
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, React.createElement('img', {
      src: '../../assets/logo-icon-olive-on-cream.png',
      alt: 'Semilla',
      style: {
        height: 36,
        width: 36,
        objectFit: 'contain'
      }
    }), React.createElement('div', {
      style: {
        display: 'flex',
        flexDirection: 'column'
      }
    }, React.createElement('span', {
      style: {
        fontFamily: 'Betm, sans-serif',
        fontWeight: 900,
        fontSize: 13,
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        color: '#10312b',
        lineHeight: 1
      }
    }, 'Semilla'), React.createElement('span', {
      style: {
        fontFamily: 'Betm, sans-serif',
        fontWeight: 300,
        fontSize: 8,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: '#4a4f31',
        lineHeight: 1,
        marginTop: 2
      }
    }, 'Café & Coworking'))),
    // Nav links
    React.createElement('nav', {
      style: {
        display: 'flex',
        gap: 32,
        alignItems: 'center'
      }
    }, ...links.map(link => React.createElement('a', {
      key: link,
      onClick: () => onNavigate && onNavigate(link.toLowerCase()),
      style: {
        fontFamily: 'Betm, sans-serif',
        fontWeight: activePage === link.toLowerCase() ? 600 : 400,
        fontSize: 10,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: '#10312b',
        cursor: 'pointer',
        textDecoration: 'none',
        borderBottom: activePage === link.toLowerCase() ? '1px solid #c8a977' : '1px solid transparent',
        paddingBottom: 2,
        transition: 'border-color 0.2s'
      }
    }, link)), React.createElement('button', {
      onClick: () => onNavigate && onNavigate('reservar'),
      style: {
        fontFamily: 'Betm, sans-serif',
        fontWeight: 600,
        fontSize: 10,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        background: '#10312b',
        color: '#fff',
        border: 'none',
        padding: '10px 22px',
        cursor: 'pointer',
        transition: 'opacity 0.2s'
      }
    }, 'Reservar')));
  }
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
// Semilla Sections — real content from semilla.com.co
Object.assign(window, {
  Hero: function ({
    onCTA
  }) {
    return React.createElement('section', {
      style: {
        minHeight: '100vh',
        background: '#102621',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '100px 48px 80px'
      }
    }, React.createElement('div', {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 30% 60%, rgba(192,151,98,0.07) 0%, transparent 60%)',
        pointerEvents: 'none'
      }
    }), React.createElement('img', {
      src: '../../assets/logo-icon-white-on-forest.png',
      alt: 'S',
      style: {
        width: 80,
        height: 80,
        objectFit: 'contain',
        marginBottom: 36,
        opacity: 0.95
      }
    }), React.createElement('div', {
      style: {
        fontFamily: 'Betm, sans-serif',
        fontWeight: 400,
        fontSize: 10,
        letterSpacing: '0.30em',
        textTransform: 'uppercase',
        color: '#c09762',
        marginBottom: 20,
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, React.createElement('span', null, 'Laureles'), React.createElement('span', {
      style: {
        width: 4,
        height: 4,
        background: '#c09762',
        borderRadius: '50%',
        display: 'inline-block'
      }
    }), React.createElement('span', null, 'Medellín')), React.createElement('h1', {
      style: {
        fontFamily: 'Betm, sans-serif',
        fontWeight: 900,
        fontSize: 'clamp(52px, 8vw, 96px)',
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        color: '#fff',
        textAlign: 'center',
        lineHeight: 1.0,
        marginBottom: 8
      }
    }, 'Semilla'), React.createElement('p', {
      style: {
        fontFamily: 'Betm, sans-serif',
        fontWeight: 300,
        fontSize: 14,
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.55)',
        textAlign: 'center',
        marginBottom: 48
      }
    }, 'Café & Coworking'), React.createElement('p', {
      style: {
        fontFamily: 'Betm, sans-serif',
        fontWeight: 300,
        fontSize: 17,
        letterSpacing: '0.02em',
        color: 'rgba(255,255,255,0.8)',
        textAlign: 'center',
        maxWidth: 520,
        lineHeight: 1.75,
        marginBottom: 52
      }
    }, 'Una comunidad en el corazón de Laureles para locales, nómadas digitales, creativos, viajeros, empresarios y amantes del café.'), React.createElement('div', {
      style: {
        display: 'flex',
        gap: 16
      }
    }, React.createElement('button', {
      onClick: onCTA,
      style: {
        fontFamily: 'Betm, sans-serif',
        fontWeight: 600,
        fontSize: 10,
        letterSpacing: '0.20em',
        textTransform: 'uppercase',
        background: '#c09762',
        color: '#fff',
        border: 'none',
        padding: '14px 36px',
        cursor: 'pointer'
      }
    }, 'Trabajo Colaborativo'), React.createElement('button', {
      onClick: onCTA,
      style: {
        fontFamily: 'Betm, sans-serif',
        fontWeight: 400,
        fontSize: 10,
        letterSpacing: '0.20em',
        textTransform: 'uppercase',
        background: 'transparent',
        color: '#fff',
        border: '1px solid rgba(255,255,255,0.35)',
        padding: '14px 36px',
        cursor: 'pointer'
      }
    }, 'Ver Cafetería')), React.createElement('div', {
      style: {
        position: 'absolute',
        bottom: 32,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6
      }
    }, React.createElement('span', {
      style: {
        fontFamily: 'Betm, sans-serif',
        fontWeight: 300,
        fontSize: 8,
        letterSpacing: '0.20em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.3)'
      }
    }, 'Scroll'), React.createElement('div', {
      style: {
        width: 1,
        height: 40,
        background: 'linear-gradient(to bottom, rgba(255,255,255,0.25), transparent)'
      }
    })));
  },
  CofficeSection: function () {
    return React.createElement('section', {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        minHeight: 480
      }
    }, React.createElement('div', {
      style: {
        background: '#fbf0e0',
        padding: '80px 64px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }
    }, React.createElement('div', {
      style: {
        fontFamily: 'Betm, sans-serif',
        fontWeight: 400,
        fontSize: 10,
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        color: '#c09762',
        marginBottom: 16
      }
    }, 'Primer Piso'), React.createElement('h2', {
      style: {
        fontFamily: 'Betm, sans-serif',
        fontWeight: 900,
        fontSize: 40,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: '#102621',
        lineHeight: 1.1,
        marginBottom: 20
      }
    }, 'Cafetería'), React.createElement('p', {
      style: {
        fontFamily: 'Betm, sans-serif',
        fontWeight: 300,
        fontSize: 15,
        lineHeight: 1.75,
        color: '#4e502a',
        maxWidth: 340,
        marginBottom: 32
      }
    }, 'Café de origen colombiano, excelente comida, rincones acogedores y espacios amplios. El lugar perfecto para trabajar o reunirte.'), React.createElement('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, ...['Café de Origen', 'Brunch & Desayunos', 'Delivery Disponible', 'Lun–Vie 7:30am–7pm'].map(f => React.createElement('div', {
      key: f,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, React.createElement('div', {
      style: {
        width: 20,
        height: 1,
        background: '#c09762'
      }
    }), React.createElement('span', {
      style: {
        fontFamily: 'Betm, sans-serif',
        fontWeight: 400,
        fontSize: 11,
        letterSpacing: '0.10em',
        textTransform: 'uppercase',
        color: '#102621'
      }
    }, f))))), React.createElement('div', {
      style: {
        background: '#102621',
        padding: '80px 64px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }
    }, React.createElement('div', {
      style: {
        fontFamily: 'Betm, sans-serif',
        fontWeight: 400,
        fontSize: 10,
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        color: '#c09762',
        marginBottom: 16
      }
    }, 'Segundo Piso'), React.createElement('h2', {
      style: {
        fontFamily: 'Betm, sans-serif',
        fontWeight: 900,
        fontSize: 40,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: '#fff',
        lineHeight: 1.1,
        marginBottom: 20
      }
    }, 'Coworking'), React.createElement('p', {
      style: {
        fontFamily: 'Betm, sans-serif',
        fontWeight: 300,
        fontSize: 15,
        lineHeight: 1.75,
        color: 'rgba(255,255,255,0.7)',
        maxWidth: 340,
        marginBottom: 32
      }
    }, 'Un espacio verde y frondoso con vista al Primer Parque de Laureles. Escritorios, cabinas para llamadas, salas de reuniones y oficinas privadas.'), React.createElement('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, ...['Escritorios Individuales', 'Cabinas para Llamadas', 'Salas de Reuniones', 'Oficinas Privadas'].map(f => React.createElement('div', {
      key: f,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, React.createElement('div', {
      style: {
        width: 20,
        height: 1,
        background: '#c09762'
      }
    }), React.createElement('span', {
      style: {
        fontFamily: 'Betm, sans-serif',
        fontWeight: 400,
        fontSize: 11,
        letterSpacing: '0.10em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.85)'
      }
    }, f))))));
  },
  PlansSection: function ({
    onSelectPlan
  }) {
    const plans = [{
      name: 'Escritorio',
      sub: 'Individual',
      tag: 'Más Flexible',
      prices: [{
        label: 'Día',
        val: '45K'
      }, {
        label: 'Semana',
        val: '220K'
      }, {
        label: 'Mes',
        val: '650K'
      }],
      color: '#fbf0e0',
      textColor: '#102621',
      tagColor: '#c09762',
      note: 'Precios con IVA · COP',
      features: ['Hot desk', 'Wifi alta velocidad', 'Acceso a cafetería', 'Zonas de relajo']
    }, {
      name: 'Oficina',
      sub: 'Privada',
      tag: 'Para Equipos',
      prices: [{
        label: 'Mes',
        val: 'Desde\n1.8M'
      }],
      color: '#102621',
      textColor: '#fff',
      tagColor: '#c09762',
      note: 'Precios antes de IVA · COP',
      features: ['Espacio exclusivo', 'Equipos propios', 'Acceso 24/7', 'Dirección comercial']
    }, {
      name: 'Sala de',
      sub: 'Reuniones',
      tag: 'Por Hora',
      prices: [{
        label: 'Hora',
        val: 'Desde\n46K'
      }],
      color: '#4e502a',
      textColor: '#fbf0e0',
      tagColor: '#c09762',
      note: 'Precios con IVA · COP',
      features: ['Ayudas audiovisuales', 'Proyector / pantalla', 'Hasta 10 personas', 'Reserva online']
    }, {
      name: 'Estudio',
      sub: 'de Contenido',
      tag: 'Creadores',
      prices: [{
        label: 'Hora',
        val: '69K'
      }],
      color: '#c09762',
      textColor: '#fff',
      tagColor: 'rgba(255,255,255,0.7)',
      note: 'Precios con IVA · COP',
      features: ['Iluminación profesional', 'Fondo removible', 'Grabación / Podcast', 'Reserva anticipada']
    }];
    return React.createElement('section', {
      id: 'plans-section',
      style: {
        background: '#4e502a',
        padding: '96px 48px'
      }
    }, React.createElement('div', {
      style: {
        textAlign: 'center',
        marginBottom: 64
      }
    }, React.createElement('div', {
      style: {
        fontFamily: 'Betm, sans-serif',
        fontWeight: 400,
        fontSize: 10,
        letterSpacing: '0.24em',
        textTransform: 'uppercase',
        color: '#c09762',
        marginBottom: 14
      }
    }, 'Trabajo Colaborativo · Laureles'), React.createElement('h2', {
      style: {
        fontFamily: 'Betm, sans-serif',
        fontWeight: 900,
        fontSize: 38,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: '#fff',
        lineHeight: 1.1
      }
    }, 'Precios')), React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 2,
        maxWidth: 1100,
        margin: '0 auto'
      }
    }, ...plans.map(plan => React.createElement('div', {
      key: plan.name,
      style: {
        background: plan.color,
        padding: '40px 28px',
        display: 'flex',
        flexDirection: 'column'
      }
    }, React.createElement('div', {
      style: {
        fontFamily: 'Betm, sans-serif',
        fontWeight: 400,
        fontSize: 9,
        letterSpacing: '0.20em',
        textTransform: 'uppercase',
        color: plan.tagColor,
        marginBottom: 14
      }
    }, plan.tag), React.createElement('div', {
      style: {
        fontFamily: 'Betm, sans-serif',
        fontWeight: 900,
        fontSize: 24,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: plan.textColor,
        lineHeight: 1.1,
        marginBottom: 20
      }
    }, plan.name, React.createElement('br', null), plan.sub),
    // Prices
    React.createElement('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        marginBottom: 24,
        paddingBottom: 20,
        borderBottom: `1px solid ${plan.textColor === '#fff' ? 'rgba(255,255,255,0.15)' : 'rgba(16,38,33,0.12)'}`
      }
    }, ...plan.prices.map(p => React.createElement('div', {
      key: p.label,
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline'
      }
    }, React.createElement('span', {
      style: {
        fontFamily: 'Betm, sans-serif',
        fontWeight: 300,
        fontSize: 10,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: plan.textColor,
        opacity: 0.6
      }
    }, p.label), React.createElement('span', {
      style: {
        fontFamily: 'Betm, sans-serif',
        fontWeight: 700,
        fontSize: 18,
        color: plan.textColor,
        whiteSpace: 'pre-line',
        textAlign: 'right',
        lineHeight: 1.1
      }
    }, p.val))), React.createElement('div', {
      style: {
        fontFamily: 'Betm, sans-serif',
        fontWeight: 300,
        fontSize: 8,
        letterSpacing: '0.08em',
        color: plan.textColor,
        opacity: 0.4,
        marginTop: 4
      }
    }, plan.note)), React.createElement('div', {
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        marginBottom: 28
      }
    }, ...plan.features.map(f => React.createElement('div', {
      key: f,
      style: {
        display: 'flex',
        gap: 8,
        alignItems: 'center'
      }
    }, React.createElement('div', {
      style: {
        width: 4,
        height: 4,
        background: plan.tagColor,
        borderRadius: '50%',
        flexShrink: 0
      }
    }), React.createElement('span', {
      style: {
        fontFamily: 'Betm, sans-serif',
        fontWeight: 300,
        fontSize: 11,
        color: plan.textColor,
        opacity: 0.8
      }
    }, f)))), React.createElement('button', {
      onClick: () => onSelectPlan && onSelectPlan(plan.name + ' ' + plan.sub),
      style: {
        fontFamily: 'Betm, sans-serif',
        fontWeight: 600,
        fontSize: 9,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        background: 'transparent',
        color: plan.textColor,
        border: `1px solid ${plan.textColor === '#fff' ? 'rgba(255,255,255,0.35)' : 'rgba(16,38,33,0.35)'}`,
        padding: '11px 16px',
        cursor: 'pointer'
      }
    }, 'Reservar')))));
  },
  EventsStrip: function () {
    return React.createElement('section', {
      id: 'events-section',
      style: {
        background: '#fbf0e0',
        padding: '64px 48px',
        borderTop: '1px solid #e8dcc8'
      }
    }, React.createElement('div', {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: 36
      }
    }, React.createElement('h2', {
      style: {
        fontFamily: 'Betm, sans-serif',
        fontWeight: 900,
        fontSize: 22,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: '#102621'
      }
    }, 'Horario & Contacto'), React.createElement('a', {
      href: 'https://www.semilla.com.co/es/events-medellin',
      target: '_blank',
      style: {
        fontFamily: 'Betm, sans-serif',
        fontWeight: 400,
        fontSize: 10,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: '#c09762',
        textDecoration: 'none'
      }
    }, 'Ver Eventos →')), React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 2
      }
    }, React.createElement('div', {
      style: {
        background: '#102621',
        padding: '28px 32px'
      }
    }, React.createElement('div', {
      style: {
        fontFamily: 'Betm, sans-serif',
        fontWeight: 600,
        fontSize: 9,
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        color: '#c09762',
        marginBottom: 14
      }
    }, 'Horario'), ...['Lun – Vie: 7:30am – 7:00pm', 'Sábado: 7:30am – 6:00pm', 'Domingo: 9:00am – 4:00pm'].map(h => React.createElement('div', {
      key: h,
      style: {
        fontFamily: 'Betm, sans-serif',
        fontWeight: 300,
        fontSize: 13,
        color: 'rgba(255,255,255,0.8)',
        marginBottom: 6,
        letterSpacing: '0.02em'
      }
    }, h))), React.createElement('div', {
      style: {
        background: '#fff',
        padding: '28px 32px',
        border: '1px solid #e8dcc8'
      }
    }, React.createElement('div', {
      style: {
        fontFamily: 'Betm, sans-serif',
        fontWeight: 600,
        fontSize: 9,
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        color: '#c09762',
        marginBottom: 14
      }
    }, 'Ubicación'), React.createElement('div', {
      style: {
        fontFamily: 'Betm, sans-serif',
        fontWeight: 300,
        fontSize: 13,
        color: '#102621',
        lineHeight: 1.6
      }
    }, 'Cl. 39c #73-7'), React.createElement('div', {
      style: {
        fontFamily: 'Betm, sans-serif',
        fontWeight: 300,
        fontSize: 13,
        color: '#4e502a',
        lineHeight: 1.6
      }
    }, 'Laureles, Medellín'), React.createElement('div', {
      style: {
        fontFamily: 'Betm, sans-serif',
        fontWeight: 300,
        fontSize: 13,
        color: '#4e502a',
        lineHeight: 1.6,
        marginBottom: 10
      }
    }, 'Colombia'), React.createElement('div', {
      style: {
        fontFamily: 'Betm, sans-serif',
        fontWeight: 400,
        fontSize: 12,
        color: '#c09762',
        marginTop: 8
      }
    }, '317 515 9876')), React.createElement('div', {
      style: {
        background: '#4e502a',
        padding: '28px 32px'
      }
    }, React.createElement('div', {
      style: {
        fontFamily: 'Betm, sans-serif',
        fontWeight: 600,
        fontSize: 9,
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        color: '#c09762',
        marginBottom: 14
      }
    }, 'Contacto'), React.createElement('div', {
      style: {
        fontFamily: 'Betm, sans-serif',
        fontWeight: 300,
        fontSize: 13,
        color: 'rgba(255,255,255,0.8)',
        marginBottom: 8
      }
    }, 'gerencia@semilla.com.co'), React.createElement('div', {
      style: {
        fontFamily: 'Betm, sans-serif',
        fontWeight: 300,
        fontSize: 13,
        color: 'rgba(255,255,255,0.8)',
        marginBottom: 20
      }
    }, '@semillacafecoworking'), React.createElement('button', {
      onClick: () => window.open('mailto:gerencia@semilla.com.co'),
      style: {
        fontFamily: 'Betm, sans-serif',
        fontWeight: 600,
        fontSize: 9,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        background: '#c09762',
        color: '#fff',
        border: 'none',
        padding: '10px 20px',
        cursor: 'pointer'
      }
    }, 'Escríbenos'))));
  }
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

})();
