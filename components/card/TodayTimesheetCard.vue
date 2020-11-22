<template>
  <v-card outlined class="px-4 overflow-y-auto">
    <v-card-title>
      <span class="text-center" style="width: 100%">Today Timesheet</span>
    </v-card-title>

    <template v-if="!!items.length">
      <v-card v-for="item in items" :key="item.id" flat outlined class="my-2">
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
              Submitted {{ $helper.when(item.created_at) }}
            </span>
          </v-container>
        </v-card-title>
        <v-card-subtitle>
          <p class="subtitle">{{ item.user.email }}</p>
        </v-card-subtitle>
      </v-card>
    </template>
  </v-card>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: [],
    },
  },
}
</script>