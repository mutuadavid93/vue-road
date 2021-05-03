const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmName: "",
    };
  },

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
      console.log("Running again!!");
      if (this.name === "") return "";
      return this.name + " " + "Ericksen";
    },
  },
});

app.mount("#events");
