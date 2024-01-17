<template>
  <div class="container">
    <h1 class="page-title">Projects</h1>

    <div class="grid-wrapper">
      <div class="project-card" v-for="project in projects" :key="project.id">
        <ProjectCardVue :project="project" />
      </div>
    </div>

    <PageNavigation @change-page="gridPage" :pageNav="pageNav" />
  </div>
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
.page-title {
  margin: 30px;
  text-align: center;
}
.grid-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  border: 1px solid rgb(200, 200, 200);
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 16px;
  .project-card {
    border: 1px solid rgb(200, 200, 200);
    padding: 20px;
    border-radius: 10px;
    min-height: 200px;
  }
}
</style>
