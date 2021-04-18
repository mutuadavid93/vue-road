const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
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
  },
});

app.mount("#events");
