<template>
  <div class="history">
    <div class="transaction-history">
      <dashboard-navigation />
      <div class="main-dash-board">
        <dashboard-header />
        <div class="history-header-holder">
          <h1 class="main-heading">Transaction History</h1>
        </div>
        <div class="history-top-card">
          <div class="history-card-top">
            <h1 class="sub-heading">Fliter</h1>
          </div>
          <div class="history-down-part">
            <div class="card-text-holder">
              <h1 class="sub-heading">All Transaction</h1>
            </div>
            <div class="history-top-form">
              <div class="history-form-holder w-form">
                <div>
                  <div class="history-form-flex">
                    <div class="history-each-form shift">
                      <div class="head-top-holder">
                        <h1 class="sub-header">From</h1>
                      </div>
                      <input type="date" class="w-input" maxlength="256" />
                    </div>
                    <div class="history-each-form">
                      <div class="head-top-holder">
                        <h1 class="sub-header">To</h1>
                      </div>
                      <input type="date" class="w-input" maxlength="256" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="scan-deposit-table">
          <div class="table">
            <div class="details-top-holder">
              <div class="details-texts-holder">
                <div class="main-header">Latest Transaction</div>
              </div>
            </div>
            <div class="main-table">
              <div class="light-table-holder table-green">
                <div class="sn-holder wallet">
                  <h1 class="table-header">Wallet</h1>
                </div>
                <div class="table-transaction-holder long">
                  <h1 class="table-header">Amount</h1>
                </div>
                <div class="table-amount-holder long">
                  <h1 class="table-header">Date</h1>
                </div>
              </div>
              <div
                class="light-table-holder"
                v-for="earning in earnings"
                :key="earning._id"
              >
                <div class="sn-holder wallet">
                  <h1 class="table-header slash">Wallet</h1>
                  <h1 class="table-header">
                    <img
                      :src="`${FILE_URL}/${earning.symbol}`"
                      alt=""
                      class="wallet-img"
                    />
                    {{ earning.walletName }}
                  </h1>
                </div>
                <div class="table-transaction-holder long">
                  <h1 class="table-header slash">Amount</h1>
                  <h1 class="table-header">${{ earning.earning }}</h1>
                </div>
                <div class="table-amount-holder long">
                  <h1 class="table-header slash">Date</h1>
                  <h1 class="table-header">
                    <div>{{ formatDate(earning.time) }}</div>
                    <div>{{ getTime(earning.time) }}</div>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ul v-if="pages().length > 1" class="listings">
          <li
            @click="paginate(int + 1)"
            :class="{
              active: int == currentPage - 1,
              hide: int >= 3 + currentPage || int < currentPage - 3,
              show: int + 1 == pages().length,
            }"
            v-for="(page, int) in pages().length"
            :key="int"
          >
            {{ int + 1 }}
          </li>
        </ul>
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
      earnings: [],
      user: "",
      sort: "-time",
      limit: 10,
      resultLength: "",
      currentPage: 1,
      pages: function () {
        let array = [];
        let x = Math.ceil(this.resultLength / this.limit);
        for (let i = 0; i < x; i++) {
          array.push("i");
        }
        return array;
      },
    };
  },
  methods: {
    formatDate(data) {
      if (!data) {
        return 0;
      }
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

    formatMoney(amount) {
      if (amount == "" || amount == null || amount == undefined) {
        return "0.00";
      } else {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    },

    getTime(data) {
      const currentDate = new Date(data);
      let hours = currentDate.getHours();
      let minutes = currentDate.getMinutes();
      let amOrPm = hours >= 12 ? "PM" : "AM";

      hours = hours % 12;
      hours = hours ? hours : 12;

      minutes = minutes < 10 ? "0" + minutes : minutes;

      return hours + ":" + minutes + " " + amOrPm;
    },

    paginate(page) {
      this.currentPage = page;
      this.getEarnings();
    },

    async getEarnings() {
      try {
        const result = await this.$axios.get(
          `/transactions/earnings/?username=${this.user.username}&sort=${this.sort}&limit=${this.limit}&page=${this.currentPage}`
        );
        this.earnings = result.data.data;
        this.resultLength = result.data.resultLength;
      } catch (err) {
        console.log(err.response);
      }
    },

    async getAUser() {
      if (this.authUser) {
        try {
          const result = await this.$axios.get(`/users/${this.authUser._id}`);
          this.user = result.data.data;
          this.getEarnings();
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

<style>
.sn-holder.wallet {
  min-width: 200px;
}

.sn-holder .table-header {
  width: 100%;
}

.listings {
  padding: 0;
  list-style-type: none;
  display: flex;
  align-items: center;
}

.listings li {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  cursor: pointer;
  margin: 0 7px;
}
</style>
