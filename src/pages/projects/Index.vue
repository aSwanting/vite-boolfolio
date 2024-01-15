<template>
  <div>
    <h1>Projects</h1>
    <div v-for="project in projects" :key="project.id">
      {{ project.title }}
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      projects: [],
      API_URL: "http://127.0.0.1:8000/api",
    };
  },
  methods: {
    fetchProjects() {
      axios.get(`${this.API_URL}/projects`).then((res) => {
        this.projects = res.data.results;
      });
    },
  },
  created() {
    this.fetchProjects();
  },
};
</script>

<style lang="scss" scoped></style>
