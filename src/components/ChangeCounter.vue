<template>
  <button @click="increment">Increment</button>
  <practice></practice>
</template>

<script>
import { mapActions } from 'vuex';
import Practice from './Practice.vue';

export default {
  components: { Practice },
  methods: {
    // addOne() {
    //   this.$store.dispatch('increment');
    // }

    // Use mapActions to grab an action from store
    // Plot Twist :: Vue creates named methods automatically and merges them
    // into existing ones inside the `methods` property.
    ...mapActions(['increment'])
  }
};
</script>
