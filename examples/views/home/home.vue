<!-- 展示模板 2018-007-24 -->
<template>
  <div class="page home">
    <e-header></e-header>
    <e-sidebar></e-sidebar>
    <div class="content">
      <router-view class="markdown" />
    </div>
  </div>
</template>

<script>
import EHeader from './components/header'
import ESidebar from './components/sidebar'
export default {
  name: 'Home',
  components: {
    EHeader,
    ESidebar
  }
}
</script>

<style lang="scss">
@import '~global/global';
.home {
  .content {
    margin: px2rem(120px) px2rem(40px) px2rem(40px) px2rem(240px);
  }
  .markdown {
    h3, h4 {
      margin-bottom: $px30;
    }
  }
}
</style>
