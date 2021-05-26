<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import UserInfo from "./components/UserInfo.vue";
import BadgeList from "./components/BadgeList.vue";

export default {
  // Specify which components will be only used inside this component i.e. Local
  // components
  components: {
    "the-header": TheHeader,
    "user-info": UserInfo,
    "badge-list": BadgeList
  },

  data() {
    return {
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
};
</script>

<style>
/* The styles in here without "scope" attribute will apply globally */
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
