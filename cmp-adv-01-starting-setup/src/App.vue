<template>
  <div>
    <TheHeader></TheHeader>
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <ActiveGoals v-if="selectedComponent === 'active-goals'"/>
    <ManageGoals v-if="selectedComponent === 'manage-goals'"/>
    <keep-alive>
      <component :is="selectedComponent">

      </component>
    </keep-alive>
    <!--    <BadgeList></BadgeList>-->
    <!--    <UserInfo-->
    <!--      :full-name="activeUser.name"-->
    <!--      :info-text="activeUser.description"-->
    <!--      :role="activeUser.role"-->
    <!--    >-->
    <!--    </UserInfo>-->
    <!--    <CourseGoals>-->
    <!--      <template #default="slotProps">-->
    <!--        <h2>{{slotProps.item}}</h2>-->
    <!--        <p>{{slotProps.anotherProp}}</p>-->
    <!--      </template>-->
    <!--    </CourseGoals>-->
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';
// import CourseGoals from './components/CourseGoals.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';

export default {
  components: {
    TheHeader,
    ActiveGoals,
    ManageGoals
  },
  data() {
    return {
      selectedComponent: 'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedComponent(componentName) {
      this.selectedComponent = componentName
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>