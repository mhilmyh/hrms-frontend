<template>
  <v-alert
    dense
    dismissible
    outlined
    text
    :type="$store.state.alert.type"
    v-model="alert"
    class="alert-container"
  >
    {{ $store.state.alert.message }}
  </v-alert>
</template>

<script>
export default {
  data() {
    return {
      alert: !!this.$store.state.alert.message,
    }
  },
  watch: {
    alert(v) {
      if (v === false) this.$store.dispatch('alert/hide')
    },
    '$store.state.alert.message'(v) {
      this.alert = !!v
    },
  },
}
</script>

<style scoped>
.alert-container {
  width: 100%;
}
</style>