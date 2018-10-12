import Vue from 'vue'
import EndTost from './src/toast'
import { createElement, timeout } from '../utils'

let vm = undefined
const $tost = function (tips, duration) {
  createElement('end-tost')
  vm = new Vue(EndTost).$mount('[end-tost]')
  vm.show(tips)
  return timeout(duration || 1500).then(() => {
    return vm.hide()
  })
}

export default $tost
