const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmName: "",
      hypedname: "",
    };
  },

  // Computed Properties ::
  // - Similar to methods but Vue is aware of their dependencies and only
  // re-executed if any of those dependencies i.e. data props change.
  //
  // - Only use computed properties if you want to display/return something.
  // - Used when data is dependend on another data e.g. "D.O.B" and "AGE"
  computed: {
    // NB: these methods are used the same way as the properties inside 'data'
    fullname() {
      if (this.name === "") return "";
      return this.name + " " + "Ericksen";
    },
    hypedName() {
      return this.hypedname.toUpperCase();
    },
  },

  // Watchers
  // - You don't return inside a watcher instead you update matching property.
  //
  // - Use a watcher if you need to update something when a certain condition is
  // met e.g. "when counter exceeds 35", "timers", "send HTTP requests"
  // otherwise use computed properties.
  watch: {
    // You repeat another data or computed property name as a method which will
    // be auto-executed by Vue whenever a property matching that name changes
    // e.g. counter.
    name(newName, oldName) {
      this.name = newName.toUpperCase();
    },
    counter(latestCounter) {
      if (latestCounter > 30) this.counter = 0;
    },
  },

  // NB:: You can only bind events on methods not computed properties
  // Use methods with Event or Data binding otherwise use computed properties.
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
