<template>
  <button @click="addtwenty({ value: 41 })">Add 41</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    // Using custom method names with  mapHelpers
    ...mapActions({ addtwenty: 'increase' })
  }
};
</script>
