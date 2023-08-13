<template>
  <div class="comfirm-deposit-holder">
    <div class="comfirm-deposit">
      <dashboard-navigation />
      <div class="main-dash-board">
        <dashboard-header />
        <div class="scan-section-holder">
          <div class="balance-header-holder">
            <h1 class="main-heading">Deposit Comfirmation</h1>
          </div>
          <div v-if="scanCode" class="scan-div">
            <div class="scan-toptext-holder">
              <div class="down-logo-texts">You can scan the code below</div>
            </div>
            <div id="qrcode"></div>
            <div class="input-upload-holder">
              <div class="scan-form w-form">
                <div class="over-flow">
                  <div class="upload-address-holder">
                    <input
                      type="text"
                      class="text-field-2 w-input"
                      id="walletAddress"
                      v-model="currency.address"
                    />
                    <div class="upload-icon-holder" @click="copyInputValue">
                      <img
                        src="/dashboard-images/copy.svg"
                        loading="lazy"
                        alt=""
                        class="copied-icon"
                      />
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
                <div class="sn-holder">
                  <h1 class="table-header">S/N</h1>
                </div>
                <div class="table-transaction-holder long">
                  <h1 class="table-header">Title</h1>
                </div>
                <div class="table-amount-holder long">
                  <h1 class="table-header">Description</h1>
                </div>
              </div>
              <div class="light-table-holder">
                <div class="sn-holder">
                  <h1 class="table-header slash">S/N</h1>
                  <h1 class="table-header">1.</h1>
                </div>
                <div class="table-transaction-holder long">
                  <h1 class="table-header slash">Title</h1>
                  <h1 class="table-header">Card At</h1>
                </div>
                <div class="table-amount-holder long">
                  <h1 class="table-header slash">Description</h1>
                  <h1 class="table-header">{{ formatDate(new Date()) }}</h1>
                </div>
              </div>
              <div class="light-table-holder">
                <div class="sn-holder">
                  <h1 class="table-header slash">S/N</h1>
                  <h1 class="table-header">2.</h1>
                </div>
                <div class="table-transaction-holder long">
                  <h1 class="table-header slash">Title</h1>
                  <h1 class="table-header">No Profit</h1>
                </div>
                <div class="table-amount-holder long">
                  <h1 class="table-header slash">Description</h1>
                  <h1 class="table-header">{{ plan.planPercentage }}%</h1>
                </div>
              </div>
              <div class="light-table-holder">
                <div class="sn-holder">
                  <h1 class="table-header slash">S/N</h1>
                  <h1 class="table-header">3.</h1>
                </div>
                <div class="table-transaction-holder long">
                  <h1 class="table-header slash">Title</h1>
                  <h1 class="table-header">Duration</h1>
                </div>
                <div class="table-amount-holder long">
                  <h1 class="table-header slash">Description</h1>
                  <h1 class="table-header">
                    {{ plan.planPeriod }} for {{ plan.planDuration }} days
                  </h1>
                </div>
              </div>
              <div class="light-table-holder">
                <div class="sn-holder">
                  <h1 class="table-header slash">S/N</h1>
                  <h1 class="table-header">4.</h1>
                </div>
                <div class="table-transaction-holder long">
                  <h1 class="table-header slash">Title</h1>
                  <h1 class="table-header">Principal Return</h1>
                </div>
                <div class="table-amount-holder long">
                  <h1 class="table-header slash">Description</h1>
                  <h1 class="table-header">Yes (Return 100% Principal)</h1>
                </div>
              </div>
              <div class="light-table-holder">
                <div class="sn-holder">
                  <h1 class="table-header slash">S/N</h1>
                  <h1 class="table-header">5</h1>
                </div>
                <div class="table-transaction-holder long">
                  <h1 class="table-header slash">Title</h1>
                  <h1 class="table-header">Wallet</h1>
                </div>
                <div class="table-amount-holder long" v-if="currency">
                  <h1 class="table-header slash">Description</h1>
                  <img
                    class="wallet-img"
                    :src="`${FILE_URL}/${currency.symbol}`"
                    alt=""
                  />

                  <h1 class="table-header">{{ currency.name }}</h1>
                </div>
              </div>
              <div class="light-table-holder">
                <div class="sn-holder">
                  <h1 class="table-header slash">S/N</h1>
                  <h1 class="table-header">6.</h1>
                </div>
                <div class="table-transaction-holder long">
                  <h1 class="table-header slash">Title</h1>
                  <h1 class="table-header">Deposit</h1>
                </div>
                <div class="table-amount-holder long">
                  <h1 class="table-header slash">Description</h1>
                  <h1 class="table-header">{{ formatMoney(amount) }}</h1>
                </div>
              </div>
              <div class="light-table-holder">
                <div class="sn-holder">
                  <h1 class="table-header slash">S/N</h1>
                  <h1 class="table-header">7.</h1>
                </div>
                <div class="table-transaction-holder long">
                  <h1 class="table-header slash">Title</h1>
                  <h1 class="table-header">Total Return</h1>
                </div>
                <div class="table-amount-holder long">
                  <h1 class="table-header slash">Description</h1>
                  <h1 class="table-header">
                    ${{
                      formatMoney(
                        (amount * plan.planPercentage * plan.planDuration) /
                          100 +
                          amount * 1
                      )
                    }}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="showResponse" class="erro-text" :class="{ error: isError }">
          {{ response }}
        </div>
        <div class="scan-button-holder">
          <div class="green-button-pad">
            <button @click="makeDeposit" class="green-button custom">
              Confirm Deposit
            </button>
          </div>
          <button @click="goBack" class="green-button custom">Go Back</button>
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
      amount: "",
      plan: "",
      wallet: "",
      currency: "",
      scanCode: true,
      qrcodeSize: 200,

      response: "",
      isError: false,
      showResponse: false,
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

    copyInputValue() {
      const inputElement = document.getElementById("walletAddress");
      inputElement.select();
      document.execCommand("copy");
    },

    generateCode() {
      const qrContainer = document.getElementById("qrcode");
      const size = 200;
      const str = this.currency?.address;
      const googleChartsApiUrl = `https://chart.googleapis.com/chart?chs=${size}x${size}&cht=qr&chl=${str}`;

      // Create the image element for the QR code
      const img = new Image();
      img.src = googleChartsApiUrl;
      img.width = size;
      img.height = size;

      qrContainer.appendChild(img);
    },

    goBack() {
      this.$router.push("/dashboard/deposit");
    },

    async makeDeposit() {
      const form = {
        amount: this.amount,
        symbol: this.currency.symbol,
        transactionType: "deposit",
        username: this.user.username,
        referredBy: this.user.referredBy,
        user: this.user,
        planName: this.plan.planName,
        planDuration: this.plan.planDuration,
        planCycle: this.plan.planCycle,
        walletName: this.currency.name,
        percent: this.plan.planPercentage,
        currencyId: this.currency._id,
        walletId: this.wallet._id,
        time: new Date().getTime(),
        fromBalance: this.$route.query.fromBalance,
      };

      try {
        await this.$axios.post(`/transactions`, form);
        const message =
          this.$route.query.fromBalance == "true"
            ? "Your deposit is successful."
            : "The deposit is pending and will be approved after confirmation";
        this.callResponse(message, false);
      } catch (err) {
        this.callResponse(err.response.data.message, true);
      }
    },

    async getCurrency(id) {
      try {
        const result = await this.$axios.get(
          `/currency/${id}/?username=${this.user.username}`
        );
        this.currency = result.data.data;
        this.wallet = result.data.wallet;
        this.generateCode();
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async getWallet(id) {
      try {
        const result = await this.$axios.get(`/wallet/${id}`);
        this.wallet = result.data.data;
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async getPlan(id) {
      try {
        const result = await this.$axios.get(`/plans/${id}`);
        this.plan = result.data.data;
      } catch (err) {
        console.log(err.response);
      }
    },
  },

  mounted() {
    this.amount = this.$route.query.amount;
    this.getCurrency(this.$route.query.currencyId);
    this.getPlan(this.$route.query.planId);
    if (this.$route.query.fromBalance == "true") {
      this.getWallet(this.$route.query.walletId);
      this.scanCode = false;
    }
  },

  computed: {
    user() {
      return this.$store.state.auth.user;
    },
    FILE_URL() {
      return this.$store.state.fileURL;
    },
  },
  components: { DashboardHeader, DashboardFooter },
};
</script>

<style>
.input-upload-holder {
  margin-top: 20px;
}
.text-field-2.w-input {
  background: white;
  color: #333;
}

.button.custom {
  border-radius: 5px;
  background: #7cb50c;
  color: white;
}
</style>
