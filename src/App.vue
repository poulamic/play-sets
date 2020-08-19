<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  display: flex;
  width: 72vw;
  margin: auto;
  flex-direction: column;
}
.wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
}
h1 {
  font-family: "Playfair Display", serif;
  font-size: 300%;
  margin: 30px auto;
}
h2 {
  font-weight: 400;
  font-size: 90%;
}
button {
  display: block;
  max-width: 100%;
  width: 200px;
  border: none;
  outline: none;
  margin: 20px 0;
  padding: 20px 40px;
  font-weight: 600;
  color: white;
  background-color: black;
}
@media (min-width: 768px), (orientation: landscape) {
  #app {
    max-width: 1080px;
  }
}
@media (max-width: 768px) {
  #app {
    width: 80vw;
  }
}
</style>
