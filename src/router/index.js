import Vue from "vue";
import Router from "vue-router";

const _import = file => () => import("@/views/" + file + ".vue");
Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "main",
    component: _import("main/index")
  },
  {
    path: "/tx-list/:address",
    name: "TxList",
    component: _import("TxList/index")
  },
];

const router = new Router({
  mode: "hash",
  routes: routes
});

export default router;
