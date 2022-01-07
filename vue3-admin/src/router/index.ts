import { createRouter, createWebHistory } from "vue-router";
import storage from "@/util/storage";
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "index",
    component: () => import("../views/Layout/index.vue"),
    children: [
      {
        path: "/",
        name: "数据统计",
        component: () => import("../views/Home/index.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login/index.vue"),
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
// console.log(views);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from) => {
  const token = storage.get("token");
  if (token) {
  } else if (to.path !== "/login") {
    return "/login";
  }
  return;
});

export default router;
