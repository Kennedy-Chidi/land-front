<template>
  <div
    data-delay="4000"
    data-animation="slide"
    class="slider-2 w-slider"
    data-autoplay="true"
    data-easing="ease"
    data-hide-arrows="false"
    data-disable-swipe="false"
    data-autoplay-limit="0"
    data-nav-spacing="3"
    data-duration="500"
    data-infinite="true"
  >
    <div class="w-slider-mask" v-if="reviews">
      <div class="slide w-slide" v-for="review in reviews" :key="review._id">
        <div class="container-new1">
          <div class="div-block-235">
            <div class="div-block-234">
              <img
                :src="`${FILE_URL}/${review.image}`"
                loading="lazy"
                alt=""
                class="image-74"
              />
            </div>
            <div class="text-block-56">
              {{ review.content }}
            </div>
            <h1 class="heading-55">{{ review.username }}</h1>
            <h1 class="heading-56">Investor</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="left-arrow-2 w-slider-arrow-left">
      <img
        src="https://uploads-ssl.webflow.com/63285dac88280ce08f0a9677/6358ece12749b88d77002983_Vector%20(1).svg"
        loading="lazy"
        alt=""
        class="image-73"
      />
    </div>
    <div class="right-arrow-2 w-slider-arrow-right">
      <img
        src="https://uploads-ssl.webflow.com/63285dac88280ce08f0a9677/6358ede42749b85419003355_Vector%20(2).svg"
        loading="lazy"
        alt=""
        class="image-73"
      />
    </div>
    <div class="w-slider-nav w-round"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reviews: [],
    };
  },
  computed: {
    FILE_URL() {
      return this.$store.state.fileURL;
    },
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

    async getReviews() {
      try {
        const result = await this.$axios.get("/review");
        this.reviews = await result.data?.data;
        this.loadScript();
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.getReviews();
  },
};
</script>

<style></style>
