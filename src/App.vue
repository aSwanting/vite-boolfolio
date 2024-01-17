<template>
  <AppHeader />
  <!-- <ProjectIndex /> -->
  <router-view class="app-body"></router-view>
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
#app {
  border: 2px solid;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .app-body {
    // background-color: red;
    flex-grow: 1;
  }
}
</style>
