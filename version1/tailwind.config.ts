import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#03030a',
          900: '#0a0a14',
          800: '#10101e',
          700: '#1a1a2e',
          600: '#252540',
        },
        accent: {
          DEFAULT: '#0055FF',
          light: '#3380FF',
          dark: '#0044CC',
          glow: '#0066FF20',
        },
        surface: {
          DEFAULT: '#ffffff08',
          hover: '#ffffff12',
          border: '#ffffff15',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px #0055FF20' },
          '100%': { boxShadow: '0 0 40px #0055FF40' },
        },
      },
    },
  },
  plugins: [],
}
export default config
