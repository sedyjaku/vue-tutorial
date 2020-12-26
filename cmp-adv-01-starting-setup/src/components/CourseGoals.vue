<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <slot :item="goal" another-prop="..."></slot>
    </li>
  </ul>
</template>

<script>
export default {
name: "CourseGoals",
  data(){
    return {
      goals: ['Finish the course', 'Learn vue'],
    }
  }
}
</script>

<style scoped>

</style>