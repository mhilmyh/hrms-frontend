<template>
  <v-card flat class="my-2">
    <v-card-title>
      {{ timesheet.user.employee.full_name }}
    </v-card-title>
    <v-card-subtitle>
      {{ $helper.when(timesheet.created_at) }}
    </v-card-subtitle>
    <v-container>
      <v-chip
        :color="timesheet.is_approved ? 'success' : 'error'"
        class="mr-2 caption"
        small
      >
        {{ timesheet.is_approved ? 'Approved' : 'Not Approved' }}
      </v-chip>
      <v-chip
        dark
        outlined
        :color="timesheet.user.is_login ? 'green' : 'grey'"
        small
      >
        <b>{{ timesheet.user.is_login ? 'Online' : 'Offlince' }}</b>
      </v-chip>
    </v-container>
    <v-container class="pa-0 d-flex justify-center">
      <v-rating
        background-color="grey"
        color="warning"
        hover
        length="10"
        dense
        small
        readonly
        :value="timesheet.user.employee.rating"
      ></v-rating>
    </v-container>
    <v-card-text>
      <v-container class="pa-0">
        <v-row>
          <v-col>
            <b>Job Position</b>
          </v-col>
          <v-col>
            <span>{{ timesheet.user.employee.job_position }}</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <b>Phone</b>
          </v-col>
          <v-col>
            <span>{{ timesheet.user.employee.phone }}</span>
          </v-col>
        </v-row>
      </v-container>
      <v-container class="overflow-y-auto" style="max-height: 256px">
        <v-row v-for="(activity, index) in timesheet.activities" :key="index">
          <v-col cols="4"> {{ activity.desc }} </v-col>
          <v-col cols="4"> {{ activity.start_time }} </v-col>
          <v-col cols="4"> {{ activity.stop_time }} </v-col>
          <v-col cols="12" class="d-flex justify-center">
            <v-divider></v-divider>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-btn
        v-if="!timesheet.is_approved"
        block
        color="teal"
        small
        dark
        @click.stop="onApprove(timesheet.id)"
      >
        approve
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    timesheet: Object,
  },
  methods: {
    async onApprove(id) {
      console.log(id)
      await this.$store.dispatch('timesheet/approve', id)
    },
  },
}
</script>