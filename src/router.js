import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/projects/Home.vue";
import Index from "./pages/projects/Index.vue";
import About from "./pages/projects/About.vue";
import Show from "./pages/projects/Show.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: Index,
    },
    {
      path: "/portfolio/:slug",
      name: "show",
      component: Show,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
  ],
});

export { router };
