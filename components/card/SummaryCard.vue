<template>
  <v-card
    v-if="!loading"
    outlined
    height="100%"
    class="px-4 black--text"
    :color="color"
  >
    <v-card-title class="black--text">{{ value }}</v-card-title>
    <v-card-subtitle class="black--text">{{ message }}</v-card-subtitle>
  </v-card>
  <v-skeleton-loader v-else type="list-item-two-line"> </v-skeleton-loader>
</template>

<script>
export default {
  props: {
    value: Number,
    message: String,
    loading: {
      type: Boolean,
      default: false,
    },
    color: String,
  },
}
</script>