<template>
  <div>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">Store Management</v-list-item-title>
        <v-list-item-subtitle> Application </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-list dense nav>
      <v-list-item link @click="logout">
        <v-list-item-icon>
          <v-icon>mdi-image</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { title: "Stock", icon: "mdi-image" },
        { title: "Lists", icon: "mdi-help-box" },
      ],
      right: null,
    };
  },
  methods: {
    logout() {
      alert('logout')
      this.$store.dispatch('Logout').then(() => {
        this.$router.push({ name:"Login" })
      })
    }
  }
};
</script>