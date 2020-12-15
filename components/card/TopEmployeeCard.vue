<template>
  <div>
    <v-card v-if="!loading" outlined height="100%" class="px-4">
      <v-card-title>
        <span class="text-center" style="width: 100%">Top Employee</span>
      </v-card-title>
      <v-container fluid class="d-flex justify-center align-center">
        <v-img
          src="/medal/podium.png"
          max-width="128"
          aspect-ratio="1"
          style="width: 100%"
        ></v-img>
      </v-container>
      <v-container v-if="is_admin" class="d-flex justify-center text-center">
        <v-btn outlined color="error" x-small @click.stop="sure = true">
          reset rating
        </v-btn>
      </v-container>
      <v-list v-if="!!best_employee.length">
        <v-list-item
          three-line
          v-for="(item, index) in best_employee"
          :key="item.id"
        >
          <v-list-item-avatar>
            <v-img
              :src="`/medal/medal-${index + 1}.png`"
              max-width="32"
              aspect-ratio="1"
              style="width: 100%"
            ></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ item.full_name }}</v-list-item-title>
            <v-list-item-subtitle>
              {{ item.job_position }}
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              <v-chip small color="accent" class="overline">
                {{ item.rating }}
              </v-chip>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
    <v-skeleton-loader v-else type="card, paragraph"></v-skeleton-loader>
    <are-you-sure
      v-model="sure"
      title="Reset Top Employee Rating"
      :fn="onReset"
    ></are-you-sure>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sure: false,
    }
  },
  computed: {
    is_admin() {
      return this.$auth.user.is_admin
    },
    best_employee() {
      return this.$store.state.dashboard.best_employee
    },
    loading() {
      return this.$store.state.loading.dashboard
    },
  },
  methods: {
    async onReset() {
      await this.$store.dispatch('dashboard/reset')
    },
  },
}
</script>