<template>
  <div>
    <base-modal v-model="dialog" :loading="loading">
      <template v-slot:title>{{ title }}</template>
      <template>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="office.name"
              :rules="$rules.officeName()"
              dense
              outlined
              clearable
              name="name"
              placeholder="Name"
              persistent-hint
              hint="The name of the office"
              prepend-inner-icon="mdi-office-building-outline"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <time-picker
              v-model="office.opening_time"
              name="opening_time"
              placeholder="Opening Time"
              hint="The open hour of office"
              icon="mdi-progress-clock"
            ></time-picker>
          </v-col>
          <v-col cols="12" sm="6">
            <time-picker
              v-model="office.closing_time"
              name="closing_time"
              placeholder="Closing Time"
              hint="The closing hour of office"
              icon="mdi-clock-check-outline"
            ></time-picker>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="office.building"
              dense
              outlined
              clearable
              name="building"
              placeholder="Building"
              persistent-hint
              hint="The type of the building"
              prepend-inner-icon="mdi-warehouse"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="office.country"
              :rules="$rules.country()"
              dense
              outlined
              clearable
              hide-details
              name="country"
              placeholder="Country"
              prepend-inner-icon="mdi-flag-outline"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="office.province"
              :rules="$rules.province()"
              dense
              outlined
              clearable
              hide-details
              name="province"
              placeholder="Province"
              prepend-inner-icon="mdi-terrain"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="office.city"
              :rules="$rules.city()"
              dense
              outlined
              clearable
              hide-details
              name="city"
              placeholder="City"
              prepend-inner-icon="mdi-city-variant-outline"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="office.postal_code"
              :rules="$rules.postalCode()"
              dense
              outlined
              clearable
              hide-details
              name="postal_code"
              placeholder="Postal Code"
              prepend-inner-icon="mdi-post-outline"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="office.street"
              :rules="$rules.street()"
              dense
              outlined
              clearable
              hide-details
              name="street"
              placeholder="Street"
              prepend-inner-icon="mdi-road-variant"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-container class="py-0">
              <v-switch
                class="pa-0 ma-0"
                v-model="office.is_branch"
                inset
                :label="
                  office.is_branch
                    ? 'Register Branch Office'
                    : 'Register Head Office'
                "
              ></v-switch>
            </v-container>
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
      type: Object,
      default: () => ({
        id: null,
        name: '',
        opening_time: '',
        closing_time: '',
        building: '',
        is_branch: false,
        country: '',
        province: '',
        city: '',
        postal_code: '',
        street: '',
      }),
    },
    show: Boolean,
  },
  data() {
    return {
      dialog: false,
      office: {
        id: this.$props.value.id,
        name: this.$props.value.name,
        opening_time: this.$props.value.opening_time,
        closing_time: this.$props.value.closing_time,
        building: this.$props.value.building,
        is_branch: this.$props.value.is_branch,
        country: this.$props.value.country,
        province: this.$props.value.province,
        city: this.$props.value.city,
        postal_code: this.$props.value.postal_code,
        street: this.$props.value.street,
      },
    }
  },
  computed: {
    loading() {
      return this.$store.state.loading.office
    },
  },
  watch: {
    office: {
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
      this.office = this.$helper.deepCopy(this.$props.value)
    },
  },
}
</script>