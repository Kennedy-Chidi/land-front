<template>
  <div id="footer" class="last-section">
    <div class="container-new1">
      <div>
        <div class="div-block-255">
          <div class="div-block-256">
            <div class="div-block-257">
              <img
                src="/images/Landmark-Logo.png"
                loading="lazy"
                width="83"
                alt=""
              />
            </div>
            <div
              class="text-block-63"
              v-html="`${aboutContent.substring(0, 200)}...`"
            ></div>
          </div>
          <div class="div-block-258">
            <h1 class="heading-63">Quick Links</h1>
            <nuxt-link to="/about" class="link-block-21 w-inline-block"
              ><div class="text-block-64">About</div></nuxt-link
            ><nuxt-link to="/plan" class="link-block-21 w-inline-block"
              ><div class="text-block-64">Plans</div></nuxt-link
            ><nuxt-link to="/gallery" class="link-block-21 w-inline-block"
              ><div class="text-block-64">Gallery</div></nuxt-link
            ><nuxt-link to="/contact" class="link-block-21 w-inline-block"
              ><div class="text-block-64">Contact Us</div></nuxt-link
            >
          </div>
          <div class="div-block-259">
            <h1 class="heading-63">Contact Us</h1>
            <div class="text-block-65">
              You can contact us with your email for mailing conversations at
              our contact page us chat us directly in our website through our
              live support.
            </div>
            <div class="text-block-66" v-html="address"></div>
          </div>
          <div class="div-block-259">
            <h1 class="heading-63">Subscribe</h1>
            <div class="text-block-65 b">
              Don’t forget to subscribe to our newsletter.
            </div>
            <div class="form-block-8 w-form">
              <form class="form-9">
                <div class="div-block-260">
                  <input
                    type="text"
                    class="text-field-9 w-input"
                    maxlength="256"
                    name="field-10"
                    data-name="Field 10"
                    placeholder="E-mail"
                    id="field-10"
                    required=""
                  /><img
                    src="https://uploads-ssl.webflow.com/63285dac88280ce08f0a9677/6358ede42749b85419003355_Vector%20(2).svg"
                    loading="lazy"
                    width="15"
                    alt=""
                    class="image-78"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div v-if="company.social" class="div-block-274">
        <div class="div-block-273">
          <img
            src="/images/facebook-round.svg"
            loading="lazy"
            alt=""
            class="image-81"
          />
        </div>
        <div class="div-block-273">
          <img
            src="/images/twitter-icon.svg"
            loading="lazy"
            alt=""
            class="image-81"
          />
        </div>
        <div class="div-block-273">
          <img
            src="/images/linkedin-icon.svg"
            loading="lazy"
            alt=""
            class="image-81"
          />
        </div>
        <div class="div-block-273">
          <img
            src="/images/vimeo-icon.svg"
            loading="lazy"
            alt=""
            class="image-81"
          />
        </div>
        <div class="div-block-273">
          <img
            src="/images/instagram-icon.svg"
            loading="lazy"
            alt=""
            class="image-81"
          />
        </div>
        <div class="div-block-273">
          <img
            src="/images/github-icon.svg"
            loading="lazy"
            width="Auto"
            height="Auto"
            alt=""
            class="image-81"
          />
        </div>
      </div>
      <div class="div-block-275"></div>
      <div class="div-block-276">
        <div class="div-block-277">
          <div class="text-block-70">
            © {{ new Date().getFullYear() }}
            <a v-if="company" href="#" target="_blank" class="link-5">{{
              company.companyName
            }}</a
            >, All Rights Reserved
          </div>
        </div>
        <nuxt-link to="/terms-conditions" class="link-block-22 w-inline-block"
          ><div class="text-block-70 b">
            Privacy Policy Terms &amp; Conditions
          </div></nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      company: "",
      address: "",
      aboutContent: "",
    };
  },
  methods: {
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
        const app = document.querySelector("#footer");
        if (app) {
          app.appendChild(scriptTranslate);
        } else {
          console.error("Could not find app node to append script element");
        }
      }
    },

    setFileURL() {
      this.$store.commit("SET_URL", this.$config.FILE_URL);
    },

    async getAboutCompany() {
      try {
        const result = await this.$axios.get("/about");
        this.aboutContent = await result.data.data[0].content;
      } catch (err) {
        console.log(err);
      }
    },

    async getCompany() {
      try {
        const result = await this.$axios.get("/company");
        this.address = await result.data.data?.media[0]?.text;
        this.company = result.data.data;
      } catch (err) {
        console.log(err.response.data);
      }
    },
  },
  mounted() {
    this.loadScript();
    this.setFileURL();
    this.getAboutCompany();
    this.getCompany();
  },
};
</script>

<style>
.div-block-257 {
  width: 200px;
}

.div-block-257 img {
  width: 100%;
}
</style>
