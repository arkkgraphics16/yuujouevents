const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}'],
  theme: {
    extend: {
      colors: {
        bg: '#060606',
        text: '#f5f5f5',
        blood: '#d10212',
        bloodDark: '#8a0007'
      },
      keyframes: {
        float: {
          '0%': { transform: 'translate3d(0, 0, 0) rotate(0deg)' },
          '50%': {
            transform:
              'translate3d(var(--tx, 12px), var(--ty, -18px), 0) rotate(var(--rot, 6deg))'
          },
          '100%': { transform: 'translate3d(0, 0, 0) rotate(0deg)' }
        },
        breathe: {
          '0%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1.1)' }
        }
      }
    }
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.animate-float-slow': {
          '--blob-float-name': 'float',
          '--blob-float-duration': 'var(--dur, 6s)',
          '--blob-float-delay': 'var(--delay, 0s)',
          '--blob-float-timing': 'ease-in-out',
          '--blob-float-iteration': 'infinite',
          '--blob-float-direction': 'alternate',
          '--blob-breathe-name': 'var(--blob-breathe-name, none)',
          '--blob-breathe-duration': 'var(--blob-breathe-duration, var(--breath-dur, 8s))',
          '--blob-breathe-delay': 'var(--blob-breathe-delay, var(--delay, 0s))',
          '--blob-breathe-timing': 'var(--blob-breathe-timing, ease-in-out)',
          '--blob-breathe-iteration': 'var(--blob-breathe-iteration, infinite)',
          '--blob-breathe-direction': 'var(--blob-breathe-direction, alternate)',
          'animation-name': 'var(--blob-float-name, none), var(--blob-breathe-name, none)',
          'animation-duration': 'var(--blob-float-duration, 6s), var(--blob-breathe-duration, 8s)',
          'animation-delay': 'var(--blob-float-delay, 0s), var(--blob-breathe-delay, 0s)',
          'animation-timing-function':
            'var(--blob-float-timing, ease-in-out), var(--blob-breathe-timing, ease-in-out)',
          'animation-iteration-count':
            'var(--blob-float-iteration, infinite), var(--blob-breathe-iteration, infinite)',
          'animation-direction':
            'var(--blob-float-direction, alternate), var(--blob-breathe-direction, alternate)'
        },
        '.animate-breathe': {
          '--blob-breathe-name': 'breathe',
          '--blob-breathe-duration': 'var(--breath-dur, 8s)',
          '--blob-breathe-delay': 'var(--delay, 0s)',
          '--blob-breathe-timing': 'ease-in-out',
          '--blob-breathe-iteration': 'infinite',
          '--blob-breathe-direction': 'alternate',
          '--blob-float-name': 'var(--blob-float-name, none)',
          '--blob-float-duration': 'var(--blob-float-duration, var(--dur, 6s))',
          '--blob-float-delay': 'var(--blob-float-delay, var(--delay, 0s))',
          '--blob-float-timing': 'var(--blob-float-timing, ease-in-out)',
          '--blob-float-iteration': 'var(--blob-float-iteration, infinite)',
          '--blob-float-direction': 'var(--blob-float-direction, alternate)',
          'animation-name': 'var(--blob-float-name, none), var(--blob-breathe-name, none)',
          'animation-duration': 'var(--blob-float-duration, 6s), var(--blob-breathe-duration, 8s)',
          'animation-delay': 'var(--blob-float-delay, 0s), var(--blob-breathe-delay, 0s)',
          'animation-timing-function':
            'var(--blob-float-timing, ease-in-out), var(--blob-breathe-timing, ease-in-out)',
          'animation-iteration-count':
            'var(--blob-float-iteration, infinite), var(--blob-breathe-iteration, infinite)',
          'animation-direction':
            'var(--blob-float-direction, alternate), var(--blob-breathe-direction, alternate)'
        }
      });
    })
  ]
};
