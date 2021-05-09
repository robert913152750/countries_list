<template>
  <div class="card mb-2 w-50">
    <img class="card-img-top" :src="country.flag" />
    <div class="card-body">
      <h1 class="card-title">{{ country.name }}</h1>
      <h5 class="card-text">2位國家代碼: {{ country.alpha2Code }}</h5>
      <h5 class="card-text">3位國家代碼: {{ country.alpha3Code }}</h5>
      <h5 class="card-text">母語名稱: {{ country.nativeName }}</h5>
      <h5 class="card-text">替代國家名稱: {{ country.altSpellings }}</h5>
      <h5 class="card-text">國際電話區號: {{ country.callingCodes }}</h5>
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
};
</script>