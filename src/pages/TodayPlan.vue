<template>
  <h1 class="p-3">Today Plan</h1>
</template>

<script>
export default {
  name: "Today Plan",
  props: {},
  components: {},
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
</style>
