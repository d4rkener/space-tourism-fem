const { resolve } = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const { defineConfig } = require('vite');
// eslint-disable-next-line import/no-extraneous-dependencies
const { ViteAliases } = require('vite-aliases');

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        destination: resolve(__dirname, 'destination.html'),
      },
    },
  },
  plugins: [ViteAliases()],
});
