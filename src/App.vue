<script>
import { defineComponent, ref } from "vue";
import { darkTheme } from "naive-ui";

export default defineComponent({
  setup() {
    return {
      darkTheme,
      theme: ref(null)
    };
  }
});
</script>

<template>
  <n-config-provider :theme="theme">
    <!-- <n-card>
      <n-space>
        <n-button @click="theme = darkTheme">
          Dark
        </n-button>
        <n-button @click="theme = null">
          Light
        </n-button>
      </n-space>
    </n-card> -->
    <router-view />

    <n-global-style />
  </n-config-provider>
</template>

<style>
</style>
