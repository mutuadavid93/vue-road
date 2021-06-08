<template>
  <base-container title="Vuex">
    <!-- Access state inside any component -->
    <h2>{{ mycounter }}</h2>
    <button @click="incrementCounter">Add 1</button>
    <change-counter></change-counter>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import ChangeCounter from './components/ChangeCounter.vue';

export default {
  components: {
    BaseContainer,ChangeCounter
  },
  computed: {
    mycounter() {
      // Read state directly from store
      return this.$store.state.counter;
    }
  },
  methods: {
    incrementCounter() {
      // Component reaching out to a Mutation which will update the `counter`
      // state in store
      this.$store.commit('increment');
    }
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
