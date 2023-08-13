<template>
  <div class="side-dash-board" :class="{ hide: !navState }">
    <div class="sticky-navigation">
      <div class="board-logo-holder">
        <img
          src="https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/644620af8a8f42c537677a46_close.svg"
          loading="lazy"
          alt=""
          class="menu-close dash"
          @click="hideDashboardNav"
        /><nuxt-link to="/" class="logo-holder w-inline-block"
          ><img src="/images/Landmark-Logo.png" loading="lazy" alt=""
        /></nuxt-link>
      </div>
      <div class="all-button-holder">
        <nuxt-link
          to="/dashboard"
          class="each-button-flexer"
          :class="{ active: route == 'dashboard' }"
        >
          <img
            src="/dashboard-images/dashboard.svg"
            loading="lazy"
            alt=""
            class="image-7 nav"
          />
          <div class="button-text">Dashboard</div>
        </nuxt-link>
        <nuxt-link
          to="/dashboard/deposit"
          class="each-button-flexer"
          :class="{ active: route == 'dashboard-deposit' }"
        >
          <img
            src="/dashboard-images/deposit.svg"
            loading="lazy"
            alt=""
            class="image-7 nav"
          />
          <div class="button-text">Deposit</div>
        </nuxt-link>

        <nuxt-link
          to="/dashboard/withdrawal-funds"
          class="each-button-flexer"
          :class="{ active: route == 'dashboard-withdrawal-funds' }"
        >
          <img
            src="/dashboard-images/withdrawal.svg"
            loading="lazy"
            alt=""
            class="image-7 nav"
          />
          <div class="button-text">Withdraw</div>
        </nuxt-link>

        <nuxt-link
          to="/dashboard/transactions"
          class="each-button-flexer"
          :class="{ active: route == 'dashboard-transactions' }"
        >
          <img
            src="/dashboard-images/earnings.svg"
            loading="lazy"
            alt=""
            class="image-7 nav"
          />
          <div class="button-text">Transactions</div>
        </nuxt-link>

        <nuxt-link
          to="/dashboard/deposit-list"
          class="each-button-flexer"
          :class="{ active: route == 'dashboard-deposit-list' }"
        >
          <img
            src="/dashboard-images/transactions.svg"
            loading="lazy"
            alt=""
            class="image-7 nav"
          />
          <div class="button-text">Deposit List</div>
        </nuxt-link>

        <nuxt-link
          to="/dashboard/history"
          class="each-button-flexer"
          :class="{ active: route == 'dashboard-history' }"
        >
          <img
            src="/dashboard-images/deposits.svg"
            loading="lazy"
            alt=""
            class="image-7 nav"
          />
          <div class="button-text">Earnings</div>
        </nuxt-link>

        <nuxt-link
          to="/dashboard/referrals"
          class="each-button-flexer"
          :class="{ active: route == 'dashboard-referrals' }"
        >
          <img
            src="/dashboard-images/referral.svg"
            loading="lazy"
            alt=""
            class="image-7 nav"
          />
          <div class="button-text">Referrals</div>
        </nuxt-link>

        <nuxt-link
          :class="{ active: route == 'dashboard-profile' }"
          to="/dashboard/profile"
          class="each-button-flexer"
        >
          <img
            src="/dashboard-images/profile.svg"
            loading="lazy"
            alt=""
            class="image-7 nav"
          />
          <div class="button-text">Settings</div>
        </nuxt-link>

        <span @click="logout" class="each-button-flexer">
          <img
            src="/dashboard-images/logout.svg"
            loading="lazy"
            alt=""
            class="image-7 nav"
          />
          <div class="button-text">Logout</div>
        </span>
      </div>
      <div class="down-nav-holder">
        <h1 class="down-logo-header">
          @{{ company.companyName }} - {{ new Date().getFullYear() }}
        </h1>
        <div class="down-logo-texts">
          Thanks for choosing {{ company.companyName }}, we'll be glad you tell
          others about us.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      route: "",
      company: "",
    };
  },

  methods: {
    toggleDashboardNav() {
      this.$store.commit("TOGGLE_NAV");
    },

    hideDashboardNav() {
      this.$store.commit("HIDE_DASHBOARD_NAV");
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

  computed: {
    navState() {
      return this.$store.state.dashboardNavState;
    },
  },

  mounted() {
    this.route = this.$route.name;
    this.hideDashboardNav();
    this.getCompany();
  },
};
</script>

<style>
.image-7.nav {
  width: 18px;
}

.board-logo-holder {
  position: relative;
}

.menu-close.dash {
  display: none;
}

@media screen and (max-width: 767px) {
  .menu-close.dash {
    right: -180px;
    top: 20px;
    display: block;
  }
}
</style>
