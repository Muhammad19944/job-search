<template>
  <div
    class="app-list-item flex"
    :class="[classes]"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    list: {
      type: Boolean,
      default: true
    },
    stripe: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        'border border-border-color p-5 rounded-2xl': !this.stripe
      }
    }
  }
}
</script>

<style>

</style>
