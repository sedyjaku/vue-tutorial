<template>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  beforeRouteEnter(to, from, next){
    console.log(to, from, next)
    console.log('Before Route Enter UserList')
    next()
  },
  beforeRouteLeave(to, from, next){
    console.log(to, from, next)
    console.log('Users List Cmp before route leave')
    next();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>