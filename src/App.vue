<template>
  <base-container title="Vuex">
    <!-- Access state inside any component -->
    <h2>{{ mycounter }}</h2>
    <button @click="incrementCounter">Add 10</button>
    <change-counter></change-counter>
    <final-score></final-score>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FinalScore from './components/FinalScore.vue';

export default {
  components: {
    BaseContainer,
    ChangeCounter,
    FinalScore
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
      // Commit takes in a second argument i.e. payload which will be passed to
      // the named mutation
      // this.$store.commit('increase', { value: 10 });
      //
      // Hint :: dispatch() has same signature as commit()
      this.$store.dispatch('increase', { value: 10 });
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
