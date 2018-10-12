<template>
  <div
    :class="['end-col', {
      'col-justify-center': justify === 'center',
      'col-justify-end': justify === 'end',
      'col-align-center': align
    }, col]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'EndCol',
  data () {
    return {
      col: this.span ? `col-${this.span}` : ''
    }
  },
  props: {
    justify: {
      type: String
    },
    align: {
      type: Boolean
    },
    span: {
      type: Number
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~global/common';
.end-col {
  @include flexs;
  @include flex;
  &.col-justify-center {
    @include justify-content;
  }
  &.col-justify-end {
    @include justify-content(flex-end)
  }
  &.col-align-center {
    @include align-items;
  }
  &.col-1 {
    flex: 0 0 8.33333%
  }
  &.col-2 {
    width: 16%;
    flex: 0 0 16.66666%
  }
  &.col-3 {
    flex: 0 0 25%
  }
  &.col-4 {
    flex: 0 0 33.33333%
  }
  &.col-5 {
    flex: 0 0 41.66667%
  }
  &.col-6 {
    flex: 0 0 50%
  }
}
[class*=col-justify-] {
  @include flexs;
}
</style>
