<template>
  <div class="faq-page">
    <home-light-navigation />
    <div
      class="container-new1 _2 j"
      :style="{ backgroundImage: `url(${FILE_URL}/${banner.bannerImage})` }"
    >
      <div class="div-block-409">
        <div class="div-block-279"><h1 class="heading-67">FAQ</h1></div>
      </div>
    </div>

    <div class="about2">
      <div class="container-new1">
        <div
          v-for="category in faqCategories"
          :key="category._id"
          class="div-block-404"
        >
          <h1 class="heading-124">{{ category }}</h1>
          <div class="div-block-402"></div>
          <div
            v-for="faq in filteredFAQ(category)"
            :key="faq._id"
            class="dropdown w-dropdown"
          >
            <div
              @click="toggleQuestion(faq)"
              class="dropdown-toggle w-dropdown-toggle"
            >
              <div class="w-icon-dropdown-toggle"></div>
              <div class="text-block-100">{{ faq.question }}</div>
            </div>
            <nav v-if="faq.checked" class="dropdown-list w-dropdown-list">
              <div class="div-block-403">
                <h1 class="heading-125" v-html="faq.answer"></h1>
              </div>
            </nav>
          </div>
        </div>
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
      faqCategories: [],
      faqs: [],
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

    filteredFAQ(data) {
      return this.faqs.filter((item) => item.category === data);
    },

    getFaqCategories(data) {
      this.faqCategories = [...new Set(data.map((item) => item.category))];
    },

    toggleQuestion(question) {
      this.checkFAQs(this.faqs);
      question.checked = !question.checked;
    },

    checkFAQs(data) {
      data.forEach((el) => {
        el.checked = false;
      });
      return data;
    },

    async getFaqs() {
      try {
        const result = await this.$axios.get("/faq/?limit=60");
        this.getFaqCategories(result.data.data);
        this.faqs = await this.checkFAQs(result.data.data);
        this.loadScript();
        console.log(this.faqCategories);
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async getBanner() {
      try {
        const result = await this.$axios.get(`/banner/?bannerCategory=FAQ`);
        this.banner = result.data.data[0];
        this.loadScript();
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.getFaqs();
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
