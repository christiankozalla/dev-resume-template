const { resolve } = require("path");

module.exports = {
  base: "/dev-resume-template/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        de: resolve(__dirname, "de/index.html"),
      },
    },
  },
};
