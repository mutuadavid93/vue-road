import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

// NB :: all modules apart from root module are Local Modules
// But incase you want to reach to root module state and getters you can pass
// `rootState` and `rootGetters` after `getters` argument
const counterModule = {
  // Namespaces avoid module properties' name's clash in big applications.
  namespaced:true,
  state() {
    return {
      counter: 0
    };
  },
  mutations: {
    increment(state) {
      // Update current state
      state.counter++;
    },

    // @payload is the incoming dynamic data to update state
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    }
  },
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
  },
  actions: {
    increment(context) {
      // Simulated async request
      setTimeout(function() {
        context.commit('increment'); // Invoke `increment` mutation
      }, 2000);
    },

    // Receaving forwarded payload from a component
    increase(context, forwardedPayload) {
      context.commit('increase', forwardedPayload);
    }
  }
};

// NB :: We can only have one store per app
// Registered here at main.js
const store = createStore({
  // All modules will be merged into the root module
  modules: {
    // NB :: `numbers` is the namespace of your module.
    // Use this name to reach out to your namespaced module properties
    numbers: counterModule
  },
  // state here is similar to data() in an individual component
  state() {
    return {
      isLoggedIn: false
    };
  },

  // Mutations :: Methods to change/update the state inside a store.
  // Components reach out to mutations which do the magic updating state store
  // NB :: Mutations are SYNCHRONOUS no async code!
  mutations: {
    // @state is the current state
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    }
  },

  // Getters :: similar to computed properties but read data from store into
  // individual components
  getters: {
    isAuthenticated(state) {
      return state.isLoggedIn;
    }
  },

  // Actions :: methods that relay update-messages from components to Mutations
  // to update state
  actions: {
    // Any ASYNC code should live inside below methods
    // Tip :: use same name as the target mutation. But isn't a must they match
    // @context contains juicy powers
    login(context) {
      context.commit('setAuth', { isAuth: true });
    },
    logout(context) {
      context.commit('setAuth', { isAuth: false });
    }
  }
});

const app = createApp(App);

// Connect the store to the app
app.use(store);

app.mount('#app');
