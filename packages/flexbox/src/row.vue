<template>
  <div
    :class="['end-row', {
      'row-wrap-2': wrap === 2,
      'row-wrap-3': wrap === 3,
      'row-align-center': align
    }]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'EndRow',
  props: {
    wrap: {
      type: Number
    },
    align: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~global/common';
.end-row {
  @include flexs;
  &.row-wrap-2 {
    .end-col {
      flex: 0 0 50%;
    }
  }
  &.row-wrap-3 {
    .end-col {
      flex: 0 0 33.3333%;
    }
  }
  &.row-align-center {
    @include align-items;
  }
}
[class*=row-wrap-] {
  @include flex-wrap;
}
</style>
