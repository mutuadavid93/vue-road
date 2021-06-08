<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="haserror" v-html="error"></p>
      <!-- No data and no error -->
      <p v-else-if="hasnodata">Start adding some data</p>
      <!-- We have data and no error -->
      <ul v-else>
        <survey-result
          v-for="(result, index) in results"
          :key="index"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

const getResults = function (input) {
  return Object.keys(input).length;
};

export default {
  components: {
    SurveyResult,
  },
  data() {
    return { results: {}, isLoading: false, error: null };
  },
  computed: {
    hasdata() {
      return !this.isLoading && this.results && getResults(this.results) > 0;
    },
    hasnodata() {
      return (
        !this.isLoading && (!this.results || getResults(this.results) === 0)
      );
    },
    haserror() {
      return !this.isLoading && this.error;
    },
  },
  methods: {
    loadExperiences() {
      this.error = null;
      this.isLoading = true;
      // GET Request against a REST API
      const request = fetch(
        'https://learn-vue-bc1ea-default-rtdb.firebaseio.com/surveys'
      );
      request
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((result) => {
          this.isLoading = false;
          this.results = result;
        })
        .catch((error) => {
          this.isLoading = false;
          this.error = `<pre>${error}</pre>`;
        });
    },
  },

  mounted() {
    this.loadExperiences();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
