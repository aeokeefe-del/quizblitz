import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PlayView from '../views/PlayView.vue'
import LeaderboardView from '../views/LeaderboardView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes : [
    { path: '/', name: 'home', component: HomeView },
    { path: '/play', name: 'play', component: PlayView },
    { path: '/leaderboard', name: 'leaderboard', component: LeaderboardView }
  ]
})

export default router