<template>
  <div>
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
        <span id="countdown" style="color: #ef0e52;" class="font-weight-700">{{ countdown }}</span>
        <span style="text-decoration: underline; color: #ef0e52;" class="font-weight-700">HURRY!</span>
      </b>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      countdown: "15:00",
      COUNTDOWN_MINUTES: 15
    };
  },
  methods: {
    countdownTimer(minutes) {
      var seconds = 60;
      var mins = minutes;
      var _self = this;
      function tick() {
        var current_minutes = mins - 1;
        seconds--;
        var result =
          " " +
          current_minutes.toString() +
          ":" +
          (seconds < 10 ? "0" : "") +
          String(seconds) +
          " ";
        _self.countdown = result;

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

<style scoped>
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
</style>