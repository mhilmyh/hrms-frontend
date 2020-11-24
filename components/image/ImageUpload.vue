<template>
  <v-container>
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
</template>

<script>
export default {
  props: ['value'],
  data: () => ({
    file: null,
    preview: '',
  }),
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
  },
}
</script>