<template>
  <v-container>
    <v-card flat>
      <v-tabs
        v-model="tabs"
        background-color="teal"
        color="white"
        center-active
      >
        <v-tab :key="'today'"> today </v-tab>
        <v-tab :key="'hisotries'"> hisotries </v-tab>
      </v-tabs>
    </v-card>

    <v-tabs-items v-model="tabs" class="mt-8">
      <v-tab-item>
        <template v-if="!loading">
          <v-row v-if="!!today_timesheets.length">
            <v-col
              v-for="(timesheet, index) in today_timesheets"
              :key="index"
              cols="12"
              sm="6"
              md="4"
              lg="3"
            >
              <timesheet-container :timesheet="timesheet"></timesheet-container>
            </v-col>
          </v-row>
          <v-row v-else>
            <v-col cols="12">
              <p class="text-center grey--text">There is no timesheet</p>
            </v-col>
          </v-row>
        </template>
        <template v-else>
          <v-row>
            <v-col
              v-for="n in [1, 2, 3, 4]"
              :key="n"
              cols="12"
              sm="6"
              md="4"
              lg="3"
            >
              <v-skeleton-loader type="card, paragraph"></v-skeleton-loader>
            </v-col>
          </v-row>
        </template>
      </v-tab-item>
      <v-tab-item>
        <v-data-table
          :headers="headers"
          :items="timesheets"
          :items-per-page="5"
        >
          <template v-slot:[`item.is_approved`]="{ item }">
            <v-chip :color="item.is_approved ? 'success' : 'error'">
              {{ item.is_approved ? 'Done' : 'Not Yet' }}
            </v-chip>
          </template>
          <template v-slot:[`item.created_at`]="{ item }">
            {{ $helper.when(item.created_at) }}
          </template>
          <template v-if="is_admin" v-slot:[`item.actions`]="{ item }">
            <v-btn
              color="error"
              small
              icon
              outlined
              class="ma-1"
              @click.stop="onDelete(item.id)"
            >
              <v-icon small>mdi-delete</v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-tab-item>
    </v-tabs-items>

    <timesheet-modal
      title="Daily Timesheet"
      v-model="activities"
      :show="modal"
      @show="modal = $event"
    >
      <v-btn block color="teal" dark @click.stop="onSubmit()"> sumbit </v-btn>
    </timesheet-modal>
    <fab-button :onClick="onClick"></fab-button>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      tabs: 0,
      modal: false,
      activities: [{ desc: '', start_time: '', stop_time: '' }],
      headers: [
        { text: 'Employee', value: 'user.employee.full_name' },
        { text: 'Approved', value: 'is_approved' },
        { text: 'Created', value: 'created_at' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
    }
  },
  computed: {
    is_admin() {
      return this.$auth.user.is_admin
    },
    timesheets() {
      return this.$store.state.timesheet.all
    },
    today_timesheets() {
      return this.$store.state.timesheet.today
    },
    loading() {
      return this.$store.state.loading.timesheet
    },
  },
  mounted() {
    this.$store.dispatch('timesheet/index')
  },
  methods: {
    onClick() {
      this.modal = true
    },
    async onSubmit() {
      await this.$store.dispatch('timesheet/create', this.activities)
    },
    async onDelete(id) {
      await this.$store.dispatch('timesheet/delete', id)
    },
  },
  head: () => ({
    title: 'Timesheet',
  }),
}
</script>
