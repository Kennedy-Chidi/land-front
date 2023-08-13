<template>
  <div class="plan-page">
    <home-light-navigation />
    <div
      class="container-new1 _2 e"
      :style="{ backgroundImage: `url(${FILE_URL}/${banner.bannerImage})` }"
    >
      <div class="div-block-279"><h1 class="heading-67">Plan</h1></div>
    </div>
    <div class="plan-1">
      <div class="container-new1">
        <div class="div-block-394">
          <div v-for="plan in plans" :key="plan._id" class="div-block-395">
            <h1 class="heading-120">{{ plan.planName }}</h1>
            <div class="div-block-396"></div>
            <div class="div-block-397">
              <h1 class="heading-121">%</h1>
              <h1 class="heading-121 _2">{{ plan.planPercentage }}</h1>
              <h1 class="heading-121">Daily</h1>
            </div>
            <div class="div-block-396 _2"></div>
            <div class="div-block-399">
              <div class="div-block-398">
                <img
                  src="/images/approved-accept-icon.svg"
                  loading="lazy"
                  alt=""
                  class="image-103"
                />
              </div>
              <div class="div-block-400">
                <h1 class="heading-122">Minimum Investment:</h1>
                <h1 class="heading-123">${{ plan.planMinimum }}</h1>
              </div>
            </div>
            <div class="div-block-399">
              <div class="div-block-398">
                <img
                  src="/images/approved-accept-icon.svg"
                  loading="lazy"
                  alt=""
                  class="image-103"
                />
              </div>
              <div class="div-block-400">
                <h1 class="heading-122">Maximum Investment:</h1>
                <h1 class="heading-123" v-if="plan.planMaximum > 0">
                  ${{ formatMoney(plan.planMaximum) }}
                </h1>
                <h1 class="heading-123" v-else>Unlimited</h1>
              </div>
            </div>
            <div class="div-block-399">
              <div class="div-block-398">
                <img
                  src="/images/approved-accept-icon.svg"
                  loading="lazy"
                  alt=""
                  class="image-103"
                />
              </div>
              <div class="div-block-400">
                <h1 class="heading-122">Investment Duration:</h1>
                <h1 class="heading-123">{{ plan.planDuration }} Days.</h1>
              </div>
            </div>
            <div class="div-block-401">
              <a href="#" class="button-25 w-button">Invest Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <testimonial />
    <home-footer />
  </div>
</template>

<script>
import HomeFooter from "../components/HomeFooter.vue";
import HomeLightNavigation from "../components/HomeLightNavigation.vue";
import Testimonial from "../components/Testimonial.vue";
export default {
  data() {
    return {
      banner: "",
      plans: [],
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

    formatMoney(amount) {
      if (amount == "" || amount == null || amount == undefined) {
        return "0.00";
      } else {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    },

    async getPlans() {
      try {
        const result = await this.$axios.get(`/plans`);
        this.plans = result.data.data;
        this.loadScript();
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async getBanner() {
      try {
        const result = await this.$axios.get(
          `/banner/?bannerCategory=Services`
        );
        this.banner = result.data.data[0];
      } catch (err) {
        console.log(err);
      }
    },
  },

  mounted() {
    this.getBanner();
    this.getPlans();
  },

  computed: {
    FILE_URL() {
      return this.$store.state.fileURL;
    },
  },
  components: { HomeLightNavigation, HomeFooter, Testimonial },
};
</script>

<style></style>
