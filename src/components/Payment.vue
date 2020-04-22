<template>
  <div class="payment-wrapper">
    <aside role="complementary">
      <button
        class="order-summary-toggle order-summary-toggle--show shown-if-js"
        @click.prevent="onToggleSidebar"
      >
        <span class="wrap">
          <span class="order-summary-toggle__inner">
            <span class="order-summary-toggle__icon-wrapper">
              <svg
                width="20"
                height="19"
                xmlns="http://www.w3.org/2000/svg"
                class="order-summary-toggle__icon"
              >
                <path
                  d="M17.178 13.088H5.453c-.454 0-.91-.364-.91-.818L3.727 1.818H0V0h4.544c.455 0 .91.364.91.818l.09 1.272h13.45c.274 0 .547.09.73.364.18.182.27.454.18.727l-1.817 9.18c-.09.455-.455.728-.91.728zM6.27 11.27h10.09l1.454-7.362H5.634l.637 7.362zm.092 7.715c1.004 0 1.818-.813 1.818-1.817s-.814-1.818-1.818-1.818-1.818.814-1.818 1.818.814 1.817 1.818 1.817zm9.18 0c1.004 0 1.817-.813 1.817-1.817s-.814-1.818-1.818-1.818-1.818.814-1.818 1.818.814 1.817 1.818 1.817z"
                />
              </svg>
            </span>
            <span class="order-summary-toggle__text order-summary-toggle__text--show">
              <span>Show order summary</span>
              <svg
                width="11"
                height="6"
                xmlns="http://www.w3.org/2000/svg"
                class="order-summary-toggle__dropdown"
                fill="#000"
              >
                <path
                  d="M.504 1.813l4.358 3.845.496.438.496-.438 4.642-4.096L9.504.438 4.862 4.534h.992L1.496.69.504 1.812z"
                />
              </svg>
            </span>
            <span class="order-summary-toggle__text order-summary-toggle__text--hide">
              <span>Hide order summary</span>
              <svg
                width="11"
                height="7"
                xmlns="http://www.w3.org/2000/svg"
                class="order-summary-toggle__dropdown"
                fill="#000"
              >
                <path
                  d="M6.138.876L5.642.438l-.496.438L.504 4.972l.992 1.124L6.138 2l-.496.436 3.862 3.408.992-1.122L6.138.876z"
                />
              </svg>
            </span>
            <span
              class="order-summary-toggle__total-recap total-recap"
              data-order-summary-section="toggle-total-recap"
            >
              <span
                class="total-recap__final-price skeleton-while-loading"
                data-checkout-payment-due-target="1110"
              >{{ totalPrice }}$</span>
            </span>
          </span>
        </span>
      </button>
    </aside>
    <div class="content">
      <div class="wrap">
        <div class="main">
          <header class="main__header">
            <div class="header-wrapper">
              <img src="@/assets/secure.svg" alt="secure" width="35" class="logo__icon" />
              <h1 class="logo__text">Secure Online Payments</h1>
            </div>
          </header>
          <div class="section">
            <div class="content-box">
              <div role="table" class="content-box__row content-box__row--tight-spacing-vertical">
                <div role="row" class="review-block">
                  <div class="review-block__inner">
                    <div role="rowheader" class="review-block__label">Name</div>
                    <div role="cell" class="review-block__content">
                      <input
                        class="field__input"
                        v-model="name"
                        v-if="showNameInput"
                        @blur="onBlurInput"
                        maxlength="50"
                      />
                      <bdo dir="ltr" v-else>{{ name }}</bdo>
                    </div>
                    <div role="cell" class="review-block__link">
                      <a class="link--small">
                        <span aria-hidden="true" @click="onChangeName" class="pointer">Change</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Current Availability -->
          <div class="available-show-mobile available-mobile">
            <p style="font-weight:bold;float:left;width:100%;">Current Availability:</p>
            <div class="progress progress-bar-custom">
              <div
                class="progress-bar progress-bar-striped bg-warning progress-bar-animated"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 20%"
              ></div>
            </div>
            <p class="timer-block">
              <b>
                Special Discount Expires
                <span style="color: #ef0e52;" class="font-weight-700">in</span>
                <span id="countdown-mobile" style="color: #ef0e52;" class="font-weight-700"></span>
                <span
                  style="text-decoration: underline; color: #ef0e52;"
                  class="font-weight-700"
                >HURRY!</span>
              </b>
            </p>
          </div>

          <div class="section section--payment-method" data-payment-method>
            <div class="section__header">
              <h2 class="section__title" id="main-header" tabindex="-1">Payment</h2>
              <p class="section__text">All transactions are secure and encrypted.</p>
            </div>
          </div>
          <div class="section__content">
            <fieldset class="content-box">
              <legend class="visually-hidden">Choose a payment method</legend>

              <div class="radio-wrapper content-box__row">
                <div class="radio__input">
                  <input
                    id="card"
                    class="input-radio"
                    type="radio"
                    :checked="payments.card"
                    @click="onPaymentsCardClick"
                  />
                </div>

                <div class="radio__label payment-method-wrapper">
                  <label for="card" class="radio__label__primary content-box__emphasis">
                    <h3>Pay by credit or debit card</h3>
                  </label>
                  <span class="radio__label__accessory">
                    <span class="visually-hidden">Pay with:</span>

                    <span data-brand-icons-for-gateway="36371497029">
                      <span class="payment-icon payment-icon--visa" data-payment-icon="visa">
                        <span class="visually-hidden">Visa,</span>
                      </span>
                      <span class="payment-icon payment-icon--master" data-payment-icon="master">
                        <span class="visually-hidden">Mastercard,</span>
                      </span>
                      <span
                        class="payment-icon payment-icon--american-express"
                        data-payment-icon="american-express"
                      >
                        <span class="visually-hidden">American Express,</span>
                      </span>
                      <span class="payment-icon payment-icon--giropay" data-payment-icon="giropay">
                        <!-- <span class="visually-hidden">
                          ,
                        </span>-->
                      </span>
                      <!-- <span class="payment-icon-list__more">
                        <span class="content-box__small-text">
                          and more…
                        </span>
                      </span>-->
                    </span>
                  </span>
                </div>
              </div>

              <div
                class="radio-wrapper content-box__row content-box__row--secondary"
                v-show="payments.card"
              >
                <div class="blank-slate">
                  <!-- <i class="blank-slate__icon icon icon--offsite"></i> -->
                  <p class="shown-if-js">
                    <iframe src frameborder="0"></iframe>
                  </p>
                </div>
              </div>
              <div class="radio-wrapper content-box__row">
                <div class="radio__input">
                  <input
                    class="input-radio"
                    id="paypal"
                    type="radio"
                    :checked="payments.paypal"
                    @click="onPaymentsPaypalClick"
                  />
                </div>

                <div class="radio__label">
                  <label for="paypal" class="radio__label__primary content-box__emphasis">
                    <img
                      alt="PayPal"
                      class="offsite-payment-gateway-logo"
                      src="@/assets/paypal.png"
                    />
                  </label>
                </div>
              </div>

              <div
                v-show="payments.paypal"
                class="radio-wrapper content-box__row content-box__row--secondary"
              >
                <div class="blank-slate">
                  <!-- <i class="blank-slate__icon icon icon--offsite"></i> -->
                  <p class="shown-if-js">
                    <span class="pointer">
                      <img
                        src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-medium.png"
                        alt="Check out with PayPal"
                      />
                    </span>
                  </p>
                </div>
              </div>
            </fieldset>
            <div class="trust-block">
              <img src="@/assets/trust.png" alt="trust01" />
              <!-- <img src="@/assets/trust02.png" alt="trust02" /> -->
            </div>
          </div>
        </div>

        <!-- Sibebar -->
        <aside class="sidebar hide-on-mobile" role="complementary" id="sidebar">
          <div class="order-summary__sections">
            <div class="order-summary__section order-summary__section--product-list">
              <div class="order-summary__section__content">
                <table class="product-table">
                  <caption class="visually-hidden">Shopping cart</caption>
                  <thead class="product-table__header">
                    <tr>
                      <th scope="col">
                        <span class="visually-hidden">Product image</span>
                      </th>
                      <th scope="col">
                        <span class="visually-hidden">Description</span>
                      </th>
                      <th scope="col">
                        <span class="visually-hidden">Quantity</span>
                      </th>
                      <th scope="col">
                        <span class="visually-hidden">Price</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody data-order-summary-section="line-items">
                    <tr class="product" v-for="(product, k) in products" :key="k">
                      <td class="product__image">
                        <div class="product-thumbnail">
                          <div class="product-thumbnail__wrapper">
                            <img
                              :alt="product.name + '-' + product.desc"
                              class="product-thumbnail__image"
                              :src="product.image"
                            />
                          </div>
                          <span
                            class="product-thumbnail__quantity"
                            aria-hidden="true"
                          >{{ product.quantity }}</span>
                        </div>
                      </td>
                      <th class="product__description" scope="row">
                        <span
                          class="product__description__name order-summary__emphasis"
                        >{{ product.name }}</span>
                        <span
                          class="product__description__variant order-summary__small-text"
                        >x{{ product.quantity }}</span>
                      </th>
                      <td class="product__price">
                        <span class="order-summary__emphasis skeleton-while-loading">
                          ${{
                          (product.quantity * product.price).toFixed(2)
                          }}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Discount -->
            <div class="order-summary__section order-summary__section--discount">
              <!-- Current Availability -->
              <div class="available-show-desktop">
                <p style="font-weight:bold;float:left;width:100%;">Current Availability:</p>
                <div class="progress progress-bar-custom">
                  <div
                    class="progress-bar progress-bar-striped bg-warning progress-bar-animated"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style="width: 20%"
                  ></div>
                </div>
                <p class="timer-block">
                  <b>
                    Special Discount Expires
                    <span style="color: #ef0e52;" class="font-weight-700">in</span>
                    <span id="countdown" style="color: #ef0e52;" class="font-weight-700"></span>
                    <span
                      style="text-decoration: underline; color: #ef0e52;"
                      class="font-weight-700"
                    >HURRY!</span>
                  </b>
                </p>
              </div>

              <form class="edit_checkout animate-floating-labels">
                <div class="fieldset">
                  <div class="field">
                    <div class="field__input-btn-wrapper">
                      <div class="field__input-wrapper">
                        <label
                          class="field__label field__label--visible"
                          for="checkout_reduction_code"
                        >Discount code</label>
                        <input
                          placeholder="Discount code"
                          class="field__input"
                          autocomplete="off"
                          aria-required="true"
                          size="30"
                          type="text"
                          v-model="discount"
                          disabled
                        />
                      </div>

                      <button
                        name="button"
                        type="submit"
                        class="field__input-btn btn"
                        :class="{ 'btn--disabled': true }"
                        aria-busy="false"
                        :disabled="true"
                      >
                        <span
                          class="btn__content visually-hidden-on-mobile"
                          aria-hidden="true"
                        >Applied</span>
                        <img
                          src="@/assets/next.svg"
                          alt="apply"
                          width="20"
                          class="hidden-on-desktopnew"
                          style="vertical-align: text-bottom; padding-left: 5px"
                        />
                        <svg
                          class="icon-svg icon-svg--size-18 btn__spinner icon-svg--spinner-button"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <use xlink:href="#spinner-button" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div
              class="order-summary__section order-summary__section--total-lines"
              data-order-summary-section="payment-lines"
            >
              <table class="total-line-table">
                <caption class="visually-hidden">Cost summary</caption>
                <thead>
                  <tr>
                    <th scope="col">
                      <span class="visually-hidden">Description</span>
                    </th>
                    <th scope="col">
                      <span class="visually-hidden">Price</span>
                    </th>
                  </tr>
                </thead>

                <tbody class="total-line-table__tbody">
                  <tr class="total-line total-line--shipping">
                    <th class="total-line__name" scope="row">
                      <span>Shipping</span>
                    </th>
                    <td class="total-line__price">
                      <span class="skeleton-while-loading order-summary__emphasis free">Free</span>
                    </td>
                  </tr>

                  <tr class="total-line total-line--taxes hidden" data-checkout-taxes>
                    <th class="total-line__name" scope="row">Taxes</th>
                    <td class="total-line__price">
                      <span
                        class="order-summary__emphasis skeleton-while-loading"
                        data-checkout-total-taxes-target="0"
                      >$0.00</span>
                    </td>
                  </tr>
                </tbody>
                <tfoot class="total-line-table__footer">
                  <tr class="total-line">
                    <th class="total-line__name payment-due-label" scope="row">
                      <span class="payment-due-label__total">Total</span>
                    </th>
                    <td class="total-line__price payment-due">
                      <span class="payment-due__currency remove-while-loading">USD</span>
                      <span
                        class="payment-due__price skeleton-while-loading--lg"
                        data-checkout-payment-due-target="1110"
                      >{{ totalPrice }}$</span>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "name",
      showNameInput: false,
      payments: {
        paypal: false,
        card: true
      },
      totalPrice: "$10.00",
      discount: "SPECIALE50",
      countdown: "15:00",
      COUNTDOWN_MINUTES: 15,
      products: [
        {
          name: "Vegetable Magical Spiralizer",
          price: 9.0,
          quantity: 3,
          image:
            "//cdn.shopify.com/s/files/1/0031/2229/8949/products/f2114f51ac2ac322e5da14acf07618cc_small.jpg?v=1550488948"
        },
        {
          name: "Vegetable Magical Spiralizer",
          price: 9.0,
          quantity: 3,
          image:
            "//cdn.shopify.com/s/files/1/0031/2229/8949/products/f2114f51ac2ac322e5da14acf07618cc_small.jpg?v=1550488948"
        }
      ]
    };
  },
  computed: {
    countDownDate() {
      return new Date().getTime() + this.COUNTDOWN_MINUTES * 60 * 1000;
    }
  },
  methods: {
    onChangeName() {
      this.showNameInput = true;
    },
    onBlurInput() {
      this.showNameInput = false;
    },
    onPaymentsPaypalClick() {
      this.payments.paypal = true;
      this.payments.card = false;
    },
    onPaymentsCardClick() {
      this.payments.paypal = false;
      this.payments.card = true;
    },
    onToggleSidebar() {
      var node = document.querySelector("#sidebar");
      node.classList.toggle("hide-on-mobile");
    },
    countdownTimer(minutes) {
      var seconds = 60;
      var mins = minutes;
      var _self = this;
      function tick() {
        var counter = document.getElementById("countdown");
        var counterMobile = document.getElementById("countdown-mobile");
        var current_minutes = mins - 1;
        seconds--;
        var result =
          " " +
          current_minutes.toString() +
          ":" +
          (seconds < 10 ? "0" : "") +
          String(seconds) +
          " ";
        counterMobile.innerHTML = result;
        counter.innerHTML = result;

        if (seconds > 0) {
          setTimeout(tick, 1000);
        } else {
          if (mins > 1) {
            _self.countdownTimer(mins - 1);
          }
        }
      }
      tick();
    }
  },
  mounted() {
    this.countdownTimer(this.COUNTDOWN_MINUTES);
  }
};
</script>

<style>
.payment-wrapper {
  height: 100%;
  min-height: 100%;
}

.header-wrapper {
  vertical-align: middle;
}

.section:first-of-type {
  padding-top: 0;
}

.section .review-block__inner {
  align-items: center;
}

.section input {
  height: 40px;
}

.logo__icon {
  margin-right: 10px;
  vertical-align: bottom;
}

.logo__text {
  display: inline-block !important;
}

.radio-wrapper {
  display: flex;
}

.free {
  font-size: 20px;
}

.field__input-btn-wrapper {
  align-items: flex-end;
}

.field__input-btn-wrapper button {
  height: 50px;
}

.progress {
  height: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  overflow: hidden;
  background-color: #f5f5f5;
  border-radius: 4px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
}

.progress-bar-custom {
  width: 100% !important;
  margin-bottom: 10px;
  display: inline-flex;
}

.bg-warning {
  background-color: #f00 !important;
}

.progress-bar-striped,
.progress-striped .progress-bar {
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-size: 40px 40px;
}

.progress-bar {
  float: left;
  width: 0;
  height: 100%;
  font-size: 12px;
  line-height: 20px;
  color: #fff;
  text-align: center;
  background-color: #337ab7;
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  transition: width 0.6s ease;
}

.timer-block {
  margin-bottom: 20px;
  font-size: 18px;
}

.trust-block {
  margin: 20px 0;
  display: inline-block;
  width: 100%;
  text-align: center;
}

.trust-block img {
  max-width: 90%;
}

input[disabled] {
  color: #d5d5d5 !important;
}

.payment-wrapper .content {
  height: 100%;
}

@media (max-width: 749px) {
  .content .review-block__content {
    flex: 1;
    /* align-items: self-end; */
  }
}

@media (max-width: 999px) {
  .hide-on-mobile {
    display: none;
  }
}

@media (max-width: 999px) {
  .main__header {
    margin-bottom: 20px;
  }

  .review-block__label {
    padding-top: 4px;
  }

  .available-show-mobile {
    display: block !important;
  }

  .available-show-desktop {
    display: none !important;
  }
}

.available-show-mobile {
  display: none;
}

.available-show-desktop {
  display: block;
}

.available-mobile {
  margin-top: 30px;
  margin-bottom: -30px;
}
</style>
