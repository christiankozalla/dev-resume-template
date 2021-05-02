const { resolve } = require("path");

module.exports = {
  base: "/cv-template/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        de: resolve(__dirname, "de/index.html"),
      },
    },
  },
};
