<template>
  <div class="project-card">
    <div class="project-index">{{ project.id }}</div>
    <div class="card-header">
      <h3 class="project-title">{{ project.title }}</h3>
      <p class="project-type">{{ project.type.name }}</p>
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
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 340px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.4);

  .card-header {
    background-color: rgba(212, 230, 255, 0.438);
    border-bottom: 1px solid rgba(34, 98, 153, 0.2);
    justify-content: center;
    padding: 15px 8px 4px 15px;
    height: 120px;
    display: flex;
    flex-direction: column;

    .project-title {
      flex-grow: 1;
      font-size: 22px;
      color: rgb(83, 83, 83);
    }
    .project-type {
      text-transform: uppercase;
      text-align: right;
      font-weight: 300;
      font-size: 18px;
      color: rgba(25, 28, 36, 0.6);
    }
  }
  .card-body {
    background-color: rgba(255, 255, 255, 0.75);
    padding: 15px 20px;
    flex-grow: 1;
    .project-technologies {
      display: flex;
      gap: 15px;
      flex-wrap: wrap;
      .project-technology {
        background-color: rgba(0, 37, 78, 0.39);
        width: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        aspect-ratio: 1;
        border-radius: 50%;
        color: white;
        box-shadow: 0px 4px 15px -3px rgba(0, 0, 0, 0.4);
      }
    }
  }
  .card-footer {
    color: rgb(34, 34, 53);
    text-align: center;
    .details {
      background-color: rgba(196, 231, 215, 0.5);
      font-weight: 300;
      font-size: 18px;
      display: block;
      padding: 12px;
      transition: all 250ms;
      &:hover {
        background-color: rgba(92, 179, 140, 0.5);
      }
    }
  }

  .project-index {
    color: rgba(59, 59, 59, 0.479);
    user-select: none;
    z-index: -1;
    font-size: 200px;
    font-weight: 900;
    position: absolute;
    top: 20%;
    left: 20%;
    border: 20px solid;
    width: 320px;
    aspect-ratio: 1;
    border-radius: 50%;
    padding: 50px;
    overflow: hidden;
    transform: rotate(-25deg);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card-header,
  .card-footer,
  .project-technology {
    backdrop-filter: blur(5px);
  }
}
</style>
