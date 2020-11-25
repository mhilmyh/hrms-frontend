<template>
  <v-container>
    <v-row>
      <v-col
        v-for="user in users"
        :key="user.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <employee-card :value="user"></employee-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    users() {
      return this.$store.state.user.all
    },
  },
  head() {
    return {
      title: 'Employee',
    }
  },
}
</script>

<style>
</style>