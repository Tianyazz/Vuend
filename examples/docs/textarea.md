### textarea 文本域
#### 基础用法
::: demo end-textarea `v-model`双向绑定变量， `rows`设置行数，`theme`设置风格
```html
<template>
  <end-textarea v-model="text" placeholder="请输入..."></end-textarea>
  <p>{{text}}</p>
  <end-textarea v-model="text" rows="3" placeholder="red..." theme="red"></end-textarea>
  <end-textarea v-model="text" rows="3" placeholder="green..." theme="green"></end-textarea>
  <end-textarea v-model="text" rows="3" placeholder="yellow..." theme="yellow"></end-textarea>
</template>
<script>
export default {
  data () {
    return {
      text: ''
    }
  }
}
</script>
```
:::