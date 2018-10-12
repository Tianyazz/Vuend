<template>
  <div :class="['end-tabs', themeClass, positionClass]">
    <a
      v-for="(item, index) in items"
      :key="index"
      :class="{'active': activeIndex === index}"
      v-text="item"
      @click="tabClick($event, index)"
      ref="tabs"
    ></a>
    <i ref="bottom-edge"></i>
  </div>
</template>

<script>
export default {
  name: 'EndTabs',
  data () {
    return {
      positionClass: this.position ? `tabs-${this.position}` : '',
      themeClass: this.theme ? `theme-${this.theme}` : ''
    }
  },
  props: {
    position: {
      type: String
    },
    items: {
      type: Array,
      required: true
    },
    tabIndex: {
      type: Number,
      required: true,
      validator (value) {
        return value >= 0
      }
    },
    theme: {
      type: String,
      default: 'blue'
    }
  },
  computed: {
    activeIndex: function () {
      return this.tabIndex
    }
  },
  mounted () {
    this.active()
  },
  methods: {
    active (e) {
      let thisTab = e ?  e.target : this.$refs.tabs[this.activeIndex]
      let width = thisTab.offsetWidth
      let left = thisTab.offsetLeft
      this.$refs['bottom-edge'].style.width = `${width}px`
      this.$refs['bottom-edge'].style.left = `${left}px`
    },
    tabClick (e, index) {
      this.$emit('click', index)
      this.active(e)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~global/common';
.end-tabs {
  @include flexs;
  position: relative;
  height: $px60;
  @include align-items;
  border-bottom: px2rem(2px) solid #ddd;
  text-align: center;
  a {
    @include flex;
    @include transition;
    font-weight: bold;
    opacity: .5;
    &.active {
      opacity: 1;
    }
  }
  i {
    content: "";
    display: block;
    position: absolute;
    bottom: px2rem(-2px);
    width: 0;
    height: px2rem(3px);
    @include transition;
  }
  &.theme-blue {
    i {
      background: $blue;
    }
  }
  &.theme-red {
    a {
      color: $red;
    }
    i {
      background: $red;
    }
  }
  &.theme-green {
    a {
      color: $green;
    }
    i {
      background: $green;
    }
  }
  &.theme-yellow {
    a {
      color: $yellow;
    }
    i {
      background: $yellow;
    }
  }
}
.tabs-bottom {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 29;
  width: 100%;
  height: px2rem(70px);
  border-bottom: none;
  &.theme-blue { background: $blue; }
  &.theme-red { background: $red; }
  &.theme-yellow { background: $yellow; }
  &.theme-green { background: $green; }
  &.theme-blue,
  &.theme-red,
  &.theme-yellow,
  &.theme-green {
    a {
      color: #fff;
    }
    i {
      top: 0;
      bottom: inherit;
      background: #fff;
    }
  }
}
</style>
