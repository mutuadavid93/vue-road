<template>
  <ul>
    <knowledge-element
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
    ></knowledge-element>
  </ul>
</template>

<script>
export default {
  // Inject works like props but instead listens to what `provide` avails.
  // NB: You can only use provide in a parent or ancestral component not inside
  // a child
  inject:['topics'],
};
</script>
