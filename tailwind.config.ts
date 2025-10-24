import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4B7BEC',
        secondary: '#3E2AD1',
        accent: '#71F6F9'
      },
      fontFamily: {
        heading: ['var(--font-sora)'],
        body: ['var(--font-inter)']
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(113,246,249,0.3), rgba(75,123,236,0.2))',
        'smoke-1': 'radial-gradient(circle at 20% 20%, rgba(113,246,249,0.25), transparent 55%)',
        'smoke-2': 'radial-gradient(circle at 80% 30%, rgba(75,123,236,0.25), transparent 55%)'
      },
      boxShadow: {
        prism: '0 0 40px rgba(113, 246, 249, 0.35), inset 0 0 25px rgba(62, 42, 209, 0.35)'
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' }
        },
        'smoke-drift': {
          '0%': { transform: 'translate3d(-10%, 5%, 0) scale(1)' },
          '50%': { transform: 'translate3d(10%, -5%, 0) scale(1.1)' },
          '100%': { transform: 'translate3d(-10%, 5%, 0) scale(1)' }
        }
      },
      animation: {
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 6s ease-in-out infinite',
        'smoke-drift': 'smoke-drift 18s ease-in-out infinite'
      }
    }
  },
  plugins: []
};

export default config;
