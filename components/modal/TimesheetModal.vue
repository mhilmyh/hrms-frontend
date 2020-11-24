<template>
  <div>
    <base-modal v-model="dialog" :loading="loading">
      <template v-slot:title>{{ title }}</template>
      <template>
        <template v-for="(_, index) in activities">
          <v-row :key="`${index}-row`">
            <v-col cols="12">
              <v-text-field
                v-model="activities[index].desc"
                dense
                outlined
                clearable
                :name="'desc_' + index"
                :prefix="`Activity ${index + 1}. `"
                placeholder="Description"
                persistent-hint
                hint="The description of activity"
                prepend-inner-icon="mdi-card-text-outline"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <time-picker
                v-model="activities[index].start_time"
                :name="'start_time_' + index"
                placeholder="Start Time"
                hint="The time you start doing"
                icon="mdi-progress-clock"
              ></time-picker>
            </v-col>
            <v-col cols="12" sm="6">
              <time-picker
                v-model="activities[index].stop_time"
                :name="'stop_time_' + index"
                placeholder="Stop Time"
                hint="The time you finish"
                icon="mdi-clock-check-outline"
              ></time-picker>
            </v-col>
          </v-row>
          <v-divider :key="`${index}-div`"></v-divider>
        </template>
        <v-row>
          <v-col cols="6">
            <v-btn block dark small outlined color="green" @click.stop="push()">
              add
            </v-btn>
          </v-col>
          <v-col cols="6">
            <v-btn block dark small outlined color="error" @click.stop="pop()">
              remove
            </v-btn>
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
    value: {
      type: Array,
      default: () => [{ desc: '', start_time: '', stop_time: '' }],
    },
    show: Boolean,
  },
  data() {
    return {
      dialog: false,
      activities: this.$props.value,
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
    activities: {
      handler(v) {
        console.log(v)
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
  methods: {
    push() {
      if (this.activities.length < 20)
        this.activities = [...this.activities, this.$helper.initActivity()]
    },
    pop() {
      this.activities = this.activities.slice(1, -1)
    },
  },
}
</script>