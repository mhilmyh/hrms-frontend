<template>
  <v-dialog v-model="dialog" persistent max-width="1000px">
    <v-card>
      <v-card-title class="teal lighten-1 white--text">
        <span class="body-1">
          <slot name="title"></slot>
        </span>
        <v-spacer></v-spacer>
        <v-btn icon dark @click.stop="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-container>
        <alert-container></alert-container>
      </v-container>
      <v-container>
        <slot></slot>
        <v-progress-linear
          v-if="loading"
          indeterminate
          color="teal"
        ></v-progress-linear>
      </v-container>
      <v-card-actions>
        <slot name="actions"></slot>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    loading: Boolean,
    value: Boolean,
    src: String,
  },
  data() {
    return {
      dialog: false,
    }
  },
  watch: {
    value(v) {
      this.dialog = v
    },
    dialog(v) {
      this.$emit('input', v)
    },
  },
}
</script>