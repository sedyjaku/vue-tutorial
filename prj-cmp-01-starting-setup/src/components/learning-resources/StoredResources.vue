<template>
  <ul>
    <LearningResource v-for="resource in resources" :resource="resource" :key='resource.id'>
    </LearningResource>
  </ul>
</template>

<script>
import LearningResource from '@/components/learning-resources/LearningResource';

export default {
  components: {
    LearningResource
  },
  name: 'StoredResources',
  inject: ['resources']
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>