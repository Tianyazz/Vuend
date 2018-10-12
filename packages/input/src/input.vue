<template>
  <div :class="['end-input input-clear', {focus: active}, themeClass]">
    <span ref="title" v-show="showTitle"><slot></slot></span>
    <div class="input" v-if="type === 'text'">
      <input :type="type" ref="input"
        :value="value"
        :placeholder="placeholder"
        :class="{'text-right': align}"
        @compositionstart="compositionstart($event)"
        @compositionend="compositionend($event)"
        @input="input($event)"
        @focus="focus($event)"
        @blur="blur($event)"
      >
    </div>
    <div class="input" v-else>
      <input :type="type" ref="input"
        :value="value"
        :placeholder="placeholder"
        :class="{'text-right': align}"
        @input="updateValue($event)"
        @focus="focus($event)"
        @blur="blur($event)"
      >
    </div>
    <i class="icon" @click="clearInput" v-show="showClearButton && clear">&#xeaf2;</i>
  </div>
</template>

<script>
export default {
  name: 'EndInput',
  data () {
    return {
      showTitle: true,
      lock: false,
      active: false,
      themeClass: this.theme ? `theme-${this.theme}` : '',
      showClearButton: false
    }
  },
  props: {
    type: {
      type: String,
      validator (val) {
        return val == 'text' || val == 'password' || val == 'email' || val == 'tel'
      },
      default: 'text'
    },
    value: {
      type: [Number, String],
      required: true
    },
    placeholder: {
      type: String,
      default: ''
    },
    align: {
      type: Boolean,
      deafult: false
    },
    clear: {
      type: Boolean,
      deafult: false
    },
    theme: {
      type: String
    }
  },
  mounted () {
    this.showTitle = this.$refs.title.textContent === '' ? false : true
  },
  watch: {
    value: function (newVal) {
      this.showClearButton = !!newVal
    }
  },
  methods: {
    updateValue (e) {
      let value = e.target.value
      this.$refs.input.value = value
      this.$emit('input', value)
    },
    input (e) {
      if (this.lock) {
        e.preventDefault()
        return
      }
      let value = e.target.value
      this.$refs.input.value = value
      this.$emit('input', value)
    },
    compositionstart (e) {
      this.lock = true
    },
    compositionend (e) {
      this.lock = false
      let value = this.$refs.input.value
      this.$emit('input', value)
    },
    focus (e) {
      this.active = true
      this.showClearButton = !!this.$refs.input.value
    },
    blur (e) {
      this.active = false
    },
    clearInput () {
      this.$refs.input.blur()
      this.$refs.input.value = ''
      this.$emit('input', '')
      this.showClearButton = false
      this.active = false
      this.$refs.input.focus()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~global/common';
.end-input {
  @include flexs;
  @include align-items;
  border-bottom: 1px solid #ddd;
  height: $px60;
  padding: 0 $px10;
  @include transition;
  span {
    width: px2rem(96px);
  }
  .input {
    @include flex;
  }
  input {
    width: 100%;
    height: $px40;
    border: none;
    background: none;
    &.text-right {
      text-align: right;
    }
  }
  &.focus {
    border-bottom: 1px solid $blue;
    @include shadow(0px, 4px, 5px, -3px, rgb($blue, .5));
  }
  &.input-clear {
    .icon {
      width: $px30;
      height: $px30;
      @include radius(20px);
      font-size: $px20;
      line-height: $px30;
      font-weight: bold;
      color: #fff;
      background: $blue;
      @include scale(0.7, 0.7);
    }
  }
  &.theme-red {
    &.focus {
      border-bottom: 1px solid $red;
      @include shadow(0px, 4px, 5px, -3px, rgb($red, .5));
    }
    .icon {
      background: $red;
    }
  }
  &.theme-green {
    &.focus {
      border-bottom: 1px solid $green;
      @include shadow(0px, 4px, 5px, -3px, rgb($green, .5));
    }
    .icon {
      background: $green;
    }
  }
  &.theme-yellow {
    &.focus {
      border-bottom: 1px solid $red;
      @include shadow(0px, 4px, 5px, -3px, rgb($yellow, .5));
    }
    .icon {
      background: $red;
    }
  }
}
.full-side {
  &.focus {
    border: 1px solid $blue;
    @include shadow(0px, 0px, 5px, 0px, rgb($blue, .5));
  }
  &.theme-red {
    &.focus {
      border: 1px solid $red;
      @include shadow(0px, 0px, 5px, 0px, rgb($red, .5));
    }
    .icon {
      background: $red;
    }
  }
  &.theme-green {
    &.focus {
      border: 1px solid $green;
      @include shadow(0px, 0px, 5px, 0px, rgb($green, .5));
    }
    .icon {
      background: $green;
    }
  }
  &.theme-yellow {
    &.focus {
      border: 1px solid $red;
      @include shadow(0px, 0px, 5px, 0px, rgb($yellow, .5));
    }
    .icon {
      background: $red;
    }
  }
}
.gradient-side {
  position: relative;
  border: 1px solid #ddd;
  &.focus {
    border: 1px solid #fff;
    @include shadow(0px, 0px, 0px, 0px, rgb($blue, 0));
  }
  &:before,
  &:after {
    content: "";
    position: absolute;
    display: block;
    top: -1px;
    right: -1px;
    bottom: -1px;
    left: -1px;
    z-index: 8;
    @include transition(all, .6s, ease-out);
  }
  &:before {
    border-top: 1px solid $blue;
    border-bottom: 1px solid $blue;
    @include scale(0, 1);
  }
  &:after {
    border-left: 1px solid $blue;
    border-right: 1px solid $blue;
    @include scale(1, 0);
  }
  &.focus:before,
  &.focus:after {
    @include scale(1, 1);
  }
  &.theme-red,
  &.theme-green,
  &.theme-yellow {
    &.focus {
      border: 1px solid #fff;
      @include shadow(0px, 0px, 0px, 0px, rgb($blue, 0));
    }
  }
  &.theme-red {
    &:before {
      border-top: 1px solid $red;
      border-bottom: 1px solid $red;
    }
    &:after {
      border-left: 1px solid $red;
      border-right: 1px solid $red;
    }
  }
  &.theme-green {
    @include shadow(0px, 0px, 0px, 0px, rgb($blue, 0));
    &:before {
      border-top: 1px solid $green;
      border-bottom: 1px solid $green;
    }
    &:after {
      border-left: 1px solid $green;
      border-right: 1px solid $green;
    }
  }
  &.theme-yellow {
    @include shadow(0px, 0px, 0px, 0px, rgb($blue, 0));
    &:before {
      border-top: 1px solid $yellow;
      border-bottom: 1px solid $yellow;
    }
    &:after {
      border-left: 1px solid $yellow;
      border-right: 1px solid $yellow;
    }
  }
  .input {
    position: relative;
    z-index: 9;
  }
}
</style>
