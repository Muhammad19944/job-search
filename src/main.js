import { createApp } from 'vue'
import App from './App.vue'
import "./assets/css/index.css"

const app = createApp(App)

// Register global components
import List from "./common/components/base/List/List.vue"
import ListItem from "./common/components/base/List/ListItem.vue"
import ListItemAction from "./common/components/base/List/ListItemAction.vue"
import ListItemAvatar from "./common/components/base/List/ListItemAvatar.vue"
import ListItemContent from "./common/components/base/List/ListItemContent.vue"
import ListItemIcon from "./common/components/base/List/ListItemIcon.vue"
import ListItemSubTitle from "./common/components/base/List/ListItemSubTitle.vue"
import ListItemTitle from "./common/components/base/List/ListItemTitle.vue"
import Avatar from "./common/components/base/Avatar.vue"
import AvatarGroup from "./common/components/base/AvatarGroup.vue"
import Button from "./common/components/base/Button.vue"

app.component("AppList", List)
app.component("AppListItem", ListItem)
app.component("AppListItemAction", ListItemAction)
app.component("AppListItemAvatar", ListItemAvatar)
app.component("AppListItemContent", ListItemContent)
app.component("AppListItemIcon", ListItemIcon)
app.component("AppListItemSubTitle", ListItemSubTitle)
app.component("AppListItemTitle", ListItemTitle)
app.component("AppAvatar", Avatar)
app.component("AppAvatarGroup", AvatarGroup)
app.component("AppButton", Button)

app.mount('#app')
