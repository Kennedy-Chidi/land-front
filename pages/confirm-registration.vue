<template>
  <div class="">
    <home-light-navigation />
    <div class="container-new1 _2 z b">
      <div class="div-block-408">
        <div class="div-block-279">
          <h1 class="heading-67">CONFIRMATION</h1>
        </div>
      </div>
    </div>
    <div class="sign-up2">
      <div class="container-new1">
        <div class="div-block-417">
          <div class="div-block-418">
            <h1 class="heading-126" v-if="status">
              <strong>CONGRATS... REGISTRATION SUCCESSFUL</strong>
            </h1>
            <h1 class="heading-126" v-else>
              <strong>CONFIRMING REGISTRATION...</strong>
            </h1>
            <div class="div-block-413 b"></div>
            <h1 v-if="status" class="heading-129">
              Your account has been activated, kindly
              <nuxt-link to="/login">login </nuxt-link> to continue.
            </h1>
            <div class="form-block-12 _2 w-form"></div>
          </div>
        </div>
        <div class="terms-check">
          <div
            v-if="showResponse"
            class="erro-text error"
            :class="{ error: isError }"
          >
            {{ response }}
          </div>
        </div>
      </div>
    </div>
    <home-footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      response: "",
      isError: false,
      showResponse: false,
      onRequest: false,
      status: false,

      company: "",
    };
  },
  methods: {
    callResponse(msg, state) {
      this.response = msg;
      this.isError = state;
      this.showResponse = true;
      this.onRequest = false;
      setTimeout(() => {
        this.showResponse = false;
      }, 6000);
    },

    async activateUser(id) {
      try {
        const result = await this.$axios.patch(`/users/activate-user/${id}`, {
          suspension: false,
        });
        this.status = true;
      } catch (err) {
        this.callResponse(err.response.data.message, true);
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
        script.src = "/scripts/home.js";
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
        this.company = result.data.data;
      } catch (err) {
        console.log(err.response.data);
      }
    },
  },

  mounted() {
    this.getCompany();
    this.loadScript();
    if (this.$route.query.token) {
      this.activateUser(this.$route.query.token);
    } else {
      this.$router.push("/signup");
    }
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated; // it check if user isAuthenticated
    },
  },
};
</script>

<style></style>
