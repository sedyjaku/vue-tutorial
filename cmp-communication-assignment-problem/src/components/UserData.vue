<template>
  <form @submit.prevent="createUser">
    <label>
      Name
      <input type="text" v-model="name">
    </label>
    <label>
      Age
      <input type="text" v-model="age">
    </label>
    <button>Create</button>
  </form>
</template>

<script>
export default {
  name: "UserData",
  data() {
      return {
        name: '',
        age: ''
      }
  },
  emits: {
    'create-user': function(){return true}
},
  methods: {
    createUser(){
      this.$emit('create-user', this.name, this.age)
    }
  }
}
</script>

<style scoped>

</style>