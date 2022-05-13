<template>
  <div
    class="app-list"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "List"
}
</script>

<style>

</style>
