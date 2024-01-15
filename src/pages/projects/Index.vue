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
    };
  },
  methods: {
    fetchProjects() {
      axios.get(`${this.API_URL}/projects`).then((res) => {
        console.log(res.data);
        this.projects = res.data.results;
      });
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
</style>
