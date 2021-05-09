<template>
  <div class="col-sm-3">
    <div class="card mb-2">
      <img class="card-img-top" :src="country.flag" />
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
};
</script>