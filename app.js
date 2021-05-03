const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmName: "",
    };
  },

  // Computed Properties ::
  // - Similar to methods but Vue is aware of their dependencies and only
  // re-executed if any of those dependencies change.
  // 
  // - Only use computed properties if you want to display something.
  computed: {
    // NB: these methods are used the same way as the properties inside 'data'
    fullname() {
      console.log("Running again!!");
      if (this.name === "") return "";
      return this.name + " " + "Ericksen";
    },
  },


  // NB:: You can only bind events on methods not computed properties
  methods: {
    increment(number) {
      this.counter = this.counter + number;
    },
    decrement: function (number) {
      this.counter = this.counter - number;
    },
    setName(event, lastname) {
      this.name = event.target.value + " " + lastname;
    },
    submitForm(event) {
      alert("Submitted!!");
    },
    confirmInput() {
      this.confirmName = this.name;
    },

    outPutFullName() {
      // console.log("Running again!!");
      // if (this.name === "") return "";
      // return this.name + " " + "Ericksen";
    },
  },
});

app.mount("#events");
