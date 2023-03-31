/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        grey1: '#F5F5F5',
        grey2: '#E2E2E2',
        grey3: '#E4E4E0',
        grey4: '#C8C8C8',
        grey5: '#AFAFAF',
        grey6: '#9EA0A4',
        grey7: '#6E6E6E',
        grey8: '#505050',
        exito: '#00A541',
        error: '#E53939',
        errorHover: '#E54949',
        black02: 'rgba(0, 0, 0, 0.2)',
        black03: 'rgba(0, 0, 0, 0.3)',
        aidam: '#0C0992',
        aidam80: 'rgba(12, 9, 146, 0.8)',
        aidam70: 'rgba(12, 9, 146, 0.7)',
        aidamNav: 'rgba(31, 27, 183, 0.64)',
        aidamLightBlue: '#6BCAE2',
        aidamBlue: '#202266',
        aidamHover: '#b1b3e7',
        therapists: '#0B7EBE',
        redLogout: '#B81212',
      },
      aspectRatio: {
        'aidamImage': '961 / 850',
      },
      fontSize: {
        sl: ['7px', '10px'],
        xm: ['11px', '14px'],
        ss: ['14px', '16px'],
        ls: ['10px', '20px'],
        lm: ['15px', '18px'],
        lb: ['16px', '20px'],
        ln: ['18px', '24px'],
        lz: ['18px', '32px'],
        lx: ['19px', '24px'],
        xb: ['20px', '24px'],
        xg: ['20px', '20px'],
        xl1: ['24px', '20px'],
        xl2: ['24px', '30px'],
        '4.5xl': ['40px', '47px'],
      },
      fontFamily: {
        openSans: ["Open Sans", ...fontFamily.sans],
        quickSand: ["Quicksand", ...fontFamily.sans],
        libreBaskerville: ["Libre Baskerville", ...fontFamily.serif],
      },
      boxShadow: {
        card: '0px 4px 5px rgba(0, 0, 0, 0.25)',
        xg: '0 0 24px rgba(0, 0, 0, 0.2)',
        xm: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        active: 'inset 0px 0px 8px rgba(0, 0, 0, 0.24)',
      },
      height: {
        7.5: '30px',
        17.5: '70px',
        38: '150px',
      },
      margin: {
        5.5: '22px',
        23: '93px',
      },
      padding: {
        17.5: '70px',
      },
      screens: {
        'sd': '748px',
      },
    },
  },
  plugins: [],
};
