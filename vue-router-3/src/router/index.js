import Vue from 'vue'
import VueRouter from 'vue-router'
import MyVueRouter from '../MyVueRouter/index'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import AboutA from '../views/AboutA.vue'
// Vue.use 会调用 install 方法
// Vue.use(VueRouter)
Vue.use(MyVueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
    children: [
      {
        path: 'a',
        name: 'about_a',
        component: AboutA,
      }
    ]
  },
  {
    path: '/list',
    name: 'List',
    children: [
      {
        path: 'list1',
        name: 'List1',
      }
    ]
  }
]

export const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export const myRouter = new MyVueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

