<template>
  <div class="wrapper">
    <header>
      <h1>SETS</h1>
      <h2>The 2-min game of visual perception</h2>
    </header>
    <div id="nav">
      <router-link
        :to="{ name: 'GameBoard', params: { level: 'standard' } }"
        tag="button"
        >START GAME</router-link
      >
      <router-link
        :to="{ name: 'GameBoard', params: { level: 'beginner' } }"
        tag="button"
        >BEGINNER GAME</router-link
      >
      <router-link to="/about">How to Play</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import SetCard from "../components/SetCard.vue";
export default {
  name: "Home",
  components: {
    //SetCard
  },
  data: function() {
    return {
      features: {
        shape: ["circle", "diamond", "square"],
        color: ["red", "blue", "green"],
        texture: ["none", "striped", "filled"],
        number: [1, 2, 3]
      },
      dealt_cards: [],
      deck: [],
      chosen: [],
      score: 0
    };
  },
  watch: {
    choose_complete(val) {
      if (val) {
        console.log("boo");
        this.check();
      }
    }
  },
  methods: {
    generate_cards: function(arr) {
      return arr.reduce(
        function(a, b) {
          return a
            .map(function(x) {
              return b.map(function(y) {
                return x.concat([y]);
              });
            })
            .reduce(function(a, b) {
              return a.concat(b);
            }, []);
        },
        [[]]
      );
    },
    deal_cards: function() {
      this.dealt_cards = [...this.all_cards]
        .sort(() => 0.5 - Math.random())
        .slice(0, 12);
    },
    clicked: function(e) {
      e.target.toggleClass("selected");
    },
    check: function() {
      if (this.all_sets(this.chosen)) {
        this.score++;
      }
      this.chosen = [];
    },
    /* eslint-disable */
    is_set: function() {      
      var set = new Set(arguments); 
      return (set.size==1 || set.size==3) ? true : false      
    },
    /* eslint-disable */
    all_sets: function(arr){
       var mapped = arr[0].map((prop,index)=>{return this.is_set(arr[0][index],arr[1][index],arr[2][index])})
       return mapped.every(Boolean);
      }
    
   
  },
  computed: {
    all_cards: function() {
      return this.generate_cards([
        this.features.shape,
        this.features.color,
        this.features.texture,
        this.features.number
      ]);
    },
    choose_complete: function() {
      return this.chosen.length >= 3;
    }
  }
};
</script>
<style scoped>
.wrapper{
  display: flex;
  flex-direction: column;
  justify-content: space-between;  
  height: 80vh;
  align-items:center;
}
header>h1{
  margin-top: 20vh;
  margin-bottom: 10px;
}


</style>
