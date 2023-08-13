<template>
  <div class="main-wrapper crypto">
    <admin-confirmation
      :msg="confirmMessage"
      :state="confirmStatus"
      @confirm="returnConfirmation"
    />
    <AdminNavigation />
    <div class="body-wrapper">
      <AdminTopHeader />
      <div class="content-wrapper">
        <div class="custom-card plan">
          <h4 class="page-title">WALLET ADDRESS</h4>
          <div class="table-filters">
            <div @click="sortResult" class="each-filter-option point">
              <h4 class="filter-label">Time</h4>
              <img
                src="/admin-images/sort.svg"
                loading="lazy"
                alt=""
                class="filter-icon drop"
              />
            </div>
          </div>
          <div class="table-wrapper">
            <table class="custom-table">
              <thead>
                <tr>
                  <td>S/N</td>
                  <td>Symbol</td>
                  <td>Name</td>
                  <td>Address</td>
                  <td>Description</td>

                  <td>Status</td>
                  <td>Actions</td>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(currency, int) in currencies" :key="currency._id">
                  <td>{{ int + 1 }}</td>
                  <td>
                    <img
                      :src="`${FILE_URL}/${currency.symbol}`"
                      alt=""
                      class="banner currency"
                    />
                  </td>
                  <td>{{ currency.name }}</td>
                  <td>{{ currency.address }}</td>
                  <td>
                    {{ currency.description }}
                  </td>

                  <td>
                    <div
                      @click="
                        toggleCurrencyStatus(currency._id, currency.status)
                      "
                      class="status"
                      :class="{ success: currency.status }"
                      v-if="currency.status"
                    >
                      Active
                    </div>
                    <div
                      @click="
                        toggleCurrencyStatus(currency._id, currency.status)
                      "
                      :class="{ success: currency.status }"
                      class="status"
                      v-else
                    >
                      Draft
                    </div>
                  </td>
                  <td>
                    <div
                      class="filter-box"
                      @click="prepareCurrencyEdit(currency)"
                    >
                      <img
                        src="/admin-images/edit-gray.svg"
                        loading="lazy"
                        alt=""
                        class="filter-icon check action-icon"
                      />
                    </div>
                    <div
                      class="filter-box"
                      @click="
                        showConfirmation(
                          'Are you sure you want to delete this currency',
                          currency._id
                        )
                      "
                    >
                      <img
                        src="/admin-images/delete-gray.svg"
                        loading="lazy"
                        alt=""
                        class="filter-icon check action-icon"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="table-label">
            <div>
              <strong class="bold-text">Results</strong>: {{ resultLength }}
              <strong class="bold-text-2">Page</strong> {{ currentPage }} of
              {{ pages().length }}
            </div>
            <ul
              v-if="pages().length > 1"
              role="list"
              class="min-table-pagination"
            >
              <li
                v-if="currentPage != 1"
                @click="paginate(currentPage - 1)"
                class="pagination-item"
              >
                <img
                  src="/admin-images/cheveron-left.svg"
                  loading="lazy"
                  alt=""
                  class="pagination-img"
                />
              </li>
              <li
                @click="paginate(int + 1)"
                :class="{
                  active: int == currentPage - 1,
                  hide: int >= 3 + currentPage || int < currentPage - 3,
                  show: int + 1 == pages().length,
                }"
                v-for="(page, int) in pages().length"
                :key="int"
                class="pagination-item"
              >
                <div>{{ int + 1 }}</div>
              </li>
              <li
                v-if="currentPage < pages(currentPage + 1).length"
                @click="paginate(currentPage + 1)"
                class="pagination-item"
              >
                <img
                  src="/admin-images/cheveron-right.svg"
                  loading="lazy"
                  alt=""
                  class="pagination-img"
                />
              </li>
            </ul>
          </div>

          <div class="input-wrapper w-form">
            <form action="#" class="input-form">
              <div class="each-input">
                <label for="name-4" class="input-label">Currency Symbol </label>
                <label for="currency" class="upload-btn">
                  <img
                    src="/admin-images/white-upload.svg"
                    loading="lazy"
                    alt=""
                    class="upload-icon"
                  />
                  <div>Upload Symbol</div>
                  <input
                    type="file"
                    id="currency"
                    class="file-input"
                    @change="setSymbol"
                  />
                </label>
              </div>
              <div class="each-input">
                <label for="name-4" class="input-label">Currency Name</label
                ><input type="text" class="plan-input w-input" v-model="name" />
              </div>
              <div class="each-input">
                <label for="email-3" class="input-label">Currency Address</label
                ><input
                  type="email"
                  class="plan-input w-input"
                  v-model="address"
                />
              </div>
              <div class="each-input auto">
                <label for="field-2" class="input-label"
                  >Currency Description</label
                ><textarea
                  v-model="description"
                  class="plan-input w-input"
                ></textarea>
              </div>
              <div class="button-holder">
                <input
                  type="button"
                  value="Add Account"
                  @click="processCurrencyData"
                  class="button w-button"
                /><input
                  type="submit"
                  value="Cancel"
                  data-wait="Please wait..."
                  class="button w-button"
                />
              </div>
            </form>
          </div>
        </div>
        <Instruction />
      </div>
      <AdminFooter />
    </div>
  </div>
</template>

<script>
import AdminFooter from "../../components/AdminComponents/AdminFooter.vue";
import AdminNavigation from "../../components/AdminComponents/AdminNavigation.vue";
import AdminTopHeader from "../../components/AdminComponents/AdminTopHeader.vue";
import Instruction from "../../components/AdminComponents/Instruction.vue";
export default {
  data() {
    return {
      currencies: [],
      symbol: "",
      name: "",
      description: "",
      address: "",

      editingState: false,
      editingId: "",

      confirmMessage: "",
      confirmStatus: "",
      deleteId: "",

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
    showResponseMsg(msg, status) {
      this.response = msg;
      this.responseState = status;
      this.showResponse = true;
      setTimeout(() => {
        this.response = "";
        this.showResponse = false;
      }, 6000);
    },

    setSymbol(e) {
      this.symbol = e.target.files[0];
    },

    clearInputs() {
      this.symbol = "";
      this.name = "";
      this.description = "";
      this.address = "";
      this.editingId = "";
      this.editingState = false;
    },

    showConfirmation(msg, id) {
      this.deleteId = id;
      this.confirmMessage = msg;
      this.confirmStatus = false;
    },

    returnConfirmation(data) {
      this.confirmStatus = !this.confirmStatus;
      if (data == "yes") {
        this.deleteCurrency(this.deleteId);
      }
    },

    prepareCurrencyEdit(currency) {
      this.editingId = currency._id;
      this.editingState = true;
      this.symbol = currency.symbol;
      this.name = currency.name;
      this.address = currency.address;
      this.description = currency.description;
    },

    sortResult() {
      this.sort = this.sort == "-time" ? "time" : "-time";
      this.getCurrencies();
    },

    paginate(page) {
      this.currentPage = page;
      this.getCurrencies();
    },

    processCurrencyData() {
      const form = new FormData();
      form.append("symbol", this.symbol);
      form.append("name", this.name);
      form.append("address", this.address);
      form.append("description", this.description);
      form.append("time", new Date().getTime());

      if (this.editingState) {
        this.updateCurrency(form);
      } else {
        this.createCurrency(form);
      }
    },

    toggleCurrencyStatus(id, status) {
      this.editingId = id;
      const data = new FormData();
      data.append("status", !status);

      this.updateCurrency(data);
    },

    async updateCurrency(form) {
      const query = `?limit=${this.limit}&page=${this.currentPage}&sort=${this.sort}`;
      try {
        const result = await this.$axios.patch(
          `/currency/${this.editingId}/${query}`,
          form
        );
        this.currencies = result.data.data;
        this.resultLength = result.data.resultLength;
        this.clearInputs();
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async createCurrency(form) {
      const query = `?limit=${this.limit}&page=${this.currentPage}&sort=${this.sort}`;
      try {
        const result = await this.$axios.post(`/currency/${query}`, form);
        this.showResponseMsg("The currency was created successfully", true);
        this.currencies = result.data.data;
        this.resultLength = result.data.resultLength;
        this.clearInputs();
      } catch (err) {
        this.showResponseMsg(err.response.data.message, false);
      }
    },

    async getCurrencies() {
      const query = `?limit=${this.limit}&page=${this.currentPage}&sort=${this.sort}`;
      try {
        const result = await this.$axios.get(`/currency/${query}`);
        this.currencies = result.data.data;
        this.resultLength = result.data.resultLength;
      } catch (err) {
        console.log(err.response.data);
      }
    },

    async deleteCurrency(id) {
      const query = `?limit=${this.limit}&page=${this.currentPage}&sort=${this.sort}`;
      try {
        const result = await this.$axios.delete(`/currency/${id}/${query}`);
        this.currencies = result.data.data;
        this.resultLength = result.data.resultLength;
        this.deleteId = "";
      } catch (err) {
        this.showResponseMsg(err.response.data.message, false);
      }
    },
  },

  computed: {
    FILE_URL() {
      return this.$store.state.fileURL;
    },
  },

  mounted() {
    this.getCurrencies();
  },
  components: { AdminFooter, AdminNavigation, AdminTopHeader, Instruction },
};
</script>

<style>
.banner.currency {
  max-height: 35px;
}
</style>
