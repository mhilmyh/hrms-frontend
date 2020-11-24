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
          :items="departments"
          :items-per-page="5"
        >
          <template v-slot:[`item.actions`]="{ item }">
            <v-btn
              v-if="is_admin"
              color="warning"
              small
              icon
              outlined
              class="ma-1"
              @click.stop="onEdit(item)"
            >
              <v-icon small>mdi-pencil</v-icon>
            </v-btn>
            <v-btn
              v-if="is_admin"
              color="error"
              small
              icon
              outlined
              class="ma-1"
              @click.stop="onDelete('department', item.id)"
            >
              <v-icon small>mdi-delete</v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-tab-item>
      <v-tab-item>
        <v-data-table
          :headers="headers.office"
          :items="offices"
          :items-per-page="5"
        >
          <template v-slot:[`item.is_branch`]="{ item }">
            <v-chip dark :color="item.is_branch ? 'orange' : 'green'">
              {{ item.is_branch ? 'Branch Office' : 'Head Office' }}
            </v-chip>
          </template>
          <template v-slot:[`item.actions`]="{ item }">
            <v-btn
              v-if="is_admin"
              color="warning"
              small
              icon
              outlined
              class="ma-1"
              @click.stop="onEdit(item)"
            >
              <v-icon small>mdi-pencil</v-icon>
            </v-btn>
            <v-btn
              v-if="is_admin"
              color="error"
              small
              icon
              outlined
              class="ma-1"
              @click.stop="onDelete('office', item.id)"
            >
              <v-icon small>mdi-delete</v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-tab-item>
    </v-tabs-items>

    <fab-button :onClick="onCreate"></fab-button>

    <office-modal
      :title="title"
      v-model="office"
      :show="modal.office"
      @show="modal.office = $event"
    >
      <v-btn block color="teal" dark @click.stop="onClick('office')">
        {{ mode }}
      </v-btn>
    </office-modal>

    <department-modal
      :title="title"
      v-model="department"
      :show="modal.department"
      @show="modal.department = $event"
    >
      <v-btn block color="teal" dark @click.stop="onClick('department')">
        {{ mode }}
      </v-btn>
    </department-modal>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    title: '',
    tabs: 0,
    mode: 'store',
    modal: {
      office: false,
      department: false,
    },
    headers: {
      office: [
        { text: 'Office', value: 'name' },
        { text: 'Opening time', value: 'opening_time' },
        { text: 'Closing time', value: 'closing_time' },
        { text: 'Building', value: 'building' },
        { text: 'Branch Office', value: 'is_branch' },
        { text: 'Address', value: 'address.full_address' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      department: [
        { text: 'Department', value: 'name' },
        { text: 'Code', value: 'code' },
        { text: 'Chairman', value: 'chairman.employee.full_name' },
        { text: 'Office', value: 'office.name' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
    },
    office: {},
    department: {},
  }),
  computed: {
    is_admin() {
      return this.$auth.user.is_admin
    },
    offices() {
      return this.$store.state.company.offices
    },
    departments() {
      return this.$store.state.company.departments
    },
  },
  mounted() {
    this.$store.dispatch('company/index')
  },
  methods: {
    onEdit(item) {
      this.mode = 'update'
      this[!this.tabs ? 'department' : 'office'] = this.$helper[
        !this.tabs ? 'toDepartment' : 'toOffice'
      ](item)

      this.title = `Edit ${!this.tabs ? 'Department' : 'Office'}`
      this.modal[!this.tabs ? 'department' : 'office'] = true
    },
    onCreate() {
      this.mode = 'create'
      this[!this.tabs ? 'department' : 'office'] = this.$helper[
        !this.tabs ? 'defaultDepartment' : 'defaultOffice'
      ]()

      this.title = `New ${!this.tabs ? 'Department' : 'Office'}`
      this.modal[!this.tabs ? 'department' : 'office'] = true
    },
    async onClick(type) {
      await this.$store.dispatch('company/' + this.mode, {
        type,
        [type]: this[type],
      })
    },
    async onDelete(type, id) {
      await this.$store.dispatch('company/delete', { type, id })
    },
  },
  head: () => ({
    title: 'Company',
  }),
}
</script>