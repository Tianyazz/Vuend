<template>
  <textarea :class="['end-textarea', themeClass]" v-model="v"
    :rows="rows" 
    ref="textarea"
    :placeholder="placeholder"
    @compositionstart="compositionstart($event)"
    @compositionend="compositionend($event)"
    @input="input($event)"
  ></textarea>
</template>

<script>
export default {
  name: 'EndTextarea',
  data () {
    return {
      lock: false,
      themeClass: this.theme ? `theme-${this.theme}` : ''
    }
  },
  props: {
    value: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: '请输入......'
    },
    rows: {
      type: String,
      default: '5'
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
    }
  },
  methods: {
    input (e) {
      if (this.lock) {
        e.preventDefault()
        return
      }
      let value = e.target.value
      this.$refs.textarea.value = value
      this.$emit('input', value)
    },
    compositionstart (e) {
      this.lock = true
    },
    compositionend (e) {
      this.lock = false
      let value = e.target.value
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~global/common';
.end-textarea {
  width: 100%;
  border: 1px solid #ddd;
  @include radius(5px);
  padding: $px10;
  box-shadow: 0 0 $px10 rgb($o: .05) inset;
  @include transition(all, .8s, ease-out);
  &:focus {
    border: 1px solid $blue;
    box-shadow: 0 0 $px10 rgb($blue, .5) inset;
  }
  &.theme-red:focus {
    border: 1px solid $red;
    box-shadow: 0 0 $px10 rgb($red, .5) inset;
  }
  &.theme-green:focus {
    border: 1px solid $green;
    box-shadow: 0 0 $px10 rgb($green, .5) inset;
  }
  &.theme-yellow:focus {
    border: 1px solid $yellow;
    box-shadow: 0 0 $px10 rgb($yellow, .5) inset;
  }
}
</style>
