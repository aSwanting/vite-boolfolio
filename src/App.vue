<template>
  <AppHeader />
  <!-- <ProjectIndex /> -->
  <router-view></router-view>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import ProjectIndex from "./pages/projects/Index.vue";
export default {
  components: {
    AppHeader,
    ProjectIndex,
  },
};
</script>

<style lang="scss">
@use "./style/general.scss";
</style>
