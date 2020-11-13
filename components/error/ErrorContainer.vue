<template>
  <v-container class="root">
    <v-container class="d-flex justify-center">
      <v-img :src="src" max-width="256" aspect-ratio="1" />
    </v-container>
    <v-container class="d-flex justify-center">
      <p>
        Please reload the page or go to home page. If problem still occured,
        contact the administrator.
      </p>
    </v-container>
    <v-container>
      <v-sheet class="text-left indigo lighten-5" rounded>
        <v-container>
          <pre class="m-5">{{ JSON.stringify(error, null, 2) }}</pre>
        </v-container>
      </v-sheet>
    </v-container>
    <v-container class="d-flex justify-center">
      <v-container>
        <v-btn outlined block @click="reload">Reload</v-btn>
      </v-container>
      <v-container>
        <v-btn outlined block to="/" exact>Home</v-btn>
      </v-container>
    </v-container>
  </v-container>
</template>

<script>
export default {
  props: {
    src: { type: String, default: '/error.png' },
    error: { type: Object, default: null },
  },
  methods: {
    reload() {
      this.$router.go(0)
    },
  },
}
</script>

<style scoped>
.root {
  max-width: 640px;
}
</style>