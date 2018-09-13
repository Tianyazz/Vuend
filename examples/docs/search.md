### Search 搜索
#### 基础用法
::: demo search 设置`option`, `isButton`是否显示按钮，`text`按钮文本内容，`theme`设置风格。直接绑定`click`事件函数，参数返回关键字，
```html
<template>
  <end-search class="mb-10" v-model="value" placeholder="请输入类型" @click="search"></end-search>
  <p>{{value}}</p>
  <end-search class="mb-10" v-model="value" placeholder="请输入颜色" theme="red"></end-search>
  <end-search class="mb-10" v-model="value" placeholder="请输入绿色" theme="green"></end-search>
  <end-search class="mb-10" v-model="value" placeholder="请输入黄色" theme="yellow"></end-search>
  <end-search class="mb-10" v-model="value" placeholder="请输入黄色" :option="option"></end-search>
  <end-search class="mb-10" v-model="value" placeholder="无按钮，点击放大镜搜索" theme="yellow" :option="option1"></end-search>
</template>
<script>
export default {
  data () {
    return {
      value: '',
      option: {
        isButton: true,
        text: '搜索吧'
      },
      option1: {
        isButton: false,
        text: '搜索吧'
      }
    }
  },
  methods: {
    search (keyword) {
      this.value = keyword
    }
  }
}
</script>
```
:::