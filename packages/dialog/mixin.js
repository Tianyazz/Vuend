const extend = (target, source) => {
  for (let key in source) {
    target[key] = source[key]
  }
  return target
}

export default {
  destroyed () {
    let parent = this.$el.parentNode
    parent.removeChild(this.$el)
  },
  methods: {
    show (options) {
      extend(this, options)
      this.state = true
      return new Promise((resolve, reject) => {
        this.$on('AlertOkEvent', () => {
          this.hide()
          resolve()
        })
      })
    },
    hide () {
      this.state = false
      setTimeout(() => {
        this.$destroy()
      }, 300)
    },
    onOk () {
      this.$emit('AlertOkEvent')
    }
  }
}