import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,js,jsx,html}'],
  theme: {
    extend: {
      fontSize: {
        14: 'var(--text-14)',
        16: 'var(--text-16)',
        18: 'var(--text-18)',
        20: 'var(--text-20)',
        24: 'var(--text-24)',
        28: 'var(--text-28)',
        32: 'var(--text-32)',
        40: 'var(--text-40)',
      },
      colors: {
        white: 'var(--color-white)',
        black: 'var(--color-black)',

        grey: {
          100: 'var(--color-grey-100)',
          300: 'var(--color-grey-300)',
          400: 'var(--color-grey-400)',
          500: 'var(--color-grey-500)',
          600: 'var(--color-grey-600)',
          700: 'var(--color-grey-700)',
          800: 'var(--color-grey-800)',
          900: 'var(--color-grey-900)',
        },

        success: 'var(--color-success)',
        danger: 'var(--color-danger)',
        warning: 'var(--color-warning)',

        snow: 'var(--color-snow)',
        pink: 'var(--color-pink)',
        red: 'var(--color-red)',
        orange: 'var(--color-orange)',
        yellow: 'var(--color-yellow)',
        blue: 'var(--color-blue)',

        kakao: 'var(--color-kakao)',
        naver: 'var(--color-naver)',
        apple: 'var(--color-apple)',
      },
    },
  },
  plugins: [],
};

export default config;
