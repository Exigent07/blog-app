/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        headings: 'var(--font-headings)',
        body: 'var(--font-body)',
        mono: 'var(--font-mono)',
        accent: 'var(--font-accent)',
        secondary: 'var(--font-secondary)',
        display: 'var(--font-display)',
        logo: 'var(--font-logo)'
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        border: 'var(--border)',
        grayLight: 'var(--gray-light)',
        grayMedium: 'var(--gray-medium)',
        grayDark: 'var(--gray-dark)',

        accent: 'var(--accent)',
        secondaryAccent: 'var(--secondary-accent)',
        accentMuted: 'var(--accent-muted)',
        danger: 'var(--danger)',
        warning: 'var(--warning)',
        success: 'var(--success)',
        info: 'var(--info)',
      },
      boxShadow: {
        focus: '0 0 0 var(--focus-ring)',
      },
      opacity: {
        hover: 'var(--hover-opacity)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar'),
    require('tailwindcss-animate'),
  ],
  variants: {
    scrollbar: ['rounded'],
  },
};
