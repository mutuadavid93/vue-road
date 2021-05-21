const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: 1,
          name: "Street Money",
          phone: "0792056401",
          email: "istreetec@gmail.com",
        },
        {
          id: 2,
          name: "Johnson Kimanthi",
          phone: "0701056401",
          email: "johna@gmail.com",
        },
      ],
    };
  },
});

// NB: Component's Identifier e.g. `friend-contact` below should constitute an
// hyphen to avoid name clashes.
// Components are Vue Apps which belong to a Root component.
app.component("friend-contact", {
  template: `
    <li>
      <h2>{{friend.name}}</h2>
      <button @click="toggleDetails" >
        {{detailsVisible ? "Hide Details" : "Show Details"}}
      </button>
      <ul v-if="detailsVisible">
        <li><strong>Phone:</strong> {{friend.phone}}</li>
        <li><strong>Email:</strong> {{friend.email}}</li>
      </ul>
    </li>
  `,
  data() {
    return {
      detailsVisible: false,
      friend: {
        id: 2,
        name: "Mathew Kimwere",
        phone: "0701056401",
        email: "mathew@gmail.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      // To toggle something, Negate it
      this.detailsVisible = !this.detailsVisible;
    },
  },
});

app.mount("#app");
