<template>
  <li>
    <h2 @click="toggleFavorite">
      {{ name }} {{ +favoriteFriend ? "(Favorite)" : "" }}
    </h2>
    <button @click="toggleDetails">
      {{ detailsVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  // Specify all the props this component expects to use.
  // Props should NEVER be mutated on the child component due to uni-directional
  // workflow.
  // e.g. of simple components;
  // props: ["name", "phoneNumber", "emailAddress", "isFavorite"],
  //
  // We can as well validate props we are expecting to receive
  props: {
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    emailAddress: { type: String, required: true },

    // A prop can take more metadata
    isFavorite: {
      type: String,
      required: false,
      default: "0", // This could be a function which returns based on some complex logic
      validator(value) {
        return value === "1" || value === "0";
      },
    },
  },

  data() {
    return {
      detailsVisible: false,
      friend: {
        id: 1,
        name: "Yao Ming",
        phone: "+254 792 056 402",
        email: "yao@gmail.com",
      },

      // Instead create new property inside the component which needs to mutate
      // the data after pointing a prop from Parent component to it
      favoriteFriend: this.isFavorite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsVisible = !this.detailsVisible;
    },
    toggleFavorite() {
      if (+this.isFavorite === "1") {
        this.favoriteFriend = 1;
      } else {
        this.favoriteFriend = 0;
      }
    },
  },
};
</script>
