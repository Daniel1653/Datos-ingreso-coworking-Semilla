/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Forest Green — Primary Dark
          forest: {
            DEFAULT: '#102621', // Canonical
            900: '#081a16',
            800: '#102621',
            700: '#163530',
            600: '#1c453e',
            400: '#357a6e',
            200: '#a0ccc6',
            100: '#d2e9e6',
          },
          // Olive — Secondary Green
          olive: {
            DEFAULT: '#4e502a', // Canonical
            900: '#2e2f15',
            800: '#3c3e20',
            700: '#4e502a',
            500: '#6e7140',
            300: '#aaad80',
            100: '#dcdec8',
          },
          // Gold — Warm Accent
          gold: {
            DEFAULT: '#c09762', // Canonical
            900: '#6e5227',
            700: '#967535',
            500: '#c09762',
            300: '#d9be96',
            100: '#f0e4cc',
          },
          // Cream — Background/Surface
          cream: {
            DEFAULT: '#fbf0e0', // Canonical
            900: '#bfad95',
            700: '#d6c4a8',
            500: '#eadcc4',
            300: '#f3e8d2',
            100: '#fbf0e0',
            50: '#fdf8f0',
            custom: '#FBF3E7',
          },
        },
      },
      fontFamily: {
        sans: ['Betm', 'system-ui', 'sans-serif'],
        display: ['Betm', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tight: '-0.02em',
        normal: '0em',
        wide: '0.08em',
        wider: '0.14em',
        widest: '0.22em', // SEMILLA wordmark
      },
      borderRadius: {
        none: '0',
        sm: '4px',
        md: '8px',
        lg: '16px',
        xl: '24px',
      },
      boxShadow: {
        sm: '0 1px 3px rgba(16,49,43,0.08)',
        md: '0 4px 16px rgba(16,49,43,0.10)',
        lg: '0 8px 32px rgba(16,49,43,0.14)',
        card: '0 2px 12px rgba(16,49,43,0.08)',
      },
    },
  },
  plugins: [],
}
