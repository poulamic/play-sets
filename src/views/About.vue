<template>
  <div class="wrapper about">
    <h1>Sets: Instructions</h1>
    <p>
      The objective of the game is to identify a <b>set of 3</b> cards from the
      displayed cards. Each card has four features which can vary as follows:
    </p>
    <div class="visuals introduce">
      <div class="category">
        <h3>Shapes</h3>
        <div class="example">
          <SetCard
            :card="['circle', 'blue', 'filled', 1]"
            class="example_card"
          />
          <p>Circle</p>
        </div>
        <div class="example">
          <SetCard
            :card="['square', 'blue', 'filled', 1]"
            class="example_card"
          />
          <p>Square</p>
        </div>
        <div class="example">
          <SetCard
            :card="['diamond', 'blue', 'filled', 1]"
            class="example_card"
          />
          <p>Diamond</p>
        </div>
      </div>
      <div class="category">
        <h3>Colors</h3>
        <div class="example">
          <SetCard
            :card="['circle', 'blue', 'filled', 1]"
            class="example_card"
          />
          <p>Blue</p>
        </div>
        <div class="example">
          <SetCard
            :card="['circle', 'red', 'filled', 1]"
            class="example_card"
          />
          <p>Red</p>
        </div>
        <div class="example">
          <SetCard
            :card="['circle', 'green', 'filled', 1]"
            class="example_card"
          />
          <p>Green</p>
        </div>
      </div>
      <div class="category">
        <h3>Texture</h3>
        <div class="example">
          <SetCard
            :card="['circle', 'blue', 'filled', 1]"
            class="example_card"
          />
          <p>Filled</p>
        </div>
        <div class="example">
          <SetCard
            :card="['circle', 'blue', 'striped', 1]"
            class="example_card"
          />
          <p>Striped</p>
        </div>
        <div class="example">
          <SetCard :card="['circle', 'blue', 'none', 1]" class="example_card" />
          <p>Outlined</p>
        </div>
      </div>
      <div class="category">
        <h3>Count</h3>
        <div class="example">
          <SetCard
            :card="['circle', 'blue', 'filled', 1]"
            class="example_card"
          />
          <p>One</p>
        </div>
        <div class="example">
          <SetCard
            :card="['circle', 'blue', 'filled', 2]"
            class="example_card"
          />
          <p>Two</p>
        </div>
        <div class="example">
          <SetCard
            :card="['circle', 'blue', 'filled', 3]"
            class="example_card"
          />
          <p>Three</p>
        </div>
      </div>
    </div>
    <p>
      A SET consists of 3 cards in which each of the cards' features, looked at
      one‐by‐one, are the same on each card, or, are different on each card.All
      of the features must separately satisfy this rule. In other words: shape
      must be either the same on all 3 cards, or different on each of the 3
      cards; color must be either the same on all 3 cards, or different on each
      of the 3, etc.
    </p>
    <div class="visuals sets_example">
      <h3>Sets</h3>
      <div class="example">
        <SetCard :card="['circle', 'blue', 'filled', 1]" class="example_card" />
        <SetCard :card="['circle', 'red', 'filled', 1]" class="example_card" />
        <SetCard
          :card="['circle', 'green', 'filled', 1]"
          class="example_card"
        />
        <p>
          <b>Shape:</b> same; <b>Color:</b> different; <b>Texture:</b> same;
          <b>Count:</b> same;
        </p>
      </div>
      <div class="example">
        <SetCard :card="['circle', 'blue', 'filled', 1]" class="example_card" />
        <SetCard :card="['square', 'red', 'filled', 2]" class="example_card" />
        <SetCard
          :card="['diamond', 'green', 'filled', 3]"
          class="example_card"
        />
        <p>
          <b>Shape:</b> different; <b>Color:</b> different;
          <b>Texture:</b> same; <b>Count:</b> different;
        </p>
      </div>
      <div class="example">
        <SetCard :card="['circle', 'blue', 'filled', 1]" class="example_card" />
        <SetCard :card="['square', 'red', 'striped', 2]" class="example_card" />
        <SetCard :card="['diamond', 'green', 'none', 3]" class="example_card" />
        <p>
          <b>Shape:</b> different; <b>Color:</b> different;
          <b>Texture:</b> different; <b>Count:</b>
          different;
        </p>
      </div>
      <div class="example">
        <SetCard :card="['circle', 'blue', 'filled', 1]" class="example_card" />
        <SetCard
          :card="['circle', 'blue', 'striped', 2]"
          class="example_card"
        />
        <SetCard :card="['circle', 'blue', 'none', 3]" class="example_card" />
        <p>
          <b>Shape:</b> same; <b>Color:</b> same; <b>Texture:</b> different;
          <b>Count:</b> different;
        </p>
      </div>
      <div class="example">
        <SetCard :card="['circle', 'blue', 'filled', 1]" class="example_card" />
        <SetCard
          :card="['square', 'blue', 'striped', 2]"
          class="example_card"
        />
        <SetCard :card="['diamond', 'blue', 'none', 3]" class="example_card" />
        <p>
          <b>Shape:</b> different; <b>Color:</b> same;
          <b>Texture:</b> different; <b>Count:</b> different;
        </p>
      </div>
    </div>
    <h3>A QUICK CHECK ‐ Is it a SET??</h3>
    <p>
      If 2 cards are the same and 1 card is different in any feature, then it is
      not a SET. For example, if 2 are red and 1 is green then it is not a Set.
      A Set must be either all the same OR all different in each individual
      feature.
    </p>
    <div class="visuals sets_example">
      <h3>Not Sets</h3>
      <div class="example">
        <SetCard :card="['circle', 'red', 'filled', 1]" class="example_card" />
        <SetCard
          :card="['square', 'blue', 'striped', 2]"
          class="example_card"
        />
        <SetCard
          :card="['diamond', 'green', 'filled', 3]"
          class="example_card"
        />
        <p>
          <b>Shape:</b> different ; <b>Color:</b> different; <b>Texture:</b>
          <span class="not_set">X</span> <b>Count:</b> same;
        </p>
      </div>
    </div>
    <div class="go_to_game">
      <p>
        In this version of the game, cards will be replaced as you find a set.
        (In beginner version, cards have only 3 features - color, shape & count)
        You have 2 minutes to find as many sets as possible. Each fount set
        <b>earns you 10 points</b> , and using hint <b>deducts 1 point</b>.
      </p>
      <router-link
        class="link"
        :to="{ name: 'GameBoard', params: { level: 'standard' } }"
        tag="button"
        >START GAME</router-link
      >
    </div>
    <footer>
      You can refer to
      <cite
        ><a
          href="https://www.setgame.com/sites/default/files/instructions/SET%20INSTRUCTIONS%20-%20ENGLISH.pdf"
          >the original board game instructions</a
        ></cite
      >
      here.
    </footer>
  </div>
</template>

<script>
import SetCard from "../components/SetCard.vue";
export default {
  components: {
    SetCard
  }
};
</script>

<style scoped>
.wrapper {
  padding: 4vh 0;
  display: flex;
  flex-direction: column;
}
h1 {
  font-size: 200%;
  margin-bottom: 60px;
}
h3 {
  font-size: 96%;
  text-align: left;
  margin-bottom: 10px;
}
p {
  text-align: left;
  line-height: 180%;
}
.visuals + h3,
.visuals + p {
  margin-top: 20px;
}
.visuals {
  margin-top: 3vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
}
.visuals.introduce {
  flex-direction: row;
}
.category {
  min-width: 20%;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  margin-bottom: 16px;
}
.example {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.example > * {
  flex-shrink: 0;
}
.example > p {
  margin-left: 4px;
  font-size: 80%;
}
.example_card {
  width: 12vw;
  height: 9vw;
}
.sets_example .example_card {
  margin-right: 16px;
  margin-bottom: 24px;
}
.not_set {
  color: maroon;
  font-weight: 600;
}
.go_to_game {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}
.link {
  align-self: center;
}
footer {
  font-size: 75%;
  margin-top: 30px;
}
</style>
