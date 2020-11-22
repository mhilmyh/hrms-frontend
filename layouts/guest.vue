<template>
  <v-theme-provider>
    <v-app>
      <v-main>
        <v-container
          fluid
          class="d-flex justify-center align-center grey lighten-3 full-height ma-0 pa-8"
        >
          <nuxt />
        </v-container>
      </v-main>
    </v-app>
  </v-theme-provider>
</template>

<style scoped>
.full-height {
  height: 100%;
}
</style>
