<template>
  <div class="container">
    <h1 class="page-title">Projects</h1>
    <div class="grid-wrapper">
      <div class="project-card" v-for="project in projects" :key="project.id">
        <ProjectCardVue :project="project" />
      </div>
    </div>
    <div class="page-nav">
      <span v-show="currentPage > 1" @click="gridPage('first')">first</span>
      <span v-show="currentPage > 1" @click="gridPage('prev')">prev</span>
      <span>{{ currentPage }}</span>
      <span v-show="currentPage < lastPage" @click="gridPage('next')"
        >next</span
      >
      <span v-show="currentPage < lastPage" @click="gridPage('last')"
        >last</span
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";

import ProjectCardVue from "../../components/ProjectCard.vue";

export default {
  components: {
    ProjectCardVue,
  },
  data() {
    return {
      projects: [],
      API_URL: "http://127.0.0.1:8000/api",
      currentPage: "1",
      lastPage: "",
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
          this.currentPage = res.data.results.current_page;
          this.lastPage = res.data.results.last_page;
        });
    },
    gridPage(key) {
      switch (key) {
        case "prev":
          this.currentPage--;
          break;

        case "next":
          this.currentPage++;
          break;

        case "first":
          this.currentPage = 1;
          break;

        case "last":
          this.currentPage = this.lastPage;
          break;

        default:
          break;
      }

      this.fetchProjects();
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
  .project-card {
    border: 1px solid rgb(121, 121, 121);
    padding: 20px;
    border-radius: 10px;
    min-height: 200px;
  }
}

.page-nav {
  text-align: center;
  span {
    padding-inline: 16px;
  }
}
</style>
