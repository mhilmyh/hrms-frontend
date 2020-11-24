<template>
  <v-theme-provider>
    <v-app>
      <v-main>
        <v-container
          fluid
          :class="`d-flex justify-center align-center grey ${
            is_dark ? 'darken' : 'lighten'
          }-2 full-height ma-0 pa-8`"
        >
          <nuxt />
        </v-container>
      </v-main>
    </v-app>
  </v-theme-provider>
</template>

<script>
export default {
  computed: {
    is_dark() {
      return this.$vuetify.theme.isDark
    },
  },
}
</script>

<style>
.full-height {
  height: 100%;
}
.v-card__text,
.v-card__title {
  word-break: normal; /* maybe !important  */
}
</style>
