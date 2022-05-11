<script setup>
import AppButton from "./common/components/base/Button.vue"
import { BeakerIcon } from '@heroicons/vue/outline'
</script>

<template>
  <app-button>
    <template #prepend>
      <BeakerIcon class="h-5 w-5" />
    </template>
    Search

    <template #append>
      <BeakerIcon class="h-5 w-5" />
    </template>
  </app-button>
  <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, quas. Numquam provident expedita minus cupiditate quidem eum aut nam dignissimos distinctio labore, deserunt nesciunt ratione voluptatem sunt, ab corporis itaque?</div>
</template>

<style>
</style>
