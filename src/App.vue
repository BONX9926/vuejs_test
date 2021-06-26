<template>
<v-app>
  <v-navigation-drawer app v-if="login">
    <navigation-left></navigation-left>
  </v-navigation-drawer>
  <v-app-bar app v-if="login">
    <!-- -->
  </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-main>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>

      <!-- If using vue-router -->
      {{login}}
      <router-view></router-view>
    </v-container>
  </v-main>

  <v-footer app v-if="login">
    <!-- -->
  </v-footer>
</v-app>
</template>
<script>
import NavigationLeft from "@/components/NavigationLeft"
export default {
  components: {
    NavigationLeft
  },
  computed: {
    login() {
      return (this.$store.getters.username !== "") ? true : false
    }
  }
}
</script>
<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }
</style>
