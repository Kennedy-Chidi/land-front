<template>
  <div class="deposit-list-holder">
    <div class="deposit-list">
      <dashboard-navigation />
      <div class="main-dash-board">
        <dashboard-header />
        <div class="deposit-list-second">
          <h1 class="main-heading">All Transactions</h1>
        </div>
        <div class="deposit-list-second">
          <div class="table-plan-holder">
            <div class="table">
              <div class="main-table">
                <div class="light-table-holder table-green">
                  <div class="sn-holder">
                    <h1 class="table-header">S/N</h1>
                  </div>
                  <div class="table-transaction-holder">
                    <h1 class="table-header">Transactions</h1>
                  </div>
                  <div class="symbols">
                    <h1 class="table-header">Wallet</h1>
                  </div>
                  <div class="table-amount-holder">
                    <h1 class="table-header">Amounts</h1>
                  </div>
                  <div class="table-date-holder">
                    <h1 class="table-header">Dates</h1>
                  </div>
                </div>
                <div
                  v-for="(transaction, index) in transactions"
                  :key="transaction._id"
                  class="light-table-holder"
                >
                  <div class="sn-holder">
                    <h1 class="table-header slash">S/N</h1>
                    <h1 class="table-header">{{ index + 1 }}.</h1>
                  </div>
                  <div class="table-transaction-holder">
                    <h1 class="table-header slash">Transactions</h1>
                    <h1 class="table-header">
                      {{ capitalize(transaction.transactionType) }}
                    </h1>
                  </div>
                  <div class="symbols">
                    <h1 class="table-header slash">Symbols</h1>
                    <img
                      :src="`${FILE_URL}/${transaction.symbol}`"
                      loading="lazy"
                      alt=""
                      class="deposit-bitcoin slash"
                    />
                  </div>
                  <div class="table-amount-holder">
                    <h1 class="table-header slash">Amounts</h1>
                    <h1 class="table-header">
                      ${{ formatMoney(transaction.amount) }}
                    </h1>
                  </div>
                  <div class="table-date-holder">
                    <h1 class="table-header slash">Dates</h1>
                    <h1 class="table-header">
                      {{ formatDate(transaction.time) }}
                    </h1>
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
export default {
  data() {
    return {
      plans: [],
      transactions: [],
      limit: 10,
      sort: "-time",
    };
  },
  methods: {
    capitalize(data) {
      return data.charAt(0).toUpperCase() + data.slice(1);
    },

    formatMoney(amount) {
      if (amount == "" || amount == null || amount == undefined) {
        return "0.00";
      } else {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    },

    formatDate(data) {
      const date = new Date(data).getTime(); // Note that month is zero-indexed in JavaScript
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        suffix: (day) => {
          if (day === 1 || day === 21 || day === 31) {
            return "st";
          } else if (day === 2 || day === 22) {
            return "nd";
          } else if (day === 3 || day === 23) {
            return "rd";
          } else {
            return "th";
          }
        },
      };

      return new Intl.DateTimeFormat("en-US", options).format(date);
    },

    async getTransactions(username) {
      try {
        const result = await this.$axios.get(
          `/transactions/history/?username=${username}&sort=${this.sort}&limit=${this.limit}`
        );
        this.transactions = result.data.data;
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async getAUser() {
      if (this.authUser) {
        try {
          const result = await this.$axios.get(`/users/${this.authUser._id}`);
          this.user = result.data.data;
          this.getTransactions(this.user.username);
        } catch (err) {
          console.log(err.response);
        }
      }
    },
  },

  mounted() {
    this.getAUser();
  },

  computed: {
    authUser() {
      return this.$store.state.auth.user;
    },
    FILE_URL() {
      return this.$store.state.fileURL;
    },
  },
  components: { DashboardFooter, DashboardHeader },
};
</script>

<style></style>
