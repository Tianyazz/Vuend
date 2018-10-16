<template>
  <div class="list-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'EndList'
}
</script>

<style lang="scss" scoped>
@import '~global/common';
.list-item {
  @include flexs;
  @include align-items;
  height: px2rem(80px);
  padding: $px10;
  border-bottom: 1px solid #ddd;
  &:last-child {
    border-bottom: none;
  }
}
</style>
