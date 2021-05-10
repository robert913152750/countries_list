<template>
  <div class="m-2">
    <button type="button" class="btn btn-success" @click="sort">
      國名正序/反序
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    sort() {
      this.$emit("sort");
    },
  },
};
</script>