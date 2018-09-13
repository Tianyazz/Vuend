<template>
  <div class="demo">
    <e-header><h2>Demo</h2></e-header>
    <div class="item-list">
      <router-link :to="{ name: 'button' }" class="pd-10">
        <span>Button</span>
        <p>按钮</p>
        <i class="icon">&#xe62e;</i>
      </router-link>
    </div>
  </div>
</template>

<script>
import EHeader from '@/components/header'
export default {
  name: 'Demo',
  components: {
    EHeader
  }
}
</script>
