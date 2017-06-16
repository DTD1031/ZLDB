import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/homeView'

Vue.use(Router)

var foo = {template: '<p>this is a foo!</p>'}
var bar = {template: '<p>this is a bar!</p>'}


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },{
      path: '/foo',
      component:foo
    },{
      path: '/bar',
      component:bar
    },{
      path: '/home',
      component:Home
    }
  ]
})
