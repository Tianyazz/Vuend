<template>
  <div end-loading :class="['end-loading', {'active': showState}]">
    <div class="loading">
      <div class="loader"></div>
    </div>
  </div>
</template>

<script>
import { removeElement } from '../../utils'
export default {
  name: 'EndLoading',
  data () {
    return {
      showState: false
    }
  },
  destroyed () {
    removeElement('end-loading')
  },
  methods: {
    show () {
      setTimeout(() => {
        this.showState = true
      })
    },
    hide () {
      this.showState = false
      setTimeout(() => {
        this.$destroy()
      }, 300)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~global/common';
.end-loading {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2018;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .5);
  opacity: 0;
  @include transition;
  &.active {
    opacity: 1;
  }
  .loading {
    @include centerMiddle;
    width: px2rem(120px);
    height: px2rem(120px);
  }
  .loader {
    position: relative;
    text-indent: px2rem(-999px);
    border-top: px2rem(16px) solid rgba(255, 255, 255, 0.3);
    border-right: px2rem(16px) solid rgba(255, 255, 255, 0.3);
    border-bottom: px2rem(16px) solid rgba(255, 255, 255, 0.3);
    border-left: px2rem(16px) solid #fff;
    @include animation($name: load, $d: 1.1s, $fun: infinite, $count: linear);
    font-size: px2rem(10px);
  }
  .loader,
  .loader:after {
    width: px2rem(120px);
    height: px2rem(120px);
    @include radius(100px)
  }
  @include keyframes(load) {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
}
</style>
