import { createApp } from "vue";
import App from "./App.vue";
import FriendContact from "./components/FriendContact.vue";

// Root component
const app = createApp(App);

// Child components
app.component("friend-contact", FriendContact);

app.mount("#app");
