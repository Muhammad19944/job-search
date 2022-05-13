<template>
  <app-avatar
    class="mr-3"
    :class="[classes]"
    v-bind="$attrs"
  />
</template>

<script>
// Mixins
import Sizeable from "../../../mixins/sizeable"

/* @vue/component */
export default {
  name: "ListItemAvatar",
  mixins: [Sizeable],
  computed: {
    classes() {
      return {
        ...this.sizeableClasses
      }
    }
  }
}
</script>

<style>

</style>
