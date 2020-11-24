<template>
  <v-btn
    class="ma-8 fab-button"
    large
    fab
    dark
    color="teal"
    @click.stop="onClick"
  >
    <v-icon dark> mdi-plus </v-icon>
  </v-btn>
</template>

<script>
export default {
  props: {
    onClick: Function,
  },
}
</script>

<style scoped>
.fab-button {
  position: fixed;
  bottom: 0;
  right: 0;
}
</style>