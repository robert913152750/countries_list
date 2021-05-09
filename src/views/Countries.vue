<template>
  <div class="container">
    <div class="row">
      <CountriesCard
        v-for="country in countries"
        :key="country.name"
        :country="country"
      />
    </div>
  </div>
</template>

<script>
import contriesAPI from "./../apis/countries";
import CountriesCard from "../components/countriesCard.vue";
export default {
  components: {
    CountriesCard,
  },
  data() {
    return {
      countries: [],
    };
  },
  methods: {
    async fetchHome() {
      try {
        const res = await contriesAPI.getCountries();
        this.countries = res.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
  created() {
    this.fetchHome();
  },
};
</script>