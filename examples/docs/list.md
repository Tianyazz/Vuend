### List 列表
#### 基础用法
::: demo List组件内可以直接使用`end-col`组件
```html
<template>
  <end-list>
    <end-col>列表</end-col>
    <end-col justify="end">内容</end-col>
  </end-list>
  <end-list>
    <end-col>性别</end-col>
    <end-col justify="end"><end-radio :label="0" v-model="v">男</end-radio></end-col>
    <end-col justify="end"><end-radio :label="1" v-model="v">女</end-radio></end-col>
  </end-list>
  <end-input type="text" v-model="value" placeholder="请输入内容" align>昵称</end-input>
  <end-list>
    <end-col>last-cild</end-col>
  </end-list>
</template>
<script>
export default {
  data () {
    return {
      v: 1,
      value: ''
    }
  }
}
</script>
```
:::