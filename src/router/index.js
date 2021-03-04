import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/tab/Home.vue'
import Index from '../views/tab/Index.vue'
import Page from '../views/Page.vue'
import Page1 from '../views/tab/Page1.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { 
          title: '首页', 
          keepAlive: true, 
        },
      },
      {
        path: '/page1',
        name: 'Page1',
        component: Page1,
        meta: { 
          title: 'Page1', 
          keepAlive: true, 
        },
      }
    ]
  },
  {
    path: '/page',
    name: 'Page',
    component: Page
  },
]

const router = new VueRouter({
  routes
})

// router.afterEach(function (to) {
//   window.scrollTo(0, 0)
// })

router.beforeEach( (to, from, next) => {

  next()
})

export default router
