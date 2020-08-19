<template>
  <div class="card" @click="$emit('card-clicked')">
    <div class="shapes" :class="card">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <!--card[3] is number of shapes-->
      <svg
        viewBox="0 0 100 100"
        v-for="n in card[2]"
        :key="n"
        :style="cssVars"
        :class="card"
      >
        <!--<pattern
          id="transformedPattern"
          x="0"
          y="0"
          width="2"
          height="20"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <circle cx="1" cy="1" r="2" :fill="cardColor" />
        </pattern>-->
        <rect
          :stroke="cardColor"
          :fill="cardColor"
          x="2"
          y="2"
          width="90%"
          height="90%"
          class="shape"
          :rx="border_radius"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "BeginnerCard",
  props: {
    card: Array
  },
  computed: {
    border_radius: function() {
      return this.card[0] == "circle" ? `50%` : `0`;
    },
    cardColor: function() {
      return this.card[1];
    },

    cssVars() {
      return {
        //card[0] is shape-name; for shape & spacing
        "--rotate":
          this.card[0] == "diamond" ? `rotate(45deg)` : `rotate(0deg)`,
        "--shape-spacing": this.card[0] == "diamond" ? `8%` : `3%`
      };
    }
  }
};
</script>

<style scoped>
.card {
  width: 16.5vw;
  height: 12vw;
  background-color: #ffffff;
  border: 1px solid grey;
  border-radius: 0.25em;
  margin-bottom: 1.2vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.shapes {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 80%;
}
svg {
  height: 60%;
  width: 20%;
  fill: white;
  stroke-width: 3;
  transform: var(--rotate);
}
svg + svg {
  margin-left: var(--shape-spacing);
}
#pattern {
  width: 0;
  height: 0;
}
@media (max-width: 768px) {
  .card {
    width: 25vw;
    height: 19vw;
  }
  svg {
    stroke-width: 5;
  }
}
</style>
