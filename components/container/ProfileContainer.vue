<template>
  <base-modal v-model="modal" :loading="loading">
    <template v-slot:title> {{ title }} </template>
    <template v-slot:subtitle>
      Last updated {{ $helper.when(user.updated_at) }}
    </template>
    <template>
      <v-row>
        <!-- Image and Rating -->
        <v-col cols="12">
          <v-container fluid class="d-flex justify-center">
            <v-img
              :src="!!preview ? preview : '/general/placeholder.png'"
              alt="preview"
              contain
              max-width="192"
              class="pa-8"
            ></v-img>
          </v-container>
          <v-container fluid class="d-flex justify-center">
            <v-rating
              :value="user.rating"
              hover
              length="10"
              dense
              small
              readonly
              color="warning"
              background-color="warning"
            ></v-rating>
          </v-container>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            :disabled="!editable"
            v-model="user.email"
            dense
            outlined
            clearable
            name="email"
            label="Email"
            placeholder="Email"
            persistent-hint
            hint="Your active email"
            prepend-inner-icon="mdi-email-outline"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            :disabled="!editable"
            v-model="user.password"
            dense
            outlined
            clearable
            name="password"
            label="Password"
            placeholder="Password"
            persistent-hint
            hint="Make sure to create strong password"
            prepend-inner-icon="mdi-lock-outline"
            :append-icon="visible ? 'mdi-eye' : 'mdi-eye-off'"
            :type="visible ? 'text' : 'password'"
            @click:append="visible = !visible"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            :disabled="!editable"
            v-model="user.first_name"
            dense
            outlined
            clearable
            name="first_name"
            label="First Name label"
            placeholder="First Name"
            persistent-hint
            hint="Please fill with your first name"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            :disabled="!editable"
            v-model="user.mid_name"
            dense
            outlined
            clearable
            name="mid_name"
            label="Mid Name"
            placeholder="Mid Name"
            persistent-hint
            hint="Please fill this if you have middle name"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            :disabled="!editable"
            v-model="user.last_name"
            dense
            outlined
            clearable
            name="last_name"
            label="Last Name"
            placeholder="Last Name"
            persistent-hint
            hint="Please fill this if you have last name"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            :disabled="!editable"
            v-model="user.phone"
            dense
            outlined
            clearable
            hide-details
            name="phone"
            label="Phone"
            placeholder="Phone"
            prepend-inner-icon="mdi-phone-outline"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-select
            :disabled="!editable"
            v-model="user.gender"
            dense
            outlined
            hide-details
            :items="genders"
            name="gender"
            label="Gender"
            placeholder="Gender"
            prepend-inner-icon="mdi-gender-male-female"
          ></v-select>
        </v-col>
        <v-col cols="12" md="6">
          <birthday-picker
            :disabled="!editable"
            v-model="user.birthday"
          ></birthday-picker>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            :disabled="!editable"
            v-model="user.salary"
            dense
            outlined
            :clearable="is_admin"
            :readonly="!is_admin"
            hint="Only admin can edit"
            persistent-hint
            prefix="Rp "
            name="salary"
            label="Salary"
            placeholder="Salary"
            prepend-inner-icon="mdi-cash-multiple"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            :disabled="!editable"
            v-model="user.job_position"
            dense
            outlined
            clearable
            hide-details
            name="job_position"
            label="Job Position"
            placeholder="Job Position"
            prepend-inner-icon="mdi-account-tie-outline"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            :disabled="!editable"
            v-model="user.rating"
            dense
            type="number"
            outlined
            :clearable="is_admin"
            :readonly="!is_admin"
            hint="Only admin can edit"
            persistent-hint
            name="rating"
            label="Rating"
            placeholder="Rating"
            prepend-inner-icon="mdi-star-outline"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            :disabled="!editable"
            v-model="user.country"
            dense
            outlined
            clearable
            hide-details
            name="country"
            label="Country"
            placeholder="Country"
            prepend-inner-icon="mdi-flag-outline"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            :disabled="!editable"
            v-model="user.province"
            dense
            outlined
            clearable
            hide-details
            name="province"
            label="Province"
            placeholder="Province"
            prepend-inner-icon="mdi-terrain"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            :disabled="!editable"
            v-model="user.city"
            dense
            outlined
            clearable
            hide-details
            name="city"
            label="City"
            placeholder="City"
            prepend-inner-icon="mdi-city-variant-outline"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            :disabled="!editable"
            v-model="user.postal_code"
            dense
            outlined
            clearable
            hide-details
            name="postal_code"
            label="Postal Code"
            placeholder="Postal Code"
            prepend-inner-icon="mdi-post-outline"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            :disabled="!editable"
            v-model="user.street"
            dense
            outlined
            clearable
            hide-details
            name="street"
            label="Street"
            placeholder="Street"
            prepend-inner-icon="mdi-road-variant"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-select
            :disabled="!editable"
            v-model="user.supervisor_id"
            dense
            outlined
            hide-details
            :items="users"
            item-text="email"
            item-value="id"
            name="supervisor"
            label="Supervisor"
            placeholder="Supervisor"
            prepend-inner-icon="mdi-account-circle-outline"
          >
            <template v-slot:item="{ item }">
              <item-text-container
                :sub="item.email"
                :main="item.employee.full_name"
              ></item-text-container>
            </template>
          </v-select>
        </v-col>
        <v-col cols="12" md="6">
          <v-select
            :disabled="!editable"
            v-model="user.department_id"
            dense
            outlined
            hide-details
            :items="departments"
            item-text="name"
            item-value="id"
            name="department"
            label="Department"
            placeholder="Department"
            prepend-inner-icon="mdi-alpha-n-box-outline"
          >
            <template v-slot:item="{ item }">
              <item-text-container
                :sub="item.code"
                :main="item.name"
              ></item-text-container>
            </template>
          </v-select>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            :disabled="!editable"
            v-if="$route.query.secret === 'admin'"
            v-model="user.secret"
            dense
            outlined
            clearable
            name="secret"
            label="Admin Secret"
            placeholder="Admin Secret Key"
            prepend-inner-icon="mdi-shield-lock-outline"
          ></v-text-field>
        </v-col>
      </v-row>
    </template>
    <template v-slot:actions>
      <v-row class="pa-0 ma-0">
        <v-col>
          <v-btn
            v-if="canUpdate || is_admin"
            block
            color="teal"
            dark
            @click.stop="onUpdate()"
          >
            update
          </v-btn>
        </v-col>
        <v-col v-if="is_admin && !mySelf">
          <v-btn block color="red" dark @click.stop="sure = true">
            delete
          </v-btn>
        </v-col>
      </v-row>
    </template>
    <are-you-sure
      v-model="sure"
      title="Delete employee"
      :fn="onDelete"
    ></are-you-sure>
  </base-modal>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Profile',
    },
    value: Object,
    show: Boolean,
    canUpdate: Boolean,
  },
  data() {
    return {
      modal: false,
      visible: false,
      sure: false,
      user: {
        id: null,

        email: '',
        password: '',
        secret: '',

        first_name: '',
        mid_name: '',
        last_name: '',
        phone: '',
        gender: '',
        birthday: '',
        salary: '', // only editable by admin
        job_position: '',
        rating: 0, // only editable by admin

        country: '',
        province: '',
        city: '',
        postal_code: '',
        street: '',
        image_url: '',

        supervisor_id: null,
        department_id: null,

        updated_at: null,
      },
    }
  },
  mounted() {
    this.$store.dispatch('user/index')
    this.$store.dispatch('company/index')
  },
  computed: {
    loading() {
      return this.$store.state.loading.profile
    },
    genders() {
      return ['Male', 'Female', 'Unknown']
    },
    is_admin() {
      return this.$auth.user.is_admin
    },
    preview() {
      if (this.user.image_url) {
        return this.user.image_url
      } else if (this.user.gender === 'Male') {
        return '/avatar/man.png'
      } else if (this.user.gender === 'Female') {
        return '/avatar/woman.png'
      } else return '/general/placeholder.png'
    },
    users() {
      return this.$store.state.user.all
    },
    departments() {
      return this.$store.state.company.departments
    },
    editable() {
      return this.$props.canUpdate || this.$auth.user.is_admin
    },
    mySelf() {
      if (!!this.$props.value && !!this.$auth.user)
        return this.$props.value.id === this.$auth.user.id
      return false
    },
  },
  watch: {
    show(v) {
      this.modal = v
    },
    modal(v) {
      this.$emit('show', v)
    },
    'user.rating'(v) {
      if (typeof v === 'string') this.user.rating = parseInt(v, 10)
    },
    value(v) {
      this.user = this.$helper.deepCopy(v)
    },
  },
  methods: {
    async onUpdate() {
      const updated = this.$helper.deepCopy(this.user)
      if (this.user.email === this.$props.value.email) {
        delete updated.email
      }
      await this.$store.dispatch('user/update', updated)
    },
    async onDelete() {
      await this.$store.dispatch('user/delete', this.user.id)
    },
  },
}
</script>