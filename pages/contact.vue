<template>
  <div class="">
    <home-light-navigation />
    <div class="container-new1 _2">
      <div class="div-block-411">
        <div class="div-block-279">
          <h1 class="heading-67">Contact Us</h1>
        </div>
      </div>
    </div>
    <div class="contact1">
      <div class="container-new1">
        <div class="div-block-304">
          <div class="div-block-305">
            <div class="div-block-307">
              <div class="div-block-308">
                <h1 class="heading-77">Head Office</h1>
                <a href="#" class="link-block-23 w-inline-block"
                  ><div class="text-block-87" v-html="address.text"></div
                ></a>
                <a href="#" class="link-block-23 w-inline-block"
                  ><div class="text-block-87" v-if="phone">
                    {{ phone.text }}
                  </div></a
                ><a href="#" class="link-block-23 w-inline-block"
                  ><div class="text-block-87 b">
                    {{ email.text }}
                  </div></a
                >
              </div>
              <div class="div-block-308 b">
                <h1 class="heading-77">Operational Office</h1>
                <a href="#" class="link-block-23 w-inline-block"
                  ><div class="text-block-87" v-html="address.text"></div
                ></a>
                <a href="#" class="link-block-23 w-inline-block"
                  ><div class="text-block-87" v-if="phone">
                    {{ phone.text }}
                  </div></a
                ><a href="#" class="link-block-23 w-inline-block"
                  ><div class="text-block-87 b">
                    {{ email.text }}
                  </div></a
                >
              </div>
            </div>
          </div>
          <div class="div-block-306">
            <h1 class="heading-78">write us</h1>
            <div class="form-block-9 w-form">
              <div class="form-11">
                <input
                  type="text"
                  class="text-field-12 w-input"
                  maxlength="256"
                  placeholder="Name*"
                  required=""
                /><input
                  type="email"
                  class="text-field-11 w-input"
                  maxlength="256"
                  placeholder="Email*"
                  required=""
                /><textarea
                  placeholder="How might we best assist you?"
                  maxlength="5000"
                  class="textarea-3 w-input"
                ></textarea
                ><input
                  type="submit"
                  value="Submit"
                  data-wait="Please wait..."
                  class="submit-button-8 w-button"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="contact3">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701.295952456714!2d8.537733615622917!3d47.386658179170674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900a7354718769%3A0xec8323d618fd2e74!2sStampfenbachstrasse%20142%2C%208006%20Z%C3%BCrich%2C%20Switzerland!5e0!3m2!1sen!2suk!4v1682807706162!5m2!1sen!2suk"
        width="100%"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <home-footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      company: "",
      address: "",
      email: "",
      phone: "",
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

    async getCompany() {
      try {
        const result = await this.$axios.get("/company");
        this.address = await result.data.data.media[0];
        this.email = await result.data.data.media[1];
        this.phone = await result.data.data.media[2];
        this.company = await result.data.data;
        this.loadScript();
      } catch (err) {
        console.log(err.response.data);
      }
    },
  },
  mounted() {
    this.getCompany();
  },
};
</script>

<style></style>
