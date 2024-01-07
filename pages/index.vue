<template>
  <div class="client-2">
    <div class="home-page-2">
      <HomeDarkNavigation />
      <!---------------------HERO SECTION-------------------->
      <div class="bit-section1">
        <div class="div-block-381">
          <div class="container-new1">
            <div class="div-block-205">
              <div class="div-block-206">
                <h1 class="heading-47">
                  Welcome to<br /><span class="text-span" v-if="company">{{
                    company.companyName
                  }}</span>
                </h1>
                <div>
                  <em class="italic-text"
                    >We grow your capital quick and steady, and make you owner
                    of propterties in our invested areas around the globe.
                    <nuxt-link to="/signup" class="start">Start Now</nuxt-link>
                    and watch your investment grow on daily basis.</em
                  >
                </div>
                <div class="div-block-326">
                  <nuxt-link to="/signup" class="link-block-29 w-inline-block"
                    ><h1 class="button-14">get started</h1></nuxt-link
                  ><nuxt-link to="/contact" class="link-block-29 w-inline-block"
                    ><h1 class="button-14">contact us</h1></nuxt-link
                  >
                </div>
              </div>
              <!-- <div class="div-block-207">
                <h2 class="tile">Landmark Christmas Bonanza</h2>
                <img src="/images/image7.svg" alt="" class="christImage" />
                <div class="bonan">
                  <div class="yellow">$200 - $2,500</div>
                  <div class="yellow space">=></div>
                  <div class="white">%60.00</div>
                </div>
                <div class="bonan">
                  <div class="yellow">$2,600 - Unlimited</div>
                  <div class="yellow space">=></div>
                  <div class="white">%100.00</div>
                </div>
                <div class="duration du-top">
                  <div class="yellow">Started</div>
                  <div class="yellow space">=></div>
                  <div class="white">1st December, 2023</div>
                </div>
                <div class="duration">
                  <div class="yellow">Ends</div>
                  <div class="yellow space">=></div>
                  <div class="white">31st December, 2023</div>
                </div>
              </div> -->
              <div class="div-block-207">
                <img src="/images/hero.jpeg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--------XX-----------HERO SECTION---------XX--------->

      <!---------------------TECH SECTION-------------------->
      <div class="bit-section2">
        <div class="container-new1">
          <div class="div-block-214">
            <div class="div-block-215">
              <img src="/images/bitcoin-icons.png" loading="lazy" alt="" />
              <h1 class="heading-49">Cloud Hosting</h1>
              <div class="text-block-50">
                With our cloud hosting, we can easily scale our computing
                resources up as needed by our increasing number of investors,
                without any glitches to our customers experience.
              </div>
            </div>
            <div class="div-block-215">
              <img src="/images/world-icon.png" loading="lazy" alt="" />
              <h1 class="heading-49">Secured Money</h1>
              <div class="text-block-50">
                Financial security is an essential aspect of our platform, and
                the loss of money is prevented by you choosing
                {{ company.companyName }} to take the risk and make the
                decisions for you.
              </div>
            </div>
            <div class="div-block-215">
              <img src="/images/shield-icons.png" loading="lazy" alt="" />
              <h1 class="heading-49 b">Data Privacy</h1>
              <div class="text-block-50">
                With {{ company.companyName }}, be rest assured that your date
                is protected from cyber attacks, and we keep no trace of your
                navigotion history and web activities thus ensuring that no one
                can steal any info about your online activities.
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--------XX-----------TECH SECTION---------XX--------->

      <!---------------------ABOUT SECTION-------------------->
      <div class="bit-section3">
        <div class="container-new1">
          <div class="div-block-216">
            <div class="div-block-217">
              <h1 class="heading-50">About</h1>
              <div>
                <em class="italic-text-2"
                  >What We do that have earned investors trust around the globe
                  for more many years:</em
                >
              </div>
              <div
                class="text-block-51"
                v-html="`${aboutContent.substring(0, 1300)}...`"
              ></div>
              <h4>Our Global Partners are...</h4>
              <div class="div-block-223">
                <div class="div-block-219">
                  <div class="div-block-220">
                    <div class="div-block-221"></div>
                    <div class="text-block-52">Amazon</div>
                  </div>
                  <div class="div-block-220">
                    <div class="div-block-221"></div>
                    <div class="text-block-52">Coca Cola</div>
                  </div>
                  <div class="div-block-220">
                    <div class="div-block-221"></div>
                    <div class="text-block-52">Tesla</div>
                  </div>
                </div>
                <div class="div-block-222">
                  <div class="div-block-220">
                    <div class="div-block-221"></div>
                    <div class="text-block-52">Apple</div>
                  </div>
                  <div class="div-block-220">
                    <div class="div-block-221"></div>
                    <div class="text-block-52">Meta</div>
                  </div>
                  <div class="div-block-220">
                    <div class="div-block-221"></div>
                    <div class="text-block-52">Netflix</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="div-block-218">
              <img
                :src="`${FILE_URL}/${cert}`"
                loading="lazy"
                sizes="(max-width: 479px) 95vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, (max-width: 1279px) 50vw, 44vw"
                :srcset="`${FILE_URL}/${cert} 500w, ${FILE_URL}/${cert} 530w`"
                alt=""
                class="image-71"
              />
            </div>
          </div>
          <div class="div-block-261">
            <div class="div-block-262">
              <div class="div-block-264">
                <div class="div-block-266 active">
                  <img
                    src="/images/barchart-icon.png"
                    loading="lazy"
                    alt=""
                    class="image-79"
                  />
                </div>
                <div class="div-block-266 _4">
                  <img
                    src="/images/pie-bar-chart.png"
                    loading="lazy"
                    alt=""
                    class="image-79"
                  />
                </div>
                <div class="div-block-266 _3">
                  <img
                    src="/images/dollarshield.png"
                    loading="lazy"
                    alt=""
                    class="image-79"
                  />
                </div>
                <div class="div-block-266 _2">
                  <img
                    src="/images/bitcoinflower-icon.png"
                    loading="lazy"
                    alt=""
                    class="image-79"
                  />
                </div>
                <div class="div-block-266 _1">
                  <img
                    src="/images/barchart-icon.png"
                    loading="lazy"
                    alt=""
                    class="image-79"
                  />
                </div>
                <div class="div-block-266 _6">
                  <img
                    src="/images/dollarcoin.png"
                    loading="lazy"
                    alt=""
                    class="image-79"
                  />
                </div>
                <div class="div-block-266 _7">
                  <img
                    src="/images/pointgraph.png"
                    loading="lazy"
                    alt=""
                    class="image-79"
                  />
                </div>
                <div class="div-block-266 _8">
                  <img
                    src="/images/coin-world.png"
                    loading="lazy"
                    alt=""
                    class="image-79"
                  />
                </div>
                <div class="div-block-265">
                  <div class="text-block-67">Stages of</div>
                  <h1 class="heading-64">Owning Property</h1>
                  <div class="text-block-68" v-if="company">
                    It starts with a capital, choosing the right investors({{
                      company.companyName
                    }}), growing your investment, withdrawing your profit and
                    acquiring your property.
                  </div>
                </div>
              </div>
            </div>

            <div class="div-block-263" v-if="firstBlog">
              <h1 class="heading-65">Property Acquisition</h1>
              <div>
                <em class="italic-text-4">{{ firstBlog.title }}</em>
              </div>
              <div
                class="text-block-69"
                v-html="`${firstBlog.content.substring(0, 800)}...`"
              ></div>
              <nuxt-link
                :to="`news-details/${firstBlog._id}`"
                class="button-17 w-button"
                >Read More</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
      <!--------XX-----------ABOUT SECTION---------XX--------->

      <!---------------------REPORT SECTION-------------------->
      <div class="bit-section4">
        <div class="div-block-406">
          <div class="container-new1">
            <div class="div-block-224">
              <div class="div-block-225">
                <h1 class="heading-51">Grow Your Capital</h1>
                <div class="text-block-54">
                  Investing in rental properties and collecting rent. Flipping
                  properties by purchasing them at a lower price, making
                  improvements, and then selling them at a higher price.
                  Developing properties by purchasing land and building new
                  structures, such as apartment buildings or single-family
                  homes. Participating in a Estate Marketing investment trust
                  (EMIT) which allows individuals to invest in large-scale,
                  income-producing Estate Marketing. Joining an Estate Marketing
                  crowdfunding platform that allows investors to pool their
                  money to fund Estate Marketing projects.
                </div>
                <a
                  target="_blank"
                  href="/images/Report.pdf"
                  class="button-16 w-inline-block"
                  ><h1 class="heading-130">ANNUAL REPORT</h1></a
                >
                <a
                  target="_blank"
                  href="/images/Landmark-Extract.pdf"
                  class="button-17 w-button"
                  >COMPANY EXTRACT</a
                >
              </div>
              <div class="div-block-226">
                <div class="div-block-227">
                  <div class="div-block-228">
                    <img
                      src="/images/Bear.png"
                      loading="lazy"
                      alt=""
                      class="image-72"
                    />
                  </div>
                  <h1 class="heading-52">100%</h1>
                  <div class="text-block-53">Deposit</div>
                </div>
                <div class="div-block-227">
                  <div class="div-block-228">
                    <img
                      src="/images/hills.png"
                      loading="lazy"
                      alt=""
                      class="image-72"
                    />
                  </div>
                  <h1 class="heading-52" v-if="company">100%</h1>
                  <div class="text-block-53">Investment</div>
                </div>
                <div class="div-block-227">
                  <div class="div-block-228">
                    <img
                      src="/images/cowhead-icon.png"
                      loading="lazy"
                      alt=""
                      class="image-72"
                    />
                  </div>
                  <h1 class="heading-52">100%</h1>
                  <div class="text-block-53">Withdrawal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--------XX-----------REPORT SECTION---------XX--------->

      <!--------XX-----------MAP SECTION---------XX--------->
      <div class="bit-section5">
        <div class="container-new1" v-if="events">
          <div class="div-block-230">
            <h1 class="heading-53">Roadmap</h1>
            <div class="div-block-229"></div>
          </div>
          <div class="div-block-231">
            <div class="div-block-232" v-if="events[0]">
              <h1 class="heading-54">
                <strong class="bold-text-2">{{ events[0].title }}</strong>
              </h1>
              <div class="text-block-55" v-html="events[0].content"></div>
              <div class="div-block-272">
                <div class="div-block-270"></div>
                <div class="div-block-271"></div>
                <h1 class="heading-66" v-if="events[0]">
                  Q1 {{ new Date(events[0].time).getFullYear() }}
                </h1>
              </div>
            </div>

            <div class="div-block-233" v-if="events[2]">
              <h1 class="heading-54">
                <strong class="bold-text-3">{{ events[2].title }}</strong>
              </h1>
              <div class="text-block-92" v-html="events[2].content"></div>
              <div class="div-block-272">
                <div class="div-block-270"></div>
                <div class="div-block-271"></div>
                <h1 class="heading-66">
                  Q3 {{ new Date(events[2].time).getFullYear() }}
                </h1>
              </div>
            </div>

            <div class="div-block-232 d" v-if="events[4]">
              <h1 class="heading-54">
                <strong class="bold-text-4">{{ events[4].title }}</strong>
              </h1>
              <div class="text-block-93" v-html="events[4].content"></div>
              <div class="div-block-272">
                <div class="div-block-270"></div>
                <div class="div-block-271"></div>
                <h1 class="heading-66">
                  Q5 {{ new Date(events[4].time).getFullYear() }}
                </h1>
              </div>
            </div>
          </div>
          <div class="div-block-267">
            <img
              src="/images/leftAngleBracket.svg"
              loading="lazy"
              width="21"
              alt=""
              class="image-80 b"
            /><img
              src="/images/rightAngleBracket.svg"
              loading="lazy"
              width="21"
              alt=""
              class="image-80"
            />
            <div class="div-block-269"></div>
          </div>
          <div class="div-block-231 b">
            <div class="div-block-232 b" v-if="events[1]">
              <h1 class="heading-54">
                <strong>{{ events[1].title }}</strong>
              </h1>
              <div class="text-block-94" v-html="events[1].content"></div>
              <div class="div-block-272 b">
                <h1 class="heading-66">
                  Q2 {{ new Date(events[1].time).getFullYear() }}
                </h1>
                <div class="div-block-271"></div>
                <div class="div-block-270"></div>
              </div>
            </div>

            <div class="div-block-232 c" v-if="events[3]">
              <h1 class="heading-54">
                <strong>{{ events[3].title }}</strong>
              </h1>
              <div class="text-block-95" v-html="events[3].content"></div>
              <div class="div-block-272 b">
                <h1 class="heading-66">
                  Q4 {{ new Date(events[4].time).getFullYear() }}
                </h1>
                <div class="div-block-271"></div>
                <div class="div-block-270"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--------XX-----------MAP SECTION---------XX--------->

      <!---------------------REVIEW SECTION-------------------->
      <testimonial />
      <!--------XX-----------REVIEW SECTION---------XX--------->

      <!---------------------TEAM SECTION-------------------->
      <div class="bit-section7">
        <div class="container-new1">
          <div class="div-block-230">
            <h1 class="heading-53">Our Featured Properties</h1>
            <div class="div-block-229"></div>
          </div>
        </div>
        <div class="div-block-236" v-if="staffs">
          <div v-for="staff in staffs" :key="staff._id" class="div-block-237">
            <div class="div-block-238">
              <img
                :src="`${FILE_URL}/${staff.image}`"
                loading="lazy"
                alt=""
                class="image-75"
              />
            </div>
            <h1 class="heading-57">{{ staff.name }}</h1>
            <h1 class="heading-58">{{ staff.position }}</h1>
            <div class="text-block-57">
              {{ staff.quote }}
            </div>
          </div>
        </div>
        <div class="container-new1 c">
          <div class="div-block-230">
            <h1 class="heading-53">OUR WALLET FEATURES</h1>
            <div class="div-block-229"></div>
          </div>
        </div>
        <div class="div-block-245">
          <div class="container-new1">
            <div class="div-block-244">
              <div class="div-block-239">
                <div class="div-block-240">
                  <div class="div-block-243">
                    <img
                      src="/images/chart-box-icon.png"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <h1 class="heading-59">Predictions</h1>
                  <div class="text-block-58">
                    With our AI analyzer, our predictions of the stock market
                    this year has been nothing less than profitable
                  </div>
                </div>
                <div class="div-block-240">
                  <div class="div-block-243">
                    <img src="/images/dollarshield.png" loading="lazy" alt="" />
                  </div>
                  <h1 class="heading-59">Innovations</h1>
                  <div class="text-block-58">
                    The driving force of our executive staffs has always induced
                    innovations in every aspect of our daily operations.
                  </div>
                </div>
                <div class="div-block-240">
                  <div class="div-block-243">
                    <img src="/images/dollarshield.png" loading="lazy" alt="" />
                  </div>
                  <h1 class="heading-59">Network</h1>
                  <div class="text-block-58">
                    Our robust network has ensure the synchronization of our
                    operations making confirmation of transactions and other
                    operations faster.
                  </div>
                </div>
              </div>
              <div class="div-block-241">
                <img
                  src="/images/smartphone-icon.png"
                  loading="lazy"
                  alt=""
                  class="image-87"
                />
              </div>
              <div class="div-block-242">
                <div class="div-block-240 b">
                  <div class="div-block-243 b">
                    <img src="/images/bitcoin-icon.png" loading="lazy" alt="" />
                  </div>
                  <h1 class="heading-59 b">Planning</h1>
                  <div class="text-block-58 b">
                    Our success has been mainly due to thorough planning of
                    policies before implementation, because a well planned
                    policy is half achieved.
                  </div>
                </div>
                <div class="div-block-240 b">
                  <div class="div-block-243">
                    <img
                      src="/images/bitcoinflower-icon.png"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <h1 class="heading-59">security</h1>
                  <div class="text-block-58 b">
                    By choosing us, be rest assured that your data and
                    information are safe and secured from cyber abusers.
                  </div>
                </div>
                <div class="div-block-240 b">
                  <div class="div-block-243">
                    <img src="/images/pointgraph.png" loading="lazy" alt="" />
                  </div>
                  <h1 class="heading-59">sell &amp; buy</h1>
                  <div class="text-block-58 b">
                    Indeed selling and buying are the two steps we take after
                    every analysis to make profits for our investors, and we are
                    good at it.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="div-block-251">
          <div class="container-new1">
            <div class="div-block-246" v-if="secondBlog">
              <div
                class="div-block-247"
                :style="{
                  backgroundImage: `url(${FILE_URL}/${secondBlog.banner})`,
                }"
              >
                <div class="video w-video w-embed"></div>
              </div>
              <div class="div-block-248">
                <h1 class="heading-60">{{ secondBlog.title }}</h1>
                <div class="text-block-59">
                  <em class="italic-text-3">{{ secondBlog.subtitle }}</em>
                </div>
                <div
                  class="text-block-60"
                  v-html="`${secondBlog.content.substring(0, 300)}...`"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--------XX-----------TEAM SECTION---------XX--------->

      <!---------------------PARTNERS SECTION-------------------->
      <div class="bit-section14">
        <div class="div-block-407">
          <div class="container-new1">
            <div>
              <div class="div-block-230 _2">
                <h1 class="heading-53">Strategic Partners</h1>
                <div class="div-block-229"></div>
              </div>
              <div class="div-block-252">
                <div
                  v-for="partner in partners"
                  :key="partner._id"
                  class="link-block-19 partner"
                >
                  <div class="partner-img">
                    <img
                      :src="`${FILE_URL}/${partner.image}`"
                      loading="lazy"
                      alt=""
                      class="image-77"
                    />
                  </div>
                  <div class="partner-name">{{ partner.name }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--------XX-----------PARTNERS SECTION---------XX--------->

      <div class="bit-section15">
        <div class="container-new1">
          <div class="div-block-253" v-if="blogs">
            <div v-for="blog in blogs" :key="blog._id" class="div-block-254">
              <h1 class="heading-62">{{ blog.title }}</h1>
              <div
                class="text-block-62"
                v-html="`${blog.content.substring(0, 300)}...`"
              ></div>
              <nuxt-link
                :to="`/news-details/${blog._id}`"
                class="link-block-20 w-inline-block"
                ><h1 class="heading-61">Read More</h1>
                <img
                  src="https://uploads-ssl.webflow.com/63285dac88280ce08f0a9677/6358ede42749b85419003355_Vector%20(2).svg"
                  loading="lazy"
                  width="15"
                  alt=""
              /></nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <home-footer />
    </div>
  </div>
</template>

<script>
import HomeDarkNavigation from "../components/HomeDarkNavigation.vue";
import HomeFooter from "../components/HomeFooter.vue";
import Testimonial from "../components/Testimonial.vue";

export default {
  components: { HomeDarkNavigation, HomeFooter, Testimonial },
  data() {
    return {
      banners: [],
      reviews: [],
      blogs: [],
      events: [],
      staffs: [],
      partners: [],
      cert: "",
      company: "",
      address: "",
      firstBlog: "",
      secondBlog: "",

      tab: 0,
      time: "",
      days: "",
      hours: "",
      minutes: "",
      seconds: "",
      aboutContent: "",
      plans: [],
    };
  },
  computed: {
    FILE_URL() {
      return this.$store.state.fileURL;
    },

    sortedPlans() {
      return this.plans.sort((a, b) => a.planMinimum - b.planMinimum);
    },
  },
  methods: {
    loadScript() {
      if (!process.server) {
        let el = document.getElementById("script");

        if (el != undefined) {
          document.body.removeChild(el);
        }

        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "/script/home.js";
        script.async = true;
        script.id = "script";
        const app = document.querySelector("#footer");
        if (app) {
          app.appendChild(script);
        } else {
          console.error("Could not find app node to append script element");
        }
      }
    },

    scrollDown(data) {
      document.querySelector(`#${data}`).scrollIntoView({
        behavior: "smooth",
      });
    },

    formatDate(data) {
      if (data == null || data == undefined) {
        return "N/A";
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

    startClock() {
      setInterval(() => {
        this.days = Math.floor(
          new Date().getTime() / (24 * 60 * 60 * 1000) -
            this.time / (24 * 60 * 60 * 1000)
        );
        this.hours = new Date().getHours();
        this.minutes = new Date().getMinutes();
        this.seconds = new Date().getSeconds();
      }, 1000);
    },

    flashStats() {
      setInterval(function () {
        // Your code here
      }, (Math.floor(Math.random() * 5) + 2) * 1000);
    },

    async getAboutCompany() {
      try {
        const result = await this.$axios.get("/about");
        this.cert = await result.data.data[0].certificate;
        this.aboutContent = await result.data.data[0].content;
      } catch (err) {
        console.log(err);
      }
    },

    async getPlans() {
      try {
        const result = await this.$axios.get(`/plans`);
        this.plans = result.data.data;
      } catch (err) {
        console.log(err.response);
      }
    },

    async getBlogs() {
      try {
        const result = await this.$axios.get("/blog");
        this.firstBlog = result.data.data[0];
        this.secondBlog = result.data.data[1];
        this.blogs = result.data.data;
      } catch (err) {
        console.log(err.response);
      }
    },

    async getBanner() {
      try {
        const result = await this.$axios.get(`/banner/?bannerCategory=Home`);
        this.banners = result.data.data;
      } catch (err) {
        console.log(err);
      }
    },

    async getCompany() {
      try {
        const result = await this.$axios.get("/company");
        this.company = await result.data.data;
        this.time = this.company.dayStarted;
        this.startClock();
      } catch (err) {
        console.log(err.response.data);
      }
    },

    async getReviews() {
      try {
        const result = await this.$axios.get("/review");
        this.reviews = await result.data?.data;
        this.loadScript();
      } catch (err) {
        console.log(err);
      }
    },

    async getStaffs() {
      try {
        const result = await this.$axios.get(`/staffs`);
        this.staffs = result.data.data;
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async getPartners() {
      try {
        const result = await this.$axios.get(`/partners`);
        this.partners = result.data.data;
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async getEvents() {
      try {
        const result = await this.$axios.get(`/events`);
        this.events = result.data.data;
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    // async getNews() {
    //   try {
    //     const apiKey = "FIRYKNZOLGF62KAJ";
    //     const result = await this.$axios.get(
    //       `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=${apiKey}`
    //     );
    //     console.log(result);
    //   } catch (err) {
    //     console.log(err.response.data.message);
    //   }
    // },
  },
  mounted() {
    // this.getBanner();
    this.getBlogs();
    this.getPlans();
    this.getCompany();
    this.getAboutCompany();
    this.getStaffs();
    this.getEvents();
    this.getPartners();
    this.getReviews();
    // this.getNews();
  },
};
</script>

<style>
.christImage {
  margin: 0 auto;
  margin-bottom: 20px;
}

.div-block-207 {
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.bonan {
  display: flex;
  align-items: center;
  color: #ffff00;
  font-size: 20px;
  margin-bottom: 10px;
}

.duration {
  display: flex;
  align-items: center;
  color: #aceb2f;
  font-size: 14px;
  margin-bottom: 10px;
}

.du-top {
  margin-top: 20px;
}

.space {
  margin: 0 10px;
}

.white {
  color: white;
  font-weight: bold;
}

.div-block-229 {
  margin-bottom: 20px;
}

.button-16.w-inline-block {
  margin-bottom: 10px;
}

.start {
  color: #aceb2f;
  text-decoration: none;
}

.link-block-19 {
  text-align: center;
  font-size: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20px;
}

.partner-img {
  height: 100px;
  min-height: 100px;
  width: 100px;
  min-width: 100px;
  overflow: hidden;
  border-radius: 50%;
  margin: 10px auto;
}

.partner-img img {
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
}

@media screen and (max-width: 500px) {
  .tile {
    font-size: 20px;
  }

  .bonan {
    font-size: 16px;
  }
}
</style>
