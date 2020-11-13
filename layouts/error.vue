<template>
  <v-app>
    <v-container>
      <!-- Title -->
      <v-row align="center" justify="center">
        <v-col v-if="error.statusCode === 404" cols="12" class="text-center">
          <ErrorContainer src="/404.png" :error="error" />
        </v-col>
        <v-col v-else cols="12" class="text-center">
          <ErrorContainer src="/error.png" :error="error" />
        </v-col>
      </v-row>
      <!-- Button -->
      <v-row> </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      notFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
  head() {
    const { statusCode } = this.error
    const title = statusCode === 404 ? this.notFound : this.otherError
    return {
      title,
    }
  },
}
</script>
