const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },

  methods: {
    boxSelected(box) {
      if (box === "A") {
        // Toggle the behavior by negating it based on the current truthy value
        this.boxASelected = !this.boxASelected;
      } else if (box === "B") {
        this.boxBSelected = !this.boxBSelected;
      } else {
        this.boxCSelected = !this.boxCSelected;
      }
    },
  },
});

app.mount("#styling");
