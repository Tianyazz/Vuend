### Toggle 开关按钮
#### 基础用法
::: demo toggle 设置`v-model`绑定变量值，类型`[Boolean]`
```html
<template>
  <div class="main">
    <end-toggle v-model="v1">是否开启</end-toggle>
    <p>开关状态: {{ v1 ? '开启' : '关闭'}}</p>
  </div>
</template>
```
:::
#### 设置主题
::: demo 设置`theme`更换主题颜色，值可选`[red, green, yellow]`
```html
<template>
  <div class="main">
    <end-toggle v-model="v2" theme="red">red</end-toggle>
    <end-toggle v-model="v3" theme="green">green</end-toggle>
    <end-toggle v-model="v4" theme="yellow">yellow</end-toggle>
  </div>
</template>
<script>
export default {
  data () {
    return {
      v1: true,
      v2: false,
      v3: false,
      v4: false
    }
  }
}
</script>
```
:::