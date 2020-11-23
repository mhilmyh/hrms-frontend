<template>
<div class="showprofile">
        <v-card class="pa-5" 
            flat 
            max-height="1200px"  
            v-model="dialog"  
        >
        <v-container>
        <v-layout row>
            <v-spacer/>
            <v-btn icon class="mr-2" @click="dialog = false">
                <v-icon>mdi-close</v-icon>
            </v-btn>
        </v-layout>
            <v-card-text>
            <v-layout row class="">
                <v-flex md4 class="">
                    <V-responsive class="mt-4 pl-4">
                          <v-badge
                                class="ma-5"
                                bordered
                                bottom
                                color="green accent-4"
                                cross
                                overlap
                                offset-x="32"
                                offset-y="32"
                            >   
                                <v-avatar size="150">
                                <v-img :src=img></v-img>
                                </v-avatar>
                         </v-badge>
                      </V-responsive>
                      <v-file-input
                        class="mt-n6"
                        :rules="rules"
                        accept="image/png, image/jpeg, image/bmp"
                        prepend-icon="mdi-camera"
                        placeholder="Change avatar"
                      ></v-file-input>
                    <div class="mx-5">
                        <v-rating
                        background-color="warning lighten-1"
                        color="warning"
                        empty-icon="mdi-star-outline"
                        full-icon="mdi-star"
                        half-icon="mdi-star-half-full"
                        length="5"
                        readonly
                        size="24"
                        value="3"
                        ></v-rating>
                    </div>
                </v-flex>
                <v-flex md4 class="pl-14">
                    <div class="mt-8">First Name</div>
                    <div class="mt-12">Middle Name</div>
                    <div class="mt-12">Last Name</div>
                    <div class="mt-12">Gender</div>
                    <div class="mt-12">Birthday</div>
                    <div class="mt-12">Phone Number</div>
                    <div class="mt-12">Email</div>
                    <div class="mt-12">Salary</div>
                    <div class="mt-12">Departement</div>
                    <div class="mt-12">Address</div>
                </v-flex>
                <v-flex md4>
                 <v-form v-model="valid">
                    <v-container>
                        <v-text-field
                            v-model="firstname"
                            :rules="nameRules"
                            :counter="10"
                            label="First name"
                            required
                        ></v-text-field>
                        <v-text-field
                            v-model="midname"
                            :rules="nameRules"
                            :counter="10"
                            label="Middle name"
                            required
                        ></v-text-field>
                        <v-text-field
                            v-model="lasttname"
                            :rules="nameRules"
                            :counter="10"
                            label="Last name"
                            required
                        ></v-text-field>
                        <v-select
                            :items="genders"
                            label="Select Gender"
                        ></v-select>
                       <v-menu
                            ref="menu"
                            v-model="menu"
                            :close-on-content-click="false"
                            transition="scale-transition"
                            offset-y
                            min-width="290px"
                        >
                            <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                v-model="date"
                                label="Birthday date"
                                append-icon="mdi-calendar"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                            ></v-text-field>
                            </template>
                            <v-date-picker
                            ref="picker"
                            v-model="date"
                            :max="new Date().toISOString().substr(0, 10)"
                            min="1950-01-01"
                            @change="save"
                            ></v-date-picker>
                        </v-menu>
                        <v-text-field
                            v-model="phone"
                            :rules="numberRules"
                            :counter="12"
                            label="Phone Number"
                            required
                        ></v-text-field>
                        <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            label="E-mail"
                            required
                        ></v-text-field>
                        <v-text-field
                            v-model="salary"
                            :rules="numberRules"
                            label="Salary"
                            required
                        ></v-text-field>
                        <v-select
                            :items="items"
                            label="Select Departement"
                        ></v-select>
                        <v-textarea
                            v-model="address"
                            label="Address"
                            required
                        ></v-textarea>
                    </v-container>
                </v-form>
                </v-flex>
            </v-layout>
            </v-card-text>
            <v-card-action>
                <v-layout row justify-center>
                <div class="pt-8 ml-16 pl-16">
                <v-btn 
                    color="blue darken-1"
                    text
                    @click="dialog = false"
                >
                    Save
                </v-btn>
                <v-btn
                    color="red darken-1"
                    text
                    @click="dialog = false"
                >
                    Cancel
                </v-btn>
                </div>
                </v-layout>
            </v-card-action>
        </v-container>
    </v-card>
</div>
</template>
<script>
export default {
    data(){
        return{
            img:'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            employees: [
                {name: 'Guy Hawkins', gender: 'Male', birthday: '09/03/1991', phone:'3165550116', email:'hawkins@rocketmail.com', salary:'9000000', departement:'Human Resources',address: '4140 Parker Rd. Allentown, New Mexico 31134'},
            ],
            genders:['Female','Male'],
            items:['Research & Development','Finance & Accounting','Human Resource','Purchasing','Production','Marketing'],

            valid: false,
            firstname: '',
            midname:'',
            lastname: '',
            phone:'',
            email:'',
            salary:'',
            address:'',
            // nameRules: [
            //     v => !!v || 'Name is required',
            //     v => v.length <= 10 || 'Name must be less than 10 characters',
            // ],
            // emailRules: [
            //     v => !!v || 'E-mail is required',
            //     v => /.+@.+/.test(v) || 'E-mail must be valid',
            // ],
            // numberRules: [
            //     v => !!v || 'Phone number is required',
            //     v  => {
            //             if (!v.trim()) return true;
            //             if (!isNaN(parseFloat(v)) && v >= 0 && v <= 999) return true;
            //             return 'Number has to be between 0 and 999';
            //           },
            // ],
        }
        
    },
    methods:{
        
    }
}
</script>

<style scooped>

</style>