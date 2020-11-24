<template>
  <div class="employee">
    <v-layout row class="mx-7 my-3">
      <v-spacer />
      <v-dialog v-model="dialog" persistent max-width="900px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="mb-10"
            small
            flat
            color="success"
            dark
            v-bind="attrs"
            v-on="on"
          >
            <span>Add New</span>
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>
        <show-profile />
      </v-dialog>
    </v-layout>
    <v-container class="my-5">
      <v-layout row wrap justify-start>
        <v-flex
          xs
          12
          md6
          lg3
          v-for="(employee, index) in employees"
          :key="index"
        >
          <v-card flat class="grey lighten-4 text-sm-center ma-7">
            <v-responsive class="pt-4">
              <v-badge
                class="mt-5"
                bordered
                bottom
                color="green accent-4"
                cross
                offset-x="32"
                offset-y="32"
              >
                <v-avatar size="150">
                  <v-img :src="employee.image"></v-img>
                </v-avatar>
              </v-badge>
            </v-responsive>
            <v-card-text>
              <div class="text-h6">{{ employee.name }}</div>
              <div class="grey--text">{{ employee.departement }}</div>
            </v-card-text>
            <v-card-action>
              <v-dialog v-model="dialog" persistent max-width="900px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="mb-10"
                    small
                    flat
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                  >
                    Show Profile
                  </v-btn>
                </template>
                <show-profile @dialogfalse="this.dialog = false" />
              </v-dialog>
            </v-card-action>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <div class="text-center">
      <v-pagination
        v-model="page"
        :length="4"
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
      ></v-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      employees: [
        {
          name: 'Theresa Webb',
          departement: 'Human Resource',
          image: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        },
        {
          name: 'Ronald Richards',
          departement: 'Production',
          image: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        },
        {
          name: 'Floyd Miles',
          departement: 'Marketing',
          image: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        },
        {
          name: 'Arlene McCoy',
          departement: 'Accounting & Finance',
          image: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        },
        {
          name: 'Esther Howard',
          departement: 'Purchasing',
          image: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        },
        {
          name: 'Savannah Nguyen',
          departement: 'Research & Development',
          image: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        },
        {
          name: 'Brooklyn Simmons',
          departement: 'Human Resource',
          image: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        },
        {
          name: 'Darrell Steward',
          departement: 'Marketing',
          image: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        },
        {
          name: 'Jacob Jones',
          departement: 'Production',
          image: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        },
        {
          name: 'Devon Lane',
          departement: 'Production',
          image: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        },
        {
          name: 'Eleanor Pena',
          departement: 'Purchasing',
          image: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        },
        {
          name: 'Dianne Russell',
          departement: 'Marketing',
          image: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        },
      ],
      dialog: false,
    }
  },
}
</script>

<style>
</style>