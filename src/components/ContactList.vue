<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">
          Contacts
        </h2>

        <v-card>
          <v-card-title> </v-card-title>
          <v-data-table
            :headers="headers"
            :items="contacts"
            :loading="isLoading"
            class="elevation-1"
          ></v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ContactList",

  data: () => ({
    headers: [
      { text: "First Name", value: "first_name" },
      { text: "Last Name", value: "last_name" },
      { text: "Age", value: "age" },
      { text: "Company", value: "company" },
      { text: "Email", value: "email" },
      { text: "Phone", value: "phone" },
      { text: "City", value: "city" }
    ]
  }),
  computed: {
    ...mapGetters({
      contacts: "contactList",
      total: "totalContacts",
      isLoading: "isLoading"
    })
  },
  methods: {
    fetchContacts() {
      this.$store.dispatch({ type: "fetchContacts" });
    }
  },
  created() {
    this.fetchContacts();
  }
};
</script>
