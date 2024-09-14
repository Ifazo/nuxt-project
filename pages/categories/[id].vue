<template>
  <div>
    <p>Category id: {{ id }}</p>
  </div>
</template>

<script setup>
// const nuxtApp = useNuxtApp()
// console.log(nuxtApp);
const route = useRoute();
// console.log(route);
const { id } = route.params;

</script>

<style lang="scss" scoped></style>
