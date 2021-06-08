<template>
  <h2>{{ finalcounter }}</h2>
</template>

<script>
export default {
  computed: {
    finalcounter() {
      // normalizedCounter is a Getter inside the store
      // current state will be passed directly into it
      return this.$store.getters.normalizedCounter;
    }
  }
};
</script>
