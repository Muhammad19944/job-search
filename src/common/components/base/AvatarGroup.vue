<template>
  <div class="app-avatar-group flex">
    <template v-for="item in cuttingSide">
      <app-avatar
        class="-mr-2"
        :class="[classes]"
        v-bind="$attrs"
        stroke
        avatar-url="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />
    </template>

    <app-avatar
      :class="[classes]"
      color="bg-bg-3"
      #action
    >
      +{{ restSide.length }}
    </app-avatar>
  </div>
</template>

<script>
// Mixins
import Sizeable from "../../mixins/sizeable"

/* @vue/component */
export default {
  name: "AvatarGroup",
  mixins: [Sizeable],
  props: {
    items: {
      type: Array,
      default: () => []
    },
    visibleCount: {
      type: [String, Number],
      default: 4
    }
  },
  computed: {
    classes() {
      return {
        ...this.sizeableClasses
      }
    },
    /*
    *
    * */
    cuttingSide() {
      return this.items.slice(0, this.visibleCount)
    },
    /*
    *
    * */
    restSide() {
      return this.items.slice(-(this.items.length - this.cuttingSide.length))
    }
  }
}
</script>

<style>

</style>
