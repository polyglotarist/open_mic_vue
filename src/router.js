import Vue from "vue";
import Router from "vue-router";
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";

import SongsIndex from "./views/SongsIndex.vue";
import SongsNew from "./views/SongsNew.vue";
import SongsShow from "./views/SongsShow.vue";
import SongsEdit from "./views/SongsEdit.vue";

import ArtistsIndex from "./views/ArtistsIndex.vue";
import ArtistsNew from "./views/ArtistsNew.vue";
import ArtistsShow from "./views/ArtistsShow.vue";


import CategoriesIndex from "./views/CategoriesIndex.vue";
import CategoriesNew from "./views/CategoriesNew.vue";
import CategoriesShow from "./views/CategoriesShow.vue";


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: "/signup", name: "signup", component: Signup },
    { path: "/login", name: "login", component: Login },
    { path: "/logout", name: "logout", component: Logout },

    { path: "/", name: "home", component: SongsIndex },
    { path: "/songs", name: "songs-index", component: SongsIndex },
    { path: "/songs/new", name: "songs-new", component: SongsNew },
    { path: "/songs/:id", name: "songs-show", component: SongsShow },
    { path: "/songs/:id/edit", name: "songs-edit", component: SongsEdit },

    { path: "/artists", name: "artists-index", component: ArtistsIndex },
    { path: "/artists/new", name: "artists-new", component: ArtistsNew },
    { path: "/artists/:id", name: "artists-show", component: ArtistsShow },

    { path: "/categories", name: "categories-index", component: CategoriesIndex},
    { path: "/categories/new", name: "categories-new", component: CategoriesNew},
    {path: "/categories/:id", name: "categories-show", component: CategoriesShow}
  ]
});