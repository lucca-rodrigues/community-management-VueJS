const routes = [
  { path: "/", component: () => import("pages/Home") },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
