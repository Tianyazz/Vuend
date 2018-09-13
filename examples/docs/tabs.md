### tabs选项卡
#### 基础用法
::: demo 设置`items`tab标签文本数组，`tabIndex`默认选中第几个tab，`theme`设置颜色; 设置`position`tab标签位置
```html
<template>
  <end-tabs :items="items" :tabIndex="index" @click="tabIndex"></end-tabs>
  <end-tabs :items="items2" :tabIndex="index2" @click="tabIndex2" theme="red"></end-tabs>
  <end-tabs :items="items3" :tabIndex="index3" @click="tabIndex3" theme="green" position="bottom"></end-tabs>
</template>
```
:::

<script>
export default {
  data () {
    return {
      items: ['tab1', 'tab2', 'tab3'],
      items2: ['西瓜', '香蕉', '菠萝', '芒果'],
      index: 0,
      index2: 2,
      items3: ['衬衫', '牛仔裤', 'T恤', '毛衣', '外套'],
      index3: 1
    }
  },
  methods: {
    tabIndex (index) {
      this.index = index
    },
    tabIndex2 (index) {
      this.index2 = index
    },
    tabIndex3 (index) {
      this.index3 = index
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~global/global';
.source {
  position: relative;
  height: px2rem(600px);
  .tabs-bottom {
    position: absolute;
  }
}
</style>