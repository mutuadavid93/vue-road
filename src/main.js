import { createApp } from "vue";

import App from "./App.vue";
import BaseBadge from "./components/BaseBadge.vue";

const app = createApp(App);

// Global components
// You can use them anywhere in the components
// Used where a component is used in multiple places e.g. Masterpage components
app.component("base-badge", BaseBadge);

app.mount("#app");
