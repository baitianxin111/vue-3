import Vue from 'vue'
// import Router from 'vue-router'
import VueRouter from 'vue-router'
// import Hello from '@/components/Hello'

// Vue.use(Router)
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/topics/all' 
    }
  ]
})
