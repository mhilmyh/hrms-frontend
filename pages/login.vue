<template>
  <v-card flat max-width="600px" class="pa-8">
    <dark-theme-toggler></dark-theme-toggler>
    <v-card-title class="d-flex justify-center text-center">
      Welcome to Hument
    </v-card-title>
    <v-card-subtitle class="d-flex justify-center text-center">
      Human Resource Management System
    </v-card-subtitle>
    <alert-container></alert-container>
    <v-form ref="form">
      <v-text-field
        v-model="user.email"
        dense
        outlined
        :rules="$rules.email()"
        name="email"
        placeholder="Email"
        prepend-inner-icon="mdi-email-outline"
      ></v-text-field>
      <v-text-field
        v-model="user.password"
        dense
        outlined
        :rules="$rules.password()"
        name="password"
        placeholder="Password"
        prepend-inner-icon="mdi-lock-outline"
        :append-icon="visible ? 'mdi-eye' : 'mdi-eye-off'"
        :type="visible ? 'text' : 'password'"
        @click:append="visible = !visible"
      ></v-text-field>
    </v-form>
    <v-card-actions class="px-0 py-1">
      <v-btn color="primary" large block @click.stop="login()">login</v-btn>
    </v-card-actions>
    <v-container class="d-flex justify-center">
      <v-btn text block color="primary" to="/register">register</v-btn>
    </v-container>
  </v-card>
</template>

<script>
export default {
  layout: 'guest',
  data() {
    return {
      visible: false,
      user: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    async login() {
      if (!this.$refs.form.validate()) return

      try {
        await this.$auth.loginWith('local', {
          data: this.user,
        })
      } catch (err) {
        this.$helper.showError(err, this.$store)
      }
    },
  },
  head() {
    return {
      title: 'Login',
    }
  },
}
</script>
