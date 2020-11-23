<template>
  <v-card flat max-width="1200px" class="pa-8">
    <dark-theme-toggler></dark-theme-toggler>
    <v-card-title class="d-flex justify-center text-center">
      Register to Hument
    </v-card-title>
    <v-card-subtitle class="d-flex justify-center text-center">
      Please fill the data correctly
    </v-card-subtitle>
    <v-form ref="form" lazy-validation>
      <v-row>
        <alert-container></alert-container>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="user.email"
            :rules="$rules.email()"
            dense
            outlined
            clearable
            name="email"
            placeholder="Email"
            persistent-hint
            hint="Your active email"
            prepend-inner-icon="mdi-email-outline"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="user.password"
            :rules="$rules.password()"
            dense
            outlined
            clearable
            name="password"
            placeholder="Password"
            persistent-hint
            hint="Make sure to create strong password"
            prepend-inner-icon="mdi-lock-outline"
            :append-icon="visible ? 'mdi-eye' : 'mdi-eye-off'"
            :type="visible ? 'text' : 'password'"
            @click:append="visible = !visible"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="4">
          <v-text-field
            v-model="user.first_name"
            :rules="$rules.firstName()"
            dense
            outlined
            clearable
            name="first_name"
            placeholder="First Name"
            persistent-hint
            hint="Please fill with your first name"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="4">
          <v-text-field
            v-model="user.mid_name"
            :rules="$rules.midName()"
            dense
            outlined
            clearable
            name="mid_name"
            placeholder="Mid Name"
            persistent-hint
            hint="Please fill this if you have middle name"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="4">
          <v-text-field
            v-model="user.last_name"
            :rules="$rules.lastName()"
            dense
            outlined
            clearable
            name="last_name"
            placeholder="Last Name"
            persistent-hint
            hint="Please fill this if you have last name"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            v-model="user.phone"
            :rules="$rules.phone()"
            dense
            outlined
            clearable
            name="phone"
            placeholder="Phone"
            prepend-inner-icon="mdi-phone-outline"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-select
            v-model="user.gender"
            :rules="$rules.gender()"
            dense
            outlined
            :items="genders"
            name="gender"
            placeholder="Gender"
            prepend-inner-icon="mdi-gender-male-female"
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <birthday-picker
            v-model="user.birthday"
            :rules="$rules.birthday()"
          ></birthday-picker>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            v-model="user.country"
            :rules="$rules.country()"
            dense
            outlined
            clearable
            name="country"
            placeholder="Country"
            prepend-inner-icon="mdi-flag-outline"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            v-model="user.province"
            :rules="$rules.province()"
            dense
            outlined
            clearable
            name="province"
            placeholder="Province"
            prepend-inner-icon="mdi-terrain"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            v-model="user.city"
            :rules="$rules.city()"
            dense
            outlined
            clearable
            name="city"
            placeholder="City"
            prepend-inner-icon="mdi-city-variant-outline"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            v-model="user.postal_code"
            :rules="$rules.postalCode()"
            dense
            outlined
            clearable
            name="postal_code"
            placeholder="Postal Code"
            prepend-inner-icon="mdi-post-outline"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            v-model="user.street"
            :rules="$rules.street()"
            dense
            outlined
            clearable
            name="street"
            placeholder="Street"
            prepend-inner-icon="mdi-road-variant"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-if="$route.query.secret === 'admin'"
            v-model="user.secret"
            dense
            outlined
            clearable
            name="secret"
            placeholder="Admin Secret Key"
            prepend-inner-icon="mdi-shield-lock-outline"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-form>
    <v-card-actions class="px-0 py-1">
      <v-btn color="primary" large block @click.stop="register()">
        register
      </v-btn>
    </v-card-actions>
    <v-container class="d-flex justify-center">
      <v-btn text block color="primary" to="/login">login</v-btn>
    </v-container>
  </v-card>
</template>

<script>
export default {
  layout: 'guest',
  data() {
    return {
      visible: false,
      modal: false,
      genders: ['Male', 'Female', 'Unknown'],
      user: {
        email: '',
        password: '',
        first_name: '',
        mid_name: '',
        last_name: '',
        phone: '',
        gender: '',
        birthday: '',
        country: '',
        province: '',
        city: '',
        postal_code: '',
        street: '',
        secret: '',
      },
    }
  },
  methods: {
    register() {
      if (!this.$refs.form.validate()) return
      this.$store.dispatch('user/register', this.user)
    },
  },
  head() {
    return {
      title: 'Register',
    }
  },
}
</script>
