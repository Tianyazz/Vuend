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
  height: $px60;
  padding: $px10;
  border-bottom: 1px solid #ddd;
  &:last-child {
    border-bottom: none;
  }
}
</style>
