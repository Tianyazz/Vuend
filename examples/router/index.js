import Vue from 'vue'
import Router from 'vue-router'
const Home = r => require.ensure([], () => r(require('@/views/home')), 'home')
const Test = r => require.ensure([], () => r(require('@/docs/test.md')), 'test')
const Button = r => require.ensure([], () => r(require('@/docs/button.md')), 'button')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/button',
      name: 'button',
      component: Button
    }
  ]
})
