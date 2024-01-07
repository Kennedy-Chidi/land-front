<template>
  <div class="comfirm-deposit-holder">
    <div class="comfirm-deposit">
      <dashboard-navigation />
      <div class="main-dash-board">
        <dashboard-header />
        <div class="scan-section-holder">
          <div class="balance-header-holder">
            <h1 class="main-heading">Referrals</h1>
          </div>

          <div class="short-card-hold">
            <div class="short-card-holder">
              <div class="each-short-card">
                <div class="short-top">
                  <div class="short-side-contents">
                    <div class="main-header-holder">
                      <h1 class="main-header">Total Referrals</h1>
                    </div>
                    <div class="short-middle-flexer">
                      <div class="main-text-holder">
                        <div class="main-text">
                          {{ userReferrals }}
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
                    {{ userReferrals }}
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
                      <h1 class="main-header">Active Referrals</h1>
                    </div>
                    <div class="short-middle-flexer">
                      <div class="main-text-holder">
                        <div class="main-text">
                          {{ activeReferrals }}
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
                    {{ activeReferrals }}
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
                      <h1 class="main-header">Total Commission</h1>
                    </div>
                    <div class="short-middle-flexer">
                      <div class="main-text-holder">
                        <div class="main-text">
                          ${{ formatMoney(commission) }} USD
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
                    ${{ formatMoney(commission) }} USD
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

          <div class="scan-div">
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
                      :value="`${url}/?ref=${user.username}`"
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
                <div class="main-header">Referral List</div>
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

              <div
                v-for="(referral, index) in referrals"
                :key="index"
                class="light-table-holder"
              >
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
      userReferrals: 0,
      company: "",
      img: "",
      url: "",
      qrcodeSize: 200,
      referrals: [],
      commission: 0,
      activeReferrals: 0,

      limit: 100,
      sort: "-time",
      itemLength: "",
      currentPage: 1,
      pages: function () {
        let array = [];
        let x = Math.ceil(this.itemLength / this.limit);
        for (let i = 0; i < x; i++) {
          array.push("i");
        }
        return array;
      },
    };
  },

  methods: {
    copyInputValue() {
      const inputElement = document.getElementById("walletAddress");
      inputElement.select();
      document.execCommand("copy");
    },

    generateCode() {
      const qrContainer = document.getElementById("qrcode");
      const size = 200;
      const str = `${this.url}/signup?username=${this.user.username}`;
      const googleChartsApiUrl = `https://chart.googleapis.com/chart?chs=${size}x${size}&cht=qr&chl=${str}`;

      const img = new Image();
      img.src = googleChartsApiUrl;
      img.width = size;
      img.height = size;
      qrContainer.appendChild(img);
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

    getTime(data) {
      if (!data) {
        return "Not Available";
      }
      var timeString = new Date(data).toLocaleTimeString();
      var hours = new Date(data).getHours();
      var suffix = hours >= 12 ? "PM" : "AM";

      return timeString + " " + suffix;
    },

    formatMoney(amount) {
      if (amount == "" || amount == null || amount == undefined) {
        return "0.00";
      } else {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    },

    selectFrom(e) {
      this.from = new Date(e.target.value).getTime();
      this.getHistory();
    },

    selectTo(e) {
      this.to = new Date(e.target.value).getTime();
      this.getHistory();
    },

    setUserReferrals(data) {
      let number = 0;
      data.forEach((el) => {
        if (el.commission < 1) {
          number++;
        }
      });
      this.userReferrals = number;
    },

    setCommission(data) {
      data.forEach((el) => {
        this.commission += el.commission;
      });
    },

    paginate(int) {
      this.currentPage = int;
      this.getReferrals();
    },

    setReferrals(data) {
      const array = [];
      data.forEach((el) => {
        if (el.commission > 0) {
          array.push(el);
        }
      });
      return array;
    },

    async getReferrals() {
      const query = `?username=${this.user.username}&page=${this.currentPage}&limit=${this.limit}&sort=${this.sort}`;
      try {
        const result = await this.$axios.get(`/referrals/${query}`);
        this.setUserReferrals(result.data.data);
        this.setCommission(result.data.data);
        this.referrals = this.setReferrals(result.data.data);
        this.itemLength = result.data.resultLength;
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async getActive() {
      try {
        const result = await this.$axios.get(
          `/transactions/active-deposits/?referredBy=${this.user.username}`
        );
        this.activeReferrals = result.data.resultLength;
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async getCompany() {
      try {
        const result = await this.$axios.get("/company");
        this.url = result.data.data.companyDomain;
      } catch (err) {
        console.log(err.response.data);
      }
    },
  },

  mounted() {
    this.getCompany();
    this.getActive();
    this.generateCode();
    // this.authenticateUser();
    this.getReferrals();
  },

  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },

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

.image-17 {
  width: 3px;
}

.image-18.link {
  width: 8px;
}
</style>
