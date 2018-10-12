<template>
  <div :class="['end-popup end-confirm', {active: state}]">
    <div class="popup">
      <div class="popup-head" v-text="title"></div>
      <div class="popup-body" v-text="content"></div>
      <div class="pupup-buttons">
        <end-col>
          <end-button
            :class="['button-plain', themeClass]"
            v-text="cancelText"
            @click="onCancel()"
          ></end-button>
        </end-col>
        <end-col justify="end">
          <end-button 
            :class="themeClass"
            v-text="okText"
            @click="onOk()"
          ></end-button>
        </end-col>
      </div>
    </div>
  </div>
</template>

<script>
import mixin from '../mixin'
const extend = (target, source) => {
  for (let key in source) {
    target[key] = source[key]
  }
  return target
}
export default {
  name: 'EndConfirm',
  mixins: [mixin],
  data () {
    return {
      state: false,
      content: '',
      title: '提示',
      okText: '确定',
      cancelText: '取消',
      theme: 'blue'
    }
  },
  computed: {
    themeClass: function () {
      return this.theme ? `button-${this.theme}` : ''
    }
  },
  methods: {
    show (options) {
      extend(this, options)
      this.state = true
      return new Promise((resolve, reject) => {
        this.$on('confirmOkEvent', () => {
          this.hide()
          resolve(true)
        })
        this.$on('confirmCancelEvent', () => {
          this.hide()
          resolve(false)
        })
      })
    },
    onOk () {
      this.$emit('confirmOkEvent')
    },
    onCancel () {
      this.$emit('confirmCancelEvent')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~global/common';
.end-confirm {
  .pupup-buttons {
    @include flexs;
  }
  .end-button {
    width: px2rem(210px);
  }
}
</style>
