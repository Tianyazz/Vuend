### checkbox 复选框
#### 基础用法
::: demo 用`v-model`双向绑定变量，变量类型`[Array, Number]`，Array类型值类型必须为`Number`; Number类型位单个复选框，值不能为0 用`options`绑定选项数组，数组值为对象，`key`值包括`text`, `id`
```html
<template>
  <end-checkbox :options="options" v-model="value">选择1</end-checkbox>
  <p>{{ value }}</p>
</template>
<script>
export default {
  data () {
    return {
      options: [{
        text: '电影',
        id: 1
      }, {
        text: '娱乐',
        id: 3,
      }, {
        text: '动漫',
        id: 12
      }, {
        text: '旅游',
        id: 4
      }],
      option1: [{
        text: '选择2',
        id: 11
      }],
      option2: [{
        text: 'red',
        id: 1
      }],
      option3: [{
        text: 'green',
        id: 2
      }],
      value: [3],
      v1: 0,
      v2: 0,
      v3: 0
    }
  }
}
</script>
```
:::
#### 风格
::: demo 提供四中颜色，设置`theme`, `[red, green, yellow]`, 默认蓝色。设置`hook`改变样式，居右。
```html
<template>
  <end-checkbox :options="option1" v-model="v1" theme="yellow">选择2</end-checkbox>
  <end-checkbox :options="option2" v-model="v2" theme="red" hook>选择3</end-checkbox>
  <end-checkbox :options="option3" v-model="v3" theme="green" hook>green</end-checkbox>
</template>
```
:::