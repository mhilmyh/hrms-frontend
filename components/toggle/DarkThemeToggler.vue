<template>
  <v-btn icon @click="switchLight()">
    <v-icon>mdi-weather-sunny</v-icon>
  </v-btn>
</template>

<script>
export default {
  mounted() {
    this.loadPref()
  },
  methods: {
    switchLight() {
      this.$vuetify.theme.isDark = !this.$vuetify.theme.isDark
      if (localStorage) localStorage.setItem('dark', this.$vuetify.theme.isDark)
    },
    loadPref() {
      if (localStorage) {
        const isDark = localStorage.getItem('dark')
        this.$vuetify.theme.isDark = isDark === 'true'
      }
    },
  },
}
</script>