<template>
  <button @click="addOne">Increment</button>
</template>

<script>
export default {
  methods: {
    addOne() {
      // commit() :: store method which takes the name of mutation you
      // desire to perform.
      this.$store.commit('increment');
    }
  }
};
</script>
