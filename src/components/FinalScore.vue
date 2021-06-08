<template>
  <h2>{{ normalizedCounter }}</h2>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // Grab a named getter from store
    // Instead of drilling down into your store
    ...mapGetters(['normalizedCounter'])
  }
};
</script>
