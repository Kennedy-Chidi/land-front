<template>
  <div class="withdrawal-funds">
    <div class="account-stastiscs">
      <dashboard-navigation />
      <div class="main-dash-board">
        <dashboard-header />
        <div class="account-top-header">
          <h1 class="main-heading">Withdrawal funds</h1>
        </div>
        <div class="account">
          <div class="account-card">
            <div class="top-card-one">
              <div class="circle-bg">
                <div class="middle-holder">
                  <div class="middle-side-content">
                    <div class="sub-heading-holder">
                      <h1 class="plan-heading card-header">Total Balance</h1>
                    </div>
                    <div class="sub-text-holder">
                      <div class="plan-heading">
                        ${{ formatMoney(Number(user.totalBalance).toFixed(2)) }}
                        USD
                      </div>
                    </div>
                  </div>
                  <div class="thick-header-holder">
                    <img
                      src="/dashboard-images/pending.svg"
                      loading="lazy"
                      alt=""
                      class="account-topicon-1"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="top-card-one">
              <div class="circle-bg">
                <div class="middle-holder">
                  <div class="middle-side-content">
                    <div class="sub-heading-holder">
                      <h1 class="plan-heading card-header">
                        pending withdrawal
                      </h1>
                    </div>
                    <div class="sub-text-holder">
                      <div class="plan-heading">
                        ${{ formatMoney(user.pendingWithdrawal) }} USD
                      </div>
                    </div>
                  </div>
                  <div class="thick-header-holder">
                    <img
                      src="https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6432acb43030fd0243cf3bcb_dollar-money-bag-icon%201.svg"
                      loading="lazy"
                      alt=""
                      class="account-topicon-two"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="other-card-holder">
            <div
              v-for="wallet in wallets"
              :key="wallet._id"
              :class="{ active: wallet.checked }"
              @click="selectWallet(wallet)"
              class="each-other-card"
            >
              <div class="img-other">
                <img
                  :src="`${FILE_URL}/${wallet.symbol}`"
                  loading="lazy"
                  alt=""
                  class="account-bitcoin"
                />
                {{ wallet.name }}
              </div>
              <div class="img-other">
                <nuxt-link to="/dashboard/profile">
                  <img
                    src="/dashboard-images/pen.svg"
                    loading="lazy"
                    alt=""
                    class="image-edit"
                  />
                </nuxt-link>
              </div>
              <div class="other-inside-middle pading">
                <div class="other-middle-header">
                  <h1 class="sub-heading">Balance</h1>
                </div>
                <div class="other-middle-text">
                  <div class="pay-header">
                    ${{ formatMoney(Number(wallet.balance).toFixed(2)) }}
                    USD
                  </div>
                </div>
              </div>
              <div class="other-white-line"></div>
              <div class="other-inside-middle">
                <div class="other-middle-header">
                  <h1 class="sub-heading">Pending Withdrawal</h1>
                </div>
                <div class="other-middle-text">
                  <div class="pay-header">
                    ${{ formatMoney(wallet.pendingWithdrawal) }} USD
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="account-buttom-content">
            <div class="account-button-holder">
              <h1 class="main-heading">Select Payment</h1>
            </div>
            <div class="account-buttom-cover">
              <img
                src="/dashboard-images/arrow.svg"
                loading="lazy"
                alt=""
                class="select-cover-arrow"
              />
              <h1 class="sub-heading">Select from the balance</h1>
            </div>
            <div class="account-payment-input">
              <div class="payment-input-form">
                <div class="payment-form w-form">
                  <div>
                    <div class="hold-input">
                      <input
                        type="text"
                        class="text-field w-input amount"
                        maxlength="256"
                        v-model="amount"
                      />
                    </div>
                    <div class="erro-holder">
                      <div
                        v-if="showResponse"
                        :class="{ error: isError }"
                        class="erro-text error"
                      >
                        {{ response }}
                      </div>
                    </div>
                    <button
                      @click="proceedToWithdraw"
                      class="button w-button custom"
                    >
                      Withdraw
                    </button>
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
      wallets: [],
      plans: [],
      currencies: [],
      user: "",
      selectedWallet: "",
      amount: 10,
      percent: "",
      showInput: false,
      pendingWithdrawal: "",

      maxArray: [],
      percentArray: [],

      response: "",
      isError: false,
      showResponse: false,
    };
  },
  methods: {
    formatMoney(amount) {
      if (amount == "" || amount == null || amount == undefined) {
        return "0.00";
      } else {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    },

    callResponse(msg, state) {
      this.response = msg;
      this.isError = state;
      this.showResponse = true;
      setTimeout(() => {
        this.showResponse = false;
      }, 6000);
    },

    selectWallet(wallet) {
      if (wallet.balance != 0) {
        this.wallets.forEach((el) => {
          el.checked = false;
        });
        wallet.checked = true;
        this.selectedWallet = wallet;
        this.showInput = true;
      }
    },

    checkItems(items) {
      items.forEach((el) => {
        el.checked = false;
      });
      return items;
    },

    setMaxArray(plans) {
      plans.forEach((el) => {
        this.maxArray.push(el.planMaximum);
        this.percentArray.push(el.planPercentage);
      });
    },

    setPercentage() {
      if (Number(this.amount) < Number(this.maxArray[0])) {
        this.percent = Number(this.percentArray[0]);
      } else if (Number(this.amount) > Number(this.maxArray[0])) {
        this.percent = this.percentArray[1];
      } else if (Number(this.amount) > Number(this.maxArray[1])) {
        this.percent = this.percentArray[2];
      }
    },

    setPendingWithdrawal(data) {
      if (data.length > 0) {
        let money = 0;
        data.forEach((el) => {
          money += el.amount;
        });
        return money;
      }
    },

    async proceedToWithdraw() {
      if (this.selectedWallet == "") {
        this.callResponse(
          "Please Select Wallet to continue the withdrawal process.",
          true
        );
        return;
      }
      if (this.selectedWallet.balance < this.amount) {
        this.callResponse(
          "Sorry, the selected wallet have insufficient fund for this transaction",
          true
        );
        return;
      }
      if (this.selectedWallet.walletAddress == "") {
        this.callResponse(
          "Sorry, please set wallet address for this wallet.",
          true
        );
        return;
      }
      const form = {
        amount: this.amount,
        symbol: this.selectedWallet.symbol,
        transactionType: "withdrawal",
        username: this.user.username,
        user: this.user,
        planName: `Not Available`,
        planDuration: 0,
        walletName: this.selectedWallet.name,
        walletId: this.selectedWallet._id,
        time: new Date().getTime(),
      };
      try {
        const result = await this.$axios.post(`/transactions`, form);
        this.callResponse(
          "The withdrawal is pending and will be approved after confirmation",
          false
        );
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async getWallets() {
      try {
        const result = await this.$axios.get(
          `/wallet/?username=${this.currentUser.username}`
        );
        this.wallets = this.checkItems(result.data.data);
      } catch (err) {
        console.log(err.response);
      }
    },

    async getPendingWithdrawals() {
      try {
        const result = await this.$axios.get(
          `/transactions/?username=${this.currentUser.username}&transactionType=withdrawal&status=false`
        );
        this.pendingWithdrawal = this.setPendingWithdrawal(result.data.data);
      } catch (err) {
        console.log(err.response);
      }
    },

    async getCurrencies() {
      try {
        const result = await this.$axios.get(`/currency`);
        this.currencies = this.checkItems(result.data.data);
      } catch (err) {
        console.log(err.response);
      }
    },

    async getUser() {
      try {
        const result = await this.$axios.get(`/users/get-user`);
        this.user = result.data.user;
      } catch (err) {
        console.log(err.response);
      }
    },
  },

  mounted() {
    this.getUser();
    this.getCurrencies();
    this.getWallets();
    this.getPendingWithdrawals();
  },

  computed: {
    FILE_URL() {
      return this.$store.state.fileURL;
    },

    currentUser() {
      return this.$store.state.auth.user;
    },
  },

  components: { DashboardFooter, DashboardHeader },
};
</script>

<style>
.button.custom {
  border-radius: 5px;
  background: #7cb50c;
  color: white;
}

.each-other-card {
  margin-bottom: 20px;
  cursor: pointer;
}

.image-edit {
  height: 25px;
}

.each-other-card.active {
  background: #53780a;
}
</style>
