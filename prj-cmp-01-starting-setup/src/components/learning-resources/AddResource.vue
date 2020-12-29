<template>
  <BaseDialog v-if='!validInput' title='Invalid Input' @close='confirmError'>
    <template #default>
        <p>Unfortunately at least one input value is invalid</p>
      <p>Please check the values and enter at least some values</p>
    </template>
    <template #actions>
      <base-button @click='confirmError'>Okay</base-button>
    </template>
  </BaseDialog>
  <BaseCard>
    <form @submit.prevent='submitData'>
      <div class='form-control'>
        <label for='title'>Title</label>
        <input id='title' name='title' type='text' ref='titleInput'/>
      </div>
      <div class='form-control'>
        <label for='description'>Description</label>
        <textarea id='description' name='description' rows='3' ref='descInput'/>
      </div>
      <div class='form-control'>
        <label for='link'>Link</label>
        <input id='link' name='link' type='url' ref='linkInput'/>
      </div>
      <BaseButton type='submit'>
          Add Resource
      </BaseButton>
    </form>
  </BaseCard>
</template>

<script>
import BaseCard from '@/components/ui/BaseCard';
import BaseButton from '@/components/ui/BaseButton';
import BaseDialog from '@/components/ui/BaseDialog';

export default {
  inject: ['addResource'],
  name: 'AddResource',
  components: { BaseDialog, BaseButton, BaseCard },
  data() {
    return {
      validInput: true,
    }
  },
  methods: {
    submitData(){
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDescription = this.$refs.descInput.value;
      const enteredLink = this.$refs.linkInput.value;
      if(enteredTitle === '' || enteredDescription === '' || enteredLink === ''){
        this.validInput = false;
        return;
      }
      this.addResource(enteredTitle, enteredDescription, enteredLink);
    },
    confirmError(){
      this.validInput=true;
    }
  }
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>