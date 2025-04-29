module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        text: 'var(--color-text)',
        accent: 'var(--color-accent)',
        'accent-light': 'var(--color-accent-light)',
        muted: 'var(--color-muted)',
        border: 'var(--color-border)',
        'background-white': 'var(--color-background-white)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.text'),
            a: {
              color: theme('colors.accent'),
              '&:hover': {
                color: theme('colors.accent-light'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [],
}