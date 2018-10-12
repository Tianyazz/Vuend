<template>
  <ul class="sidebar">
    <router-link tag="li" :to="{ name: 'log' }" class="log"><h3>更新日志</h3></router-link>
    <li class="component"><h4>组件</h4></li>
    <router-link
      tag="li"
      v-for="(item, index) in navData"
      :key="index"
      :to="{ name: item.name }"
    >{{ item.en }}&#12288;{{ item.cn }}</router-link>
  </ul>
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      data: [{
        name: 'button',
        cn: '按钮',
        en: 'Button'
      }, {
        name: 'radio',
        cn: '单选框',
        en: 'Radio'
      }, {
        name: 'flexbox',
        cn: '布局',
        en: 'layout'
      }, {
        name: 'input',
        cn: '文本框',
        en: 'input'
      }, {
        name: 'toggle',
        cn: '开关按钮',
        en: 'toggle'
      }, {
        name: 'checkbox',
        cn: '复选框',
        en: 'checkbox'
      }, {
        name: 'list',
        cn: '列表',
        en: 'list'
      }, {
        name: 'search',
        cn: '搜索',
        en: 'search'
      }, {
        name: 'textarea',
        cn: '文本域',
        en: 'textarea'
      }, {
        name: 'tabs',
        cn: '选项卡',
        en: 'tabs'
      }, {
        name: 'select',
        cn: '选择列表',
        en: 'select'
      }, {
        name: 'loading',
        cn: '加载提示',
        en: 'loading'
      }, {
        name: 'toast',
        cn: '文字提示',
        en: 'toast'
      }, {
        name: 'dialog',
        cn: '对话框',
        en: 'dialog'
      }]
    }
  },
  computed: {
    navData: function () {
      let data = this.data
      data.sort((x, y) => {
        let x1 = x.name
        let y1 = y.name
        if (x1 < y1) {
          return -1
        }
        if (x1 > y1) {
          return 1
        }
        return 0
      })
      return data
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~global/global';
.sidebar {
  position: fixed;
  left: 0;
  top: px2rem(120px);
  z-index: 98;
  width: px2rem(200px);
  padding: $px20 0;
  border-right: 1px solid #eee;
  background: #fff;
  li {
    position: relative;
    @include flexs;
    @include align-items;
    padding: $px10 $px20;
    margin-bottom: $px10;
    @include transition;
    font-size: $px18;
    cursor: pointer;
    &:before {
      content: "";
      display: block;
      position: absolute;
      right: 0;
      width: px2rem(4px);
      height: 0;
      @include transition(height);
      background: $blue;
    }
    &:hover,
    &.router-link-active {
      color: $blue;
      background: rgba(68, 204, 0, .1);
      &:before {
        height: 100%;
      }
      &.log {
        color: #333;
        background: none;
        &:before {
          height: 0;
        }
      }
    }
    &.component {
      &:hover {
        color: #333;
        background: none;
      }
      &:before {
        display: none;
      }
    }
  }
}
</style>
