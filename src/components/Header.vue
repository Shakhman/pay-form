<template>
  <header>
    <div class="warning-block">
      WARNING: Due to COVID-19 and high demand our stores are struggling to keep
      supply in stock. As of {{ currentDateFormat }} we do have a limited supply
      IN STOCK and ready to ship within 24 hours.
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    currentDateFormat() {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0");
      var yyyy = today.getFullYear();

      return dd + "." + mm + "." + yyyy;
    },
  },
};
</script>

<style scoped>
.warning-block {
  padding: 12px;
  text-align: center;
  font-size: 16px;
  background: #f00;
  color: #fff;
}
</style>
