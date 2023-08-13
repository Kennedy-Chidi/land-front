<template>
  <div class="top-holder">
    <div class="top-link-holder">
      <div id="top" class="top-logo">
        <img
          src="/dashboard-images/hamburger.svg"
          loading="lazy"
          alt=""
          class="image-37 dash"
          @click="toggleDashboardNav"
        />
        <nuxt-link to="/">
          <img
            src="/dashboard-images/Landmark-Logo.png"
            loading="lazy"
            alt=""
            class="logo dash"
          />
        </nuxt-link>
        <div id="ytWidget"></div>
      </div>
      <div class="welcome-holder">
        <div class="top-header-holder">
          <h1 class="top-header">Welcome To {{ company.companyName }}</h1>
        </div>
        <div class="top-text-holder">
          <div class="top-text">Hi, {{ user.fullName }} Welcome back.</div>
        </div>
      </div>
    </div>
    <div class="icon-profile-holder">
      <nuxt-link to="/dashboard/profile" class="icon-holder gap">
        <img
          src="/dashboard-images/user-persona-icon.svg"
          loading="lazy"
          alt=""
          class="image-14 dash"
        />
      </nuxt-link>
      <!----<div class="icon-holder gap">
        <img
          src="/dashboard-images/bell-notification-icon.svg"
          loading="lazy"
          alt=""
          class="image-14 dash"
        />
      </div>-->
      <div @click="logout" class="icon-holder">
        <img
          src="/dashboard-images/switch-on-off-button-icon.svg"
          loading="lazy"
          alt=""
          class="image-14 dash"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      link: [
        { rel: "stylesheet", type: "text/css", href: "/css/Dashboard.css" },
      ],
    };
  },

  data() {
    return {
      company: "",
    };
  },
  methods: {
    toggleDashboardNav() {
      this.$store.commit("TOGGLE_NAV");
    },

    async getCompany() {
      try {
        const result = await this.$axios.get("/company");
        this.company = await result.data.data;
      } catch (err) {
        console.log(err.response.data);
      }
    },

    async logout() {
      await this.$auth.logout();
      this.$router.push("/");
    },
  },

  mounted() {
    this.getCompany();
  },
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
    FILE_URL() {
      return this.$store.state.fileURL;
    },
  },
};
</script>

<style>
.image-14.dash {
  width: 25px;
}

.logo.dash {
  min-width: 100px;
  display: block;
}

@media screen and (max-width: 767px) {
  .image-37.dash {
    display: block;
    width: 25px;
  }
}
</style>
