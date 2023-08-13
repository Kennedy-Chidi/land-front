<template>
  <div class="about-us-page">
    <home-light-navigation />
    <div
      class="container-new1 _2"
      :style="{ backgroundImage: `url(${FILE_URL}/${banner.bannerImage})` }"
    >
      <div class="div-block-408">
        <div class="div-block-279">
          <h1 class="heading-67">About Us</h1>
        </div>
      </div>
    </div>
    <div class="about1">
      <div class="container-new1">
        <div>
          <h1 class="heading-68">Who is Landmark Integrated Services?</h1>
          <div class="text-block-71">
            <em class="italic-text-7">{{ banner.bannerTitle }}</em>
          </div>
        </div>
      </div>
    </div>
    <div class="about5">
      <div class="container-new1">
        <div class="div-block-283">
          <div class="div-block-284">
            <h1 class="heading-72">About Us</h1>
            <div class="text-block-79" v-html="about.content"></div>
          </div>
          <div class="div-block-218">
            <img
              :src="`${FILE_URL}/${cert}`"
              loading="lazy"
              sizes="(max-width: 479px) 95vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, (max-width: 1279px) 50vw, 44vw"
              :srcset="`${FILE_URL}/${cert} 500w, ${FILE_URL}/${cert} 530w`"
              alt=""
              class="image-71"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="about3">
      <div class="container-new1">
        <div>
          <div class="div-block-231 _2">
            <div class="div-block-232 _2" v-if="events[0]">
              <h1 class="heading-54 _2">
                <strong class="bold-text-5">{{ events[0].title }}</strong>
              </h1>
              <div class="text-block-55 _2" v-html="events[0].content"></div>
              <div class="div-block-272">
                <div class="div-block-270 _2"></div>
                <div class="div-block-271"></div>
                <h1 class="heading-66 _2" v-if="events[0]">
                  Q1 {{ new Date(events[0].time).getFullYear() }}
                </h1>
              </div>
            </div>

            <div class="div-block-233 _2" v-if="events[2]">
              <h1 class="heading-54 _2">
                <strong class="bold-text-6">{{ events[2].title }}</strong>
              </h1>
              <div class="text-block-73" v-html="events[2].content"></div>
              <div class="div-block-272">
                <div class="div-block-270 _2"></div>
                <div class="div-block-271"></div>
                <h1 class="heading-66 _2">
                  Q3 {{ new Date(events[2].time).getFullYear() }}
                </h1>
              </div>
            </div>

            <div class="div-block-232 d _2" v-if="events[4]">
              <h1 class="heading-54 _2">
                <strong class="bold-text-7">{{ events[4].title }}</strong>
              </h1>
              <div class="text-block-74" v-html="events[4].content"></div>
              <div class="div-block-272">
                <div class="div-block-270 _2"></div>
                <div class="div-block-271"></div>
                <h1 class="heading-66 _2">
                  Q5 {{ new Date(events[4].time).getFullYear() }}
                </h1>
              </div>
            </div>
          </div>
          <div class="div-block-267 _2">
            <img
              src="/images/arrow-thinchevron-left.svg"
              loading="lazy"
              width="21"
              alt=""
              class="image-80 b _2"
            /><img
              src="/images/arrow-thinchevron-right.svg"
              loading="lazy"
              width="21"
              alt=""
              class="image-80 _2"
            />
            <div class="div-block-269 _2"></div>
          </div>
          <div class="div-block-231 b _2">
            <div class="div-block-232 b _2" v-if="events[1]">
              <h1 class="heading-54 _2">
                <strong class="bold-text-8">{{ events[1].title }}</strong>
              </h1>
              <div class="text-block-75" v-html="events[1].content"></div>
              <div class="div-block-272 b">
                <h1 class="heading-66 _2">
                  Q2 {{ new Date(events[1].time).getFullYear() }}
                </h1>
                <div class="div-block-271"></div>
                <div class="div-block-270 _2"></div>
              </div>
            </div>

            <div class="div-block-232 c _2" v-if="events[3]">
              <h1 class="heading-54 _2">
                <strong class="bold-text-9">{{ events[3].title }}</strong>
              </h1>
              <div class="text-block-76" v-html="events[3].content"></div>
              <div class="div-block-272 b">
                <h1 class="heading-66 _2">
                  Q4 {{ new Date(events[4].time).getFullYear() }}
                </h1>
                <div class="div-block-271"></div>
                <div class="div-block-270 _2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="about4">
      <div class="container-new1">
        <div>
          <h1 class="heading-71">Our team</h1>
          <div class="text-block-77">
            <em class="italic-text-5">
              We present you our executive staffs in charge of the execution of
              our daily, weekly, monthly and yearly decisions.
            </em>
          </div>
        </div>
      </div>
      <div class="div-block-236 _2">
        <div v-for="staff in staffs" :key="staff._id" class="div-block-237">
          <div class="div-block-238">
            <img
              :src="`${FILE_URL}/${staff.image}`"
              loading="lazy"
              alt=""
              class="image-75"
            />
          </div>
          <h1 class="heading-57 _2">{{ staff.name }}</h1>
          <h1 class="heading-58 _2">{{ staff.position }}</h1>
          <div class="text-block-57 _2">
            {{ staff.quote }}
          </div>
        </div>
      </div>
    </div>

    <div class="about2">
      <div class="container-new1">
        <div class="div-block-282">
          <div class="div-block-280">
            <div class="div-block-281">
              <img
                src="/images/custom-icon-1.png"
                loading="lazy"
                alt=""
                class="image-82"
              />
            </div>
            <h1 class="heading-70">Our Solution</h1>
            <div class="text-block-72">
              Revolutionize Your Portfolio with Landmark Integrated Services'
              Innovative Investment Solutions.
            </div>
          </div>
          <div class="div-block-280">
            <div class="div-block-281">
              <img
                src="/images/custom-icon-2.png"
                loading="lazy"
                alt=""
                class="image-82"
              />
            </div>
            <h1 class="heading-70">Daily Profits</h1>
            <div class="text-block-72">
              Maximize Your Returns with Landmark Integrated Services' Proven
              Track Record of Profitable Investments.
            </div>
          </div>
          <div class="div-block-280">
            <div class="div-block-281">
              <img
                src="/images/custom-icon-3.png"
                loading="lazy"
                alt=""
                class="image-82"
              />
            </div>
            <h1 class="heading-70">Global Network</h1>
            <div class="text-block-72">
              Join Landmark Integrated Services' Extensive Network of Successful
              Investors and connect to our success.
            </div>
          </div>
          <div class="div-block-280">
            <div class="div-block-281">
              <img
                src="/images/custom-icon-4.png"
                loading="lazy"
                alt=""
                class="image-82"
              />
            </div>
            <h1 class="heading-70">Our Security</h1>
            <div class="text-block-72">
              Trust and Security are Landmark Integrated Services' Top Priority
              for Your Investment Protection
            </div>
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
      banner: "",
      about: "",
      events: [],
      staffs: [],
      cert: "",
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

    async getStaffs() {
      try {
        const result = await this.$axios.get(`/staffs`);
        this.staffs = result.data.data;
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async getEvents() {
      try {
        const result = await this.$axios.get(`/events`);
        this.events = result.data.data;
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async getBanner() {
      try {
        const result = await this.$axios.get(`/banner/?bannerCategory=About`);
        this.banner = result.data.data[0];
        this.loadScript();
      } catch (err) {
        console.log(err);
      }
    },

    async getAbout() {
      try {
        const result = await this.$axios.get(`/about`);
        this.about = result.data.data[0];
        this.cert = result.data.data[0].certificate;
      } catch (err) {
        console.log(err);
      }
    },
  },

  mounted() {
    this.getStaffs();
    this.getEvents();
    this.getAbout();
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
