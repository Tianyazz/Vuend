<template>
  <header>
    <div class="logo">
      <img src="@/assets/img/logo2.png" alt="">
      <h2>VUEND</h2>
    </div>
    <ul>
      <li>组件</li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'TopHeader'
}
</script>

<style lang="scss" scoped>
@import '~global/global';
header {
  @include flexs;
  @include align-items;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  width: 100%;
  height: px2rem(80px);
  padding: 0 $px30;
  background: #FFF;
  @include shadow;
  .logo {
    @include flexs
    @include flex;
    @include align-items;
    img {
      width: px2rem(50px);
      height: px2rem(50px);
      margin-right: $px20;
    }
    h2 {
      @include flex;
      color: $blue;
    }
  }
  ul {
    @include flexs;
    @include flex;
    @include justify-content(flex-end);
    margin-right: px2rem(100px);
    li {
      @include flexs;
      height: px2rem(80px);
      @include align-items;
      padding: $px20 $px20 0;
      border-bottom: px2rem(4px) solid $blue;
      color: $blue;
      cursor: pointer;
    }
  }
}
</style>
