<template>
  <badge-card>
    <!-- Using a named slot. Must use template tag -->
    <template v-slot:header>
      <h3>{{ fullName }}</h3>
      <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
    </template>

    <!-- Any extra elements automatically get added to default slot thus
    why a single unnamed slot is always required -->
    <template v-slot:default>
      <p>{{ infoText }}</p>
    </template>
  </badge-card>
</template>

<script>
export default {
  props: ["fullName", "infoText", "role"],
};
</script>
