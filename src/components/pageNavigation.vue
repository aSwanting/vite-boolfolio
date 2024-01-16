<template>
  <div class="page-nav">
    <ul>
      <li>
        Showing {{ pageNav.from }} to {{ pageNav.to }} of
        {{ pageNav.total }} results
      </li>
      <ul>
        <li @click="gridPage('first')">first</li>
        <li @click="gridPage('prev')">prev</li>
        <li @click="gridPage('next')">next</li>
        <li @click="gridPage('last')">last</li>
      </ul>
      <li>Current page: {{ pageNav.current }} of {{ pageNav.last }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pageNav: {
      type: Object,
      required: true,
    },
  },
  methods: {
    gridPage(key) {
      switch (key) {
        case "prev":
          this.$emit("changePage", this.pageNav.current - 1);
          break;

        case "next":
          this.$emit("changePage", this.pageNav.current + 1);
          break;

        case "first":
          this.$emit("changePage", 1);
          break;

        case "last":
          this.$emit("changePage", this.pageNav.last);
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.page-nav {
  border: 1px solid rgb(180, 180, 180);
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  ul {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }
}
</style>
