import { createRouter, createWebHistory } from "vue-router"
import HomeVue from "../pages/Home.vue"
import PeopleVue from "../pages/People.vue"
import FavoritesVue from "../pages/Favorites.vue"
import PeopleDetailVue from "../pages/PeopleDetail.vue"
import NotFoundVue from "../pages/NotFound.vue"

const routes = [
  { path: '/', component: HomeVue },
  { path: '/peoples', component: PeopleVue },
  { path: '/peoples/:id', component: PeopleDetailVue },
  { path: '/favorites', component: FavoritesVue },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundVue },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
