import { createRouter, createWebHashHistory } from "vue-router";
import ConnectView from "../views/ConnectView.vue";
import HomeView from "../views/HomeView.vue";
import LevelsView from "../views/LevelsView.vue";
import AstrologyView from "../views/levels/AstrologyView.vue";
import CookingView from "../views/levels/CookingView.vue";
import WebDevView from "../views/levels/WebDevView.vue";
import PhotographyView from "../views/levels/PhotographyView.vue";
import MusicView from "../views/levels/MusicView.vue";
import AnimalsView from "../views/levels/AnimalsView.vue";
import SportsView from "../views/levels/SportsView.vue";

const routes = [
  {
    path: "/",
    name: "connect",
    component: ConnectView,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/levels",
    name: "levels",
    component: LevelsView,
  },
  {
    path: "/levels/astrology",
    name: "astrology",
    component: AstrologyView,
  },

  {
    path: "/levels/cooking",
    name: "cooking",
    component: CookingView,
  },

  {
    path: "/levels/webdevelopment",
    name: "webdevelopment",
    component: WebDevView,
  },

  {
    path: "/levels/photography",
    name: "photography",
    component: PhotographyView,
  },

  {
    path: "/levels/music",
    name: "music",
    component: MusicView,
  },

  {
    path: "/levels/animals",
    name: "animals",
    component: AnimalsView,
  },

  {
    path: "/levels/sports",
    name: "sports",
    component: SportsView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
