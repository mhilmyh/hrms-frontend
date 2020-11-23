<template>
  <v-theme-provider>
    <v-app>
      <!-- Drawer -->
      <v-navigation-drawer v-model="drawer" app temporary>
        <v-container
          class="text-center blue darken-1 blue--text text--lighten-5"
        >
          <h3>Hument</h3>
          <p class="text-caption">Human Resource Management System</p>
        </v-container>
        <v-divider />
        <v-list dense nav flat>
          <v-list-item
            v-for="(item, i) in menu"
            :key="i"
            active-class="blue lighten-5"
            color="black"
            :to="item.to"
            router
            exact
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="font-weight-light">
                {{ item.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <!-- App Bar -->
      <v-app-bar app flat color="primary" dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>{{ page_name }}</v-toolbar-title>
        <v-spacer />
        <notif-container></notif-container>
        <dark-theme-toggler></dark-theme-toggler>
        <v-btn v-if="$auth.loggedIn" small text @click.stop="logout()">
          logout
        </v-btn>
      </v-app-bar>
      <!-- Main Content -->
      <v-main>
        <v-container>
          <nuxt ref="page" />
        </v-container>
      </v-main>
    </v-app>
  </v-theme-provider>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      menu: [
        {
          icon: 'mdi-view-dashboard-outline',
          title: 'Dashboard',
          to: '/dashboard',
        },
        {
          icon: 'mdi-clipboard-check-outline',
          title: 'Daily Timesheet',
          to: '/timesheet',
        },
        {
          icon: 'mdi-city-variant-outline',
          title: 'Manage Company',
          to: '/company',
        },
        {
          icon: 'mdi-account-supervisor-circle-outline',
          title: 'Manage Employee',
          to: '/employee',
        },
        // {
        //   icon: 'mdi-face',
        //   title: 'Profile',
        //   to: '/profile',
        // },
      ],
    }
  },
  computed: {
    page_name() {
      return ''
    },
  },
  methods: {
    async logout() {
      try {
        await this.$auth.logout()
      } catch (err) {
        this.$helper.showError(err, this.$store)
      }
    },
  },
}
</script>

<style>
.v-card__text,
.v-card__title {
  word-break: normal; /* maybe !important  */
}
</style>