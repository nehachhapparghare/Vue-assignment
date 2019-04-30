<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center row fill-height>
        <v-flex xs10 md4 mx-2>
          <v-card class="elevation-3" height="400px">
            <v-card-title>
              <h1>Menu</h1>
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="search"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
              :headers="getHeaders"
              :items="getList"
              hide-actions
              :search="search"
              v-model="selected"
              select-all
            >
              <template v-slot:headers="props">
                <tr>
                  <th>
                    <v-checkbox
                      :input-value="props.all"
                      primary
                      hide-details
                      @click.stop="toggleAll"
                    ></v-checkbox>
                  </th>
                  <th
                    v-for="header in props.headers"
                    :key="header.text"
                    class="text-lg-center"
                  >{{ header.text }}</th>
                </tr>
              </template>
              <template v-slot:items="props">
                <tr :active="props.selected" @click="props.selected = !props.selected">
                  <td>
                    <v-checkbox :input-value="props.selected" primary hide-details></v-checkbox>
                  </td>
                  <td class="text-lg-center">{{ props.item.item }}</td>
                  <td class="text-lg-center">{{ props.item.price }}</td>
                </tr>
              </template>
            </v-data-table>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn dark color="primary" @click="addItems()">Add Items</v-btn>
            </v-card-actions>
            <v-dialog v-model="dialog" transition="dialog-bottom-transition" width="20%">
              <v-card>
                <v-toolbar dark class="primary">
                  <v-btn icon @click.native="dialog = false" dark>
                    <v-icon>close</v-icon>
                  </v-btn>
                  <v-toolbar-title>Do you want to add Item ?</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-title primary-title>
                  <div>
                    <h3>Item : {{ items.item }}</h3>
                    <h3>Price : {{ items.price }}</h3>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    dark
                    color="primary"
                    @click.native="dialog = false"
                    v-on:click="addToCart(items)"
                  >Add</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-card>
        </v-flex>
        <v-flex xs10 md4 mx-2 v-if="showList">
          <v-card class="elevation-3" height="400px">
            <v-card-title>
              <h1>Add To Cart</h1>
            </v-card-title>
            <v-data-table :headers="getHeaders" :items="addedItems" hide-actions select-all>
              <template v-slot:headers="props">
                <th
                  v-for="header in props.headers"
                  :key="header.text"
                  class="text-lg-center"
                >{{ header.text }}</th>
              </template>
              <template v-slot:items="props">
                <tr>
                  <td class="text-md-center">{{ props.item.item }}</td>
                  <td class="text-md-center">{{ props.item.price }}</td>
                </tr>
              </template>
              <!-- <template slot="items" slot-scope="{ props }">
              <td>{{items[header.value]}}</td>
              </template>-->
            </v-data-table>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn dark color="primary" v-on:click="resetItems()">Reset</v-btn>
              <v-btn dark color="primary">Place Order</v-btn>
            </v-card-actions>
            <v-card-text>
              <h3>Total : {{cost}}</h3>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-snackbar v-model="noData" :top="y === 'top'">
        {{ text }}
        <v-btn color="pink" flat @click="snackbar = false">Close</v-btn>
      </v-snackbar>
    </v-container>
  </v-content>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    data: "",
    list: [],
    headers: [],
    search: "",
    dialog: false,
    items: {},
    orderedItems: [],
    showList: false,
    flag: true,
    selected: [],
    noData: false,
    text: "No Data Available",
    y: "top",
    x: null,
    mode: "",
    timeout: 6000,
    newArr: [],
    costPrice: 0
  }),

  created() {
    this.$store.dispatch("loadData");
  },

  computed: {
    getHeaders() {
      return this.$store.getters.getHeaders;
    },
    getList() {
      return this.$store.getters.getList;
    },
    addedItems() {
      return this.$store.getters.cartItems;
    },
    cost() {
      this.costPrice = this.$store.getters.totalCost
      return this.$store.getters.totalCost;
    }
  },

  methods: {
    popups(item) {
      this.items = item;
      this.dialog = true;
    },
    resetItems() {
      this.$store.dispatch("resetList");
      this.flag = true;
      this.costPrice = "";
    },
    addItems() {
      this.newArr = this.orderedItems.concat(this.selected);
      this.$store.dispatch("addToWishList", this.newArr);
      this.showList = true;
    },
    toggleAll() {
      if (this.selected.length) this.selected = [];
      else this.selected = this.list.slice();
    }
  }
};
</script>

<style>
</style>
