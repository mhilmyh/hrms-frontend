<template>
  <div>
    <office-modal
      title="New Office"
      :show="office"
      @show="office = $event"
    ></office-modal>
    <department-modal
      title="New Department"
      :show="department"
      @show="department = $event"
    ></department-modal>
    <timesheet-modal
      title="Daily Timesheet"
      :show="timesheet"
      @show="timesheet = $event"
    ></timesheet-modal>
    <v-btn @click="office = !office">office</v-btn>
    <v-btn @click="department = !department">department</v-btn>
    <v-btn @click="timesheet = !timesheet">timesheet</v-btn>
  </div>
</template>

<script>
export default {
  data: () => ({
    office: false,
    department: false,
    timesheet: false,
  }),
}
</script>