<template>
  <div :class="['end-popup end-alert', {active: state}]">
    <div class="popup">
      <div class="popup-head" v-text="title"></div>
      <div class="popup-body" v-text="content"></div>
      <div class="pupup-buttons">
        <end-button 
          :class="themeClass"
          v-text="btnText"
          @click="onOk()"
        ></end-button>
      </div>
    </div>
  </div>
</template>

<script>
import mixin from '../mixin'
export default {
  name: 'EndAlert',
  mixins: [mixin],
  data () {
    return {
      state: false,
      title: '提示',
      content: '',
      btnText: '确定',
      theme: 'blue'
    }
  },
  computed: {
    themeClass: function () {
      return this.theme ? `button-${this.theme}` : ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~global/common';
.end-alert {
  .end-button {
    width: 100%;
  }
}
</style>
