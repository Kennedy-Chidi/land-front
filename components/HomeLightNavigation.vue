<template>
  <div
    data-animation="default"
    data-collapse="medium"
    data-duration="400"
    data-easing="ease"
    data-easing2="ease"
    role="banner"
    class="nav-about-us w-nav"
  >
    <div class="container-new about-us">
      <div>
        <nuxt-link
          :to="{
            path: '/',
            query: { username: $route.query.username },
          }"
          class="brand-4 w-nav-brand"
          ><img
            src="/images/Landmark-Logo.png"
            loading="lazy"
            width="150"
            alt=""
        /></nuxt-link>
        <div id="ytWidget"></div>
      </div>
      <nav role="navigation" class="nav-menu-3 w-nav-menu">
        <nuxt-link
          :to="{
            path: '/',
            query: { username: $route.query.username },
          }"
          class="navlink-new w-nav-link"
          >Home</nuxt-link
        ><nuxt-link
          :to="{
            path: '/about',
            query: { username: $route.query.username },
          }"
          class="navlink-new w-nav-link"
          >ABOUT</nuxt-link
        ><nuxt-link
          :to="{
            path: '/gallery',
            query: { username: $route.query.username },
          }"
          class="navlink-new w-nav-link"
          >GALLERY</nuxt-link
        ><nuxt-link
          :to="{
            path: '/plan',
            query: { username: $route.query.username },
          }"
          class="navlink-new w-nav-link"
          >PLAN</nuxt-link
        ><nuxt-link
          :to="{
            path: '/faq',
            query: { username: $route.query.username },
          }"
          class="navlink-new w-nav-link"
          >FAQ</nuxt-link
        ><nuxt-link
          :to="{
            path: '/contact',
            query: { username: $route.query.username },
          }"
          class="navlink-new w-nav-link"
          >CONTACT</nuxt-link
        ><nuxt-link
          :to="{
            path: '/signup',
            query: { username: $route.query.username },
          }"
          class="navlink-new w-nav-link"
          :class="{ hide: isAuthenticated }"
          >SIGN UP</nuxt-link
        >
        <nuxt-link
          data-w-id="4d4f1d77-0b7e-0bc8-3bb1-37cede9dd815"
          :to="{
            path: '/login',
            query: { username: $route.query.username },
          }"
          class="button-13 w-button"
          :class="{ hide: isAuthenticated }"
          >Login</nuxt-link
        >
        <nuxt-link
          to="/dashboard"
          class="navlink-new w-nav-link"
          :class="{ hide: !isAuthenticated }"
          >Dashboard</nuxt-link
        >
        <a
          data-w-id="4d4f1d77-0b7e-0bc8-3bb1-37cede9dd815"
          to="#"
          @click="logout"
          class="button-13 w-button"
          :class="{ hide: !isAuthenticated }"
          >Logout</a
        >
      </nav>
      <div class="menu-button-4 w-nav-button">
        <div class="w-icon-nav-menu"></div>
      </div>
    </div>
    <div class="div-block-278"></div>
  </div>
</template>

<script>
export default {
  methods: {
    async logout() {
      await this.$auth.logout();
      this.$router.push("/");
    },
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated; // it check if user isAuthenticated
    },
  },
};
</script>

<style>
.navlink-new.hide,
.button-13.hide {
  display: none;
}
</style>
