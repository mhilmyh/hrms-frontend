<template>
  <v-card v-if="!loading" outlined height="100%" class="px-4">
    <v-card-title>{{ value }}</v-card-title>
    <v-card-subtitle>{{ message }}</v-card-subtitle>
  </v-card>
  <v-skeleton-loader v-else type="list-item-two-line"> </v-skeleton-loader>
</template>

<script>
export default {
  props: {
    value: Number,
    message: {
      type: String,
      default: '',
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
}
</script>