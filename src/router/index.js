import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/homeView'
import Ucenter from '@/components/Ucenter.vue'

Vue.use(Router)

var foo = {template: '<p>this is a foo!</p>'}
var bar = {template: '<p>this is a bar!</p>'}


export default new Router({
  routes: [
    {
      path: '/',
      name:'homeV',
      component:Home
    },{
      path: '/foo',
      component:Ucenter
    },{
      path: '/bar',
      component:bar
    }
  ]
})
