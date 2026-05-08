/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // SBB colors — values defined as CSS vars in app/globals.css
      colors: {
        sbb: {
          red:        'var(--sbb-red)',
          'red-125':  'var(--sbb-red-125)',
          'red-150':  'var(--sbb-red-150)',
          white:      'var(--sbb-white)',
          milk:       'var(--sbb-milk)',
          cloud:      'var(--sbb-cloud)',
          silver:     'var(--sbb-silver)',
          aluminum:   'var(--sbb-aluminum)',
          platinum:   'var(--sbb-platinum)',
          cement:     'var(--sbb-cement)',
          graphite:   'var(--sbb-graphite)',
          storm:      'var(--sbb-storm)',
          smoke:      'var(--sbb-smoke)',
          metal:      'var(--sbb-metal)',
          granite:    'var(--sbb-granite)',
          anthracite: 'var(--sbb-anthracite)',
          iron:       'var(--sbb-iron)',
          charcoal:   'var(--sbb-charcoal)',
          midnight:   'var(--sbb-midnight)',
          black:      'var(--sbb-black)',
          blue:       'var(--sbb-blue)',
          success:    'var(--sbb-success)',
          warning:    'var(--sbb-warning)',
          error:      'var(--sbb-error)',
          info:       'var(--sbb-info)',
        }
      },
      fontFamily: {
        // SBB uses system fonts for mobile apps
        sans: [
          'SBB Web',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      // Spacing, radius, shadows — values defined as CSS vars in app/globals.css
      spacing: {
        'sbb-xs':  'var(--sbb-space-xs)',
        'sbb-sm':  'var(--sbb-space-sm)',
        'sbb-md':  'var(--sbb-space-md)',
        'sbb-lg':  'var(--sbb-space-lg)',
        'sbb-xl':  'var(--sbb-space-xl)',
        'sbb-2xl': 'var(--sbb-space-2xl)',
      },
      borderRadius: {
        'sbb-sm': 'var(--sbb-radius-sm)',
        'sbb-md': 'var(--sbb-radius-md)',
        'sbb-lg': 'var(--sbb-radius-lg)',
        'sbb-xl': 'var(--sbb-radius-xl)',
      },
      boxShadow: {
        'sbb-card':   'var(--sbb-shadow-card)',
        'sbb-modal':  'var(--sbb-shadow-modal)',
        'sbb-button': 'var(--sbb-shadow-button)',
      },
      fontSize: {
        // SBB typography scale
        'sbb-xs': ['12px', { lineHeight: '16px' }],
        'sbb-sm': ['14px', { lineHeight: '20px' }],
        'sbb-base': ['16px', { lineHeight: '24px' }],
        'sbb-lg': ['18px', { lineHeight: '28px' }],
        'sbb-xl': ['20px', { lineHeight: '28px' }],
        'sbb-2xl': ['24px', { lineHeight: '32px' }],
        'sbb-3xl': ['32px', { lineHeight: '40px' }],
      },
    },
  },
  plugins: [],
}
