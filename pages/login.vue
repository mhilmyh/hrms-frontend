<template>
    <div id="app">
        <v-flex class="grey lighten-4" style="height: 100vh">
            <v-container class="text-center">
                <v-card flat>
                    <h1>Welcome!</h1>
                    <v-form class="ma-8">
                        <v-text-field rounded dense outlined name="Username" label="Username"></v-text-field>
                        <v-text-field rounded dense outlined name="Password" label="Password" type="password"></v-text-field>
                        <v-card-actions>
                            <v-btn primary large block rounded 
                            to= "/timesheet"
                            class="blue white--text">Login</v-btn>
                        </v-card-actions>
                    </v-form>
                    <p><a href="/register">Create an account</a></p>
                </v-card>
            </v-container>
        </v-flex> 
    </div>
</template>

<script>
  export default {
    layout: "empty",
  }
</script>

<style>
    div#app{
        height: 100vh;
    }
</style>

