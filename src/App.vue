<template>
  <div id="app">
    <Preloader />
    <header>
      <div class="warning-block">
        WARNING: Due to COVID-19 and high demand our stores are struggling to
        keep supply in stock. As of March 31, 2020 we do have a limited supply
        IN STOCK and ready to ship within 24 hours.
      </div>
    </header>
    <Payment />
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
  }
};
</script>

<style src="@/styles/main.css"></style>
<style>
.pointer {
  cursor: pointer !important;
}

.font-weight-700 {
  font-weight: 700;
}

.warning-block {
  padding: 12px;
  text-align: center;
  font-size: 16px;
  background: #f00;
  color: #fff;
}
</style>
