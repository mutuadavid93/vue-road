<template>
  <base-container title="Vuex" v-if="isAuthenticated">
    <!-- 
      Access state inside any component 
      Mycounter property below can be e.g. a cart div which can be updated 
      from many other components which do not need to have the counter div 
      themselves
    -->
    <h2>{{ mycounter }}</h2>

    <!-- Dispatch an Action via mapActions Helper passing in a payload -->
    <button @click="increase({ value: 20 })">Add 20</button>
    <change-counter></change-counter>
    <final-score></final-score>
  </base-container>

  <base-container title="User Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import BaseContainer from './components/BaseContainer.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FinalScore from './components/FinalScore.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    ChangeCounter,
    FinalScore,
    UserAuth
  },
  computed: {
    ...mapGetters(['isAuthenticated']),
    mycounter() {
      // Read state store's module's getter
      return this.$store.getters['numbers/finalCounter'];
    }
  },
  methods: {
    // incrementCounter() {
    //   // Component reaching out to a Mutation which will update the `counter`
    //   // state in store
    //   // Commit takes in a second argument i.e. payload which will be passed to
    //   // the named mutation
    //   // this.$store.commit('increase', { value: 10 });
    //   //
    //   // Hint :: dispatch() has same signature as commit()
    //   this.$store.dispatch('increase', { value: 10 });
    // }

    ...mapActions('numbers', ['increase'])
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
</style>
