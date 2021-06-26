<template>
  <div>
    <h2>List</h2>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">No.</th>
            <th class="text-left">Image</th>
            <th class="text-left">Name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in desserts" :key="i">
            <td>{{ i + 1 }}</td>
            <td>
              <v-img
                max-height="150"
                max-width="250"
                :src="item.urlImage"
              ></v-img>
            </td>
            <td>{{ item.name }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>
<script>
export default {
  computed: {
    desserts() {
      return this.$store.getters.items;
    },
  },
}
</script>