import Vue from 'vue'
import { createElement } from '../utils'
import EndAlert from './src/alert'
import EndConfirm from './src/confirm'

let vm = undefined
class Dialog {
  show (type, options) {
    let marker = `end-${type}`
    createElement(marker)
    let selector = `[${marker}]`
    vm = new Vue(type === 'alert' ? EndAlert : EndConfirm).$mount(selector)
    vm.$el.setAttribute('end-dialog', '')
    return vm.show(options)
  }
  alert (options) {
    return this.show('alert', options)
  }
  confirm (options) {
    return this.show('confirm', options)
  }
  hide () {
    if (vm) vm.hide()
  }
}

export default new Dialog()
