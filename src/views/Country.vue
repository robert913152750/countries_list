<template>
  <div class="container">
    <div class="row">
      <country :country="country" />
    </div>
  </div>
</template>

<script>
import conutriesAPI from "./../apis/countries";
import country from "./../components/country.vue";
export default {
  components: {
    country,
  },
  data() {
    return {
      country: {},
    };
  },
  methods: {
    async fetchCountry(alpha2Code) {
      try {
        const res = await conutriesAPI.getCountry(alpha2Code);
        this.country = res.data;
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    },
  },
  created() {
    const alpha2Code = this.$route.params.alpha2Code;
    this.fetchCountry(alpha2Code);
  },
};
</script>