import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "index",
    component: () => import("../views/index.vue"),
  },
  {
    path: "/:catchAll(.*)*",
    name: "NotFound",
    component: () => import("../views/NotFound/index.vue"),
  },
];

const views = import.meta.globEager("/src/**/views/**/*.vue");
for (const i in views) {
  views[i.slice(5)] = views[i];
  delete views[i];
}
// TODO ALLVIEWS
console.log(views);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
