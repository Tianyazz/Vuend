import EndRow from './src/row'
import EndCol from './src/col'
EndRow.install = function (Vue) {
  Vue.component(EndRow.name, EndRow)
}
EndCol.install = function (Vue) {
  Vue.component(EndCol.name, EndCol)
}
export { EndRow, EndCol }