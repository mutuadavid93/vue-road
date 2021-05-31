<template>
  <div class="default-slot">
    <header class="header-slot">
      <slot name="header">
        <!-- Default content live here e.g. Blank Avatar, Text e.t.c. -->
        <!-- <h2>Default Content</h2> -->
      </slot>
    </header>
    <!-- This component can be used anywhere as a Higher Order Component 
    similar to React's props.children. It uses <slot></slot>

    NB: You must always have one unnamed slot which becomes the "default" slot
    -->
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>
