<template>
  <end-row :class="['end-search', themeClass]" align>
    <i class="icon" @click="search">&#xeafe;</i>
    <end-col align>
      <input type="text" v-model="v" :placeholder="placeholder" ref="searchInput">
    </end-col>
    <end-button :class="['button-radius', themeButton]" @click="search" v-if="option.isButton" v-text="option.text"></end-button>
  </end-row>
</template>

<script>
export default {
  name: 'EndSearch',
  data () {
    return {
      themeClass: this.theme ? `theme-${this.theme}` : '',
      themeButton: this.theme ? `button-${this.theme}` : ''
    }
  },
  props: {
    value: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: '请输入关键字'
    },
    theme: {
      type: String,
      default: ''
    },
    option: {
      type: Object,
      default () {
        return {
          isButton: true,
          text: '搜索'
        }
      }
    }
  },
  computed: {
    v: {
      get: function () {
        return this.value
      },
      set: function () {}
    }
  },
  methods: {
    search () {
      let keyword = this.$refs.searchInput.value
      this.$emit('click', keyword)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~global/global';
.end-search {
  @include radius;
  background: $gray;
  .icon {
    color: $blue;
  }
  &.theme-red .icon {
    color: $red
  }
  &.theme-green .icon {
    color: $green
  }
  &.theme-yellow .icon {
    color: $yellow
  }
  input {
    width: 100%;
    height: $px48;
    border: none;
    background: none;
  }
  .end-button {
    font-size: $px20;
    padding: 0 $px20;
  }
}
</style>
