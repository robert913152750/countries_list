<template>
  <div class="row">
    <div class="input-group" id="search-bar">
      <input
        type="text"
        class="form-control mb-2 mr-sm-2 float-left"
        id="search"
        placeholder="search countries..."
        v-model="keyword"
        @keyup.enter="search"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: undefined,
    };
  },
  methods: {
    search() {
      this.$emit("search", this.keyword);
    },
  },
};
</script>