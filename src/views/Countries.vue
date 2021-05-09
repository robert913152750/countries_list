<template>
  <div class="container">
    <div class="row">
      <countriesCard
        v-for="country in countries"
        :key="country.name"
        :country="country"
      />
    </div>
    <div
      class="btn-toolbar"
      role="toolbar"
      aria-label="Toolbar with button groups"
    >
      <div class="btn-group mr-2" role="group" aria-label="First group">
        <countriesPage v-for="item in page" :key="item" :page="item" />
      </div>
    </div>
  </div>
</template>

<script>
import contriesAPI from "./../apis/countries";
import countriesCard from "../components/countriesCard.vue";
import countriesPage from "../components/countriesPage.vue";
const pageLimit = 25;

export default {
  components: {
    countriesCard,
    countriesPage,
  },
  data() {
    return {
      countries: [],
      page: [],
    };
  },
  methods: {
    async fetchHome(page) {
      try {
        const res = await contriesAPI.getCountries();
        const allCountries = res.data;
        const offset = page ? (page - 1) * pageLimit : 0;
        const times = offset + pageLimit;
        for (let i = offset; i < times; i++) {
          this.countries.push(allCountries[i]);
        }
      } catch (err) {
        console.log(err);
      }
    },
    async totalPage() {
      try {
        const res = await contriesAPI.getCountries();
        const allCountries = res.data;
        const countriesCount = allCountries.length;
        const totalPage = Math.ceil(countriesCount / pageLimit);
        for (let i = 1; i <= totalPage; i++) {
          this.page.push(i);
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
  created() {
    const page = this.$route.query.page;
    this.fetchHome(page);
    this.totalPage();
  },
  beforeRouteUpdate(to, from, next) {
    this.countries = [];
    const { page } = to.query;
    this.fetchHome(page);
    next();
  },
};
</script>