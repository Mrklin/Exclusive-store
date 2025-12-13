import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '@/Components/Landing/LandingView.vue'
import CartView from '@/Components/Landing/CartView.vue'
import CheckoutView from '@/Components/Landing/CheckoutView.vue'
import ContactView from '@/Components/Landing/ContactView.vue'
import WishlistView from '@/Components/Landing/WishlistView.vue'
import ErrorPageView from '@/Components/Landing/ErrorPageView.vue'
import ProductView from '@/Components/Landing/ProductView.vue'
import AboutView from '@/Components/Landing/AboutView.vue'
import AccountView from '@/Components/Landing/AccountView.vue'
import LoginView from '@/Components/Auth/LoginView.vue'
import SignupView from '@/Components/Auth/SignupView.vue'
import ResetView from '@/Components/Auth/ResetView.vue'
import AuthLayout from '@/Pages/AuthLayout.vue'
import LandingLayout from '@/Pages/LandingLayout.vue'
import store from '@/store'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LandingLayout,
      children:[
        { 
          path: '',
          name: 'landing',
          component: LandingView,
          meta: {isPublic: true}
        },
        {
          path: 'cart',
          name: 'cart',
          component: CartView,
          meta: {requiresAuth: true}
        },
        {
          path: 'checkout',
          name: 'checkout',
          component: CheckoutView,
          meta: {requiresAuth: true}
        },
        {
          path: 'contact',
          name: 'contact',
          component: ContactView,
        },
        {
          path: 'wishlist',
          name: 'wishlist',
          component: WishlistView,
          meta: {requiresAuth: true}
        },
        {
          path: 'product/:id',
          name: 'product',
          component: ProductView,
          props: true,
        },
        {
          path: 'about',
          name: 'about',
          component: AboutView,
          meta: {isPublic: true}
        },
        {
          path: 'account',
          name: 'account',
          component: AccountView,
          meta: {requiresAuth: true}
        },
      
      ]
      
    },
    {
      path: '/',
      component: AuthLayout,
      meta: {isPublic :true},
      children: [
        {
          path: 'signup',
          name: 'signup',
          component: SignupView
        },
        {
          path: 'login',
          name: 'login',
          component: LoginView
        },
        {
          path: 'reset',
          name: 'reset',
          component: ResetView
        }
      ]
    },
    {
      path:'/:catchAll(.*)',
      name: '404',
      component: ErrorPageView
    }
  ],
})



router.beforeEach((to, from, next) => {
  
  const isLoggedIn = store.getters['user/getIsLoggedIn'];

  if(to.meta.requiresAuth && !isLoggedIn){
    next({name: 'login'});
  }else if(to.meta.isPublic && isLoggedIn){
    if (to.name === 'signup' || to.name === 'login' || to.name === 'reset') {
      next({name: 'landing'});
    } else {
      next();
    }
  }else{
    next();
  }
})

export default router
