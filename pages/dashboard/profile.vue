<template>
  <div class="change-password-holder">
    <div class="change-password">
      <dashboard-navigation />
      <div class="main-dash-board">
        <dashboard-header />
        <div class="profile-top-holder">
          <h1 class="main-heading">profile</h1>
        </div>
        <div class="profile-content-1">
          <div class="input-holder">
            <div class="profile-form w-form">
              <div>
                <div class="profile-form-content">
                  <div class="profile-form-holder">
                    <div class="sub-top-holder">
                      <h1 class="sub-heading">Personal Information</h1>
                    </div>
                    <div class="profile-inputs-holder">
                      <div class="profile-full-holder long">
                        <div class="each-input-holder">
                          <div class="input-header-holder">
                            <div class="input-text">Username</div>
                          </div>
                          <input
                            type="text"
                            class="profile-text-input w-input"
                            maxlength="256"
                            v-model="user.username"
                          />
                        </div>
                      </div>
                      <div class="profile-full-holder long">
                        <div class="each-input-holder">
                          <div class="input-header-holder">
                            <div class="input-text">E-mail</div>
                          </div>
                          <input
                            type="text"
                            class="profile-text-input w-input"
                            maxlength="256"
                            v-model="user.email"
                          />
                        </div>
                      </div>
                      <div class="profile-full-holder long">
                        <div class="each-input-holder">
                          <div class="input-header-holder">
                            <div class="input-text">Full Name</div>
                          </div>
                          <input
                            type="text"
                            class="profile-text-input w-input"
                            maxlength="256"
                            v-model="user.fullName"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="profile-form-holder">
                    <div class="sub-top-holder">
                      <h1 class="sub-heading">Chang Password</h1>
                    </div>
                    <div class="profile-inputs-holder">
                      <div class="profile-full-holder long">
                        <div class="each-input-holder">
                          <div class="input-header-holder">
                            <div class="input-text">Old Password</div>
                          </div>
                          <input
                            type="passsword"
                            class="profile-text-input w-input"
                            maxlength="256"
                            v-model="oldPassword"
                          />
                        </div>
                      </div>
                      <div class="profile-full-holder long">
                        <div class="each-input-holder">
                          <div class="input-header-holder">
                            <div class="input-text">Password</div>
                          </div>
                          <input
                            type="password"
                            class="profile-text-input w-input"
                            maxlength="256"
                            v-model="password"
                          />
                        </div>
                      </div>
                      <div class="profile-full-holder long">
                        <div class="each-input-holder">
                          <div class="input-header-holder">
                            <div class="input-text">Confirm Password</div>
                          </div>
                          <input
                            type="password"
                            class="profile-text-input w-input"
                            maxlength="256"
                            v-model="cPassword"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="profile-button-holder">
                      <button
                        @click="updatePassword"
                        class="green-button custom"
                      >
                        Update Password
                      </button>
                    </div>
                  </div>
                  <div class="profile-form-holder">
                    <div class="sub-top-holder">
                      <h1 class="sub-heading">Payment Details</h1>
                    </div>
                    <div class="profile-inputs-holder">
                      <div
                        v-for="wallet in wallets"
                        :key="wallet._id"
                        class="profile-full-holder long"
                      >
                        <div class="each-input-holder">
                          <div class="input-header-holder">
                            <div class="input-text">{{ wallet.name }}</div>
                          </div>
                          <input
                            type="text"
                            class="profile-text-input w-input"
                            maxlength="256"
                            v-model="wallet.walletAddress"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="erro-holder">
                      <div
                        v-if="showResponse"
                        :class="{ error: isError }"
                        class="erro-text"
                      >
                        {{ response }}
                      </div>
                    </div>
                    <div class="profile-button-holder">
                      <button @click="updateWallet" class="green-button custom">
                        Update Wallet
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <dashboard-footer />
  </div>
</template>

<script>
import DashboardFooter from "../../components/DashboardFooter.vue";
import DashboardHeader from "../../components/DashboardHeader.vue";
import DashboardNavigation from "../../components/DashboardNavigation.vue";
export default {
  data() {
    return {
      wallets: [],
      oldPassword: "",
      password: "",
      cPassword: "",

      showResponse: false,
      showReviewResponse: false,
      isError: false,
      response: "",
      onRequest: false,
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
      if (input == "oldPassword") {
        if (data == "" || !data || data.length < 6) {
          const parent = this.$el.querySelector(".oldPassword");
          parent.classList.add("active");
          return false;
        } else {
          const parent = this.$el.querySelector(".oldPassword");
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

    setArray() {
      this.checkArray = [
        { name: "oldPassword", data: this.oldPassword },
        { name: "password", data: this.password },
        { name: "cPassword", data: this.cPassword },
      ];
    },

    async updatePassword() {
      this.setArray();
      this.checkArray.forEach((el) => {
        this.checkErrorInputs(el.name, el.data);
      });
      if (!this.isError) {
        return;
      }
      const form = {
        oldPassword: this.oldPassword,
        password: this.password,
        cPassword: this.cPassword,
      };

      try {
        await this.$axios.patch(`/users/update-password`, form);
        this.callResponse(
          "Your password has been updated, logout and login to continue",
          false
        );
        this.clearInputs();
      } catch (err) {
        this.callResponse(err, true);
      }
    },

    async updateWallet() {
      const form = {
        wallets: this.wallets,
        user: this.user,
      };
      try {
        await this.$axios.patch(`/wallet`, form);
        this.callResponse("Wallet has been updated successfully", false);
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async getWallets() {
      try {
        const result = await this.$axios.get(
          `/wallet/?username=${this.user.username}`
        );
        this.wallets = result.data.data;
      } catch (err) {
        console.log(err.response);
      }
    },
  },
  mounted() {
    this.getWallets();
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated; // it check if user isAuthenticated
    },

    user() {
      return this.$store.state.auth.user;
    },
  },

  components: { DashboardNavigation, DashboardHeader, DashboardFooter },
};
</script>

<style>
.button.custom {
  border-radius: 5px;
  background: #7cb50c;
  color: white;
}
</style>
