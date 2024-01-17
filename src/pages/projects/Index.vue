<template>
  <section class="index-body">
    <div class="index-title">
      <h1 class="page-title">Portfolio</h1>
    </div>
    <div class="index-grid">
      <div class="grid-wrapper">
        <div class="grid-item" v-for="project in projects" :key="project.id">
          <ProjectCardVue :project="project" />
        </div>
      </div>
    </div>
    <div class="index-nav">
      <PageNavigation @change-page="gridPage" :pageNav="pageNav" />
    </div>
  </section>
</template>

<script>
import axios from "axios";

import ProjectCardVue from "../../components/ProjectCard.vue";
import PageNavigation from "../../components/PageNavigation.vue";

export default {
  components: {
    ProjectCardVue,
    PageNavigation,
  },
  data() {
    return {
      projects: [],
      API_URL: "http://127.0.0.1:8000/api",
      pageNav: {},
      currentPage: 1,
    };
  },
  methods: {
    fetchProjects() {
      axios
        .get(`${this.API_URL}/projects`, {
          params: {
            page: this.currentPage,
          },
        })
        .then((res) => {
          console.log(res.data);
          this.projects = res.data.results.data;
          this.pageNav = {
            current: res.data.results.current_page,
            last: res.data.results.last_page,
            from: res.data.results.from,
            to: res.data.results.to,
            total: res.data.results.total,
          };
        });
    },
    gridPage(n) {
      console.log(n);
      if (n > 0 && n <= this.pageNav.last && n != this.currentPage) {
        this.currentPage = n;
        this.fetchProjects();
      }
    },
  },
  created() {
    this.fetchProjects();
  },
};
</script>

<style lang="scss" scoped>
.index-body {
  display: flex;
  flex-direction: column;
  .index-title {
    margin: 30px;
    text-align: center;
  }
  .index-grid {
    flex-grow: 1;
  }
}

.page-title {
  // margin: 30px;
  // text-align: center;
}
.grid-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  // border: 1px solid rgb(200, 200, 200);
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 8px;
}
</style>
