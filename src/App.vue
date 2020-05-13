<template>
  <div id="app">
    <Preloader />
    <v-dialog adaptive width="40%"></v-dialog>
    <Header />
    <Payment :paymentsData="paymentsData" />
    <div class="footer"></div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Payment from "./components/Payment.vue";
import Preloader from "./components/Preloader.vue";

export default {
  name: "App",
  components: {
    Payment,
    Preloader,
    Header
  },
  data() {
    return {
      paymentsData: {
        apco: {
          name: "Pay by credit or debit card",
          type: "iframe",
          icons: ["visa", "mastercard", "amex", "giro_pay"],
          src: "http://google.com"
        },
        paypal: {
          name:
            '<img alt="PayPal" src="/images/paypal.png?fc49d7766b4831a9caa6f6bf28d384b6" class="offsite-payment-gateway-logo">',
          type: "button",
          icons: [],
          src: "images/paypal.png"
        },
        cardpay: {
          name: "Pay by CardPay",
          type: "button",
          icons: ["visa", "mastercard"],
          src: "images/cardpay.png"
        },
        klarna: {
          name: "Pay by Klarna",
          type: "button",
          icons: ["visa", "mastercard"],
          src: "images/klarna.png"
        }
      },
      dialogData: {
        title: "",
        text: "Simple Text",
        buttons: [
          {
            title: "Yes",
            handler: () => {
              var url = this.addParameterToURL("lang=de");
              window.location.href = url;
            }
          },
          {
            title: "No",
            handler: () => {
              this.hideModal();
            }
          }
        ]
      }
    };
  },
  methods: {
    showModal() {
      this.$modal.show("dialog", this.dialogData);
    },
    hideModal() {
      this.$modal.hide("dialog");
    },
    addParameterToURL(param) {
      var _url = location.href;
      _url += (_url.split("?")[1] ? "&" : "?") + param;
      return _url;
    }
  },
  mounted() {
    this.showModal();
  }
};
</script>

<style src="@/styles/main.css"></style>
<style>
body {
  height: 100%;
}

#app {
  min-height: fit-content;
  max-height: 100%;
}

.pointer {
  cursor: pointer !important;
}

.font-weight-700 {
  font-weight: 700;
}

@media (max-width: 999px) {
  .footer {
    height: 50px;
  }
}

button:focus {
  outline: 0;
}

input:focus {
  outline: 0;
}
</style>
