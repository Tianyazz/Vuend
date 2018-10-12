### select 选择器列表
#### 基础用法
::: demo 设置`deploy`配置选项, 设置`v-model`绑定选中的值ID，设置`theme`主题颜色。组件内直接写内容，为选择框标题
```html
<template>
  <end-select class="select-1" :deploy="deploy" v-model="value">选择</end-select>
  <end-list>
    <end-col>选项一</end-col>
    <end-col justify="end">
      <end-select :deploy="deploy" v-model="value" theme="red"></end-select>
    </end-col>
  </end-list>
  <end-list>
    <p>选项二</p>
    <end-col justify="end">
      <end-select :deploy="deploy" v-model="value" theme="yellow"></end-select>
    </end-col>
  </end-list>
  <end-list>
    <end-col>选项三</end-col>
    <end-col justify="end">
      <end-select :deploy="deploy1" v-model="value1" theme="green">选择是谁的</end-select>
    </end-col>
  </end-list>
</template>
<script>
export default {
  data () {
    return {
      deploy: {
        valueName: 'value', // options数组内的值是JSON对象时，配置选项value健值。默认为'text'
        options: [{
          value: '电影',
          id: 1
        }, {
          value: '娱乐',
          id: 3,
        }, {
          value: '动漫',
          id: 5
        }, {
          value: '旅游',
          id: 4
        }]
      },
      value: 0,
      deploy1: {
        options: ['我的', '你的', '他的', '其他', '我的', '你的', '他的', '其他']
      },
      value1: 0
    }
  }
}
</script>
```
:::
<style lang="scss" scoped>
@import '~global/global';
.select-1 {
  @include flexs;
  @include align-items;
  height: px2rem(40px);
  border: 1px solid #ddd;
  text-align: center;
  .select-popup {
    position: absolute !important;
  }
}
.source {
  position: relative;
  height: px2rem(600px);
  overflow: hidden;
}
</style>
