<template>
  <div>
    <v-card v-if="!loading" flat elevation="0" outlined>
      <v-container class="d-flex justify-center align-center">
        <v-badge
          color="green"
          :value="value.is_login"
          bottom
          offset-x="28"
          offset-y="28"
        >
          <v-avatar size="128">
            <v-img :src="preview" aspect-ratio="1" max-width="128"></v-img>
          </v-avatar>
        </v-badge>
      </v-container>

      <v-card-text class="text-center">
        <div class="text-h6">{{ value.employee.full_name }}</div>
        <div class="grey--text">{{ value.email }}</div>
      </v-card-text>
      <v-container class="pa-0 ma-0 d-flex justify-center" fluid>
        <v-rating
          :value="value.employee.rating"
          hover
          length="10"
          dense
          small
          readonly
          color="warning"
          background-color="warning"
        ></v-rating>
      </v-container>

      <v-container fluid class="d-flex justify-center">
        <v-btn small color="blue" dark @click.stop="onShowProfile()"
          >show profile</v-btn
        >
      </v-container>

      <v-card-actions v-if="is_admin">
        <v-row justify="center" align="center">
          <v-col cols="6">
            <v-btn small outlined block @click.stop="vote(1)" color="green">
              <v-icon left small>mdi-arrow-up</v-icon>
              <span>up</span>
            </v-btn>
          </v-col>
          <v-col cols="6">
            <v-btn small outlined block @click.stop="vote(-1)" color="red">
              <v-icon left small>mdi-arrow-down</v-icon>
              <span>down</span>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
    <v-skeleton-loader v-else type="card"></v-skeleton-loader>

    <profile-container
      :show="dialog"
      @show="dialog = $event"
      :value="user"
      :canUpdate="false"
    ></profile-container>
  </div>
</template>

<script>
export default {
  props: {
    value: Object,
  },
  data() {
    return {
      user: {},
      dialog: false,
    }
  },
  computed: {
    preview() {
      if (this.$props.value.employee.image) {
        return this.$props.value.employee.image.url
      } else if (this.$props.value.employee.gender === 'Male') {
        return '/avatar/man.png'
      } else if (this.$props.value.employee.gender === 'Female') {
        return '/avatar/woman.png'
      } else return '/general/placeholder.png'
    },
    is_admin() {
      return this.$auth.user.is_admin
    },
    loading() {
      return this.$store.state.loading.profile
    },
  },
  watch: {
    async dialog(_) {
      await this.$store.dispatch('alert/hide')
    },
  },
  methods: {
    async vote(v = 0) {
      await this.$store.dispatch('user/update', {
        id: this.$props.value.id,
        rating: this.$props.value.employee.rating + v,
      })
    },
    onShowProfile() {
      this.user = this.$helper.toUser(this.$props.value)
      this.dialog = true
    },
  },
}
</script>