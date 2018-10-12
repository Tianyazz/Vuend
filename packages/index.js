import button from './button/index'
import radio from './radio/index'
import { EndRow, EndCol} from './flexbox/index'
import input from './input/index'
import toggle from './toggle/index'
import checkbox from './checkbox/index'
import list from './list/index'
import search from './search/index'
import textarea from './textarea/index'
import tabs from './tabs/index'
import select from './select/index'

import $loading from './loading/index'
import $toast from './toast/index'
import $dialog from './dialog/index'

const components = [
  button,
  radio,
  EndRow,
  EndCol,
  input,
  toggle,
  checkbox,
  list,
  search,
  textarea,
  tabs,
  select
]

const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
  Vue.prototype.$loading = window.$loading = $loading
  Vue.prototype.$toast = window.$toast = $toast
  Vue.prototype.$dialog = window.$dialog = $dialog
}

if (typeof window !== 'undefind' && window.Vue) {
  install(window.Vue)
}

const API = {
  install,
  ...components
}

export default API
