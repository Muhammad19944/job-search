<template>
  <div class="app-list-item__content overflow-hidden flex-1">
    <div class="flex flex-1 overflow-hidden">
      <slot name="content-title" />

      <div v-if="$slots['content-icon']">
        <slot name="content-icon" />
      </div>
    </div>

    <slot name="content-subtitle" />
  </div>
</template>

<script>
export default {
  name: "ListItemContent",
  mounted() {
    console.log(this.$slots);
  }
}
</script>

<style>
</style>
