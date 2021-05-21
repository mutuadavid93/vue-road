// Vue Lifecycle Methods ::

// A. MOUNTED INSTANCE PHASE ::
// ============================

// 1. beforeCreate()
// - Before the app has been fully initialized
// - The App is not Visible yet

// 2. created()
// - Vue is aware of all App data properties and other configurations
// - The App is not Visible yet
// - The template is compiled here too

// 3. beforeMount()
// - Just after the template is compiled before Vue brings anything on the UI

// 4. mounted()
// - Everything is done and the app appears on the screen

// B. DATA CHANGED PHASE
// =====================

// 5. beforeUpdate()
// - Triggered just after data has been changed on the template

// 6. updated()
// - Now the changed data has been processed

// C. VUE APP INSTANCE UNMOUNTED PHASE ::
// ======================================

// 7. beforeUnmount()
// - Just before the app is killed and disappear from the UI

// 8. unmounted()
// - After now the app is DEAD and nolonger visible on the screen
// - Cleanup code can run here

const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;

      // Retrieve values from an element e.g. input text when done instead of
      // listening to every keystroke.
      // Used best with forms
      this.message = this.$refs.userIput.value;
    },
  },

  // Lifecycle Hooks
  beforeCreate() {
    console.log("Before create fired---");
  },
  created() {
    console.log("Created fired---");
  },
  beforeMount() {
    console.log("Before mount fired---");
  },
  mounted() {
    console.log("Mounted fired---", "App is now visible on the UI");
  },
  beforeUpdate() {
    console.log("Before update fired---", "Updated changes not visible on UI");
  },
  updated() {
    console.log("Updated fired---", "Updated changes VISIBLE on UI");
  },
  beforeUnmount() {
    console.log(
      "Before Unmount fired---",
      "Before Vue controlled section vanishes on the UI"
    );
  },
  unmounted() {
    console.log(
      "Unmounted fired---",
      "After Vue controlled section vanishes on the UI"
    );
  },
});

app.mount("#app");

// Simulate unmounting the App
setTimeout(() => {
  app.unmount();
}, 3000);
