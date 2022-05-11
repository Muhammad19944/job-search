import { createApp } from 'vue'
import App from './App.vue'
import "./assets/css/index.css"

const app = createApp(App)

// Register global components
import Avatar from "./common/components/base/Avatar.vue"
import AvatarGroup from "./common/components/base/AvatarGroup.vue"
import Button from "./common/components/base/Button.vue"
//
app.component("AppAvatar", Avatar)
app.component("AppAvatarGroup", AvatarGroup)
app.component("AppButton", Button)

app.mount('#app')
