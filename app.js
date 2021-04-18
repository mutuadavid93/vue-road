// Create the gloabal Vue app
const app = Vue.createApp({
  data() {
    // data function always returns an Object
    return {
      // All properties here can only be accessed in the area are Vue controlled
      courseGoal: "Finish Vue first then learn Nuxt!",
      vueLink: "https://vuejs.org/",
    };
  },
});

// NB :: If we control and HTML element with Vue, we'll also control all child
// elements of that element.
app.mount("#user-goal");
