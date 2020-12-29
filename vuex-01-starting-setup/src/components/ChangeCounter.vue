<template>
  <button @click='inc(10)'>Change counter cmp</button>
  <button @click='increase'>Increase</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ChangeCounter',
  methods: {
    // ...mapActions(['increment'])
    ...mapActions('counter', {
      inc: 'increment',
      increase: 'increase'
    })
  // addValueToCounter(valToAdd){
  //   this.$store.dispatch('increment', valToAdd);
  //
  //   // alternative but does not work since it passes object instead of integer
  //   // this.$store.commit({
  //   //   type: 'increment',
  //   //   valToAdd: valToAdd
  //   // })
  // }
}
}
;
</script>

<style scoped>

</style>