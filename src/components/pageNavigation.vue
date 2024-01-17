<template>
  <div class="page-nav">
    <ul class="nav-list">
      <li class="results">
        Showing {{ pageNav.from }} to {{ pageNav.to }} of
        {{ pageNav.total }} results
      </li>
      <ul class="nav-links">
        <li @click="gridPage('first')">First</li>
        <li @click="gridPage('prev')">Prev</li>
        <li @click="gridPage('next')">Next</li>
        <li @click="gridPage('last')">Last</li>
      </ul>
      <li class="pages">
        Current page: {{ pageNav.current }} of {{ pageNav.last }}
      </li>
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
  .nav-list {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    & > * {
      flex-basis: 30%;
    }

    .results {
      text-align: left;
    }

    .pages {
      text-align: right;
    }
  }
  .nav-links {
    display: flex;
    justify-content: center;
    gap: 16px;
    li {
      cursor: pointer;
      user-select: none;
    }
  }
}
</style>
