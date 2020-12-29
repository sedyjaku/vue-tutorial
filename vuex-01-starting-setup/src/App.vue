<template>
  <BaseContainer v-if='isLogged'>
    <TheCounter></TheCounter>
    <FavoriteValue></FavoriteValue>
  <button @click='addValueToCounter(1)'>Add 1</button>
    <ChangeCounter></ChangeCounter>
  </BaseContainer>
  <BaseContainer title='Auth'>
    <UserAuth></UserAuth>
  </BaseContainer>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from '@/components/TheCounter';
import ChangeCounter from '@/components/ChangeCounter';
import FavoriteValue from '@/components/FavoriteValue';
import UserAuth from '@/components/UserAuth';
import { mapGetters } from 'vuex';


export default {
  components: {
    UserAuth,
    FavoriteValue,
    ChangeCounter,
    BaseContainer,
    TheCounter
  },
  computed: {
    ...mapGetters(['isLogged'])
  },
  methods: {
    addValueToCounter(valToAdd){
      this.$store.dispatch('counter/increment', valToAdd)
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>