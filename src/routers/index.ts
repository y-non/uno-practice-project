import { createRouter, createWebHistory } from "vue-router";
import IndexPage from "../pages/IndexPage.vue";

const routes = [{ path: "/", component: IndexPage, name: "Home" }];

const router = createRouter({
  history: createWebHistory(), // Uses browser history mode
  routes,
});

export default router;
