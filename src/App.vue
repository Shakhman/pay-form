<template>
  <div id="app">
    <Preloader />
    <header>
      <div class="warning-block">
        WARNING: Due to COVID-19 and high demand our stores are struggling to
        keep supply in stock. As of {{ currentDateFormat }} we do have a limited
        supply IN STOCK and ready to ship within 24 hours.
      </div>
    </header>
    <Payment />
    <div class="footer"></div>
  </div>
</template>

<script>
import Payment from "./components/Payment.vue";
import Preloader from "./components/Preloader.vue";

export default {
  name: "App",
  components: {
    Payment,
    Preloader
  },
  computed: {
    currentDateFormat() {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0");
      var yyyy = today.getFullYear();

      return dd + "." + mm + "." + yyyy;
    }
  }
};
</script>

<style src="@/styles/main.css"></style>
<style src="@/styles/animate.css"></style>
<style>
#app {
  min-height: fit-content;
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

.warning-block {
  padding: 12px;
  text-align: center;
  font-size: 16px;
  background: #f00;
  color: #fff;
}

button:focus {
  outline: 0;
}

input:focus {
  outline: 0;
}
</style>
