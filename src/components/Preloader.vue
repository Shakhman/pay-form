<template>
  <div class="preloader">
    <div class="content">
      <h1 class="title">Reserving Your Bottle Of</h1>
      <h1 class="subtitle">GETRIDOX</h1>
      <img src="@/assets/spinner.svg" alt="spinner" />
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    var preloader = document.querySelector(".preloader");
    var fadeEffect = setInterval(() => {
      if (!preloader.style.opacity) {
        preloader.style.opacity = 1;
      }
      if (preloader.style.opacity > 0) {
        preloader.style.opacity -= 1;
        setTimeout(function() {
          preloader.style.display = "none";
        }, 1000);
      } else {
        clearInterval(fadeEffect);
      }
    }, 1000);
  }
};
</script>

<style scoped>
.preloader {
  align-items: center;
  background: rgb(23, 22, 22);
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  transition: opacity 0.5s linear;
  width: 100%;
  z-index: 9999;
}

.preloader .content {
  text-align: center;
}

.preloader .content .subtitle {
  margin-bottom: 15px;
}
</style>