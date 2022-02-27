module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
            @import "@/assets/var.scss";
            `,
      },
    },
  },
}