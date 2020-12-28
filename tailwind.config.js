
const plugin = require('tailwindcss/plugin')


module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      "surface" : "#121212",
      "on-surface-high": "rgba(255, 255, 255, 0.87)",
      "on-surface-medium": "rgba(255, 255, 255, 0.6)",
      "on-surface-disabled": "rgba(255, 255, 255, 0.38)",
      "on-primary-high": "#000000",
      "on-primary-medium": "rgba(0, 0, 0, 0.74)",
      "on-primary-disabled": "rgba(0, 0, 0, 0.38)",
      "primary-50": "#F2E7FE",
      "primary-100": "#DBB2FF",
      "primary-200": "#BB86FC",
      "primary-300": "#985EFF",
      "primary-400": "#7F39FB",
      "primary-500": "#6200EE",
      "primary-600": "#5600E8",
      "primary-700": "#3700B3",
      "primary-800": "#30009C",
      "primary-900": "#23036A",
      "secondary-50": "#C8FFF4",
      "secondary-100": "#70EFDE",
      "secondary-200": "#03DAC5",
      "secondary-300": "#00C4B4",
      "secondary-400": "#00B3A6",
      "secondary-500": "#01A299",
      "secondary-600": "#019592",
      "secondary-700": "#018786",
      "secondary-800": "#017374",
      "secondary-900": "#005457",
      "error": "#CF6679",
    },
    fontFamily: {
      sans: ['Source Sans Pro', 'sans-serif'],
    },
    extend: {},
  },
  variants: {},
  plugins: [
    // Add elevation utilities
    plugin(function({addUtilities}) {
      const elevations = {
        ".dp-1": {
          background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), #121212;',
          boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)",
        },
        ".dp-2": {
          background: "linear-gradient(0deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.07)), #121212",
          boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2)",
        },
        ".dp-3": {
          background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08)), #121212',
          boxShadow: "0px 3px 4px rgba(0, 0, 0, 0.14), 0px 3px 3px rgba(0, 0, 0, 0.12), 0px 1px 8px rgba(0, 0, 0, 0.2)",
        },
        ".dp-4": {
          background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09)), #121212',
          boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2)",
        },
        ".dp-6": {
          background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.11), rgba(255, 255, 255, 0.11)), #121212',
          boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 3px 5px rgba(0, 0, 0, 0.2)",
        },
        ".dp-8": {
          background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12)), #121212',
          boxShadow: "0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2)",
        },
        ".dp-12": {
          background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.14)), #121212',
          boxShadow: "0px 12px 17px rgba(0, 0, 0, 0.14), 0px 5px 22px rgba(0, 0, 0, 0.12), 0px 7px 8px rgba(0, 0, 0, 0.2)",
        },
        ".dp-16": {
          background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)), #121212;',
          boxShadow: "0px 16px 24px rgba(0, 0, 0, 0.14), 0px 6px 30px rgba(0, 0, 0, 0.12), 0px 8px 10px rgba(0, 0, 0, 0.2)",
        },
        ".dp-24": {
          background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16)), #121212;',
          boxShadow: "0px 24px 38px rgba(0, 0, 0, 0.14), 0px 9px 46px rgba(0, 0, 0, 0.12), 0px 11px 15px rgba(0, 0, 0, 0.2)",
        },

      }

      addUtilities(elevations)
    }),
  ],
};
