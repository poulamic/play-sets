<template>
  <div class="game_board wrapper">
    <div class="status">
      <h3>
        Score:
        <transition name="slide-fade" mode="out-in"
          ><span :key="score">{{ score }}</span>
        </transition>
      </h3>
      <Timer @signalTimeOver="this.showResults" />
    </div>
    <p class="available_sets_text">
      Available sets: {{ available_sets.length }}
      <button class="hint" @click="showHint()" alt="get hint">
        <img src="../assets/images/hint.svg" width="16px" />
        <p>Get Hint</p>
      </button>
    </p>

    <div v-if="this.level == 'standard'" class="cards">
      <SetCard
        v-for="card in dealt_cards"
        :key="generated_card_key(card)"
        :card="card"
        @card-clicked="
          chosen.includes(card)
            ? chosen.splice(chosen.indexOf(card), 1)
            : chosen.push(card)
        "
        :class="{ selected: chosen.includes(card) }"
      ></SetCard>
    </div>
    <div v-else class="cards">
      <BeginnerCard
        v-for="card in dealt_cards"
        :key="generated_card_key(card)"
        :card="card"
        @card-clicked="
          chosen.includes(card)
            ? chosen.splice(chosen.indexOf(card), 1)
            : chosen.push(card)
        "
        :class="{ selected: chosen.includes(card) }"
      ></BeginnerCard>
    </div>
    <p class="toast" v-if="toast != ''">{{ toast }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import SetCard from "../components/SetCard.vue";
import BeginnerCard from "../components/BeginnerCard.vue";
import Timer from "../components/Timer.vue";
export default {
  name: "GameBoard",
  components: {
    SetCard,
    BeginnerCard,
    Timer
  },
  mounted() {
    this.deal_cards();
    //this.timeout = setTimeout(this.showResults, 120000);
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
      to_replace: [],
      last_hint: [],
      score: 0,
      toast: ""
    };
  },
  watch: {
    choose_complete(val) {
      if (val) {
        this.check();
      }
    }
  },
  methods: {
    //function for cartesian product
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
    //initial card dealing
    deal_cards: function() {
      var shuffled = [...this.all_cards].sort(() => 0.5 - Math.random());
      this.dealt_cards = shuffled.slice(0, 12);
      this.deck = shuffled.slice(12);
      if (this.available_sets == 0) {
        this.deal_cards();
      }
    },

    //registering user selection
    clicked: function(e) {
      e.target.toggleClass("selected");
    },
    //check for sets
    check: function() {
      if (this.all_sets(this.chosen)) {
        this.to_replace = [...this.chosen];
        this.replace_cards();
        this.score += 10;
      } else {
        this.toast = "Not a set";
        setTimeout(() => {
          this.toast = "";
        }, 600);
      }
      this.chosen = [];
    },
    //replaced matched sets & shuffle deck
    replace_cards: function() {
      this.deck = this.deck.concat(this.to_replace);
      do {
        this.to_replace.forEach((card, i) => {
          this.dealt_cards.splice(
            this.dealt_cards.indexOf(card),
            1,
            this.deck[i]
          );
        });
      } while (this.available_sets == 0);
      this.deck.splice(0, 3);
      this.deck = this.deck.sort(() => 0.5 - Math.random());
    },

    //function to check if cards are set
    /* eslint-disable */
    is_feature_set: function() {      
      var set = new Set(arguments); 
      return (set.size==1 || set.size==3) ? true : false      
    },
    /* eslint-disable */
    all_sets: function(arr){
       var mapped = arr[0].map((prop,index)=>{return this.is_feature_set(arr[0][index],arr[1][index],arr[2][index])})
       return mapped.every(Boolean);
      },
    showHint : function(){
      this.chosen=[];
      for(let i=0; i<2;i++){
        var index = this.dealt_cards.indexOf(this.available_sets[0][i])
        this.chosen.push(this.dealt_cards[index])
      }
      if(this.last_hint!=this.available_sets[0]){
        this.score--;
        this.last_hint = this.available_sets[0]
      }
    },    
    showResults: function(){
      this.$router.push({ name: 'Results', params: {score: this.score, level: this.level }})      
    },
    generated_card_key: (arr) =>arr.reduce((acc,cur)=>typeof(cur)=="string"?acc+cur.charAt(0):acc+cur, '')     
  },
  
  computed: {
    level: function(){
      return this.$route.params.level;
    },
    //calculate available sets
    available_sets: function() {
      var arr = this.dealt_cards
      var combinations = arr.flatMap((x,i)=>arr.slice(i+1,-1).flatMap((y,j)=>arr.slice(i+j+2).map(z=>[x,y,z])))
      return combinations.filter(c=>this.all_sets(c))

    },
    difference: function(){
      return this.dealt_cards
                 .filter(x => !this.deck.includes(x))
                 .concat(this.deck.filter(x => !this.dealt_cards.includes(x)));
    },
    //get all initial cards with cartesian product
    all_cards: function() { return this.level=='standard' ? this.generate_cards([
        this.features.shape,
        this.features.color,   
        this.features.texture,    
        this.features.number
      ]):
     this.generate_cards([
        this.features.shape,
        this.features.color,        
        this.features.number
      ]);
    },
    //watching for running set-test
    choose_complete: function() {
      return this.chosen.length >= 3;
    }
  }
};
</script>

<style scoped>
.game_board{
  width: 100%;
  height:72vh;
  max-height: 96vh;
  padding:4vh 0;  
  justify-content: space-between; 
}
.status{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.cards {
  width: 100%;
  height: 96%; 
  padding-bottom:4vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 4vh;
}
.selected{
  border: 2px solid purple; 
}
.available_sets_text{
  font-size: 80%;
  align-self: flex-start;
  margin-top: 6px;
}
.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(0.55, 0, 0.1, 1);
}

.slide-fade-enter,.slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateY(-20px);
  opacity: 0;
}
.toast{
  font-size: 80%;
  padding: 10px 15px;
  z-index: 100;
  height: 36px;
  align-self: center;
  color:#B71C1C;
  background-color: #FFEBEE;
  border-radius: 5px;
  position: fixed;
  top: 60px;  
}
.hint{
  display: inline-block;
  padding:0;
  background-color: rgb(249, 253, 213);
  margin: 0;
  padding: 4px;
  width: 52px;
  height: 36px;
  color: black;
  margin-left: 8px;
  font-size: 80%;  
  font-weight: 400;
}
@media (max-width: 768px) {
  .toast {
    top: auto;
    bottom: 100px;  
  }
}

</style>
