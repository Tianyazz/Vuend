<!-- 按钮 -->
<template>
  <div class="end-button" @click="clickHanlder">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'EndButton',
  methods: {
    clickHanlder () {
      console.log(1)
    }
  }
}
</script>

<style>
.end-button {
  display: inline-block;
  height: 20px;
  padding: 5px 20px;
  border: 1px solid #ccc;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  background: #f1f1f1;
}
</style>