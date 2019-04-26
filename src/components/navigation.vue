<template>
  <v-navigation-drawer class="blue lighten-3" v-model="drawer" app>
    <v-list>
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <p v-on:click="navigate('/blog1')">Home</p>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>contact_mail</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <p v-on:click="navigate('/blog2')">Contact</p>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    drawer: {
      type: Boolean
    }
  },
  data() {
    return {
      items: [],
      website: "https://vuejs.org/v2/guide/"
    };
  },

  methods: {
    navigate(name) {
      console.log("called", name);
      this.$router.push(name);
    }
  }
};
</script>

<style>
</style>


