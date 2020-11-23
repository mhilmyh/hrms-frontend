<template>
  <div>
    <office-modal
      title="Create Office"
      :show="office"
      @show="office = $event"
    ></office-modal>
    <department-modal
      title="Create Department"
      :show="department"
      @show="department = $event"
    ></department-modal>
    <v-btn @click="office = !office">office</v-btn>
    <v-btn @click="department = !department">department</v-btn>
  </div>
</template>

<script>
export default {
  data: () => ({
    office: false,
    department: false,
  }),
}
</script>