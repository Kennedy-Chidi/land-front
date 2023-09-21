<template>
  <div class="">
    <home-light-navigation />
    <div class="container-new1 _2 z b">
      <div class="div-block-408">
        <div class="div-block-279"><h1 class="heading-67">Login</h1></div>
      </div>
    </div>
    <div class="sign-up2">
      <div class="container-new1">
        <div class="div-block-417">
          <div class="div-block-418">
            <h1 class="heading-126"><strong>Registered Clients</strong></h1>
            <div class="div-block-413 b"></div>
            <h1 class="heading-129">
              If you have an account, sign in with your username and password.
            </h1>
            <div class="form-block-12 _2 w-form">
              <div>
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

                <label for="name-7" class="field-label password"
                  >Password must be at least 6 characters long.</label
                ><input
                  type="password"
                  class="text-field-16 w-input"
                  maxlength="256"
                  placeholder="Enter Password"
                  @keypress.enter="processUserData"
                  @blur="checkErrorInputs('password', password)"
                  v-model="password"
                />
                <h1 class="heading-127">
                  <strong> Forgotten password? </strong
                  ><nuxt-link to="/forgotten-password"
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
                  @click="processUserData"
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
      username: "",
      password: "",
      complete: true,
      user: "",

      showResponse: false,
      isError: false,
      response: "",
      onRequest: false,

      isChecked: false,
      isError: false,
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
    callResponse(msg, state) {
      console.log(msg);
      this.response = msg;
      this.isError = state;
      this.showResponse = true;
      this.onRequest = false;
      setTimeout(() => {
        this.showResponse = false;
      }, 6000);
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
      } else if (input == "password") {
        if (data == "" || !data || data.length < 6) {
          const parent = this.$el.querySelector(".password");
          parent.classList.add("active");
          this.isError = false;
          return false;
        } else {
          const parent = this.$el.querySelector(".password");
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
      const form = {
        username: this.username,
        password: this.password,
      };
      console.log(this.username, this.password);
      this.handleLogin(form);
    },

    async handleLogin(form) {
      try {
        const result = await this.$auth.loginWith("local", { data: form });
        const user = result.data.user;
        if (user.status == "Admin") {
          this.$router.push("/admin");
        } else {
          this.$router.push("/dashboard");
        }
      } catch (err) {
        this.callResponse(err.response.data.message, true);
      }
    },

    setArray() {
      this.checkArray = [
        { name: "username", data: this.username },
        { name: "password", data: this.password },
      ];
    },
  },
  mounted() {
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
