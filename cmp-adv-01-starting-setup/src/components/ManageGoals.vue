<template>
  <div>
    <h2>Manage goals</h2>
    <input type="text" ref="goal"/>
    <button @click="setGoal">Set Goal</button>
    <error-alert v-if="inputIsInvalid">
      <h2>Input must not be empty</h2>
      <p>please enter valid input</p>
      <button @click="confirmError">Okay</button>
    </error-alert>
  </div>
</template>

<script>
import ErrorAlert from "@/components/ErrorAlert";

export default {
  name: "ManageGoals",
  components: {ErrorAlert},
  data() {
    return {
      inputIsInvalid: false
    }
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;
      if (enteredValue === '') {
        this.inputIsInvalid = true;
      }
    },
    confirmError() {
      this.inputIsInvalid = false;
    }
  }
}
</script>

<style scoped>

</style>