<template>
  <v-container class="text-center">
    <v-container fluid class="d-flex justify-center">
      <v-avatar
        v-if="!loading"
        color="grey lighten-3"
        rounded
        size="128"
        @click="showOverlay()"
      >
        <v-img
          :src="image_url"
          aspect-ratio="1"
          max-width="128px"
          contain
          class="profile-avatar-container"
        ></v-img>
        <v-overlay absolute :value="overlay">
          <v-btn
            color="teal"
            dark
            fab
            small
            @click="showChangeImage()"
            style="z-index: 1000"
          >
            <v-icon>mdi-camera-outline</v-icon>
          </v-btn>
        </v-overlay>
      </v-avatar>
      <v-skeleton-loader v-else type="image"></v-skeleton-loader>
    </v-container>
    <v-container class="pa-0" v-if="!loading">
      <h5 class="caption">{{ full_name }}</h5>
      <div class="caption grey--text">{{ email }}</div>
    </v-container>
    <v-container class="pa-0" v-else>
      <v-skeleton-loader type="text@2"></v-skeleton-loader>
    </v-container>
    <v-container class="py-1">
      <v-rating
        :value="rating"
        hover
        length="10"
        dense
        small
        readonly
        color="warning"
        background-color="warning"
      ></v-rating>
    </v-container>
    <v-container class="py-0">
      <v-chip :ripple="false" small color="teal" label dark>
        {{ job_position }}
      </v-chip>
    </v-container>
    <v-container class="pb-0">
      <v-btn outlined block x-small color="teal" @click.stop="onEdit()"
        >edit</v-btn
      >
    </v-container>

    <v-dialog v-model="dialog.image" persistent max-width="600px">
      <v-card>
        <v-card-title class="teal lighten-1 white--text">
          <span class="body-1"> Change Image </span>
          <v-spacer></v-spacer>
          <v-btn icon dark @click.stop="dialog.image = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-container>
          <alert-container></alert-container>
        </v-container>
        <v-container fluid>
          <image-upload v-model="image"></image-upload>
        </v-container>
        <v-card-actions>
          <v-btn block dark color="teal" @click.stop="onUpload()">upload</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    overlay: false,
    dialog: {
      image: false,
      profile: false,
    },
    image: null,
  }),
  computed: {
    email() {
      return this.$auth.user.email
    },
    full_name() {
      return this.$auth.user.employee.full_name
    },
    image_url() {
      if (this.$auth.user.employee.image)
        return this.$auth.user.employee.image.url
      else if (this.$auth.user.employee.gender === 'Male')
        return '/avatar/man.png'
      else if (this.$auth.user.employee.gender === 'Female')
        return '/avatar/woman.png'
      else return '/general/placeholder.png'
    },
    rating() {
      return this.$auth.user.employee.rating
    },
    job_position() {
      if (this.$auth.user.employee.job_position)
        return this.$auth.user.employee.job_position
      return 'Unassigned'
    },
    loading() {
      return this.$store.state.loading.profile
    },
  },
  methods: {
    showChangeImage() {
      this.dialog.image = true
    },
    showOverlay() {
      this.overlay = !this.overlay
    },
    async onUpload() {
      await this.$store.dispatch('user/upload', this.image)
    },
    onEdit() {},
  },
}
</script>