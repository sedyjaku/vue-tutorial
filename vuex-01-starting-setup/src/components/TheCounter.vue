<template>
  <h3>{{finalCounter}}</h3>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Counter',
  computed: {
    ...mapGetters('counter', ['finalCounter'])
  },
};
</script>

<style scoped>

</style>