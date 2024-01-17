import { createRouter, createWebHistory } from "vue-router";

import Index from "./pages/projects/Index.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "index",
      component: Index,
    },
  ],
});

export { router };
