<template>
  <div end-tost :class="['end-toast', {'show-tost': showState}]">
    <span v-text="tips"></span>
  </div>
</template>

<script>
import { removeElement } from '../../utils'
export default {
  name: 'EndTost',
  data () {
    return {
      showState: false,
      tips: ''
    }
  },
  destroyed () {
    removeElement('end-tost')
  },
  methods: {
    show (tips) {
      this.tips = tips
      this.showState = true
    },
    hide () {
      this.showState = false
      setTimeout(() => {
        this.$destroy()
        this.tips = ''
      }, 300)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~global/common';
.end-toast {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 20181010;
  opacity: 0;
  @include scale(1.4, 1.4);
  @include transition;
  span {
    @include centerMiddle;
    padding: $px10 $px20;
    @include radius;
    color: #fff;
    background: rgba(0, 0, 0, .7);
  }
  &.show-tost {
    opacity: 1;
    @include scale(1, 1);
  }
}
</style>
