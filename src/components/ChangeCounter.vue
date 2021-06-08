<template>
  <button @click="addOne">Increment</button>
</template>

<script>
export default {
  methods: {
    addOne() {
      this.$store.dispatch('increment');
    }
  }
};
</script>
