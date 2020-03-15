<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down">Contacts</span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        label="Search"
        v-model="search"
      />
      <v-btn icon class="ml-2" @click="submitSearch">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-spacer />
    </v-app-bar>

    <router-view />
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapGetters({
      total: "totalContacts"
    })
  },
  data: () => ({
    search: ""
  }),
  methods: {
    submitSearch() {
      this.$store.commit("search", this.search);
      this.$store.dispatch({ type: "fetchContacts" });
    }
  }
};
</script>
