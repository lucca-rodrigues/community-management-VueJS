const routes = [
  { path: "/", component: () => import("pages/Home") },
  {
    path: "/functionalities",
    component: () => import("pages/Functionalities"),
  },
  {
    path: "/new-functionalities",
    component: () => import("pages/NewFunctionalities"),
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
