<template>
  <div :class="['end-select', themeClass]">
    <p
      :class="{show: showClass}"
      v-text="selectedOption"
      @click="showHandleClick"
    ></p>
    <transition name="opacity">
      <div
        class="select-popup"
        @click.self="hideHandelClick"
        v-show="showClass"
      >
        <div :class="['select-cont', {animation: animationClass}]">
          <h2 class="center"><slot>标题</slot></h2>
          <div class="select-options">
            <label
              v-for="(item, i) in deploy.options"
            >
              <input type="radio"
                :value="optionIsObject ? item.id : i"
                v-model="v"
                @click="handleClick($event)"
              >
              <p v-text="item[keyName]" v-if="optionIsObject"></p>
              <p v-text="item" v-else></p>
              <i class="icon">&#xe637;</i>
            </label>
          </div>
          <button @click.self="hideHandelClick">取消</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'EndSelect',
  data () {
    return {
      themeClass: this.theme ? `theme-${this.theme}` : '',
      showClass: false,
      animationClass: false,
      timer: null
    }
  },
  props: {
    deploy: {
      type: Object,
      default () {
        return {
          valueName: 'text',
          options: {
            type: Array
          }
        }
      }
    },
    value: {
      type: [String, Number],
      required: true
    },
    theme: {
      type: String
    }
  },
  computed: {
    optionIsObject: function () {
      return typeof this.deploy.options[0] === 'object'
    },
    keyName: function () {
      return this.deploy.valueName
    },
    v: {
      get: function () {
        return this.value
      },
      set: function (v) {}
    },
    selectedOption: {
      get: function () {
        if (this.optionIsObject) {
          let text = '选择'
          for (let value of this.deploy.options.values()) {
            if (+value.id === +this.v) {
              text = value[this.keyName]
            }
          }
          return text
        } else {
          return this.deploy.options[this.v] ? this.deploy.options[this.v] : '选择'
        }
      }
    }
  },
  methods: {
    showHandleClick () {
      this.showClass = true
      this.timer = setTimeout(() => {
        this.animationClass = true
        clearTimeout(this.timer)
      }, 100)
    },
    hideHandelClick () {
      this.showClass = false
      this.animationClass = false
    },
    handleClick (e) {
      let value = e.target.value
      this.$emit('input', value)
      this.hideHandelClick()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~global/common';
.end-select {
  width: 100%;
  > p {
    width: 100%;
    &:after {
      display: inline-block;
      content: "\e62f";
      margin-left: px2rem(10px);
      font-family: "iconfont";
      @include transition;
      @include rotate(0deg);
    }
    &.show:after {
      @include rotate(180deg);
    }
  }
  h2 {
    height: px2rem(60px);
    border-bottom: 1px solid #eee;
    line-height: px2rem(60px);
    background: #f9f9f9;
  }
  .select-popup {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 998;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .6);
  }
  .select-cont {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #fff;
    @include transition;
    @include translate(0, 100%);
    &.animation {
      @include translate(0, 0);
    }
  }
  .select-options {
    border-bottom: px2rem(5px) solid #eee;
    max-height: px2rem(270px);
    overflow-y: scroll;
  }
  label {
    @include flexs;
    @include align-items;
    height: px2rem(60px);
    padding: 0 px2rem(20px);
    border-bottom: 1px solid #eee;
    p {
      @include flex;
      @include transition;
      text-align: left;
    }
    .icon {
      font-size: px2rem(20px);
      font-weight: bold;
      color: #fff;
      @include transition;
    }
    input:checked + p,
    input:checked + p + i.icon {
      color: $blue;
    }
  }
  button {
    width: 100%;
    height: px2rem(60px);
    border: none;
    line-height: px2rem(60px);
    color: $blue;
  }
  &.theme-red {
    label {
      input:checked + p,
      input:checked + p + i.icon {
        color: $red;
      }
    }
    button {
      color: $red;
    }
  }
  &.theme-yellow {
    label {
      input:checked + p,
      input:checked + p + i.icon {
        color: $yellow;
      }
    }
    button {
      color: $yellow;
    }
  }
  &.theme-green {
    label {
      input:checked + p,
      input:checked + p + i.icon {
        color: $green;
      }
    }
    button {
      color: $green;
    }
  }
}
.col-justify-end {
  .end-select > p {
    text-align: right;
  }
}
.demo-block-mobile {
  .select-popup {
    position: absolute;
  }
}
</style>
