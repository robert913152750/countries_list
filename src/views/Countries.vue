<template>
  <div class="container">
    <div class="row">
      <countriesCard
        v-for="country in countries"
        :key="country.name"
        :country="country"
      />
    </div>
    <countryModal
      v-for="country in countries"
      :key="country.name"
      :country="country"
    />
  </div>
</template>

<script>
import contriesAPI from "./../apis/countries";
import countriesCard from "../components/countriesCard.vue";

export default {
  components: {
    countriesCard,
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