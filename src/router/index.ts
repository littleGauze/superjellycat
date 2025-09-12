import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Products from '@/views/Products.vue'
import About from '@/views/About.vue'
// import Contact from '@/views/Contact.vue' // 暂时隐藏

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  // {
  //   path: '/contact',
  //   name: 'Contact',
  //   component: Contact,
  // }, // 暂时隐藏联系我们页面
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
