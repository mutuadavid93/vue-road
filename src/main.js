import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

// NB :: We can only have one store per app
// Registered here at main.js
const store = createStore({
  // state here is similar to data() in an individual component
  state() {
    return {
      counter: 0
    };
  },

  // Mutations :: Methods to change/update the state inside a store.
  // Components reach out to mutations which do the magic updating state store
  mutations: {
    // @state is the current state
    increment(state) {
      // Update current state
      state.counter++;
    },

    // @payload is the incoming dynamic data to update state
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    }
  },

  // Getters :: similar to computed properties but read data from store into
  // individual components
  getters: {
    finalCounter(state) {
      return state.counter * 2;
    },

    // @getters, second argument in an individual getter computed property which
    // contains other getters. Useful incase current getter depends on another
    // getter.
    normalizedCounter(_, getters) {
      const finalcounter = getters.finalCounter;
      if (finalcounter < 0) return 0;
      if (finalcounter >= 50) return 100 + '%';
      return finalcounter;
    }
  }
});

const app = createApp(App);

// Connect the store to the app
app.use(store);

app.mount('#app');
