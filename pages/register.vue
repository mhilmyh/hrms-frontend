<template>
    <div id="app">
        <v-flex class="grey lighten-4" style="height: 130vh">
            <v-container class="text-center">
                <v-card flat class="ma-4">
                    <v-row>
                        <v-col>
                            <v-text-field dense name="First Name" label="First Name"></v-text-field>
                            <v-text-field dense name="Middle Name" label="Middle Name"></v-text-field>
                            <v-text-field dense name="Last Name" label="Last Name"></v-text-field>
                            <v-text-field dense name="Date of Birth" label="Date of Birth"></v-text-field>
                            <v-text-field dense name="Phone Number" label="Phone Number"></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field dense name="Email" label="Email"></v-text-field>
                            <v-text-field dense name="Department" label="Department"></v-text-field>
                            <v-text-field dense name="Address" label="Address"></v-text-field>
                            <v-text-field dense name="Password" label="Password" type="password"></v-text-field>
                            <v-text-field dense name="Confirm Password" label="Confirm Password" type="password"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-card-actions>
                        <v-btn primary large block rounded 
                        to= "/timesheet"
                        class="blue white--text">Register</v-btn>
                    </v-card-actions>
                </v-card>
            </v-container>
        </v-flex> 
    </div>
</template>