<template>
  <v-dialog
    ref="dialog"
    v-model="modal"
    :return-value.sync="date"
    persistent
    width="300px"
    transition="scroll-y-transition"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        :disabled="disabled"
        v-model="date"
        readonly
        dense
        outlined
        clearable
        hide-details
        label="Birthday"
        :placeholder="!!value ? value : 'Birthday'"
        :rules="rules"
        prepend-inner-icon="mdi-calendar"
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker v-model="date" scrollable :max="now">
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="modal = false"> Cancel </v-btn>
      <v-btn text color="primary" @click="$refs.dialog.save(date)"> Ok </v-btn>
    </v-date-picker>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: String,
    rules: {
      type: Array,
      default: () => [],
    },
    disabled: Boolean,
  },
  data() {
    return {
      now: new Date().toISOString().substr(0, 10),
      date: null,
      modal: false,
    }
  },
  watch: {
    date(v) {
      this.$emit('input', v)
    },
  },
}
</script>