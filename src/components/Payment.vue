<template>
  <div class="payment-wrapper">
    <div class="hidden-on-desktop">
      <div class="content">
        <div class="wrap">
          <div class="main">
            <header class="main__header">
              <div class="header-wrapper">
                <img
                  src="@/assets/secure.svg"
                  alt="secure"
                  width="35"
                  class="logo__icon"
                />
                <h1 class="logo__text">Secure Online Payments</h1>
              </div>
            </header>
          </div>
        </div>
      </div>
    </div>
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
            <span
              class="order-summary-toggle__text order-summary-toggle__text--show"
            >
              <span>Show order summary</span>
              <svg
                width="11"
                height="6"
                xmlns="http://www.w3.org/2000/svg"
                class="order-summary-toggle__dropdown"
                fill="#000"
                :class="{ toggleArrow }"
              >
                <path
                  d="M.504 1.813l4.358 3.845.496.438.496-.438 4.642-4.096L9.504.438 4.862 4.534h.992L1.496.69.504 1.812z"
                />
              </svg>
            </span>
            <span
              class="order-summary-toggle__total-recap total-recap"
              data-order-summary-section="toggle-total-recap"
            >
              <span class="total-recap__final-price skeleton-while-loading"
                >{{ totalPrice }}$</span
              >
            </span>
          </span>
        </span>
      </button>
    </aside>
    <div class="content">
      <div class="wrap">
        <div class="main">
          <header class="main__header hide-on-mobile">
            <div class="header-wrapper">
              <img
                src="@/assets/secure.svg"
                alt="secure"
                width="35"
                class="logo__icon"
              />
              <h1 class="logo__text">Secure Online Payments</h1>
            </div>
          </header>
          <div class="section">
            <div class="content-box">
              <div
                role="table"
                class="content-box__row content-box__row--tight-spacing-vertical"
              >
                <div role="row" class="review-block">
                  <div class="review-block__inner">
                    <div role="rowheader" class="review-block__label">Name</div>
                    <div role="cell" class="review-block__content">
                      <input
                        class="field__input"
                        v-model="name"
                        v-if="showNameInput"
                        @blur="onBlurInput"
                        @keyup.enter="onBlurInput"
                        maxlength="50"
                      />
                      <bdo dir="ltr" v-else>{{ name }}</bdo>
                    </div>
                    <div role="cell" class="review-block__link">
                      <a class="link--small">
                        <span
                          aria-hidden="true"
                          @click="onChangeName"
                          class="pointer"
                        >
                          <template v-if="showNameInput">
                            <p style="color: #127b12" @click="onBlurInput">
                              Save
                            </p>
                          </template>
                          <template v-else>Change</template>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Current Availability -->
          <div
            class="available-show-mobile available-mobile"
            v-if="showFirstTimer || showSecondTimer"
          >
            <Countdown
              class="mobile-countdown"
              @end-timer="onEndFirstTimer"
              v-if="showFirstTimer"
            />
            <CountdownSecond
              class="mobile-countdown"
              @end-timer="onEndSecondTimer"
              v-if="showSecondTimer"
            />
          </div>

          <div class="section section--payment-method" data-payment-method>
            <div class="section__header">
              <h2 class="section__title" id="main-header">Payment</h2>
              <p class="section__text">
                All transactions are secure and encrypted.
              </p>
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

                <div class="radio__label payment-method-wrapper animated">
                  <label
                    for="card"
                    class="radio__label__primary content-box__emphasis card-payment-label"
                  >
                    <h3>Pay by credit or debit card</h3>
                    <span class="radio__label__accessory">
                      <span class="visually-hidden">Pay with:</span>

                      <span data-brand-icons-for-gateway="36371497029">
                        <span
                          class="payment-icon payment-icon--visa"
                          data-payment-icon="visa"
                        >
                          <span class="visually-hidden">Visa,</span>
                        </span>
                        <span
                          class="payment-icon payment-icon--master"
                          data-payment-icon="master"
                        >
                          <span class="visually-hidden">Mastercard,</span>
                        </span>
                        <span
                          class="payment-icon payment-icon--american-express"
                          data-payment-icon="american-express"
                        >
                          <span class="visually-hidden">American Express,</span>
                        </span>
                        <span
                          class="payment-icon payment-icon--giropay"
                          data-payment-icon="giropay"
                        >
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
                  </label>
                </div>
              </div>

              <VueSlideToggle
                :open="payments.card"
                tag="section"
                :duration="500"
              >
                <div
                  class="radio-wrapper content-box__row content-box__row--secondary animated"
                  :class="{ fadeIn: payments.card }"
                >
                  <div class="blank-slate">
                    <!-- <i class="blank-slate__icon icon icon--offsite"></i> -->
                    <p class="shown-if-js">
                      <iframe src frameborder="0" width="200px"></iframe>
                    </p>
                  </div>
                </div>
              </VueSlideToggle>
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
                  <label
                    for="paypal"
                    class="radio__label__primary content-box__emphasis"
                  >
                    <img
                      alt="PayPal"
                      class="offsite-payment-gateway-logo"
                      src="@/assets/paypal.png"
                    />
                  </label>
                </div>
              </div>
              <VueSlideToggle :open="payments.paypal" tag="div" :duration="500">
                <div
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
              </VueSlideToggle>
            </fieldset>
            <div class="trust-block">
              <img
                src="@/assets/trust.png"
                alt="trust-logos"
                class="force-hide-mobile"
              />
              <div class="force-show-mobile">
                <img src="@/assets/trust01.png" alt="trust01" />
                <img
                  src="@/assets/trust02.png"
                  alt="trust02"
                  class="trust-logo-2"
                />
              </div>
            </div>
            <br />
          </div>
        </div>

        <!-- Sibebar -->
        <aside
          class="sidebar hide-on-mobile fade-in"
          role="complementary"
          id="sidebar"
        >
          <div class="order-summary__sections">
            <div
              class="order-summary__section order-summary__section--product-list"
            >
              <div class="order-summary__section__content">
                <table class="product-table">
                  <caption class="visually-hidden">
                    Shopping cart
                  </caption>
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
                    <tr
                      class="product"
                      v-for="(product, k) in products"
                      :key="k"
                    >
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
                            >{{ product.quantity }}</span
                          >
                        </div>
                      </td>
                      <th class="product__description" scope="row">
                        <span
                          class="product__description__name order-summary__emphasis"
                          >{{ product.name }}</span
                        >
                        <span
                          class="product__description__variant order-summary__small-text"
                          >x{{ product.quantity }}</span
                        >
                      </th>
                      <td class="product__price">
                        <span
                          class="order-summary__emphasis skeleton-while-loading"
                          >${{
                            (product.quantity * product.price).toFixed(2)
                          }}</span
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Discount -->
            <div
              class="order-summary__section order-summary__section--discount"
            >
              <div
                class="available-show-desktop"
                v-if="showFirstTimer || showSecondTimer"
              >
                <Countdown @end-timer="onEndFirstTimer" v-if="showFirstTimer" />
                <CountdownSecond
                  @end-timer="onEndSecondTimer"
                  v-if="showSecondTimer"
                />
              </div>

              <form class="edit_checkout animate-floating-labels">
                <div class="fieldset">
                  <div class="field">
                    <div class="field__input-btn-wrapper">
                      <div class="field__input-wrapper">
                        <label
                          class="field__label field__label--visible"
                          for="checkout_reduction_code"
                          >Discount code</label
                        >
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
                          >Applied</span
                        >
                        <img
                          src="@/assets/next.svg"
                          alt="apply"
                          width="20"
                          class="hidden-on-desktop new"
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
                <caption class="visually-hidden">
                  Cost summary
                </caption>
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
                      <span
                        class="skeleton-while-loading order-summary__emphasis free"
                        >Free</span
                      >
                    </td>
                  </tr>

                  <tr
                    class="total-line total-line--taxes hidden"
                    data-checkout-taxes
                  >
                    <th class="total-line__name" scope="row">Taxes</th>
                    <td class="total-line__price">
                      <span
                        class="order-summary__emphasis skeleton-while-loading"
                        data-checkout-total-taxes-target="0"
                        >$0.00</span
                      >
                    </td>
                  </tr>
                </tbody>
                <tfoot class="total-line-table__footer">
                  <tr class="total-line">
                    <th class="total-line__name payment-due-label" scope="row">
                      <span class="payment-due-label__total">Total</span>
                    </th>
                    <td class="total-line__price payment-due">
                      <span class="payment-due__currency remove-while-loading"
                        >USD</span
                      >
                      <span
                        class="payment-due__price skeleton-while-loading--lg"
                        data-checkout-payment-due-target="1110"
                        >{{ totalPrice }}$</span
                      >
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
import Countdown from "@/components/Countdown";
import CountdownSecond from "@/components/CountdownSecond";

export default {
  components: { Countdown, CountdownSecond },
  data() {
    return {
      name: "name",
      showNameInput: false,
      payments: {
        paypal: false,
        card: true,
      },
      totalPrice: "$10.00",
      discount: "SPECIALE50",
      showFirstTimer: true,
      showSecondTimer: false,
      toggleArrow: false,
      products: [
        {
          name: "Vegetable Magical Spiralizer",
          price: 9.0,
          quantity: 3,
          image:
            "//cdn.shopify.com/s/files/1/0031/2229/8949/products/f2114f51ac2ac322e5da14acf07618cc_small.jpg?v=1550488948",
        },
        {
          name: "Vegetable Magical Spiralizer",
          price: 9.0,
          quantity: 3,
          image:
            "//cdn.shopify.com/s/files/1/0031/2229/8949/products/f2114f51ac2ac322e5da14acf07618cc_small.jpg?v=1550488948",
        },
      ],
    };
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
      this.$("#sidebar").slideToggle();
      this.$("#sidebar").toggleClass("hide-on-mobile");

      if (this.$("#sidebar").hasClass("hide-on-mobile")) {
        this.toggleArrow = false;
      } else {
        this.toggleArrow = true;
      }
    },
    onEndFirstTimer() {
      this.showFirstTimer = false;
      this.showSecondTimer = true;
    },
    onEndSecondTimer() {
      this.showFirstTimer = false;
      this.showSecondTimer = false;
    },
  },
};
</script>

<style>
.payment-wrapper {
  height: 100%;
  min-height: 100%;
}

@media (max-width: 999px) {
  .payment-wrapper {
    height: auto;
    min-height: auto;
  }
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

.trust-block {
  margin-top: 20px;
  display: inline-block;
  width: 100%;
  text-align: center;
}

.trust-block img {
  max-width: 100%;
  opacity: 0.4;
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
  }
}

@media (max-width: 999px) {
  .hide-on-mobile {
    display: none;
  }
}

@media (max-width: 999px) {
  .main__header {
    margin-bottom: 15px;
  }

  .review-block__label {
    padding-top: 4px;
  }

  .available-show-mobile {
    display: block !important;
  }
}

.available-show-mobile {
  display: none;
}

.force-show-mobile {
  display: none !important;
}

.force-hide-mobile {
  display: block !important;
}

@media (max-width: 749px) {
  .force-show-mobile {
    display: block !important;
  }
  .force-hide-mobile {
    display: none !important;
  }

  .available-mobile {
    margin-bottom: 0 !important;
  }
}

.trust-logo-2 {
  margin-left: -16px;
}

.available-mobile {
  margin-top: 10px;
}

.available-show-desktop {
  display: block;
}

@media (max-width: 320px) {
  .logo__icon {
    max-width: 30px;
  }
  .logo__text {
    font-size: 22px;
  }
  .review-block__label {
    padding-top: 4px;
  }
}

@media (max-width: 999px) {
  .available-show-desktop {
    display: none !important;
  }
}

.order-summary-toggle__dropdown {
  transform: rotate(0);
  transition: ease 0.2s 0.2s !important;
  margin-left: 3px;
}

#main-header {
  font-weight: 600;
}

.mobile-countdown {
  border: 1px solid #d5d5d5;
  border-radius: 4px;
  padding: 1.14286em;
}

.card-payment-label {
  display: inline-flex !important;
  justify-content: space-between;
  align-items: center;
}

.order-summary__section--product-list,
.order-summary__section__content {
  overflow: inherit !important;
}

@media (max-width: 999px) {
  .section {
    padding-top: 10px !important;
  }

  .main {
    padding-top: 0 !important;
  }

  .header-wrapper {
    padding-top: 15px;
  }
}

@media (min-width: 999px) {
  #sidebar {
    display: block !important;
  }
}

.toggleArrow {
  transform: rotate(180deg);
}
</style>
