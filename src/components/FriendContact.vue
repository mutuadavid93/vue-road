<template>
  <li>
    <h2 @click="toggleFavorite">
      {{ name }} {{ isFavorite ? "(Favorite)" : "" }}
    </h2>
    <button @click="toggleDetails">
      {{ detailsVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
    <button @click="$emit('deletecontact', id)" :title="'Remove ' + name">
      x
    </button>
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
    id: { type: String, required: true },
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    emailAddress: { type: String, required: true },

    // A prop can take more metadata
    isFavorite: {
      type: Boolean,
      required: false,
      default: false, // This could be a function which returns based on some complex logic
    },
  },

  // Validating events that the this child component will emit at some point.
  emits: ["toggle-favorite", "deletecontact"],
  data() {
    return {
      detailsVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsVisible = !this.detailsVisible;
    },
    toggleFavorite() {
      // You can use $emit() to emit events from Child to Parent component.
      // It emits your custom events which can be listened on the parent
      this.$emit("toggle-favorite", this.id);
    },
  },
};
</script>
