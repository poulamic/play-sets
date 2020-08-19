import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

window.popStateDetected = false;
window.addEventListener("popstate", () => {
  window.popStateDetected = true;
});

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/game-board/:level",
    name: "GameBoard",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/GameBoard.vue"),
    props: true
  },

  {
    path: "/results",
    name: "Results",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Results.vue"),
    props: true,
    beforeEnter(to, from, next) {
      if (from.name !== "GameBoard") next({ name: "Home" });
      var IsItABackButton = window.popStateDetected;
      window.popStateDetected = false;
      if (IsItABackButton && from.name == "GameBoard") next({ name: "Home" });
      next();
    }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
