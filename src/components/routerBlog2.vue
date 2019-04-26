<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm6 md4>
          <v-card class="elevation-12">
            <v-card-title>{{ title }}</v-card-title>
            <v-card-text>{{ text }}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-snackbar v-model="snackbar" :top="y === 'top'">
        {{ text }}
        <v-btn color="pink" flat @click="snackbar = false">Close</v-btn>
      </v-snackbar>
    </v-container>
  </v-content>
</template>
<script>
export default {
  name: "blog1",
  data() {
    return {
      title: "Blog2",
      text: "welcome to page"
    };
  }
};
</script>
<style scoped>
</style>