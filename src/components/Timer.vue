<template>
  <div class="timer">{{ formattedTime }}</div>
</template>

<script>
export default {
  name: "Timer",
  data: function() {
    return {
      totalTime: 120,
      timePassed: 0,
      timerInterval: null
    };
  },
  watch: {
    timeLeft() {
      if (this.timeLeft == 0) {
        this.$emit("signalTimeOver");
      }
    }
  },
  mounted() {
    this.startTimer();
  },
  methods: {
    countdown: function() {
      this.timePassed++;
    },
    startTimer() {
      this.timerInterval = setInterval(() => {
        this.countdown();
        if (this.timeLeft <= 0) {
          clearInterval(this.timerInterval);
        }
      }, 1000);
    }
  },
  computed: {
    timeLeft() {
      return this.totalTime - this.timePassed;
    },
    formattedTime() {
      var minutes = `0${Math.floor(this.timeLeft / 60)}`;
      var seconds =
        this.timeLeft % 60 < 10 ? `0${this.timeLeft % 60}` : this.timeLeft % 60;
      return `${minutes}:${seconds}`;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
