### Input 文本输入框
#### 基础用法
::: demo 设置`v-mode`绑定变量（必填），设置`align` input 值右对齐, 默认正常显示
```html
<template>
  <end-input type="text" v-model="value" placeholder="请输入内容">用户名</end-input>
  <end-input type="password" v-model="pwd" align placeholder="请输入内容，右对齐">密码</end-input>
  <end-row>
    <end-col>{{ value }}</end-col>
    <end-col>{{ pwd }}</end-col>
  </end-row>
</template>
<script>
export default {
  data () {
    return {
      value: '',
      pwd: ''
    }
  }
}
</script>
```
:::
#### 设置主题
::: demo 设置`clear`带有清除输入框按钮, 通过`theme`可以设置主题颜色
```html
<template>
  <end-input type="text" placeholder="请输入内容" v-model="value" clear>清除内容</end-input>
  <end-input type="email" placeholder="请输入内容" v-model="value" clear theme="green">主题绿色</end-input>
  <end-input type="tel" placeholder="请输入内容" v-model="value" clear theme="yellow">主题黄色</end-input>
  <end-input type="text" placeholder="请输入内容" v-model="value" clear theme="red">主题红色</end-input>
  <end-input type="text" placeholder="请输入内容" v-model="value" clear></end-input>
</template>
```
:::
#### 全边文本框
::: demo 全边文本框加class`full-side`
```html
<template>
  <end-input class="full-side" v-model="value" placeholder="边框加class='full-side'"></end-input>
  <end-input class="full-side" v-model="value" placeholder="边框加class='full-side'" theme="green">标题</end-input>
</template>
<style lang="scss">
@import '~global/global';
.full-side {
  margin-bottom: $px20;
}
</style>
```
:::
#### 全边文本框2
::: demo 全边文本框加class`gradient-side`
```html
<template>
  <end-input class="gradient-side" v-model="value" placeholder="class='gradient-side'"></end-input>
  <end-input class="gradient-side" v-model="value" placeholder="class='gradient-side'" theme="red" clear>标题</end-input>
  <end-input class="gradient-side" v-model="value" placeholder="class='gradient-side'" theme="green" clear>标题</end-input>
</template>
<style lang="scss">
@import '~global/global';
.full-side,
.gradient-side {
  margin-bottom: $px20;
}
</style>
```
:::