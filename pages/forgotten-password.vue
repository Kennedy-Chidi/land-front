<template>
  <div class="">
    <home-light-navigation />
    <div class="container-new1 _2 z b">
      <div class="div-block-408">
        <div class="div-block-279">
          <h1 class="heading-67">Forgotten Password</h1>
        </div>
      </div>
    </div>
    <div class="sign-up2">
      <div class="container-new1">
        <div class="div-block-417">
          <div class="div-block-418">
            <h1 class="heading-126"><strong>Registered Clients</strong></h1>
            <div class="div-block-413 b"></div>
            <h1 class="heading-129">
              If you have an account, enter your email to recorver it.
            </h1>
            <div class="form-block-12 _2 w-form">
              <div>
                <label for="name-6" class="field-label email"
                  >Please enter a valid email.</label
                ><input
                  type="text"
                  class="text-field-16 w-input"
                  maxlength="256"
                  placeholder="Enter Email"
                  v-model="email"
                  @blur="checkErrorInputs('email', email)"
                />

                <h1 class="heading-127">
                  <strong> Already have an account? </strong
                  ><nuxt-link to="/login"
                    ><strong>Click here</strong></nuxt-link
                  >
                </h1>

                <div class="terms-check">
                  <div
                    v-if="showResponse"
                    class="response-text"
                    :class="{ error: isError }"
                  >
                    {{ response }}
                  </div>
                </div>
                <input
                  type="submit"
                  value="Login"
                  class="submit-button-10 w-button"
                  @click="processEmail"
                />
              </div>
            </div>
          </div>
          <div class="div-block-418 b">
            <h1 class="heading-126"><strong>New Clients</strong></h1>
            <div class="div-block-413 b"></div>
            <h1 class="heading-129 b">
              If you don&#x27;t have an account, create an account.
            </h1>
            <div class="form-block-12 w-form">
              <nuxt-link to="/signup" class="submit-button-10 c w-button"
                >Create Account</nuxt-link
              >
            </div>
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
      email: "",
      complete: true,
      user: "",
      company: "",

      showResponse: false,
      isError: false,
      response: "",
      onRequest: false,

      isError: false,
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

    checkErrorInputs(input, data) {
      if (input == "email") {
        if (data == "" || !data || !/^\S+@\S+\.\S+$/.test(data)) {
          const parent = this.$el.querySelector(".email");
          parent.classList.add("active");
          this.isError = false;
          return;
        } else {
          const parent = this.$el.querySelector(".email");
          parent.classList.remove("active");
          this.isError = true;
        }
      }
    },

    processUserData() {
      this.setArray();
      this.checkArray.forEach((el) => {
        this.checkErrorInputs(el.name, el.data);
      });
      if (!this.isError) {
        return;
      }
      this.processEmail();
    },

    async processEmail() {
      const form = {
        email: this.email,
      };
      try {
        await this.$axios.patch(`/users/forgotten-password`, form);
        this.callResponse(
          "Please verify your email and click on the link button to continue.",
          false
        );
      } catch (err) {
        this.callResponse(err.response.data.message, true);
      }
    },

    setArray() {
      this.checkArray = [{ name: "email", data: this.email }];
    },

    loadScript() {
      if (!process.server) {
        let el = document.getElementById("script");

        if (el != undefined) {
          document.body.removeChild(el);
        }

        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "/scripts/client.js";
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
    if (this.isAuthenticated) {
      this.$router.push("/dashboard");
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
