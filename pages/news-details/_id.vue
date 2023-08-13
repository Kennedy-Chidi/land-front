<template>
  <div class="about-us-page">
    <home-light-navigation />
    <div
      class="container-new1 _2"
      :style="{ backgroundImage: `url(${FILE_URL}/${blog.banner})` }"
    >
      <div class="div-block-408">
        <div class="div-block-279">
          <h1 class="heading-67">{{ blog.title }}</h1>
        </div>
      </div>
    </div>

    <div class="about5">
      <div class="container-new1">
        <div class="div-block-283">
          <div class="div-block-284 full-news">
            <h1 class="heading-72">{{ blog.subtitle }}</h1>
            <div class="text-block-79" v-html="blog.content"></div>
          </div>
        </div>
      </div>
    </div>

    <home-footer />
  </div>
</template>

<script>
import HomeFooter from "../../components/HomeFooter.vue";
export default {
  data() {
    return {
      blog: "",
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

    async getBlog(id) {
      try {
        const result = await this.$axios.get(`/blog/${id}`);
        this.blog = result.data.data;
        this.loadScript();
      } catch (err) {
        console.log(err.response.data);
      }
    },
  },
  mounted() {
    this.getBlog(this.$route.params.id);
  },
  computed: {
    FILE_URL() {
      return this.$store.state.fileURL;
    },
  },
  components: { HomeFooter },
};
</script>

<style>
.div-block-284.full-news {
  width: 100%;
  max-width: 1000px;
}
</style>
