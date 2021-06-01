<template>
  <h2>Manage Goals</h2>
  <input type="text" ref="goal" />
  <button @click="setGoal">Set Goal</button>

  <!-- Teleport will move an element to become a child of another element on 
  the DOM i.e. parentNode -->
  <teleport to="body">
    <error-alert v-if="err">
      <h2>An error occured!!</h2>

      <!-- You can use events inside slot content too -->
      <button @click="confirmError">Ok</button>
    </error-alert>
  </teleport>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";

export default {
  components: { ErrorAlert },
  data() {
    return { err: false };
  },
  methods: {
    setGoal() {
      const inputValue = this.$refs.goal.value;
      if (!inputValue) {
        this.err = true;
      }
    },
    confirmError() {
      this.err = false;
    },
  },
};
</script>
