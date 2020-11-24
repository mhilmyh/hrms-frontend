<template>
  <v-card outlined class="px-4 overflow-y-auto">
    <v-card-title>
      <span class="text-center" style="width: 100%">Today Timesheet</span>
    </v-card-title>

    <template v-if="!!latest_timesheet.length">
      <v-card
        v-for="item in latest_timesheet"
        :key="item.id"
        flat
        outlined
        class="my-2"
      >
        <v-card-title>
          <v-container fluid class="pa-0 d-flex align-center">
            <v-chip
              label
              x-small
              dark
              :color="item.is_approved ? 'green' : 'orange'"
              class="mr-1 px-2 py-0 text-center"
            >
              {{ item.is_approved ? 'Approved' : 'Not Approved' }}
            </v-chip>
            <span class="caption">
              {{ item.user.employee.full_name }}
            </span>
          </v-container>
        </v-card-title>
        <v-card-subtitle>
          <p class="subtitle">Submitted {{ $helper.when(item.created_at) }}</p>
        </v-card-subtitle>
      </v-card>
    </template>

    <v-container class="pt-2 pb-8 px-0 d-flex justify-center">
      <v-btn outlined color="error" x-small @click.stop="onClear()">
        clear all timesheet
      </v-btn>
    </v-container>
  </v-card>
</template>

<script>
export default {
  computed: {
    latest_timesheet() {
      return this.$store.state.dashboard.latest_timesheet
    },
  },
  methods: {
    async onClear() {
      await this.$store.dispatch('timesheet/clear')
    },
  },
}
</script>