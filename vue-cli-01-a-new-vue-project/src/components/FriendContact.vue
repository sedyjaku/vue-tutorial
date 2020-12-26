<template>
  <li>
    <h2>{{ friend.name }} {{friend.isFavorite? '(Favorite)' : ''}}</h2>
    <button @click="toggleFavorite">{{friend.isFavorite ? 'UnFavorize' : 'Favorize'}} Person</button>
    <button @click="toggleDetails">{{detailsAreVisible ? 'Hide' : 'Show'}} Details</button>
    <ul v-show="detailsAreVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
    <button @click="deleteFriend">Delete</button>
  </li>
</template>

<script>
export default {
  name: "friendContact",
  data() {
    return {
      detailsAreVisible: true
    }
  },
  props: {
    friend: {
      type: Object,
      required: true
    },
    emits: {
      'toggle-favorite': function(friendId) {
        if(friendId){
          return true;
        }
        else {
          console.log('Friend Id is missing!')
          return false;
        }
      },
      'delete-friend': function(){}
    },
    notImportantProp: {
      type: String,
      required: false,
      default: '0',
      validator: value => value === '1' || value === '2'
    }
  },
  methods: {
    toggleDetails(){
      this.detailsAreVisible = !this.detailsAreVisible
    },
    deleteFriend(){
      this.$emit('delete-friend', this.friend.id)
    },
    toggleFavorite(){
      this.$emit('toggle-favorite', this.friend.id)
    }
  }
}
</script>

<style scoped>

</style>