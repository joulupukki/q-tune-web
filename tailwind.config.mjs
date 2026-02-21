/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#1a1a2e',
          surface: '#222238',
          card: '#2a2a42',
          border: '#3a3a50',
        },
        cream: {
          bg: '#faf8f5',
          surface: '#ffffff',
          muted: '#f0ede8',
          border: '#e8e4dd',
        },
        amber: {
          glow: '#c4903a',
          light: '#d4a054',
          dark: '#a87830',
        },
        text: {
          body: '#2d2d3f',
          heading: '#1a1a2e',
          muted: '#6b6b80',
        },
        success: '#3a8a4a',
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
