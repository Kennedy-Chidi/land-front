<template>
  <div class="dashboard-holder">
    <div class="dashboard">
      <DashboardNavigation />
      <div class="main-dash-board">
        <dashboard-header />
        <div class="card-holder">
          <div class="top-card-one">
            <div class="circle-bg">
              <div class="card-top-holder">
                <div class="black-text">Total</div>
                <div class="black-text">Balance</div>
              </div>
              <div class="middle-holder">
                <div class="middle-side-content">
                  <div class="sub-heading-holder">
                    <h1 class="sub-heading">Total Balance</h1>
                  </div>
                  <div class="sub-text-holder">
                    <div class="sub-text">{{ user.fullName }}</div>
                  </div>
                </div>
                <div class="thick-header-holder">
                  <h1 class="thick-header">
                    <span class="text-span"
                      >${{
                        formatMoney(Number(user.totalBalance).toFixed(2))
                      }}
                      USD</span
                    >
                  </h1>
                </div>
              </div>
              <div class="card-button-holder">
                <nuxt-link
                  to="/dashboard/deposit"
                  class="transact-button w-button"
                  >Deposit</nuxt-link
                ><nuxt-link
                  to="/dashboard/withdrawal-funds"
                  class="depositing-button w-button"
                  >Withdraw</nuxt-link
                >
              </div>
            </div>
          </div>
          <div class="top-card-two">
            <div class="top-card-cover">
              <div class="card-header-holder">
                <h1 class="card-header">Define Your Goals</h1>
              </div>
              <div class="card-texts-holder">
                <div class="card-text">
                  Start by daily acquisition of fund to achieve your big
                  project,<br />
                  no matter how small you are getting, at the end you will get
                  there.
                </div>
              </div>
              <nuxt-link
                to="/dashboard/deposit"
                class="green-card-button w-button"
                >Get Started</nuxt-link
              >
            </div>
          </div>
        </div>

        <div class="short-card-hold">
          <div class="short-card-holder">
            <div class="each-short-card">
              <div class="short-top">
                <div class="short-side-contents">
                  <div class="main-header-holder">
                    <h1 class="main-header">Total Deposit</h1>
                  </div>
                  <div class="short-middle-flexer">
                    <div class="main-text-holder">
                      <div class="main-text">
                        ${{ formatMoney(totalDeposit) }} USD
                      </div>
                    </div>
                    <img
                      src="/dashboard-images/link-icon.svg"
                      loading="lazy"
                      alt=""
                      class="image-18 link"
                    />
                  </div>
                </div>
                <img
                  src="/dashboard-images/bank-finance-loan-icon.svg"
                  loading="lazy"
                  alt=""
                  class="deposit-icon-1"
                />
              </div>
              <div class="short-down">
                <h1 class="sub-heading">
                  ${{ formatMoney(totalDeposit) }} USD
                </h1>
                <img
                  src="/dashboard-images/3-vertical-dots-icon.svg"
                  loading="lazy"
                  alt=""
                  class="image-17 dot"
                />
              </div>
            </div>

            <div class="each-short-card">
              <div class="short-top">
                <div class="short-side-contents">
                  <div class="main-header-holder">
                    <h1 class="main-header">Active Deposit</h1>
                  </div>
                  <div class="short-middle-flexer">
                    <div class="main-text-holder">
                      <div class="main-text">
                        ${{ formatMoney(activeDeposit) }} USD
                      </div>
                    </div>
                    <img
                      src="/dashboard-images/link-icon.svg"
                      loading="lazy"
                      alt=""
                      class="image-18 link"
                    />
                  </div>
                </div>
                <img
                  src="/dashboard-images/active.svg"
                  loading="lazy"
                  alt=""
                  class="deposit-icon-2"
                />
              </div>
              <div class="short-down">
                <h1 class="sub-heading">
                  ${{ formatMoney(activeDeposit) }} USD
                </h1>
                <img
                  src="/dashboard-images/3-vertical-dots-icon.svg"
                  loading="lazy"
                  alt=""
                  class="image-17 dot"
                />
              </div>
            </div>

            <div class="each-short-card">
              <div class="short-top">
                <div class="short-side-contents">
                  <div class="main-header-holder">
                    <h1 class="main-header">Pending Withdrawal</h1>
                  </div>
                  <div class="short-middle-flexer">
                    <div class="main-text-holder">
                      <div class="main-text">
                        ${{ formatMoney(pendingWithdrawal) }} USD
                      </div>
                    </div>
                    <img
                      src="/dashboard-images/link-icon.svg"
                      loading="lazy"
                      alt=""
                      class="image-18 link"
                    />
                  </div>
                </div>
                <img
                  src="/dashboard-images/pending.svg"
                  loading="lazy"
                  alt=""
                  class="deposit-icon-3"
                />
              </div>
              <div class="short-down">
                <h1 class="sub-heading">
                  ${{ formatMoney(pendingWithdrawal) }} USD
                </h1>
                <img
                  src="/dashboard-images/3-vertical-dots-icon.svg"
                  loading="lazy"
                  alt=""
                  class="image-17 dot"
                />
              </div>
            </div>

            <div class="each-short-card">
              <div class="short-top">
                <div class="short-side-contents">
                  <div class="main-header-holder">
                    <h1 class="main-header">Total Withdrawal</h1>
                  </div>
                  <div class="short-middle-flexer">
                    <div class="main-text-holder">
                      <div class="main-text">
                        ${{ formatMoney(totalWithdrawal) }} USD
                      </div>
                    </div>
                    <img
                      src="/dashboard-images/link-icon.svg"
                      loading="lazy"
                      alt=""
                      class="image-18 link"
                    />
                  </div>
                </div>
                <img
                  src="/dashboard-images/total.svg"
                  loading="lazy"
                  alt=""
                  class="deposit-icon-4"
                />
              </div>
              <div class="short-down">
                <h1 class="sub-heading">
                  ${{ formatMoney(totalWithdrawal) }} USD
                </h1>
                <img
                  src="/dashboard-images/3-vertical-dots-icon.svg"
                  loading="lazy"
                  alt=""
                  class="image-17 dot"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="details-holder">
          <div class="first-table-container">
            <div class="table">
              <div class="details-top-holder">
                <div class="details-texts-holder">
                  <div class="main-header">Latest Transaction</div>
                </div>
              </div>
              <div class="main-table">
                <div class="light-table-holder table-green">
                  <div class="sn-holder">
                    <h1 class="table-header">S/N</h1>
                  </div>
                  <div class="table-transaction-holder">
                    <h1 class="table-header">Transactions</h1>
                  </div>
                  <div class="symbols">
                    <h1 class="table-header">Symbols</h1>
                  </div>
                  <div class="table-amount-holder">
                    <h1 class="table-header">Amounts</h1>
                  </div>
                  <div class="table-date-holder">
                    <h1 class="table-header">Dates</h1>
                  </div>
                </div>
                <div
                  v-for="transaction in transactions"
                  :key="transaction._id"
                  class="light-table-holder"
                >
                  <div class="sn-holder">
                    <h1 class="table-header slash">S/N</h1>
                    <h1 class="table-header">1.</h1>
                  </div>
                  <div class="table-transaction-holder">
                    <h1 class="table-header slash">Transactions</h1>
                    <h1 class="table-header" v-if="transaction.transactionType">
                      {{ capitalizeWord(transaction.transactionType) }}
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
                    <h1 class="table-header" v-if="transaction.amount">
                      ${{ formatMoney(transaction.amount) }} USD
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
          <div class="details-two">
            <div class="details-top-holder">
              <div class="details-texts-holder">
                <div class="main-header">Total Volume</div>
              </div>
            </div>
            <div class="day-holder">
              <div class="each-day active">
                <div class="day-top-holder">
                  <div class="day-text-holder">
                    <div class="main-text">Deposit</div>
                  </div>
                  <div class="day-header-holder">
                    <h1 class="main-header">${{ totalDeposit }} USD</h1>
                  </div>
                </div>
              </div>
              <div class="each-day">
                <div class="day-top-holder">
                  <div class="day-text-holder">
                    <div class="main-text">Withdrawal</div>
                  </div>
                  <div class="day-header-holder">
                    <h1 class="main-header">${{ totalWithdrawal }} USD</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <DashboardFooter />
  </div>
</template>

<script>
import DashboardFooter from "../../components/DashboardFooter";
import DashboardHeader from "../../components/DashboardHeader.vue";
import DashboardNavigation from "../../components/DashboardNavigation";
export default {
  data() {
    return {
      totalDeposit: "",
      totalWithdrawal: "",
      activeDeposit: "",
      pendingWithdrawal: "",

      transactions: [],
      user: "",

      sort: "-time",
      limit: 5,
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

    capitalizeWord(data) {
      return data.charAt(0).toUpperCase() + data.slice(1);
    },

    getVolumes(data) {
      data.forEach((el) => {
        if (el._id == "withdrawal") {
          this.withdrawal = el.volume;
        } else {
          this.deposit = el.volume;
        }
      });
    },

    getActive(data) {
      if (data.length == 0) {
        return 0;
      } else {
        let money = 0;
        data.forEach((el) => {
          money += el.amount;
        });
        return money;
      }
    },

    getApprovedTransactions(data) {
      if (data.length == 0) {
        return 0;
      } else {
        let TX = [];
        data.forEach((el) => {
          if (el.status == true) {
            TX.push(el);
          }
        });

        return TX;
      }
    },

    getPendingWithdrawal(data) {
      if (data.length == 0) {
        return 0;
      } else {
        let money = 0;
        data.forEach((el) => {
          money += el.pendingWithdrawal;
        });

        return money;
      }
    },

    getTotalWithdrawal(data) {
      if (data.length == 0) {
        return 0;
      } else {
        let money = 0;
        data.forEach((el) => {
          money += el.totalWithdrawal;
        });

        return money;
      }
    },

    getTotalDeposit(data) {
      if (data.length == 0) {
        return 0;
      } else {
        let money = 0;
        data.forEach((el) => {
          money += el.totalDeposit * 1;
        });

        return money;
      }
    },

    paginate(page) {
      this.currentPage = page;
      this.getTransactions(this.user);
    },

    async getCompany() {
      try {
        const result = await this.$axios.get("/company");
        this.company = await result.data.data;
      } catch (err) {
        console.log(err.response.data);
      }
    },

    async getWallets(user) {
      try {
        const result = await this.$axios.get(
          `/wallet/?username=${user.username}&limit=10000&page=1`
        );
        this.totalDeposit = this.getTotalDeposit(await result.data.data);
        this.totalWithdrawal = this.getTotalWithdrawal(await result.data.data);
        this.pendingWithdrawal = this.getPendingWithdrawal(
          await result.data.data
        );
        console.log(result.data.data);
        this.wallets = result.data.data;
      } catch (err) {
        console.log(err.response);
      }
    },

    async getActiveDeposit(user) {
      try {
        const result = await this.$axios.get(
          `/transactions/active-deposits/?username=${user.username}&limit=1000&page=1`
        );
        this.activeDeposit = this.getActive(result.data.data);
      } catch (err) {
        console.log(err.response);
      }
    },

    async getTransactions(user) {
      const query = `?username=${user.username}&limit=1060&sort=${this.sort}&page=1`;
      try {
        const result = await this.$axios.get(`/transactions/history/${query}`);
        this.approvedTransactions = this.getApprovedTransactions(
          result.data.data
        );
        this.transactions = result.data.data;
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async getAUser() {
      try {
        const result = await this.$axios.get(`/users/get-user`);
        this.user = result.data.user;
        this.getTransactions(result.data.user);
        this.getActiveDeposit(result.data.user);
        this.getWallets(result.data.user);
      } catch (err) {
        console.log(err.response);
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
  components: { DashboardFooter, DashboardNavigation, DashboardHeader },
};
</script>

<style>
.image-17.dot {
  width: 3px;
}

.image-18.link {
  width: 8px;
}

.transact-button {
  background-color: #7cb50c;
  border-radius: 5px;
  margin-right: 20px;
}
.green-card-button {
  color: #000;
  background-color: #fff;
  border-radius: 5px;
}
.depositing-button {
  color: #000;
  background-color: #dcdcdc;
  border-radius: 5px;
}
</style>
