<template>
  <div class="deposit-holder">
    <div class="deposit">
      <dashboard-navigation />
      <div class="main-dash-board">
        <dashboard-header />
        <div class="doposit-balance-holder">
          <div class="balance-top-header">
            <div class="balance-header-holder">
              <h1 class="main-heading">Make Deposit</h1>
            </div>
            <div class="balance-text-holder">
              <h1 class="sub-heading">Available Balance</h1>
            </div>
          </div>
          <div class="short-card-holder">
            <div
              v-for="wallet in wallets"
              :key="wallet._id"
              class="each-short-card"
            >
              <div class="short-top">
                <div class="short-side-contents">
                  <div class="main-header-holder">
                    <h1 class="main-header">{{ wallet.name }}</h1>
                  </div>
                  <div class="short-middle-flexer">
                    <div class="main-text-holder">
                      <a href="#" class="main-text">Edit Account</a>
                    </div>
                    <a href="#" class="edit-img-link w-inline-block"
                      ><img
                        src="/dashboard-images/link-icon.svg"
                        loading="lazy"
                        alt=""
                        class="image-18 link"
                    /></a>
                  </div>
                </div>
                <img
                  :src="`${FILE_URL}/${wallet.symbol}`"
                  loading="lazy"
                  alt=""
                  class="edit-1"
                />
              </div>
              <div class="short-down">
                <h1 class="sub-heading">
                  {{ formatMoney(Number(wallet.balance).toFixed(2)) }} USD
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div class="select-plan-holder">
          <div class="plan-header-holder">
            <h1 class="main-heading">Select Plan</h1>
          </div>
          <div class="plan-card-holder">
            <div
              v-for="plan in plans"
              :key="plan._id"
              @click="selectPlan(plan)"
              class="each-plan-card"
              :class="{ active: plan.checked }"
            >
              <div class="plan-heading-holder">
                <h1 class="plan-heading card-header">{{ plan.planName }}</h1>
              </div>
              <div class="plan-heading-holder">
                <h1 class="plan-heading">{{ plan.planPercentage }}%</h1>
              </div>
              <div class="plan-heading-holder">
                <h1 class="plan-heading">Income : Daily</h1>
              </div>
              <div class="plan-heading-holder">
                <h1 class="plan-heading">Deposit : Range</h1>
              </div>
              <div class="plan-heading-holder">
                <h1 class="plan-heading">Minimum : {{ plan.planMinimum }}$</h1>
              </div>
              <div class="plan-heading-holder">
                <h1 class="plan-heading" v-if="plan.planMaximum > 0">
                  Maximum : {{ plan.planMaximum }}$
                </h1>
                <h1 class="plan-heading" v-else>Unlimited</h1>
              </div>
            </div>
          </div>
        </div>
        <div class="select-payment">
          <div class="payment-top-holder">
            <h1 class="main-heading">Select Payment</h1>
          </div>
          <div class="payment-type-holder">
            <div class="each-payment-type">
              <div class="top-payment-holder">
                <h1 class="plan-heading">Select From Balance</h1>
              </div>
              <div class="payment-method-holder">
                <div
                  v-for="wallet in wallets"
                  :key="wallet._id"
                  @click="selectWallet(wallet)"
                  :class="{
                    disable: wallet.balance == 0,
                    active: wallet.checked,
                  }"
                  class="each-payment-method"
                >
                  <img
                    :src="`${FILE_URL}/${wallet.symbol}`"
                    loading="lazy"
                    alt=""
                    class="deposit-payment-bitcoin"
                  />
                  <div class="paytype-header-holder">
                    <h1 class="pay-header">{{ wallet.name }}</h1>
                  </div>
                </div>
              </div>
            </div>
            <div class="each-payment-type">
              <div class="top-payment-holder">
                <h1 class="plan-heading">Select From System</h1>
              </div>
              <div class="payment-method-holder">
                <div
                  v-for="currency in currencies"
                  :key="currency._id"
                  :class="{ active: currency.checked }"
                  @click="selectSystem(currency)"
                  class="each-payment-method"
                >
                  <img
                    :src="`${FILE_URL}/${currency.symbol}`"
                    loading="lazy"
                    alt=""
                    class="deposit-payment-red"
                  />
                  <div class="paytype-header-holder">
                    <h1 class="pay-header">{{ currency.name }}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="payment-amount">
          <div class="amount-top-holder">
            <h1 class="main-heading">Amount</h1>
          </div>
          <div class="amount-middle-holder">
            <div class="payment-input-holder">
              <div class="payment-input-form">
                <div class="payment-form w-form">
                  <div>
                    <div class="hold-input">
                      <input
                        type="number"
                        class="text-field w-input amount"
                        maxlength="256"
                        placeholder="Enter Amount"
                        v-model="amount"
                        @keyup="setPercentage"
                      />
                    </div>
                    <div class="erro-holder">
                      <div
                        class="erro-text error"
                        v-if="showResponse"
                        :class="{ error: isError }"
                      >
                        {{ response }}
                      </div>
                    </div>
                    <button
                      @click="proceedToDeposit"
                      class="button w-button custom"
                    >
                      Deposit
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="payment-calender-holder">
              <div class="each-daily-holder">
                <img
                  src="/dashboard-images/hourly.svg"
                  loading="lazy"
                  alt=""
                  class="deposit-calender"
                />
                <div class="day-header-holder">
                  <h1 class="plan-heading">
                    $ {{ formatMoney(((amount * percent) / 100).toFixed(2)) }}
                  </h1>
                </div>
                <div class="day-texts-holder">
                  <h1 class="pay-header">Profit Daily</h1>
                </div>
              </div>
              <div class="each-daily-holder">
                <img
                  src="/dashboard-images/weekly.svg"
                  loading="lazy"
                  alt=""
                  class="deposit-calender"
                />
                <div class="day-header-holder">
                  <h1 class="plan-heading">
                    $
                    {{ formatMoney(((amount * percent * 7) / 100).toFixed(2)) }}
                  </h1>
                </div>
                <div class="day-texts-holder">
                  <h1 class="pay-header">Profit Weekly</h1>
                </div>
              </div>
              <div class="each-daily-holder">
                <img
                  src="/dashboard-images/monthly.svg"
                  loading="lazy"
                  alt=""
                  class="deposit-calender"
                />
                <div class="day-header-holder">
                  <h1 class="plan-heading">
                    $
                    {{
                      formatMoney(((amount * percent * 30) / 100).toFixed(2))
                    }}
                  </h1>
                </div>
                <div class="day-texts-holder">
                  <h1 class="pay-header">Profit Monthly</h1>
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
import DashboardFooter from "../../components/DashboardFooter.vue";
import DashboardHeader from "../../components/DashboardHeader.vue";
import DashboardNavigation from "../../components/DashboardNavigation.vue";
export default {
  data() {
    return {
      wallets: [],
      plans: [],
      currencies: [],

      selectedPlan: "",
      selecetedWalletBalance: "",
      selectedWalletId: "",
      selectedCurrencyId: "",
      fromBalance: false,
      amount: 100,
      percent: "",

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

    watchInput() {
      if (this.selectedPlan == "") {
        this.callResponse("Choose a Plan for deposit to proceed", true);
        return;
      } else if (
        this.fromBalance == true &&
        this.selecetedWalletBalance < this.amount
      ) {
        this.callResponse(
          "Sorry, you have insufficient balance in this wallet",
          true
        );
        return;
      } else {
        if (this.selectedPlan.planMaximum != 0) {
          if (this.amount > this.selectedPlan.planMaximum) {
            this.amount = this.selectedPlan.planMaximum;
          }
        }
      }
    },

    selectWallet(wallet) {
      if (wallet.balance != 0) {
        this.wallets.forEach((el) => {
          el.checked = false;
        });
        wallet.checked = true;
        this.selecetedWalletBalance = wallet.balance;
        this.checkItems(this.currencies);
        this.fromBalance = true;
        this.selectedWalletId = wallet._id;
        this.currencies.forEach((el) => {
          if (el.name == wallet.name) {
            this.selectedCurrencyId = el._id;
          }
        });
      }
    },

    selectSystem(currency) {
      this.currencies.forEach((el) => {
        el.checked = false;
      });
      this.checkItems(this.wallets);
      this.selectedCurrencyId = currency._id;
      this.fromBalance = false;
      currency.checked = true;
    },

    selectPlan(plan) {
      this.plans.forEach((el) => {
        el.checked = false;
      });
      this.selectedPlan = plan;
      plan.checked = true;
      this.amount = plan.planMinimum;
      this.percent = plan.planPercentage;
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
      this.watchInput();
      if (Number(this.amount) < Number(this.maxArray[0])) {
        this.percent = Number(this.percentArray[0]);
      } else if (Number(this.amount) > Number(this.maxArray[0])) {
        this.percent = this.percentArray[1];
      } else if (Number(this.amount) > Number(this.maxArray[1])) {
        this.percent = this.percentArray[2];
      }
    },

    proceedToDeposit() {
      if (this.selectedPlan == "") {
        this.callResponse("Please select a plan", true);
        return;
      }
      if (this.selectedWalletId == "" && this.selectedCurrencyId == "") {
        this.callResponse("Please select a currency to deposit in", true);
        return;
      }
      if (
        this.fromBalance == true &&
        this.selecetedWalletBalance < this.amount
      ) {
        this.callResponse(
          "Sorry, you have insufficient balance in this wallet",
          true
        );
        return;
      }
      this.$router.push(
        `/dashboard/confirm-deposit/?planId=${this.selectedPlan._id}&amount=${this.amount}&walletId=${this.selectedWalletId}&currencyId=${this.selectedCurrencyId}&fromBalance=${this.fromBalance}`
      );
    },

    async getWallets() {
      try {
        const result = await this.$axios.get(
          `/wallet/?username=${this.user.username}`
        );
        this.wallets = this.checkItems(result.data.data);
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

    async getPlans() {
      try {
        const result = await this.$axios.get(`/plans`);
        this.plans = this.checkItems(result.data.data);
        this.setMaxArray(this.plans);
      } catch (err) {
        console.log(err.response);
      }
    },
  },
  mounted() {
    this.getWallets();
    this.getPlans();
    this.getCurrencies();
  },
  computed: {
    user() {
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
.text-field.amount {
  color: white;
  border: 1px solid white;
  background-color: transparent;
}

.button.custom {
  border-radius: 5px;
  background: #7cb50c;
  color: white;
}
</style>
