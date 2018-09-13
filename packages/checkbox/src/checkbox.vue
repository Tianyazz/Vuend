<template>
  <div class="end-checkboxs">
    <label
      v-for="option in options"
      :key="option.id"
      :class="['end-checkbox', themeClass, {'checked': isNumber ? v === option.id : v.indexOf(option.id) > -1}]"
    >
      <i class="end-box icon" v-if="!hook">&#xeaf1;</i>
      <end-col align><span v-text="option.text"></span></end-col>
      <i class="end-hook icon" v-if="hook">&#xe637;</i>
      <input type="checkbox" v-model="v" :value="option.id" @click="onClick($event)">
    </label>
  </div>
</template>

<script>
export default {
  name: 'EndCheckbox',
  data () {
    return {     
      themeClass: this.theme ? `theme-${this.theme}` : '',
      isChecked: typeof this.v
    }
  },
  props: {
    options: {
      type: Array,
      required: true
    },
    value: {
      type: [Array, Number],
      required: true
    },
    hook: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String
    }
  },
  computed: {
    v: {
      get: function () {
        return this.value
      },
      set: function (v) {}
    },
    isNumber: function () {
      return typeof this.value === 'number'
    }
  },
  methods: {
    onClick (e) {
      let checked = e.target.checked
      let value = +e.target.value
      if (this.isNumber) {
        value = checked ? value : 0
        this.$emit('input', value)
      } else {
        let index = this.v.indexOf(value)
        index > -1 ? this.v.splice(index, 1) : this.v.push(value)
        this.$emit('input', this.v)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~global/global';
.end-checkbox {
  @include flexs;
  width: 100%;
  height: $px60;
  padding: $px10;
  border-bottom: 1px solid #ddd;
  @include align-items;
  .end-box {
    width: $px30;
    height: $px30;
    border: px2rem(2px) solid $blue;
    @include radius(8px);
    margin-right: $px10;
    font-size: $px24;
    @include align-items;
  }
  .end-hook {
    font-size: $px18;
  }
  .end-box,
  .end-hook {
    color: #fff;
    @include transition;
  }
  &.checked {
    .end-box {
      background: $blue;
    }
    .end-hook {
      color: $blue;
    }
  }
  &.theme-red {
    .end-box {
      border: px2rem(2px) solid $red;
    }
    &.checked {
      .end-box {
        background: $red;
      }
      .end-hook {
        color: $red;
      }
    }
  }
  &.theme-green {
    .end-box {
      border: px2rem(2px) solid $green;
    }
    &.checked {
      .end-box {
        background: $green;
      }
      .end-hook {
        color: $green;
      }
    }
  }
  &.theme-yellow {
    .end-box {
      border: px2rem(2px) solid $yellow;
    }
    &.checked {
      .end-box {
        background: $yellow;
      }
      .end-hook {
        color: $yellow;
      }
    }
  }
  input {
    display: none;
  }
}
</style>
