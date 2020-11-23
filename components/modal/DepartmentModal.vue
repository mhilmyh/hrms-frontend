<template>
  <div>
    <base-modal v-model="dialog" :loading="loading">
      <template v-slot:title>{{ title }}</template>
      <template>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="department.name"
              :rules="$rules.officeName()"
              dense
              outlined
              clearable
              name="name"
              placeholder="Name"
              persistent-hint
              hint="The name of the department"
              prepend-inner-icon="mdi-office-building-outline"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="department.code"
              :rules="$rules.officeName()"
              dense
              outlined
              clearable
              name="code"
              placeholder="Code"
              persistent-hint
              hint="The code of the department"
              prepend-inner-icon="mdi-office-building-outline"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-select
              v-model="department.chairman_id"
              :rules="$rules.chairman()"
              dense
              outlined
              hide-details
              :items="users"
              name="chairman_id"
              placeholder="Chairman"
              prepend-inner-icon="mdi-account-circle-outline"
            ></v-select>
          </v-col>
          <v-col cols="12" sm="6">
            <v-select
              v-model="department.office_id"
              :rules="$rules.officeId()"
              dense
              outlined
              hide-details
              :items="offices"
              name="office_id"
              placeholder="Office"
              prepend-inner-icon="mdi-office-building-outline"
            ></v-select>
          </v-col>
        </v-row>
      </template>
      <template v-slot:actions>
        <slot></slot>
      </template>
    </base-modal>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Office',
    },
    value: Object,
    show: Boolean,
  },
  data() {
    return {
      dialog: false,
      department: {
        name: '',
        code: '',
        chairman_id: null,
        office_id: null,
      },
    }
  },
  computed: {
    loading() {
      return this.$store.state.loading.department
    },
    users() {
      return this.$store.state.user.all
    },
    offices() {
      return this.$store.state.company.offices
    },
  },
  watch: {
    department: {
      handler(v) {
        this.$emit('input', v)
      },
      deep: true,
    },
    dialog(v) {
      this.$emit('show', v)
    },
    show(v) {
      this.dialog = v
    },
  },
}
</script>