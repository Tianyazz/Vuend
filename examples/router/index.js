import Vue from 'vue'
import Router from 'vue-router'
const Home = r => require.ensure([], () => r(require('@/views/home/home')), 'home')
const Mobile = r => require.ensure([], () => r(require('@/views/mobile')), 'mobile')
const Demo = r => require.ensure([], () => r(require('@/views/demo')), 'mobile')
const Detail = r => require.ensure([], () => r(require('@/views/detail')), 'mobile')
const Log = r => require.ensure([], () => r(require('@/docs/log.md')), 'log')
const Button = r => require.ensure([], () => r(require('@/docs/button.md')), 'components')
const Radio = r => require.ensure([], () => r(require('@/docs/radio.md')), 'components')
const Flexbox = r => require.ensure([], () => r(require('@/docs/flexbox.md')), 'components')
const Input = r => require.ensure([], () => r(require('@/docs/input.md')), 'components')
const Toggle = r => require.ensure([], () => r(require('@/docs/toggle.md')), 'components')
const Checkbox = r => require.ensure([], () => r(require('@/docs/Checkbox.md')), 'components')
const List = r => require.ensure([], () => r(require('@/docs/list.md')), 'components')
const Search = r => require.ensure([], () => r(require('@/docs/search.md')), 'components')
const Textarea = r => require.ensure([], () => r(require('@/docs/textarea.md')), 'components')
const Tabs = r => require.ensure([], () => r(require('@/docs/tabs.md')), 'components')
const Select = r => require.ensure([], () => r(require('@/docs/select.md')), 'components')
const Loading = r => require.ensure([], () => r(require('@/docs/loading.md')), 'services')
const Toast = r => require.ensure([], () => r(require('@/docs/toast.md')), 'services')
const Dialog = r => require.ensure([], () => r(require('@/docs/dialog.md')), 'services')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [{
        path: '',
        name: 'log',
        component: Log
      }, {
        path: '/button',
        name: 'button',
        component: Button
      }, {
        path: '/radio',
        name: 'radio',
        component: Radio
      }, {
        path: '/flexbox',
        name: 'flexbox',
        component: Flexbox
      }, {
        path: '/input',
        name: 'input',
        component: Input
      }, {
        path: '/toggle',
        name: 'toggle',
        component: Toggle
      }, {
        path: '/checkbox',
        name: 'checkbox',
        component: Checkbox
      }, {
        path: '/list',
        name: 'list',
        component: List
      }, {
        path: '/search',
        name: 'search',
        component: Search
      }, {
        path: '/textarea',
        name: 'textarea',
        component: Textarea
      }, {
        path: '/tabs',
        name: 'tabs',
        component: Tabs
      }, {
        path: '/select',
        name: 'select',
        component: Select
      }, {
        path: '/loading',
        name: 'loading',
        component: Loading
      }, {
        path: '/toast',
        name: 'toast',
        component: Toast
      }, {
        path: '/dialog',
        name: 'dialog',
        component: Dialog
      }]
    },
    {
      path: '/mobile',
      name: 'mobile',
      component: Mobile
    },
    {
      path: '/home',
      name: 'demo',
      component: Demo
    },
    {
      path: '/',
      component: Detail
    }
  ]
})
