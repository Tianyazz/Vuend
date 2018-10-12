### toast 文字提示
#### 基础用法
::: demo 调用方法`$toast`，`show`显示，`hide`关闭，设置参数`msg`提示文字内容
```html
<template>
  <end-list @click.native="toast('文字提示')">
    <end-col>Toast</end-col>
    <end-col justify="end">文字提示</end-col>
  </end-list>
  <end-list>
    <end-col>列表1</end-col>
    <end-col justify="end">内容</end-col>
  </end-list>
  <end-list>
    <end-col>列表2</end-col>
    <end-col justify="end">内容</end-col>
  </end-list>
  <end-list>
    <end-col>列表3</end-col>
    <end-col justify="end">内容</end-col>
  </end-list>
</template>
<script>
export default {
  methods: {
    toast (tips) {
      $toast(tips)
    }
  }
}
</script>
```
:::