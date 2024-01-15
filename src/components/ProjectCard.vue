<template>
  <h3 class="project-title">{{ project.title }}</h3>
  <p class="project-type">{{ project.type.name }}</p>
  <ul class="project-technologies">
    <li
      class="project-technology"
      v-for="technology in project.technologies"
      :key="technology.id"
    >
      {{ technology.name }}
    </li>
  </ul>
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
.project-title {
  margin-bottom: 4px;
}
.project-type {
  margin-bottom: 18px;
}

.project-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 12px;
}
</style>
