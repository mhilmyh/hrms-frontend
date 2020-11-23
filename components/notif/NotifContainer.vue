<template>
  <v-menu
    v-model="menu"
    open-on-focus
    open-on-hover
    :close-on-click="false"
    :close-on-content-click="false"
    bottom
    left
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-icon>mdi-bell-outline</v-icon>
      </v-btn>
    </template>

    <v-card min-width="200px">
      <v-list>
        <v-list-item style="min-height: 0">
          <v-list-item-content class="my-0 py-0">
            <span class="caption">Notification</span>
          </v-list-item-content>
          <v-list-item-action class="my-0 py-0">
            <v-btn icon x-small @click="menu = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-container v-if="loading" fluid>
        <v-skeleton-loader
          type="list-item-two-line"
          loading
        ></v-skeleton-loader>
        <v-skeleton-loader
          type="list-item-two-line"
          loading
        ></v-skeleton-loader>
        <v-skeleton-loader
          type="list-item-two-line"
          loading
        ></v-skeleton-loader>
      </v-container>

      <v-list v-else-if="notifications.length > 0">
        <v-list-item v-for="notif in notifications" :key="notif.id">
          <v-list-item-content>notif</v-list-item-content>
          <v-list-item-action>
            <v-btn icon @click="clearNotif(notif.id)">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>

      <v-container v-else fluid>
        <v-container fluid class="d-flex justify-center align-center">
          <v-img
            src="/general/bell.png"
            max-width="32"
            aspect-ratio="1"
            style="width: 100%"
          ></v-img>
        </v-container>
        <p class="text-center" style="width: 100%">It's Empty</p>
      </v-container>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
    }
  },
  computed: {
    notifications() {
      return this.$store.state.user.notif
    },
    loading() {
      return this.$store.state.loading.notif
    },
  },
  watch: {
    menu(v) {
      if (v === true) this.$store.dispatch('user/notif')
    },
  },
  methods: {
    clearNotif(id = '') {
      this.$store.dispatch('user/clear', id)
    },
  },
}
</script>

<style scoped>
</style>