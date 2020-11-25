<template>
  <v-dialog
    v-model="dialog"
    persistent
    max-width="1000px"
    transition="scroll-y-transition"
  >
    <v-card>
      <div class="teal lighten-1 white--text">
        <v-card-title>
          <span class="text-capitalize">
            <slot name="title"></slot>
          </span>
          <v-spacer></v-spacer>
          <v-btn icon dark @click.stop="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-subtitle class="white--text">
          <slot name="subtitle"></slot>
        </v-card-subtitle>
      </div>
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