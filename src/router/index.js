import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({

    routes: [
        {
            name: 'login',
            path: '/login',
            component: require('../views/user/login.vue')
        },
        {
            name: 'menu',
            path: '/menu',
            component: require('../views/menu.vue')
        },
        { path:'/profile',
          name:'profile',
          component: require('../views/user/profile.vue')
        },
        {
          path:'/setting',
          name:'setting',
          component: require('../views/setting.vue')
        },
        {  path:'/help',
           name:'help',
           component: require('../views/help.vue')
        },
        {
          path:'/err',
          name:'none',
          component: require('../views/err404.vue')
        },
        {
          path:'/menulist/:id',
          name:'menulist',
          component: require('../views/foodlist.vue')
        },
        {
          path:'/detail/:id',
          name:'detail',
          component: require('../views/detail.vue')
        }
    ],
    mode: 'history'
})


export default router;
