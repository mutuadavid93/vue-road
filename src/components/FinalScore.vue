<template>
  <h2>{{ normalizedCounter }}</h2>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // Grab a named getter from store
    // Instead of drilling down into your store
    // 
    // Access a getter off a namespaced module e.g. numbers
    ...mapGetters('numbers',['normalizedCounter'])
  }
};
</script>
