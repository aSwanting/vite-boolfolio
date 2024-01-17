<template>
  <div class="project-card">
    <div class="card-header">
      <h3 class="project-title">{{ project.title }}</h3>
      <p class="project-type">{{ project.type.name }}</p>
      <div class="project-index">{{ project.id }}</div>
    </div>

    <div class="card-body">
      <ul class="project-technologies">
        <li
          class="project-technology"
          v-for="technology in project.technologies"
          :key="technology.id"
        >
          {{ technology.name }}
        </li>
      </ul>

      <!-- <p class="project-description">{{ project.description }}</p> -->
    </div>
    <div class="card-footer">
      <router-link
        :to="{ name: 'show', params: { slug: project.slug } }"
        class="details"
      >
        Details
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.project-card {
  position: relative;
  border: 1px solid rgb(200, 200, 200);
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 320px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.4);

  .card-header {
    background-color: rgb(245, 250, 255);
    border-bottom: 1px solid;
    justify-content: center;
    padding: 15px 8px 4px 15px;
    height: 120px;
    display: flex;
    flex-direction: column;
    .project-title {
      flex-grow: 1;
      font-size: 22px;
      color: rgb(37, 82, 67);
    }
    .project-type {
      text-transform: uppercase;
      text-align: right;
      font-weight: 800;
      font-size: 14px;
      color: rgb(149, 167, 182);
    }
  }
  .card-body {
    background-color: rgb(253, 255, 254);
    padding: 20px 30px 0px 20px;
    overflow: auto;
    flex-grow: 1;
    .project-technologies {
      display: flex;
      gap: 15px;
      flex-wrap: wrap;
      .project-technology {
        background-color: rgba(36, 104, 92, 0.8);
        padding: 5px 15px;
        border-radius: 30px;
        color: white;
        box-shadow: 0px 4px 15px -3px rgba(0, 0, 0, 0.4);
      }
    }
  }
  .card-footer {
    color: white;
    text-align: center;
    .details {
      font-weight: 600;
      font-size: 14px;
      background-color: rgb(0, 63, 88);
      display: block;
      padding: 8px;
      transition: all 250ms;
      &:hover {
        background-color: rgb(73, 92, 92);
      }
    }
  }

  .project-index {
    font-size: 60px;
    font-weight: 900;
    position: absolute;
    top: 56%;
    left: 63%;
    border: 20px solid rgb(80, 95, 95);
    aspect-ratio: 1;
    border-radius: 50%;
    width: 150px;
    overflow: hidden;
    transform: rotate(-25deg);
    opacity: 0.1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
// .project-title {
//   margin-bottom: 4px;
// }
// .project-type {
//   margin-bottom: 18px;
// }

// .project-technologies {
//   display: flex;
//   flex-wrap: wrap;
//   gap: 8px;
//   font-size: 12px;
//   margin-bottom: 10px;
// }

// .details {
//   font-size: 12px;
//   color: blue;
//   text-align: right;
// }
</style>
