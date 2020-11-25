<template>
  <v-dialog
    v-model="dialog"
    persistent
    max-width="600px"
    transition="scroll-y-transition"
  >
    <v-card>
      <v-card-title class="teal lighten-1 white--text">
        <span class="body-1"> Change Image </span>
        <v-spacer></v-spacer>
        <v-btn icon dark @click.stop="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-container>
        <alert-container></alert-container>
      </v-container>
      <v-container fluid>
        <v-file-input
          v-model="file"
          :rules="$rules.imageAvatar()"
          accept="image/png, image/jpeg"
          placeholder="Choose image"
          prepend-icon="mdi-camera"
          outlined
          dense
        ></v-file-input>
        <v-container v-if="!!preview" class="d-flex justify-center">
          <v-img :src="preview" alt="preview" contain></v-img>
        </v-container>
        <v-container v-else class="d-flex justify-center">
          <v-img
            src="/general/placeholder.png"
            alt="preview"
            contain
            max-width="128px"
            class="pa-8"
          ></v-img>
        </v-container>
      </v-container>
      <v-card-actions>
        <v-btn block dark color="teal" @click.stop="onUpload()">upload</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: File,
    show: Boolean,
  },
  data() {
    return {
      file: null,
      preview: '',
      dialog: this.$props.show,
    }
  },
  watch: {
    file(v) {
      if (v) {
        const reader = new FileReader()
        reader.onload = (e) => {
          this.preview = e.target.result
        }
        reader.readAsDataURL(v)
      } else this.preview = ''

      this.$emit('input', v)
    },
    dialog(v) {
      this.$emit('show', v)
    },
    show(v) {
      this.dialog = v
    },
  },
  methods: {
    async onUpload() {
      await this.$store.dispatch('user/upload', this.file)
    },
  },
}
</script>