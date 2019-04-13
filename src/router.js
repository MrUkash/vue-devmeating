import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Vote from "./views/Vote.vue";
import Score from "./views/Score.vue";
import Settings from "./views/Settings.vue";

Vue.use(Router);

const adminGuard = (to, from, next) => {
  const isAdmin = localStorage.getItem("isAdmin");
  if (!isAdmin) next({ path: "/home" });
  next();
};

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/vote",
      name: "vote",
      beforeEnter: adminGuard,
      component: Vote
    },
    {
      path: "/score",
      name: "score",
      component: Score
    },
    {
      path: "/settings",
      name: "settings",
      component: Settings
    }
  ]
});
