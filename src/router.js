import Vue from "vue";
import Router from "vue-router";
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";
import SongsIndex from "./views/SongsIndex.vue";
import SongsNew from "./views/SongsNew.vue";
import SongsShow from "./views/SongsShow.vue";


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: "/", name: "home", component: SongsIndex },
    { path: "/signup", name: "signup", component: Signup },
    { path: "/login", name: "login", component: Login },
    { path: "/logout", name: "logout", component: Logout },
    { path: "/songs", name: "songs-index", component: SongsIndex },
    { path: "/songs/new", name: "songs-new", component: SongsNew },
    { path: "/songs/:id", name: "songs-show", component: SongsShow }
  ]
});