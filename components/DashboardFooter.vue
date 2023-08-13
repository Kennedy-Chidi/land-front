<template>
  <div class="footer">
    <div class="down-logo-header">
      2023 Crypto Investment, All Right Reserved
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    setFileURL() {
      this.$store.commit("SET_URL", this.$config.FILE_URL);
    },
    loadScript() {
      if (!process.server) {
        let el1 = document.getElementById("translator");

        if (el1 != undefined) {
          document.body.removeChild(el1);
        }

        const scriptTranslate = document.createElement("script");
        scriptTranslate.type = "text/javascript";
        scriptTranslate.src =
          "https://translate.yandex.net/website-widget/v1/widget.js?widgetId=ytWidget&pageLang=en&widgetTheme=light&autoMode=false";
        scriptTranslate.async = true;
        scriptTranslate.id = "translator";
        const app = document.querySelector("#top");
        if (app) {
          app.appendChild(scriptTranslate);
        } else {
          console.error("Could not find app node to append script element");
        }
      }
    },
  },
  mounted() {
    this.loadScript();
    this.setFileURL();
  },
};
</script>

<style></style>
