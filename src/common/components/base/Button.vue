<template>
  <button
    type="button"
    v-bind="$attrs"
    :class="[classes, color]"
    :style="{
      width: `${width}px`,
      height: `${height}px`,
    }"
  >
    Button
  </button>

  {{classes}}
</template>

<script>
// Mixins
import Sizeable from "../../mixins/sizeable"

/* @vue/component */
export default {
  name: "AppButton",
  mixins: [Sizeable],
  props: {
    icon: Boolean,
    outlined: Boolean,
    width: String,
    height: String,
    color: {
      type: String,
      default: "bg-primary-1"
    }
  },
  computed: {
    classes() {
      return {
        'rounded-2xl text-text-1 font-medium block': true,
        'app-button': !this.icon,
        'app-button--icon': this.icon,
        ...this.sizeableClasses
      }
    }
  }
}
</script>

<style>
.app-button {
  min-width: 138px;
}
</style>