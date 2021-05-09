<template>
  <!-- card -->
  <div class="col-sm-3">
    <div class="card mb-2">
      <router-link
        :to="{
          name: 'country',
          params: { alpha2Code: `${country.alpha2Code}` },
        }"
      >
        <img class="card-img-top" :src="country.flag" />
      </router-link>
      <div class="card-body">
        <h6 class="card-title">{{ country.name }}</h6>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    country: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      countryId: `#${this.country.callingCodes}`,
    };
  },
};
</script>