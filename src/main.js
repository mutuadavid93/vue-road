import { createApp } from "vue";
import App from "./App.vue";
import FriendContact from "./components/FriendContact.vue";
import NewFriend from "./components/NewFriend.vue";

// Root component
const app = createApp(App);

// Initialize all child components here
app.component("friend-contact", FriendContact);
app.component("new-friend", NewFriend);

app.mount("#app");
