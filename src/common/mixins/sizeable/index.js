
export default {
  name: "sizeable",
  props: {
    large: Boolean,
    small: Boolean,
    xLarge: Boolean,
    xSmall: Boolean,
  },
  computed: {
    medium() {
      return (
        !this.xSmall &&
        !this.small &&
        !this.large &&
        !this.xLarge
      )
    },
    sizeableClasses() {
      return {
        'size--x-small': this.xSmall,
        'size--small': this.small,
        'size--default': this.medium,
        'size--large': this.large,
        'size--x-large': this.xLarge,
      }
    },
  },
}