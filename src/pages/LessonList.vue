<template>
  <h1 class="p-3">Lesson List</h1>
</template>

<script>
export default {
  name: "Lesson List",
};
</script>

<style scoped lang="scss">
$color: #3b4755;
$color-light: #9c269c;
$pseudo-white: #f3eff2;

h1 {
  color: $color;
  background-image: linear-gradient(300deg, $color 0%, $pseudo-white 94%);
}

a {
  color: $color;
  text-decoration: none;
  border-bottom: 1px solid $color;
  background-color: $pseudo-white;
}
a:hover {
  color: $color-light;
}
</style>
