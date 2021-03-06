<template>
  <div class="container">
    <sort v-on:sort="changeSort" />
    <searchBar v-on:search="searchKeyword" />
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
import searchBar from "../components/searchBar.vue";
import sort from "../components/sort.vue";
const pageLimit = 25;

export default {
  components: {
    countriesCard,
    countriesPage,
    searchBar,
    sort,
  },
  data() {
    return {
      countries: [],
      allCountries: [],
      page: [],
      keyword: "",
      positiveOrder: true,
    };
  },
  methods: {
    searchKeyword(text) {
      this.keyword = text;
    },
    changeSort() {
      if (this.positiveOrder) return (this.positiveOrder = false);
      return (this.positiveOrder = true);
    },
    async fetchHome({ page, keyword }) {
      try {
        const res = await contriesAPI.getCountries();
        this.allCountries = res.data;
        this.countries = [];

        if (keyword != "") {
          const regex = new RegExp(this.keyword, "i");
          this.allCountries = this.allCountries.filter((country) =>
            country.name.match(regex)
          );
        }

        if (this.positiveOrder) {
          this.allCountries.sort();
        }
        if (!this.positiveOrder) {
          this.allCountries.sort().reverse();
        }

        const offset = (page - 1) * pageLimit;
        const times = offset + pageLimit;
        for (let i = offset; i < times; i++) {
          this.countries.push(this.allCountries[i]);
          if (this.allCountries[i + 1].name === undefined) break;
        }
      } catch (err) {
        console.log(err);
      }
    },
    async totalPage(countriesCount) {
      try {
        let totalPageNum = 0;
        this.page = [];
        if (countriesCount < pageLimit) {
          totalPageNum = 1;
          this.page.push(1);
        } else {
          totalPageNum = Math.ceil(countriesCount / pageLimit);
          for (let i = 1; i <= totalPageNum; i++) {
            this.page.push(i);
          }
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
  created() {
    const page = this.$route.query.page || 1;
    this.totalPage(this.countries.length);
    this.fetchHome({ page: page, keyword: this.keyword });
  },
  watch: {
    keyword() {
      const page = 1;
      this.fetchHome({ page: page, keyword: this.keyword });
    },
    allCountries() {
      this.totalPage(this.allCountries.length);
    },
    positiveOrder() {
      const page = 1;
      this.fetchHome({ page: page, keyword: this.keyword });
    },
  },
  beforeRouteUpdate(to, from, next) {
    this.countries = [];
    const page = to.query.page || 1;
    this.totalPage(this.allCountries.length);
    this.fetchHome({ page: page, keyword: this.keyword });
    next();
  },
};
</script>