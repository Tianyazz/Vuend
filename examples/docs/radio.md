### Radio单选框
#### 基础用法
::: demo 使用Radio组件，需要设置`v-mode`绑定变量，`lebel`设置选项值（label可以使`String`, `Number`)
```html
<template>
  <end-row class="radio-group">
    <end-col>
      <end-radio
        :label="0"
        v-model="value1"
      >单选框1</end-radio>
    </end-col>
    <end-col>
      <end-radio
        :label="1"
        v-model="value1"
      >单选框2</end-radio>
    </end-col>
  </end-row>
  <p>选中的值: {{ value1 }}</p>
</template>
```
:::
#### 遍历单选框组
::: demo 通过数组遍历Radio组
```html
<template> 
  <end-row>
    <end-col
      v-for="(label, index) in labels"
      :key="index"
    >
      <end-radio
        :label="label.value"
        v-model="value2"
      >{{ label.text }}</end-radio>
    </end-col>
  </end-row>
  <p>选中的值: {{ value2 }}</p>
</template>
<script>
export default {
  data () {
    return {
      value1: 0,
      value2: 0,
      value3: 2,
      labels: [{
        text: '男',
        value: 0
      }, {
        text: '女',
        value: 1
      }, {
        text: '人妖',
        value: 2
      }]
    }
  }
}
</script>
```
:::
#### 列表、主题色
::: demo `theme`设置主题色
```html
<template>
  <end-list>
    <end-radio v-model="value3" :label="1" theme="red">选项一</end-radio>
  </end-list>
  <end-list>
    <end-radio v-model="value3" :label="2" theme="green">选项二</end-radio>
  </end-list>
  <end-list>
    <end-radio v-model="value3" :label="3" theme="yellow">选项三</end-radio>
  </end-list>
</template>
```
:::
#### 禁用
::: demo 通过设置`disabled`禁用选项
```html
<template>
  <end-radio
    label="0"
    v-model="value1"
    disabled
  >禁用</end-radio>
</template>
```
:::
