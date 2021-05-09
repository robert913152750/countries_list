<template>
  <router-link
    :to="{
      name: 'countries',
      query: { page: `${page}` },
    }"
    type="button"
    class="btn btn-secondary"
  >
    {{ page }}
  </router-link>
</template>

<script>
export default {
  props: {
    page: {
      type: Number,
      required: true,
    },
  },
};
</script>