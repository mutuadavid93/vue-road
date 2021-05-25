<template>
  <li>
    <h3>{{ topicName }}</h3>
    <p>{{ description }}</p>
    <button @click="selectTopic(id)">Learn More</button>
  </li>
</template>

<script>
export default {
  // Listening to events passed via `provide` from a parent component
  inject:["selectTopic"],
  props: ['id', 'topicName', 'description'],
};
</script>
