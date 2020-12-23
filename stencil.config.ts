import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

const tailwindConfig = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/components/purged-button/*.tsx', './src/components/purged-button/*.css', './src/index.html'],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

export const config: Config = {
  namespace: 'stencil-tailwind',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    postcss({
      plugins: [
        autoprefixer(),
        tailwindcss({
          purge: [],
          darkMode: false, // or 'media' or 'class'
          theme: {
            extend: {},
          },
          variants: {},
          plugins: [],
        }),
        purgecss,
      ],
    }),
  ],
};
