<template>
  <form @submit.prevent="addContact">
    <div>
      <label>
        Name
        <input type="text" ref="name"/>
      </label>
    </div>
    <div>
      <label>
        Phone
        <input type="tel" ref="phone"/>
      </label>
    </div>
    <div>
      <label>
        E-mail
        <input type="email" ref="email"/>
      </label>
    </div>
    <div>
      <button>Add Friend</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "FriendForm",
  emits: ['add-contact'],
  methods: {
    addContact() {
      this.$emit('add-contact', this.$refs['name'].value, this.$refs['phone'].value, this.$refs['email'].value)
    }
  }
}
</script>

<style scoped>

</style>