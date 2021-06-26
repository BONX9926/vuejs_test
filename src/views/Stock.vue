<template>
  <div class="stock">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn @click="status_create = true" color="red lighten-2" dark v-bind="attrs" v-on="on">
          Add item
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2" v-if="status_create"> Add Items </v-card-title>
        <v-card-title class="text-h5 grey lighten-2" v-else> Edit Items </v-card-title>
        <v-container>
          <v-text-field v-model="name" placeholder="Name"></v-text-field>
          <v-text-field
            v-model="urlImage"
            placeholder="url image"
          ></v-text-field>
        </v-container>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="dialog = false, name = '', urlImage = ''">Cancel</v-btn>
          <v-btn v-if="status_create" color="primary" @click="(dialog = false), addItem()"
            >Add Item</v-btn
          >
          <v-btn v-else color="primary" @click="(dialog = false), editItem()"
            >Edit Item</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">No.</th>
            <th class="text-left">Image</th>
            <th class="text-left">Name</th>
            <th class="text-left">Edit</th>
            <th class="text-left">Delete</th>
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
            <td>
              <v-btn @click="showEdit(item)"><v-icon>mdi-pencil</v-icon></v-btn>
            </td>
            <td>
              <v-btn @click="deleteItem(item.id)"><v-icon>mdi-delete</v-icon></v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      name: "",
      urlImage: "",
      status_create: true,
      id: ""
    };
  },
  computed: {
    desserts() {
      return this.$store.getters.items;
    },
  },
  updated() {
    // this.$forceUpdate()
  },
  methods: {
    addItem() {
      this.$store
        .dispatch("AddItems", {
          name: this.name,
          urlImage: this.urlImage,
        })
        .then(() => {
          console.log("add success");
        });
    },
    showEdit(item) {
      this.dialog = true
      this.status_create = false
      this.name = item.name
      this.urlImage = item.urlImage
      this.id = item.id
    },
    editItem() {
      this.$store.dispatch('EditItem', {
        id: this.id,
        name: this.name,
        urlImage: this.urlImage
      })
    
    },
    deleteItem(id) {
      this.$store.dispatch('DeleteItem', {
        id: id,
      })
    }
  },
};
</script>
