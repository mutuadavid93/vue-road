<template>
  <button @click="login" v-if="!isAuthenticated">Login</button>
  <button @click="logout" v-if="isAuthenticated">Log out</button>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  methods: {
    ...mapActions(['login', 'logout'])
  },
  computed: {
    ...mapGetters(['isAuthenticated'])
  }
};
</script>
