<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click='loadExperiences'>Load Submitted Experiences</base-button>
      </div>
      <p v-if='isLoading'>Loading...</p>
      <p v-else-if='!isLoading && errorLoaded'>{{ errorMessage }}</p>
      <p v-else-if='!isLoading && (!results || results.length === 0)'>No Results</p>
      <ul v-else-if='!isLoading && results && results.length > 0'>
        <survey-result
          v-for='result in results'
          :key='result.id'
          :name='result.userName'
          :rating='result.rating'
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';
import axios from 'axios';

export default {
  components: {
    SurveyResult
  },
  data() {
    return {
      results: [],
      isLoading: false,
      errorLoaded: false,
      errorMessage: ''
    };
  },
  methods: {
    loadExperiences() {
      this.isLoading = true;
      this.errorLoaded= false;
      this.errorMessage= '';
      axios.get('https://vue-http-demo-796b4-default-rtdb.europe-west1.firebasedatabase.app/surveys.json')
        .then(result => {
            console.log(result.data);
            const resData = [];
            if (result.data) {
              Object.keys(result.data).forEach(key => {
                const objectData = result.data[key];
                resData.push({
                  id: key,
                  userName: objectData.userName,
                  rating: objectData.rating
                });
                console.log(key);
                console.log(result.data[key]);
              });
            }
            this.results = resData;
            this.isLoading = false;
          }
        ).catch(error => {
          console.log(error);
          this.errorLoaded = true
          this.errorMessage = 'Failed to fetch data'
          this.isLoading = false;
          this.results = [];
      });
    }
  },
  mounted() {
    this.loadExperiences();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>