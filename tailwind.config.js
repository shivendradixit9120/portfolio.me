/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#101114',
        surface: {
          DEFAULT: '#17191F',
          subtle: '#14161B',
          hover: '#1F222A',
          card: '#16181E',
        },
        primary: '#F4F5F7',
        secondary: '#A6AAB4',
        accent: {
          lime: '#B7FF5A',
          limeHover: '#A4EC49',
          blue: '#65C8FF',
          blueHover: '#4DB9F2',
        },
        border: {
          DEFAULT: '#262930',
          subtle: 'rgba(255, 255, 255, 0.08)',
          glow: 'rgba(183, 255, 90, 0.25)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'glow-lime': '0 0 25px -5px rgba(183, 255, 90, 0.2)',
        'glow-blue': '0 0 25px -5px rgba(101, 200, 255, 0.15)',
        'card-subtle': '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(183, 255, 90, 0.08) 0%, transparent 70%)',
        'grid-pattern': 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
}
