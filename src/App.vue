<template>
  <div id="app">
    <Preloader />
    <Header />
    <Payment />
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
    Header,
  },
};
</script>

<style src="@/styles/main.css"></style>
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

button:focus {
  outline: 0;
}

input:focus {
  outline: 0;
}
</style>
