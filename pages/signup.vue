<template>
  <div class="sign-page">
    <home-light-navigation />
    <div class="container-new1 _2 z">
      <div class="div-block-408">
        <div class="div-block-279"><h1 class="heading-67">Sign Up</h1></div>
      </div>
    </div>
    <div class="sign-up2">
      <div class="container-new1">
        <div>
          <div class="div-block-420">
            <h1 class="heading-126">Personal Information</h1>
            <div class="div-block-413"></div>
            <div class="form-block-12 w-form">
              <label for="name-6" class="field-label username"
                >Username must be at least a 6 character word.</label
              ><input
                type="text"
                class="text-field-16 w-input"
                maxlength="256"
                placeholder="Enter username"
                v-model="username"
                @blur="checkErrorInputs('username', username)"
              />
              <label for="name-7" class="field-label fullName"
                >Fullname must have at least two words</label
              ><input
                type="text"
                class="text-field-16 w-input"
                placeholder="Enter full name"
                v-model="fullName"
                @blur="checkErrorInputs('fullName', fullName)"
              /><label for="name-7" class="field-label email"
                >Please enter a valid email.</label
              ><input
                type="text"
                class="text-field-16 w-input"
                maxlength="256"
                placeholder="Enter Email"
                @blur="checkErrorInputs('email', email)"
                v-model="email"
              />
              <label for="name-7" class="field-label password"
                >Password must be at least 6 characters long.</label
              ><input
                type="password"
                class="text-field-16 w-input"
                maxlength="256"
                placeholder="Enter Password"
                @blur="checkErrorInputs('password', password)"
                v-model="password"
              />
              <label for="name-7" class="field-label cPassword"
                >Passwords do not match!</label
              ><input
                type="password"
                class="text-field-16 w-input"
                maxlength="256"
                placeholder="Enter Password"
                @blur="checkErrorInputs('cPassword', cPassword)"
                v-model="cPassword"
              />
              <div class="div-block-415">
                <div @click="isChecked = !isChecked" class="div-block-414">
                  <div v-if="isChecked" class="check"></div>
                </div>
                <div>
                  <h1 class="heading-127">
                    <strong> I agree with the </strong
                    ><nuxt-link to="/terms-conditions"
                      ><strong>Terms &amp; Conditions</strong></nuxt-link
                    ><strong> of Company</strong>
                  </h1>
                </div>
              </div>
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
                value="Create an Account"
                class="submit-button-10 w-button"
                @click="processUserData"
              />
              <div class="div-block-416">
                <h1 class="heading-128">
                  <strong>Already have an account?, </strong
                  ><nuxt-link to="/login"><strong>Sign in</strong></nuxt-link>
                </h1>
              </div>
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
import HomeLightNavigation from "../components/HomeLightNavigation.vue";
export default {
  data() {
    return {
      response: "",
      isError: false,
      showResponse: false,
      onRequest: false,

      fullName: "",
      username: "",
      email: "",
      phoneNumber: "",
      password: "",
      cPassword: "",
      isChecked: false,

      referral: "",
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
    checkErrorInputs(input, data) {
      if (input == "username") {
        if (
          data == "" ||
          !data ||
          data.length < 2 ||
          !/^[a-zA-Z0-9]+$/.test(data)
        ) {
          const parent = this.$el.querySelector(".username");
          parent.classList.add("active");
          this.isError = false;
          return;
        } else {
          const parent = this.$el.querySelector(".username");
          parent.classList.remove("active");
          this.isError = true;
        }
      } else if (input == "fullName") {
        if (!data || data == "" || !(data.split(" ").length >= 2)) {
          const parent = this.$el.querySelector(".fullName");
          parent.classList.add("active");
          this.isError = false;
          return;
        } else {
          const parent = this.$el.querySelector(".fullName");
          parent.classList.remove("active");
          this.isError = true;
        }
      }
      //else if (input == "phoneNumber") {
      //   if (data == "" || !data || !/^[0-9+]+$/.test(data)) {
      //     const parent = this.$el.querySelector(".phoneNumber");
      //     parent.classList.add("active");
      //     this.isError = false;
      //     return;
      //   } else {
      //     const parent = this.$el.querySelector(".phoneNumber");
      //     parent.classList.remove("active");
      //     this.isError = true;
      //   }
      // }
      else if (input == "email") {
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
      } else if (input == "password") {
        if (data == "" || !data || data.length < 6) {
          const parent = this.$el.querySelector(".password");
          parent.classList.add("active");
          return false;
        } else {
          const parent = this.$el.querySelector(".password");
          parent.classList.remove("active");
          this.isError = true;
        }
      } else if (input == "cPassword") {
        if (data == "" || data != this.password) {
          const parent = this.$el.querySelector(".cPassword");
          parent.classList.add("active");
          this.isError = false;
          return;
        } else {
          const parent = this.$el.querySelector(".cPassword");
          parent.classList.remove("active");
          this.isError = true;
        }
      }
    },

    callResponse(msg, state) {
      this.response = msg;
      this.isError = state;
      this.showResponse = true;
      this.onRequest = false;
      setTimeout(() => {
        this.showResponse = false;
      }, 6000);
    },

    clearInputs() {
      this.fullName = "";
      this.username = "";
      this.phoneNumber = "";
      this.email = "";
      this.password = "";
      this.cPassword = "";
    },

    setArray() {
      this.checkArray = [
        { name: "fullName", data: this.fullName },
        { name: "username", data: this.username },
        { name: "email", data: this.email },
        { name: "phoneNumber", data: this.phoneNumber },
        { name: "password", data: this.password },
        { name: "cPassword", data: this.cPassword },
      ];
    },

    async processUserData() {
      this.setArray();
      this.checkArray.forEach((el) => {
        this.checkErrorInputs(el.name, el.data);
      });
      if (!this.isError) {
        return;
      }
      if (!this.isChecked) {
        this.callResponse(
          "Please read and check the terms and agreement box to continue",
          true
        );
        return;
      }
      const form = {
        fullName: this.fullName,
        username: this.username,
        email: this.email,
        regDate: new Date().getTime(),
        referredBy: this.referral,
        totalAmount: 0,
        password: this.password,
        cPassword: this.cPassword,
      };

      try {
        await this.$axios.post("/users/signup", form);
        this.callResponse(
          "Thanks for signing up with us, please login to continue.",
          false
        );
        this.clearInputs();
        setTimeout(() => {
          this.$router.push("/login");
        }, 6000);
      } catch (err) {
        this.callResponse(err.response.data.message, true);
      }
    },
  },
  mounted() {
    this.loadScript();
    if (this.$route.query.username) {
      this.referral = this.$route.query.username;
    }
    if (this.isAuthenticated) {
      this.$router.push("/dashboard");
    }
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated; // it check if user isAuthenticated
    },
  },
  components: { HomeLightNavigation, HomeFooter },
};
</script>

<style></style>
