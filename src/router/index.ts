import { createRouter, createWebHistory } from 'vue-router'

import BaseLayout from '@/layouts/BaseLayout.vue'
import Home from '@/views/Home.vue'
import Single_Product from '@/views/Single_Product.vue'
import Cart from '@/views/Cart.vue'
const routes = [
  {
    path: '/',
    component: BaseLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },{
        path: '/product/:id',
        name: 'singleProduct',
        component: Single_Product
      },{
        path: '/cart',
        name: 'cart',
        component: Cart
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
