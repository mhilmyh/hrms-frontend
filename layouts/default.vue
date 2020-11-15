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
            active-class="primary"
            color="white"
            :to="item.to"
            router
            exact
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="font-weight-light">{{
                item.title
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <!-- App Bar -->
      <v-app-bar app flat color="primary" dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>{{ pageName }}</v-toolbar-title>
        <v-spacer />
        <v-btn icon>
          <v-icon>mdi-bell-outline</v-icon>
        </v-btn>
        <v-btn icon @click="switchLight()">
          <v-icon>mdi-weather-sunny</v-icon>
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
        {
          icon: 'mdi-face',
          title: 'Profile',
          to: '/profile',
        },
      ],
    }
  },
  computed: {
    pageName() {
      return ''
    },
  },
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
