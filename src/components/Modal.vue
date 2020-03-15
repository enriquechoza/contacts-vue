<template>
  <div>
    <v-btn bottom color="pink" dark fab fixed right @click="dialog = !dialog">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" width="800px">
      <v-card>
        <v-card-title class="primary">
          <h3 class="font-weight-bold">Create contact</h3>
        </v-card-title>
        <v-container>
          <v-form>
            <v-row class="mx-2">
              <v-col class="align-center justify-space-between" cols="6">
                <v-row align="center" class="mr-0">
                  <v-avatar size="40px" class="mx-3">
                    <img
                      src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                      alt=""
                    />
                  </v-avatar>
                  <v-text-field placeholder="First Name" v-model="firstName" />
                </v-row>
              </v-col>
              <v-col cols="6">
                <v-text-field placeholder="Last Name" v-model="lastName" />
              </v-col>
              <v-col cols="6">
                <v-text-field
                  type="number"
                  prepend-icon="mdi-cake"
                  placeholder="Age"
                  v-model="age"
                />
              </v-col>
              <v-col cols="6">
                <v-text-field
                  prepend-icon="mdi-briefcase"
                  placeholder="Company"
                  v-model="company"
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  prepend-icon="mdi-mail"
                  placeholder="Email"
                  v-model="email"
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  type="tel"
                  prepend-icon="mdi-phone"
                  placeholder="(000) 000 - 0000"
                  v-model="phone"
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  prepend-icon="mdi-city"
                  placeholder="City"
                  v-model="city"
                />
              </v-col>
            </v-row>
          </v-form>
        </v-container>
        <v-card-actions>
          <v-spacer />
          <v-btn text @click="dialog = false">Cancel</v-btn>
          <v-btn text color="primary" @click="submitContact" :loading="loading"
            >Save</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "Modal",
  data: () => ({
    loading: false,
    dialog: false,
    firstName: "",
    age: 0,
    lastName: "",
    company: "",
    email: "",
    phone: "",
    city: ""
  }),
  methods: {
    async submitContact() {
      this.loading = true;
      await this.$store.dispatch("submitContact", {
        first_name: this.firstName,
        last_name: this.lastName,
        age: this.age,
        email: this.email,
        company: this.company,
        phone: this.phone,
        city: this.city
      });
      this.loading = false;
      this.dialog = false;
    }
  }
};
</script>
