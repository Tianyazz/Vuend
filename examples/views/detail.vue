<template>
  <div class="detail">
    <e-header><h2>组件</h2></e-header>
    <router-view />
  </div>
</template>

<script>
import EHeader from '@/components/header'
export default {
  name: 'Detail',
  components: {
    EHeader
  }
}
</script>
