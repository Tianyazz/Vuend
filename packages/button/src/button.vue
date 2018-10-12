<!-- 按钮 -->
<template>
  <button class="end-button" @click.prevent="handleClick($event)"
    ref="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'EndButton',
  methods: {
    handleClick (e) {
      let btn = this.$refs.button
      let ripple = document.createElement('div')
      ripple.classList.add('ripple-effect')
      let x = e.pageX - btn.offsetLeft
      let y = e.pageY - btn.offsetTop
      ripple.style.width = `${btn.offsetHeight}px`
      ripple.style.height = `${btn.offsetHeight}px`
      ripple.style.left = `${x - btn.offsetHeight / 2}px`
      ripple.style.top = `${y - btn.offsetHeight / 2}px`
      btn.appendChild(ripple)
      setTimeout(() => {
        btn.removeChild(ripple)
      }, 2000)
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss">
@import '~global/common';
.end-button {
  position: relative;
  height: $px48;
  padding: 0 $px40;
  border: 1px solid $blue;
  font-size: $px24;
  line-height: px2rem(44px);
  color: #fff;
  background: $blue;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  @include user-select;
  &.button-block {
    display: block;
    width: 100%;
  }
  &.button-radius {
    @include radius;
  }
  &:active {
    border-color: darken($blue, 20%);
    background-color: darken($blue, 20%);
  }
  &.button-red {
    border: 1px solid $red;
    background: $red;
    &:active {
      border-color: darken($red, 20%);
      background-color: darken($red, 20%);
    }
    &.button-plain {
      color: $red;
      background: none;
    }
  }
  &.button-green {
    border: 1px solid $green;
    background: $green;
    &:active {
      border-color: darken($green, 20%);
      background-color: darken($green, 20%);
    }
    &.button-plain {
      color: $green;
      background: none;
    }
  }
  &.button-yellow {
    border: 1px solid $yellow;
    background: $yellow;
    &:active {
      border-color: darken($yellow, 20%);
      background-color: darken($yellow, 20%);
    }
    &.button-plain {
      color: $yellow;
      background: none;
    }
  }
  &.button-plain {
    color: $blue;
    background: none;
  }
  .ripple-effect {
    position: absolute;
    opacity: 0;
    @include radius(50px);
    background: rgba(255, 255, 255, .2);
    @include scale(1, 1);
    @include animation(effect, 3s);
  }
}
@include keyframes(effect) {
  0% {
    opacity: 1;
    @include scale(1, 1);
  }
  100% {
    opacity: 0;
    @include scale(20, 20);
  }
}
</style>