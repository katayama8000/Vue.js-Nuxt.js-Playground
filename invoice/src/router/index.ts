import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: async () => {
      return await import("@/pages/Home.vue");
    },
  },
  {
    path: "/invoice/:invoiceId",
    name: "Invoice",
    component: () => import("@/pages/InvoiceView.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("@/pages/Signup.vue"),
  },
  {
    path: "/signin",
    name: "signin",
    component: () => import("@/pages/Signin.vue"),
  },
  {
    path: "/registerprofile",
    name: "RegisterProfile",
    component: () => import("@/pages/RegisterProfile.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
