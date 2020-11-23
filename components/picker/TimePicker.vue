<template>
  <v-dialog
    ref="dialog"
    v-model="modal"
    :return-value.sync="time"
    persistent
    width="290px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="time"
        dense
        outlined
        clearable
        :name="name"
        :placeholder="placeholder"
        persistent-hint
        :hint="hint"
        :prepend-inner-icon="icon"
        readonly
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-time-picker v-if="modal" v-model="time" full-width format="24hr">
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="modal = false">cancel</v-btn>
      <v-btn text color="primary" @click="$refs.dialog.save(time)">ok</v-btn>
    </v-time-picker>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: String,
    hint: String,
    placeholder: String,
    name: String,
    icon: String,
  },
  data() {
    return {
      modal: false,
      time: null,
    }
  },
  watch: {
    time(v) {
      this.$emit('input', v)
    },
  },
}
</script>