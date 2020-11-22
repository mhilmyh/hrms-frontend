<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="6" md="3">
        <summary-card
          :loading="loading"
          v-model="count_employee"
          message="Total employee"
          color="cyan lighten-2"
        ></summary-card>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <summary-card
          :loading="loading"
          v-model="count_office"
          message="Total office"
          color="teal lighten-2"
        ></summary-card>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <summary-card
          :loading="loading"
          v-model="count_department"
          message="Total department"
          color="green lighten-2"
        ></summary-card>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <summary-card
          :loading="loading"
          v-model="count_timesheet"
          message="Total timesheet"
          color="lime lighten-2"
        ></summary-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="6">
        <top-employee-card :items="best_employee"></top-employee-card>
      </v-col>

      <v-col cols="12" sm="6">
        <today-timesheet-card :items="latest_timesheet"></today-timesheet-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    count_employee() {
      return this.$store.state.dashboard.count_employee
    },
    count_office() {
      return this.$store.state.dashboard.count_office
    },
    count_department() {
      return this.$store.state.dashboard.count_department
    },
    count_timesheet() {
      return this.$store.state.dashboard.count_timesheet
    },
    latest_timesheet() {
      return this.$store.state.dashboard.latest_timesheet
    },
    best_employee() {
      return this.$store.state.dashboard.best_employee
    },
    loading() {
      return this.$store.state.loading.dashboard
    },
  },
  mounted() {
    this.$store.dispatch('dashboard/fetch')
  },
}
</script>