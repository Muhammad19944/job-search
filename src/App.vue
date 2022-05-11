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
    avatarUrl: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    avatarName: ""
  },
  {
    avatarUrl: "",
    avatarName: "A"
  },
  {
    avatarUrl: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    avatarName: "11"
  },
  {
    avatarUrl: "",
    avatarName: "22"
  },
  {
    avatarUrl: "",
    avatarName: "M"
  },
  {
    avatarUrl: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    avatarName: ""
  },
  {
    avatarUrl: "",
    avatarName: "A"
  },
  {
    avatarUrl: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    avatarName: "11"
  },
  {
    avatarUrl: "",
    avatarName: "22"
  },
])
</script>

<template>
  <app-avatar
    avatar-name="ABC"
  >
  </app-avatar>

  <app-avatar-group :items="userList" color="bg-primary-2" avatar-name="Muhammad" visible-count="3" />
  <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, quas. Numquam provident expedita minus cupiditate quidem eum aut nam dignissimos distinctio labore, deserunt nesciunt ratione voluptatem sunt, ab corporis itaque?</div>
</template>

<style>
</style>
