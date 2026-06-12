// Semilla Footer — real content
Object.assign(window, {
  Footer: function() {
    return React.createElement('footer', {
      style: { background: '#102621', color: '#fff', padding: '64px 48px 40px' }
    },
      React.createElement('div', {
        style: { display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 48, marginBottom: 48 }
      },
        // Brand col
        React.createElement('div', null,
          React.createElement('img', {
            src: '../../assets/logo-full-white-on-forest.png',
            alt: 'Semilla',
            style: { height: 64, objectFit: 'contain', marginBottom: 20 }
          }),
          React.createElement('p', {
            style: { fontFamily: 'Betm, sans-serif', fontWeight: 300, fontSize: 13, lineHeight: 1.75, color: 'rgba(255,255,255,0.5)', maxWidth: 220 }
          }, 'Una comunidad en el corazón de Laureles para creadores, nómadas digitales, empresarios y amantes del café.')
        ),
        // Nav cols
        ...[
          { title: 'Coworking', links: ['Escritorio Individual', 'Oficinas Privadas', 'Salas de Reuniones', 'Estudio de Contenido'] },
          { title: 'Semilla', links: ['Cafetería', 'Eventos', 'Acerca de', 'Contacto'] },
          { title: 'Info', links: ['Cl. 39c #73-7', 'Laureles, Medellín', '317 515 9876', 'gerencia@semilla.com.co'] },
        ].map(col =>
          React.createElement('div', { key: col.title },
            React.createElement('div', {
              style: { fontFamily: 'Betm, sans-serif', fontWeight: 600, fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#c09762', marginBottom: 16 }
            }, col.title),
            React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 10 } },
              ...col.links.map(link =>
                React.createElement('span', {
                  key: link,
                  style: { fontFamily: 'Betm, sans-serif', fontWeight: 300, fontSize: 12, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.02em' }
                }, link)
              )
            )
          )
        )
      ),
      // Hours strip
      React.createElement('div', {
        style: { borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '16px 0', marginBottom: 24, display: 'flex', gap: 40 }
      },
        React.createElement('span', { style: { fontFamily: 'Betm, sans-serif', fontWeight: 400, fontSize: 9, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#c09762' } }, 'Horario'),
        ...['Lun – Vie: 7:30am – 7pm', 'Sáb: 7:30am – 6pm', 'Dom: 9am – 4pm'].map(h =>
          React.createElement('span', { key: h, style: { fontFamily: 'Betm, sans-serif', fontWeight: 300, fontSize: 11, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.04em' } }, h)
        )
      ),
      // Bottom bar
      React.createElement('div', {
        style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' }
      },
        React.createElement('span', {
          style: { fontFamily: 'Betm, sans-serif', fontWeight: 300, fontSize: 10, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.3)' }
        }, '© 2020–2026 Semilla Café Coworking S.A.S.'),
        React.createElement('div', { style: { display: 'flex', gap: 20 } },
          ...['Instagram', 'Facebook'].map(s =>
            React.createElement('a', {
              key: s,
              href: s === 'Instagram' ? 'https://www.instagram.com/semillacafecoworking' : 'https://www.facebook.com/semillacafecoworking',
              target: '_blank',
              style: { fontFamily: 'Betm, sans-serif', fontWeight: 400, fontSize: 9, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }
            }, s)
          )
        )
      )
    );
  }
});
