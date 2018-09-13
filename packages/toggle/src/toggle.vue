<template>
  <div class="end-toggle">
    <span><slot></slot></span>
    <label :class="['toggle', v ? classActive : '']">
      <input type="checkbox" v-model="v" :value="v" ref="checkbox" @click="onToggle($event)">
    </label>
  </div>
</template>

<script>
export default {
  name: 'EndToggle',
  data () {
    return {
      classActive: this.theme ? `active-${this.theme}` : `active-blue`
    }
  },
  props: {
    value: {
      type: Boolean,
      required: true
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
      set: function () {}
    }
  },
  methods: {
    onToggle (e) {
      let value = e.target.checked
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~global/global';
.end-toggle {
  @include flexs;
  @include align-items;
  height: $px60;
  span {
    @include flex;
  }
  input {
    display: none;
  }
  label {
    position: relative;
    width: px2rem(70px);
    height: px2rem(40px);
    border: 1px solid #ddd;
    @include radius(40px);
    @include shadow(0px, 0px, 5px, 0px, rgb($o: .15));
    @include transition;
    &:before {
      content: "";
      display: block;
      width: px2rem(38px);
      height: px2rem(38px);
      @include radius(19px);
      border: 1px solid #ddd;
      @include shadow(1px, 2px, 5px, 0px, rgb($o: .3));
      @include transition(all, .3s, ease-out);
      background: #fff;
    }
    &.active-blue {
      border: 1px solid $blue;
      @include shadow(1px, 2px, 5px, 0px, rgb($blue, .4));
      background: $blue;
      &:before {
        border: 1px solid $blue;
        @include shadow(1px, 2px, 5px, 0px, rgb($blue, .4));
      }
    }
    &.active-red {
      border: 1px solid $red;
      @include shadow(1px, 2px, 5px, 0px, rgb($red, .4));
      background: $red;
      &:before {
        border: 1px solid $red;
        @include shadow(1px, 2px, 5px, 0px, rgb($red, .4));
      }
    }
    &.active-green {
      border: 1px solid $green;
      @include shadow(1px, 2px, 5px, 0px, rgb($green, .4));
      background: $green;
      &:before {
        border: 1px solid $green;
        @include shadow(1px, 2px, 5px, 0px, rgb($green, .4));
      }
    }
    &.active-yellow {
      border: 1px solid $yellow;
      @include shadow(1px, 2px, 5px, 0px, rgb($yellow, .4));
      background: $yellow;
      &:before {
        border: 1px solid $yellow;
        @include shadow(1px, 2px, 5px, 0px, rgb($yellow, .4));
      }
    }
  }
}
[class*=active-]:before {
  @include translate($px30, 0);
}
</style>
