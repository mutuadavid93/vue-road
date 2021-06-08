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
    }
  }
});

const app = createApp(App);

// Connect the store to the app
app.use(store);

app.mount('#app');
