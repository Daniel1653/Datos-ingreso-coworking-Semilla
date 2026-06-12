// Semilla Header Component
Object.assign(window, {
  Header: function({ activePage, onNavigate }) {
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
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(251,243,231,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        borderBottom: scrolled ? '1px solid #ede0c8' : 'none',
        transition: 'all 0.3s ease',
        padding: '0 48px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 72,
      }
    },
      // Logo
      React.createElement('div', {
        onClick: () => onNavigate && onNavigate('home'),
        style: { cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 12 }
      },
        React.createElement('img', {
          src: '../../assets/logo-icon-olive-on-cream.png',
          alt: 'Semilla',
          style: { height: 36, width: 36, objectFit: 'contain' }
        }),
        React.createElement('div', { style: { display: 'flex', flexDirection: 'column' } },
          React.createElement('span', {
            style: {
              fontFamily: 'Betm, sans-serif', fontWeight: 900,
              fontSize: 13, letterSpacing: '0.22em', textTransform: 'uppercase',
              color: '#10312b', lineHeight: 1
            }
          }, 'Semilla'),
          React.createElement('span', {
            style: {
              fontFamily: 'Betm, sans-serif', fontWeight: 300,
              fontSize: 8, letterSpacing: '0.18em', textTransform: 'uppercase',
              color: '#4a4f31', lineHeight: 1, marginTop: 2
            }
          }, 'Café & Coworking')
        )
      ),

      // Nav links
      React.createElement('nav', {
        style: { display: 'flex', gap: 32, alignItems: 'center' }
      },
        ...links.map(link =>
          React.createElement('a', {
            key: link,
            onClick: () => onNavigate && onNavigate(link.toLowerCase()),
            style: {
              fontFamily: 'Betm, sans-serif', fontWeight: activePage === link.toLowerCase() ? 600 : 400,
              fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase',
              color: '#10312b', cursor: 'pointer', textDecoration: 'none',
              borderBottom: activePage === link.toLowerCase() ? '1px solid #c8a977' : '1px solid transparent',
              paddingBottom: 2, transition: 'border-color 0.2s'
            }
          }, link)
        ),
        React.createElement('button', {
          onClick: () => onNavigate && onNavigate('reservar'),
          style: {
            fontFamily: 'Betm, sans-serif', fontWeight: 600,
            fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase',
            background: '#10312b', color: '#fff',
            border: 'none', padding: '10px 22px', cursor: 'pointer',
            transition: 'opacity 0.2s'
          }
        }, 'Reservar')
      )
    );
  }
});
