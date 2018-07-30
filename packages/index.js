import button from './button/index'

const components = [
  button
]

const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefind' && window.Vue) {
  install(window.Vue)
}

const API = {
  install,
  ...components
}

export default API
