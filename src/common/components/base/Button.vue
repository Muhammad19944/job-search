<template>
  <button
    type="button"
    :class="[classes, color]"
    :style="{ width: `${width}px`, height: `${height}px` }"
    v-bind="$attrs"
  >
    <span v-if="$slots.prepend" class="mr-2">
      <slot name="prepend" />
    </span>
    <span>
      <slot />
    </span>
    <span v-if="$slots.append" class="ml-2">
      <slot name="append" />
    </span>
  </button>
</template>

<script>
// Mixins
import Sizeable from "../../mixins/sizeable"

/* @vue/component */
export default {
  name: "AppButton",
  mixins: [Sizeable],
  props: {
    button: {
      type: Boolean,
      default: true
    },
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
        'button rounded-2xl text-text-1 font-medium flex items-center text-sm': this.button,
        'button--icon': this.icon,
        ...this.sizeableClasses
      }
    }
  }
}
</script>

<style>
.button.size--default {
  height: 43px;
  min-width: 64px;
  padding: 0 22px;
}

.button.size--large {
  height: 51px;
  padding: 0 25px
}

.button.size--small {
  height: 29px;
  padding: 0 22px
}

.button.button--icon {
  min-height: 0;
  min-width: 0;
  padding: 0;
  border-radius: 100%;
}

.button.size--default.button--icon {
  height: 56px;
  width: 56px;
}
</style>
