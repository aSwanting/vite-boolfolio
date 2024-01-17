<template>
  <header>
    <nav class="header-nav">
      <ul>
        <li v-for="(item, index) in menuItems" :key="index">
          <router-link :to="{ name: item.routeName }">
            {{ item.label }}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        {
          label: "Home",
          routeName: "home",
        },
        {
          label: "Portfolio",
          routeName: "portfolio",
        },
        {
          label: "About me",
          routeName: "about",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  padding: 20px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  .header-nav ul {
    display: flex;
    justify-content: center;
    gap: 30px;
  }
}
</style>
