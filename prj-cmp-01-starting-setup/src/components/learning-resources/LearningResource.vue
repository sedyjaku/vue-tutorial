<template>
  <li>
    <BaseCard>
      <header>
        <h3>{{resource.title}}</h3>
        <BaseButton  @click="deleteResource(resource.id)" mode='flat'>Delete</BaseButton>
      </header>
    <p>{{resource.description}}</p>
    <nav >
      <a :href='resource.link'>
        View resource
      </a>
    </nav>
    </BaseCard>
  </li>
</template>

<script>
import BaseCard from '@/components/ui/BaseCard';
import BaseButton from '@/components/ui/BaseButton';
export default {
  name: 'ResourceItem',
  components: { BaseButton, BaseCard },
  props: {
    resource: Object
  },
  inject: ['deleteResource']
};
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>