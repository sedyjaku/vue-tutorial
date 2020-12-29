<template>
  <button @click='logout' v-if='isLogged'> Logoout</button>
  <button @click='login' v-else> Login</button>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'UserAuth',
  methods: {
    ...mapActions(['login', 'logout'])
  },
  computed: {
    ...mapGetters(['isLogged'])
  }
};
</script>

<style scoped>

</style>