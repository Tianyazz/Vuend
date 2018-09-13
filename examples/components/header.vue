<template>
  <header class="mb-20">
    <i class="icon" @click="goBack">&#xe600;</i>
    <slot></slot>
    <i class="icon"></i>
  </header>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    goBack () {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~global/global';
header {
  @include flexs;
  @include align-items;
  height: px2rem(80px);
  line-height: px2rem(80px);
  padding: 0 $px20;
  background: #fff;
  border-bottom: 1px solid #ddd;
  i {
    font-size: px2rem(48px);
  }
  h2 {
    @include flexs;
    @include flex;
    @include justify-content(center);
  }
}
</style>
