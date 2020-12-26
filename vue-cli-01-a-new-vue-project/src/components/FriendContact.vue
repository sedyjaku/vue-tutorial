<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">{{detailsAreVisible ? 'Show' : 'Hide'}} Details</button>
    <ul v-show="detailsAreVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  name: "friend-contact",
  data() {
    return {
      detailsAreVisible: false,
    }
  },
  props: {
    friend: Object
  },
  methods: {
    toggleDetails(){
      this.detailsAreVisible = !this.detailsAreVisible
    }
  }
}
</script>

<style scoped>

</style>