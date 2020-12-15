<template>
  <v-dialog
    v-model="dialog"
    persistent
    max-width="600px"
    transition="scroll-y-transition"
  >
    <v-card flat>
      <v-card-title>{{ title }}</v-card-title>
      <v-card-text>
        Are you sure want to do this ? Some of data might change and you cant
        undo. If you know what you are doing, press
        <span class="red--text font-weight-bold">continue</span>. Otherwise,
        press <span class="teal--text font-weight-bold">cancel</span> for
        safety.
      </v-card-text>
      <v-card-actions>
        <v-row class="pa-0 ma-0">
          <v-col cols="6">
            <v-btn
              depressed
              block
              color="teal"
              @click.stop="dialog = false"
              dark
            >
              cancel
            </v-btn>
          </v-col>
          <v-col cols="6">
            <v-btn depressed block color="error" @click.stop="continueFn()">
              continue
            </v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: Boolean,
    title: String,
    fn: {
      type: Function,
      default: () => {},
    },
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
  methods: {
    continueFn() {
      this.dialog = false
      this.$props.fn()
    },
  },
}
</script>