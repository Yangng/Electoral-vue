import Vue from 'vue'
import Router from 'vue-router'
import close from '../components/close.vue'
Vue.use(Router)

export default new Router({
  routes: [
   {
     path:'/',
     name: 'landing-page',
     component:require('@/components/LandingPage').default,
     redirect:"/close",
     children:[
       {
         path:'close',
         component:close
       }
     ]
   }
  ]
})
