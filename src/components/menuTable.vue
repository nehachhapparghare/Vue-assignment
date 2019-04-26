<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs10 md4 mx-2>
          <v-card class="elevation-3">
            <v-card-title>
              <h1>Menu</h1>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn dark color="primary" @click="addItems()">Add Items</v-btn>
              </v-card-actions>
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
              :headers="headers"
              :items="list"
              hide-actions
              class="elevation-3"
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
                  <th v-for="header in props.headers" :key="header.text">{{ header.text }}</th>
                </tr>
              </template>
              <template v-slot:items="props">
                <tr :active="props.selected" @click="props.selected = !props.selected">
                  <td>
                    <v-checkbox :input-value="props.selected" primary hide-details></v-checkbox>
                  </td>
                  <td text-centre>{{ props.item.item }}</td>
                  <td text-centre>{{ props.item.price }}</td>
                </tr>
              </template>
            </v-data-table>

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
          <v-card class="elevation-3">
            <v-card-title>
              <h1>Add To Cart</h1>
            </v-card-title>
            <v-data-table :headers="headers" :items="newArr" hide-actions select-all>
              <template v-slot:headers="props">
                <th v-for="header in props.headers" :key="header.text">{{ header.text }}</th>
              </template>
              <template v-slot:items="props">
                <tr>
                  <td text-centre>{{ props.item.item }}</td>
                  <td text-centre>{{ props.item.price }}</td>
                </tr>
              </template>
              <!-- <template slot="items" slot-scope="{ props }">
              <td>{{props.item[header.key]}}</td>
              </template>-->
            </v-data-table>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn dark color="primary" v-on:click="resetItems()">Reset</v-btn>
              <v-btn dark color="primary">Place Order</v-btn>
            </v-card-actions>
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
import { getData } from "./service.js";
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
    newArr: []
  }),
  created() {
    getData().then(data1 => {
      if (this.headers && this.list) {
        this.headers = data1.headers;
        this.list = data1.menu;
      } else {
        this.noData = true;
      }
    });
  },
  methods: {
    popups(item) {
      this.items = item;
      this.dialog = true;
    },
    resetItems() {
      this.orderedItems = [];
      this.flag = true;
    },
    addItems() {
      console.log(this.selected);
      this.newArr = this.orderedItems.concat(this.selected);
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
