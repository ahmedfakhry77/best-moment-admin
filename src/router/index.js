import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AdmissionList from "../views/AdmissionList.vue";
import OtherFeatures from "../views/OtherFeatures.vue";
import Users from "../views/Users.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/AdmissionList",
    name: "AdmissionList",
    component: AdmissionList,
  },
  {
    path: "/OtherFeatures",
    name: "OtherFeatures",
    component: OtherFeatures,
      
  },
  {
    path: "/Users",
    name: "Users",
    component: Users,
      
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
