<template>
  <div 
    :class="['end-radio', themeClass, {'disabled': disabled}]"
    @click="handleClick(label)" 
    ref="radio"
  >
    <i :class="['icon', {'checked': v === label}]">&#xeaf1;</i>
    <input type="radio" v-model="v" :value="label">
    <span><slot></slot></span>
  </div>
</template>

<script>
export default {
  name: 'EndRadio',
  data () {
    return {
      themeClass: this.theme ? `theme-${this.theme}` : ''
    }
  },
  props: {
    label: {
      type: [Number, String],
      required: true
    },
    value: {
      type: [Number, String],
      default: '',
      required: true
    },
    disabled: {
      type: Boolean
    },
    theme: {
      type: String
    }
  },
  computed: {
    v: {
      get: function () {
        return this.value
      }
    }
  },
  methods: {
    handleClick (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~global/common';
.end-radio {
  @include flexs;
  @include align-items;
  input {
    display: none;
  }
  &.theme-red {
    i.icon {
      border: 1px solid $red;
      color: $red;
      &.checked {
        background: $red;
      }
    }
  }
  &.theme-green {
    i.icon {
      border: 1px solid $green;
      color: $green;
      &.checked {
        background: $green;
      }
    }
  }
  &.theme-yellow {
    i.icon {
      border: 1px solid $yellow;
      color: $yellow;
      &.checked {
        background: $yellow;
      }
    }
  }
  i.icon {
    @include flexs;
    @include justify-content;
    width: $px24;
    height: $px24;
    border: 1px solid $blue;
    @include radius(12px);
    font-size: $px18;
    line-height: $px24;
    font-weight: bold;
    color: $blue;
    @include transition;
    &.checked {
      color: #fff;
      background: $blue;
    }
  }
  span {
    margin-left: $px10;
  }
}
</style>