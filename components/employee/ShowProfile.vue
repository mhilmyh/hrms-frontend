<template>
<div class="showprofile">
        <v-card class="pa-5" 
            flat 
            height="600px" 
        >
        <v-container>
        <v-layout row>
            <v-spacer/>
            <v-btn icon class="mr-2" @click="$emit('dialogfalse')">
                <v-icon>mdi-close</v-icon>
            </v-btn>
        </v-layout>
            <v-card-text>
            <v-layout row class="">
                <v-flex md4 class="mt-n4 pl-2">
                    <V-responsive class="pl-6">
                          <v-badge
                                class="ma-5"
                                bordered
                                bottom
                                color="green accent-4"
                                cross
                                offset-x="32"
                                offset-y="32"
                            >
                                <v-avatar size="150">
                                <v-img :src=img></v-img>
                                </v-avatar>
                         </v-badge>
                      </V-responsive>
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
                    <div>Name</div>
                    <br>
                    <div>Gender</div>
                    <br>
                    <div>Birthday</div>
                    <br>
                    <div>Phone Number</div>
                    <br>
                    <div>Email</div>
                    <br>
                    <div>Salary</div>
                    <br>
                    <div>Departement</div>
                    <br>
                    <div>Address</div>
                </v-flex>
                <v-flex md4 class="" v-for="(employee,index) in employees" :key="index">
                    <div>{{employee.name}}</div>
                    <br>
                    <div>{{employee.gender}}</div>
                    <br>
                    <div>{{employee.birthday}}</div>
                    <br>
                    <div>{{employee.phone}}</div>
                    <br>
                    <div>{{employee.email}}</div>
                    <br>
                    <div>{{employee.salary}}</div>
                    <br>
                    <div>{{employee.departement}}</div>
                    <br>
                    <div>{{employee.address}}</div>
                </v-flex>
            </v-layout>
            </v-card-text>
            <v-card-action>
                <v-layout row justify-center>
                <div class="pt-8 ml-16 pl-16">
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
              dialog: false
        }
        
    },
    methods:{
        
    }
}
</script>

<style>

</style>