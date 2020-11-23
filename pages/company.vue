<template>
  <v-container fluid>
    <v-card flat>
      <v-tabs
        v-model="tabs"
        background-color="teal"
        color="white"
        center-active
      >
        <v-tab :key="'department'"> department </v-tab>
        <v-tab :key="'office'"> office </v-tab>
      </v-tabs>
    </v-card>

    <v-tabs-items v-model="tabs" class="mt-8">
      <v-tab-item>
        <v-data-table
          :headers="headers.department"
          :items="offices"
          :items-per-page="5"
        >
          <template v-slot:[`item.actions`]="{}">
            <v-icon small class="mr-2"> mdi-pencil </v-icon>
            <v-icon v-if="is_admin" small> mdi-delete </v-icon>
          </template>
        </v-data-table>
      </v-tab-item>
      <v-tab-item>
        <v-data-table
          :headers="headers.office"
          :items="departments"
          :items-per-page="5"
        >
          <template v-slot:[`item.actions`]="{}">
            <v-icon small class="mr-2"> mdi-pencil </v-icon>
            <v-icon v-if="is_admin" small> mdi-delete </v-icon>
          </template>
        </v-data-table>
      </v-tab-item>
    </v-tabs-items>

    <fab-button :onClick="onCreate"></fab-button>

    <office-modal
      :title="title"
      v-model="office"
      :show="create.office"
      @show="create.office = $event"
    >
      <v-btn block color="teal" dark>store</v-btn>
    </office-modal>

    <department-modal
      :title="title"
      v-model="department"
      :show="create.department"
      @show="create.department = $event"
    >
      <v-btn block color="teal" dark>store</v-btn>
    </department-modal>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    title: '',
    tabs: 0,
    create: {
      office: false,
      department: false,
    },
    edit: {
      office: false,
      department: false,
    },
    headers: {
      office: [
        { text: 'Office', value: 'name' },
        { text: 'Opening time', value: 'opening_time' },
        { text: 'Closing time', value: 'closing_time' },
        { text: 'Building', value: 'building' },
        { text: 'Address', value: 'address.full_address' },
      ],
      department: [
        { text: 'Department', value: 'name' },
        { text: 'Code', value: 'code' },
        { text: 'Chairman', value: 'chairman.employee.name' },
        { text: 'Office', value: 'office.name' },
      ],
    },
    office: {},
    department: {},
  }),
  computed: {
    is_admin() {
      return this.$auth.user.is_admin
    },
    offices() {},
    departments() {},
  },
  methods: {
    onEdit() {},
    onCreate() {
      this.title = `Create ${!this.tabs ? 'Department' : 'Office'}`
      this.create[!this.tabs ? 'department' : 'office'] = true
    },
  },
}
</script>