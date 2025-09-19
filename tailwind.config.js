// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#eeeaff',
          100: '#ccbeff',
          200: '#b39fff',
          300: '#9073ff',
          400: '#7a58ff',
          500: '#592eff',
          600: '#512ae8',
          700: '#3f21b5',
          800: '#31198c',
          900: '#25136b',
        },
        secondary: {
          50:  '#fff9ec',
          100: '#ffeec3',
          200: '#ffe5a5',
          300: '#ffd97c',
          400: '#ffc73c',
          500: '#e8b537',
          600: 'e8b537',
          700: '#b58d2b',
          800: '#8c6d21',
          900: '#6b5419',
        },
        tertiary: {
          50:  '#e9e9e9',
          100: '#bababa',
          200: '#999999',
          300: '#6a6a6a',
          400: '#4d4d4d',
          500: '#212121',
          600: '#1e1e1e',
          700: '#171717',
          800: '#121212',
          900: '#0e0e0e',
        },
      },
      fontSize: {
        // Headings
        'heading-1': ['64px', {}],  // (H1, bold)
        'heading-2': ['48px', {}],  // (H2, regular)
        'heading-3': ['32px', {}],  // (H3, bold)
        'heading-4': ['32px', {}],  // (H4, regular)
        // Subheadings
        'subheading-0': ['24px', { lineHeight: '36px' }], // (regular)
        'subheading-1': ['24px', { lineHeight: '36px' }], // (bold)
        'subheading-2': ['20px', {}],  // (bold)
        'subheading-3': ['20px', {}],  // (regular)
        // Titles
        'title-1': ['16px', {}],      // (bold, letter-spacing handled below)
        'title-2': ['16px', {}],      // (regular)
        'title-3': ['14px', {}],      // (bold)
        // Body text
        'text':      ['14px', {}],    // (regular)
        'caption':   ['12px', {}],    // (regular)
      },
      letterSpacing: {
        '05': '0.5px',  // for Title2, Title3, Text, Caption
        '1':  '1px',    // for Title1
      },
      lineHeight: {
        '36px': '36px', // for subheadings
      },
      fontFamily: {
        // Use the CSS variable from next/font (see app/layout.js below)
        'lato': ['var(--font-lato)', 'sans-serif'],
      },
    },
  },
  // (include your content paths here)
  plugins: [],
};
