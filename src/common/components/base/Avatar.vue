<template>
  <div
    :class="[classes, stroke ? 'app-avatar--stroke': '']"
    :style="{ width: `${width}px`, height: `${height}px` }"
    v-bind="$attrs"
  >
    <div
      class="app-avatar-item relative rounded-full z-10 w-full h-full flex items-center justify-center overflow-hidden text-text-1"
      :class="[color]"
    >
      <img
        v-if="avatarUrl"
        :src="avatarUrl"
        alt="Avatar image"
        class="w-full h-full object-cover transition-transform hover:scale-110"
      >

      <span v-else>{{ avatarName[0] }}</span>

      <span v-if="$slots.action">
        <slot name="action" />
      </span>
    </div>
  </div>
</template>

<script>
// Mixins
import Sizeable from "../../mixins/sizeable"

/* @vue/component */
export default {
  name: "Avatar",
  mixins: [Sizeable],
  props: {
    avatar: {
      type: Boolean,
      default: true
    },
    stroke: Boolean,
    width: String,
    height: String,
    color: {
      type: String,
      default: "bg-primary-1"
    },
    avatarUrl: String,
    avatarName: {
      type: String,
      default: ""
    }
  },
  computed: {
    classes() {
      return {
        'app-avatar relative font-medium rounded-full overflow-hidden flex items-center justify-center z-10 hover:z-20': this.avatar,
        ...this.sizeableClasses
      }
    }
  }
}
</script>

<style>
.app-avatar.size--default {
  width: 42px;
  height: 42px;
  font-size: 14px;
}

.app-avatar.size--small {
  width: 38px;
  height: 38px;
  font-size: 14px;
}

.app-avatar.size--x-small {
  width: 32px;
  height: 32px;
  font-size: 12px;
}

.app-avatar.size--large {
  width: 47px;
  height: 47px;
}

.app-avatar.size--x-large {
  width: 73px;
  height: 73px;
  font-size: 22px;
}

.app-avatar.app-avatar--stroke::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--bg-4);
}

.app-avatar--stroke .app-avatar-item {
  width: calc(100% - 4px);
  height: calc(100% - 4px);
}
</style>
