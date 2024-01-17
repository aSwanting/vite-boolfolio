<template>
  <section>
    <div class="container">
      <div class="project-info">
        <h1>{{ project.title }}</h1>
        <h2>{{ project.slug }}</h2>
        <h3>{{ project.type?.name }}</h3>
        <ul>
          <li v-for="tech in project.technologies">{{ tech.name }}</li>
        </ul>
        <p>{{ project.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      project: "",
      API_URL: "http://127.0.0.1:8000/api",
    };
  },
  methods: {
    fetchProject() {
      axios
        .get(`${this.API_URL}/projects/${this.$route.params.slug}`, {
          //   params: {
          //     page: this.currentPage,
          //   },
        })
        .then((res) => {
          console.log(res.data);
          this.project = res.data.post;
        });
    },
  },
  created() {
    this.fetchProject();
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 80px;
}
.project-info {
  border: 1px solid grey;
  padding: 50px;
  border-radius: 25px;
  h1 {
    text-transform: uppercase;
    font-size: 48px;
    margin-bottom: 5px;
  }
  h2 {
    font-size: 24px;
    font-weight: 300;
    font-style: italic;
    color: rgba(0, 0, 0, 0.4);
    margin-bottom: 20px;
  }
  h3 {
    font-size: 24px;
    margin-bottom: 30px;
  }
  ul {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 30px;
    padding: 40px;
    li {
      font-size: 18px;
    }
  }
  p {
    font-size: 24px;
  }
}
</style>
