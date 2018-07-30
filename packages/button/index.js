import EndButton from './src/button'

EndButton.install = function (Vue) {
  Vue.component(EndButton.name, EndButton)
}

export default EndButton
// const components = [EndButton]

// export default function (Vue) {
//   components.map(component => {
//     Vue.component(component.name, component)
//   })
// }
