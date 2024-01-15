<template>
  <div class="container">
    <h1 class="page-title">Projects</h1>
    <div class="grid-wrapper">
      <div class="project-card" v-for="project in projects" :key="project.id">
        <ProjectCardVue :project="project" />
        <!-- <h3 class="project-title">{{ project.title }}</h3>
        <p class="project-type">{{ project.type.name }}</p>
        <ul class="project-technologies">
          <li
            class="project-technology"
            v-for="technology in project.technologies"
            :key="technology.id"
          >
            {{ technology.name }}
          </li>
        </ul> -->
      </div>
    </div>
    <div class="page-nav">
      <!-- <a :href="prevPage">prev</a> -->
      <!-- <span @click="gridPage(0)">first</span> -->
      <span v-show="currentPage > 1" @click="gridPage(-1)">prev</span>
      <span>{{ currentPage }}</span>
      <span v-show="currentPage < lastPage" @click="gridPage(+1)">next</span>
      <!-- <span @click="gridPage(0)">last</span> -->
      <!-- <a :href="prevPage">next</a> -->
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
    gridPage(foo) {
      this.currentPage += foo;
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
    min-height: 100px;
  }
}

.page-nav {
  text-align: center;
  span {
    padding-inline: 16px;
  }
}
</style>
