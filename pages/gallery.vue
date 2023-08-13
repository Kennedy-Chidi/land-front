<template>
  <div class="gallery-page">
    <home-light-navigation />
    <div class="container-new1 _2 a">
      <div class="div-block-405">
        <div class="div-block-279"><h1 class="heading-67">Gallery</h1></div>
      </div>
    </div>
    <div class="gallery-1">
      <div class="container-new1">
        <div>
          <h1 class="heading-118">Discover Our Featured Listings</h1>
          <h1 class="heading-119">
            These featured listings contain exclusive real estate opportunities
            within the city
          </h1>
        </div>
        <div class="div-block-382">
          <div
            v-for="product in houses"
            :key="product._id"
            class="div-block-383"
          >
            <a href="#" class="link-block-25 w-inline-block"
              ><img
                :src="`${FILE_URL}/${product.image}`"
                loading="lazy"
                sizes="(max-width: 479px) 96vw, (max-width: 767px) 46vw, (max-width: 991px) 47vw, (max-width: 1279px) 30vw, 32vw"
                :srcset="`
                  ${FILE_URL}/${product.image} 500w,
                  ${FILE_URL}/${product.image} 500w
                `"
                alt=""
                class="image-101"
            /></a>
            <div class="div-block-385">
              <div class="div-block-393">
                <a href="#" class="link-block-26 w-inline-block"
                  ><h1 class="heading-113">{{ product.title }}</h1></a
                ><a href="#" class="button-23 w-button">Buy</a
                ><a href="#" class="button-23 w-button">Rent</a>
              </div>
              <div class="div-block-384">
                <div class="div-block-389">
                  <h1 class="heading-114">{{ product.subtitle }}</h1>
                </div>
                <h1 class="heading-115">${{ formatMoney(product.price) }}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!----<div class="gallery-2">
      <div class="container-new1">
        <div>
          <h1 class="heading-118">Explore Apartment Types</h1>
          <h1 class="heading-119">
            Explore all the different types of apartments so you can choose the
            best option for you
          </h1>
        </div>
        <div class="div-block-390">
          <div class="div-block-383 b">
            <a href="#" class="link-block-25 w-inline-block"
              ><img
                src="/images/town-home.jpg"
                loading="lazy"
                sizes="(max-width: 479px) 96vw, (max-width: 767px) 46vw, (max-width: 991px) 47vw, (max-width: 1279px) 46vw, 48vw"
                srcset="
                  /images/town-home-500.jpg   500w,
                  /images/town-home-800.jpg   800w,
                  /images/town-home-1080.jpg 1080w,
                  /images/town-home.jpg      1100w
                "
                alt=""
                class="image-101"
            /></a>
            <div class="div-block-385">
              <a href="#" class="link-block-26 b w-inline-block"
                ><h1 class="heading-113 b">Town Home</h1>
                <h1 class="heading-114 b">20 Properties</h1></a
              >
            </div>
          </div>
          <div class="div-block-383 b">
            <a href="#" class="link-block-25 w-inline-block"
              ><img
                src="/images/apartments.jpg"
                loading="lazy"
                sizes="(max-width: 479px) 96vw, (max-width: 767px) 46vw, (max-width: 991px) 47vw, (max-width: 1279px) 46vw, 48vw"
                srcset="
                  /image/apartments-500.jpg    500w,
                  /images/apartments-800.jpg   800w,
                  /images/apartments-1080.jpg 1080w,
                  /images/apartments.jpg      1100w
                "
                alt=""
                class="image-101"
            /></a>
            <div class="div-block-385">
              <a href="#" class="link-block-26 b w-inline-block"
                ><h1 class="heading-113 b">Apartments</h1>
                <h1 class="heading-114 b">19 Properties</h1></a
              >
            </div>
          </div>
          <div class="div-block-383 b _2">
            <a href="#" class="link-block-25 w-inline-block"
              ><img
                src="/images/houses.jpg"
                loading="lazy"
                sizes="(max-width: 479px) 96vw, (max-width: 767px) 46vw, (max-width: 991px) 47vw, (max-width: 1279px) 46vw, 48vw"
                srcset="/images/houses-500.jpg 500w, /images/houses.jpg 520w"
                alt=""
                class="image-101"
            /></a>
            <div class="div-block-385">
              <a href="#" class="link-block-26 b w-inline-block"
                ><h1 class="heading-113 b">Houses</h1>
                <h1 class="heading-114 b">20 Properties</h1></a
              >
            </div>
          </div>
          <div class="div-block-383 b _2">
            <a href="#" class="link-block-25 w-inline-block"
              ><img
                src="/images/studio.jpg"
                loading="lazy"
                sizes="(max-width: 479px) 96vw, (max-width: 767px) 46vw, (max-width: 991px) 47vw, (max-width: 1279px) 46vw, 48vw"
                srcset="/images/studio-500.jpg 500w, /images/studio.jpg 520w"
                alt=""
                class="image-101"
            /></a>
            <div class="div-block-385">
              <a href="#" class="link-block-26 b w-inline-block"
                ><h1 class="heading-113 b">Studio</h1>
                <h1 class="heading-114 b">12 Properties</h1></a
              >
            </div>
          </div>
          <div class="div-block-383 b l">
            <a href="#" class="link-block-25 w-inline-block"
              ><img
                src="/images/offices.jpg"
                loading="lazy"
                sizes="(max-width: 479px) 96vw, (max-width: 767px) 46vw, (max-width: 991px) 47vw, (max-width: 1279px) 46vw, 48vw"
                srcset="
                  /images/offices-500.jpg   500w,
                  /images/offices-800.jpg   800w,
                  /images/offices-1080.jpg 1080w,
                  /images/offices.jpg      1399w
                "
                alt=""
                class="image-101"
            /></a>
            <div class="div-block-385">
              <a href="#" class="link-block-26 b w-inline-block"
                ><h1 class="heading-113 b">Offices</h1>
                <h1 class="heading-114 b">20 Properties</h1></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>-->

    <div class="gallery-3">
      <div class="container-new1">
        <div>
          <h1 class="heading-118">Properties For Rent</h1>
          <h1 class="heading-119">
            Search over 2000 properties to rent from the top agents in the
            country
          </h1>
        </div>
        <div class="div-block-391">
          <div v-for="rent in rents" :key="rent._id" class="div-block-383 c _2">
            <a href="#" class="link-block-25 w-inline-block"
              ><img
                :src="`${FILE_URL}/${rent.image}`"
                loading="lazy"
                sizes="(max-width: 479px) 96vw, (max-width: 767px) 95vw, (max-width: 991px) 47vw, (max-width: 1279px) 30vw, 32vw"
                :srcset="`
                ${FILE_URL}/${rent.image} 500w,
                ${FILE_URL}/${rent.image}     500w
                `"
                alt=""
                class="image-101"
            /></a>
            <div class="div-block-385">
              <div class="div-block-393">
                <a href="#" class="link-block-26 w-inline-block"
                  ><h1 class="heading-113">{{ rent.title }}</h1></a
                ><a href="#" class="button-23 w-button">Buy</a
                ><a href="#" class="button-23 w-button">Rent</a>
              </div>
              <div class="div-block-384">
                <div class="div-block-389">
                  <h1 class="heading-114">{{ rent.subtitle }}</h1>
                </div>
                <h1 class="heading-115">${{ formatMoney(rent.price) }}</h1>
              </div>
            </div>
          </div>
        </div>
        <div class="div-block-392">
          <a href="#" class="button-22 w-button">View More</a>
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
      houses: [],
      rents: [],

      sort: "-time",
      field: "",
      limit: 15,
      resultLength: "",
      currentPage: 1,
      pages: function () {
        let array = [];
        let x = Math.ceil(this.resultLength / this.limit);
        for (let i = 0; i < x; i++) {
          array.push("i");
        }
        return array;
      },
    };
  },
  methods: {
    formatMoney(amount) {
      if (amount == "" || amount == null || amount == undefined) {
        return "0.00";
      } else {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    },

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

    prepareProduct(product) {
      this.editingId = product._id;
      this.editingState = true;
      this.image = product.image;
      this.title = product.title;
      this.subtitle = product.subtitle;
      this.content = product.content;
      this.price = product.price;
      this.category = product.category;
      this.time = product.time;
    },

    getHouses(data) {
      data.forEach((el) => {
        if (el.category == "House") {
          this.houses.push(el);
        }
      });
    },

    getRents(data) {
      data.forEach((el) => {
        if (el.category == "Rent") {
          this.rents.push(el);
        }
      });
    },

    async getPrducts() {
      const query = `?limit=${this.limit}&page=${this.currentPage}&sort=${this.sort}`;
      try {
        const result = await this.$axios.get(`/products/${query}`);
        this.getRents(result.data.data);
        this.getHouses(result.data.data);
        this.resultLength = result.data.resultLength;
        this.loadScript();
      } catch (err) {
        console.log(err.response.data.message);
      }
    },
  },
  mounted() {
    this.getPrducts();
  },
  computed: {
    FILE_URL() {
      return this.$store.state.fileURL;
    },
  },
};
</script>

<style></style>
