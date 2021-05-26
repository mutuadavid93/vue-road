import { createApp } from "vue";

import App from "./App.vue";
import BaseBadge from "./components/BaseBadge.vue";
import BadgeCard from "./components/BadgeCard.vue";

const app = createApp(App);

// Global components
// You can use them anywhere in the components
// Used where a component is used in multiple places e.g. Masterpage components
app.component("base-badge", BaseBadge);

// Slot components are also global components
app.component("badge-card", BadgeCard);

app.mount("#app");
