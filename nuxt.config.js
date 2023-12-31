export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Landmark Integrated Services",
    htmlAttrs: {
      lang: "en",
      "data-wf-domain": "landmarkintegratedservices.com",
      "data-wf-page": "63f2b1e4b222cb5b2d282ddb",
      "data-wf-site": "63f2b1e4b222cbe32c282dda",
    },

    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
      {
        content: "One of the best investment platform in Switzerland.",
        name: "description",
      },
      {
        content: "Welcome to Landmark Integrated Services",
        property: "og:title",
      },
      {
        content:
          "The best place to grow your capital and gain financial freedom.",
        property: "og:description",
      },
      {
        content: "https://landmarkintegratedservices/images/Landmark-Logo.png",
        property: "og:image",
      },
      {
        content: "Welcome Landmark Integrated Services",
        property: "twitter:title",
      },
      {
        content:
          "The best place to grow your capital and gain financial freedom.",
        property: "twitter:description",
      },
      {
        content: "https://landmarkintegratedservices/images/Landmark-Logo.png",
        property: "twitter:image",
      },
      { property: "og:type", content: "website" },
      { content: "summary_large_image", name: "twitter:card" },
      { content: "width=device-width, initial-scale=1", name: "viewport" },
      { content: "Webflow", name: "generator" },
    ],

    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", type: "text/css", href: "/css/main.css" },
      { rel: "stylesheet", type: "text/css", href: "/css/custom.css" },
      { rel: "stylesheet", type: "text/css", href: "/css/Dashboard.css" },
      {
        href: "/css/home.css",
        type: "text/css",
        rel: "stylesheet",
      },
      { href: "https://fonts.googleapis.com", rel: "preconnect" },
      {
        href: "https://fonts.gstatic.com",
        rel: "preconnect",
        crossorigin: "anonymous",
      },
      {
        href: "/favicon.ico",
        rel: "shortcut icon",
        type: "image/x-icon",
      },
      {
        href: "/favicon.ico",
        rel: "apple-touch-icon",
      },
    ],

    script: [
      {
        src: "https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js",
        type: "text/javascript",
      },
      {
        src: "/script/query.js",
        type: "text/javascript",
      },
      {
        src: "/script/smartSupp.js",
        type: "text/javascript",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/fontLoader.js", mode: "client" },
    { src: "~/plugins/clientFontLoader.js", mode: "client" },
    { src: "~/plugins/socket.io.js", ssr: false },
  ],

  router: {
    base: "/",
    middleware: ["isAuthenticated"],
  },

  auth: {
    strategies: {
      local: {
        // scheme: 'refresh'
        token: {
          property: "token",
          global: true,
          required: true,
          type: "Bearer",
        },
        user: {
          property: "user",
          autoFetch: true,
        },

        endpoints: {
          login: { url: "/users/login", method: "post" },
          logout: false,
          user: { url: "/users/get-user", method: "get" },
        },
      },
    },
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "@nuxtjs/auth"],

  // axios: {
  //   baseURL: process.env.API_DEV_URL,
  // },
  // publicRuntimeConfig: {
  //   FILE_URL: process.env.FILE_DEV_URL,
  // },

  axios: {
    baseURL: "https://land-production.up.railway.app/api",
  },
  publicRuntimeConfig: {
    FILE_URL: "https://land-production.up.railway.app/uploads",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  target: "static",
};
