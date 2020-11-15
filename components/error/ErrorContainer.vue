<template>
  <v-container class="root">
    <v-container class="d-flex justify-center">
      <v-img :src="src" max-width="256" aspect-ratio="1" />
    </v-container>
    <v-container class="d-flex justify-center">
      <p>
        Please try to reload the page or go to home page. If problem still
        occured, contact the administrator.
      </p>
    </v-container>
    <v-container>
      <v-sheet class="text-left blue-grey lighten-2" rounded>
        <v-container>
          <div
            class="text-overline"
            v-for="(k, i) in Object.keys(error)"
            :key="i"
          >
            {{ k }} : {{ error[k] }}
          </div>
        </v-container>
      </v-sheet>
    </v-container>
    <v-container class="d-flex justify-center">
      <v-container>
        <v-btn outlined block @click="reload">
          <v-icon left>mdi-reload</v-icon>
          Reload
        </v-btn>
      </v-container>
      <v-container>
        <v-btn outlined block to="/" exact>
          <v-icon left>mdi-home</v-icon>
          Home
        </v-btn>
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
  computed: {
    jsonError() {
      return JSON.stringify(this.$props.error, null, 4)
    },
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
#json-error {
  width: 100%;
  word-break: break-all;
  word-wrap: break-word;
}
</style>