import Vue from 'vue'
import Router from 'vue-router'

// import Champion from '@/container/Champion'
// import Team from '@/container/Team'
// import Player from '@/container/Player'
// import Welcome from '@/container/Welcome'
import NotFound from '@/container/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: r => require.ensure([], () => r(require('../container/Welcome')), 'Welcome')
    },
    {
      path: '/topplayer',
      name: 'topplayer',
      component: r => require.ensure([], () => r(require("../container/TopPlayer")), "TopPlayer")
    },
    {
      path: '/player',
      name: 'player',
      component: r => require.ensure([], () => r(require("../container/Player")), "Player")
    },
    {
      path: '/champion',
      name: 'champion',
      component: r => require.ensure([], () => r(require("../container/Champion")), "Champion")
    },
    {
      path: '/team',
      name: 'team',
      component: r => require.ensure([], () => r(require("../container/Team")), "Team")
    },
    {
      path: '*',
      name: '404',
      component: NotFound
    }
  ]
})
