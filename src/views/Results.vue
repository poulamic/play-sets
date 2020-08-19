<template>
  <div class="wrapper">
    <h1>Results</h1>
    <p>
      Score: <b>{{ score }}</b>
    </p>
    <p>
      Your record score: <b>{{ highscore }}</b>
    </p>
    <router-link
      :to="{ name: 'GameBoard', params: { level: level } }"
      tag="button"
      >PLAY AGAIN</router-link
    >
  </div>
</template>
<script>
export default {
  props: ["score", "level"],
  data: function() {
    return {
      highscore: 0
    };
  },
  mounted() {
    if (localStorage.highscore && localStorage.highscore > this.score) {
      this.highscore = localStorage.getItem("highscore");
    } else {
      this.highscore = this.score;
      localStorage.setItem("highscore", this.score);
    }
  }
};
</script>

<style scoped>
h1 {
  font-weight: 100%;
}
.wrapper {
  height: 60vh;
  margin-top: 20vh;
  align-items: center;
  align-self: center;
}
button {
  margin-top: 30px;
  width: 240px;
  max-width: 100%;
}
p + p {
  margin: 10px;
}
b {
  font-size: 110%;
}
</style>
