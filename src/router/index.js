import Vue from 'vue'
import Router from 'vue-router'
import TopPlayer from '@/container/TopPlayer'
import Champion from '@/container/Champion'
import Team from '@/container/Team'
import Player from '@/container/Player'
import Welcome from '@/container/Welcome'
import NotFound from '@/container/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/topplayer',
      name: 'topplayer',
      component: TopPlayer
    },
    {
      path: '/player',
      name: 'player',
      component: Player
    },
    {
      path: '/champion',
      name: 'champion',
      component: Champion
    },
    {
      path: '/team',
      name: 'team',
      component: Team
    },
    {
      path: '*',
      name: '404',
      component: NotFound
    }
  ]
})
