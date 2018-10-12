import Vue from 'vue'
import EndLoading from './src/loading'
import { createElement } from '../utils'

function Loading () {
  let vm = undefined
  function showLoading () {
    createElement('end-loading')
    vm = new Vue(EndLoading).$mount('[end-loading]')
    vm.show()
  }
  function hideLoading () {
    if (vm) vm.hide()
  }
  return {
    showLoading,
    hideLoading
  }
}

let loading = new Loading()

const $loading = {
  show: loading.showLoading,
  hide: loading.hideLoading
}

export default $loading
