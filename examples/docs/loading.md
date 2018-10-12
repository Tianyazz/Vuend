### loading 加载提示
#### 基础用法
::: demo 调用方法`$loading`，`show`显示加载，`hide`关闭加载
```html
<template>
  <end-list @click.native="loading">
    <end-col>Loading</end-col>
    <end-col justify="end">加载提示</end-col>
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
    loading () {
      $loading.show()
      setTimeout(() => {
        $loading.hide()
      }, 2000)
    }
  }
}
</script>
```
:::