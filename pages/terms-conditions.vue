<template>
  <div class="faq-page">
    <home-light-navigation />
    <div
      class="container-new1 _2 j"
      :style="{ backgroundImage: `url(${FILE_URL}/${banner.bannerImage})` }"
    >
      <div class="div-block-409">
        <div class="div-block-279">
          <h1 class="heading-67">{{ terms.heading }}</h1>
        </div>
      </div>
    </div>

    <div class="about2">
      <div class="container-new1">
        <div v-html="terms.body" class="div-block-404 heading-125"></div>
      </div>
    </div>
    <home-footer />
  </div>
</template>

<script>
import HomeFooter from "../components/HomeFooter.vue";
export default {
  data() {
    return {
      terms: "",
      banner: "",
    };
  },
  methods: {
    loadScript() {
      if (!process.server) {
        let el = document.getElementById("script");

        if (el != undefined) {
          document.body.removeChild(el);
        }

        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "/script/home.js";
        script.async = true;
        script.id = "script";
        const app = document.querySelector("#footer");
        if (app) {
          app.appendChild(script);
        } else {
          console.error("Could not find app node to append script element");
        }
      }
    },

    async getTerms() {
      try {
        const result = await this.$axios.get("/terms");
        this.terms = result.data.data[0];
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async getBanner() {
      try {
        const result = await this.$axios.get(`/banner/?bannerCategory=Terms`);
        this.banner = result.data.data[0];
        this.loadScript();
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.getTerms();
    this.getBanner();
  },
  computed: {
    FILE_URL() {
      return this.$store.state.fileURL;
    },
  },
  components: { HomeFooter },
};
</script>

<style></style>
