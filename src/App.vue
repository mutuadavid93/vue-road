<template>
  <div>
    <the-header></the-header>
    <!-- 
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info> -->
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <!-- <active-goals v-if="selectedComponent==='active-goals'"></active-goals>
    <manage-goals v-if="selectedComponent==='manage-goals'"></manage-goals> -->

    <!-- Instead use Dynamic components 
      NB:: Pass your component name dynamically based on the passed name

      Tip:: Dynamic components are destroyed once not in use/lose focus. To
      keep them around, you can wrap them with <keep-alive></keep-alive>
    -->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
// import UserInfo from "./components/UserInfo.vue";
// import BadgeList from "./components/BadgeList.vue";

import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";

export default {
  // Specify which components will be only used inside this component i.e. Local
  // components
  components: {
    "the-header": TheHeader,
    // "user-info": UserInfo,
    // "badge-list": BadgeList,
    ActiveGoals,
    ManageGoals,
  },

  data() {
    return {
      selectedComponent: "active-goals",
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
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
