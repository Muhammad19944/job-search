<script setup>
import { ref } from "vue"
import { BeakerIcon } from '@heroicons/vue/outline'

const userList = ref([
  {
    avatarUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
    avatarName: ""
  },
  {
    avatarUrl: "",
    avatarName: "M"
  },
  {
    avatarUrl: "",
    avatarName: "M"
  }
])
</script>

<template>
  <app-avatar
    avatar-name="ABC"
  >
  </app-avatar>

  <app-avatar-group :items="userList" color="bg-primary-2" avatar-name="Muhammad" visible-count="2" />
  <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, quas. Numquam provident expedita minus cupiditate quidem eum aut nam dignissimos distinctio labore, deserunt nesciunt ratione voluptatem sunt, ab corporis itaque?</div>
</template>

<style>
</style>
