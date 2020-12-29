<template>
  <BaseCard>
    <BaseButton @click='setSelectedTab("stored-resources")' :mode='storedResButtonMode'>Stored Resources</BaseButton>
    <BaseButton @click='setSelectedTab("add-resource")' :mode='addResButtonMode'>Add Resource</BaseButton>
  </BaseCard>
  <keep-alive>
    <component :is='selectedTab'></component>
  </keep-alive>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton';
import BaseCard from '@/components/ui/BaseCard';
import AddResource from '@/components/learning-resources/AddResource';
import StoredResources from '@/components/learning-resources/StoredResources';

export default {
  name: 'TheResources',
  components: { StoredResources, AddResource, BaseButton, BaseCard },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.org'
        }
      ]

    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    }
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.removeResource
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, link) {
      const newResource = {
        id: new Date().toISOString(),
        title,
        description,
        link
      };
      this.storedResources.unshift(newResource);
      this.selectedTab = 'stored-resources';
    },
    removeResource(resourceId){
      const resourceIndex = this.storedResources.findIndex(res => res.id !== resourceId)
      this.storedResources.splice(resourceIndex, 1)
    }
  }
};
</script>

<style scoped>

</style>