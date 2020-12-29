<template>
  <h3>{{counter}}</h3>
</template>

<script>
export default {
  name: 'FavoriteValue',
  computed: {
    counter() {
      return this.$store.getters['counter/normalizedCounter'];
    }
  },
};
</script>

<style scoped>

</style>