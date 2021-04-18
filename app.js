// Create the gloabal Vue app
const app = Vue.createApp({
  data() {
    // data function always returns an Object
    return {
      // All properties here can only be accessed in the area are Vue controlled
      courseGoal: "Finish the course and learn vue!",
      courseGoal1: "Finish Vue first then learn Nuxt!",
      courseGoal2: "Master Vue and build amazing enterprise apps",
      vueLink: "https://vuejs.org/",
    };
  },

  // All methods live here
  methods: {
    outputGoal() {
      const score = Math.random();

      // `this` keyword represents the entire Vue 'app' instance's returned data
      const decision = score < 0.5 ? this.courseGoal1 : this.courseGoal2;
      return decision;
    },
  },
});

// NB :: If we control and HTML element with Vue, we'll also control all child
// elements of that element.
app.mount("#user-goal");
