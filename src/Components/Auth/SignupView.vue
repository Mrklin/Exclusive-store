<template >
    <div>
        <section class="mt-10 mb-20 flex justify-between  items-center">

            <div >
                <img src="\src\assets\Auth\Side Image.png" class="h-screen" alt="">
            </div>

            <div class="flex w-[50%] ">
                <div class="flex flex-col justify-center pl-50 items-start gap-8 w-full ">
                    <span class="flex flex-col  gap-4">
                        <h3 class="font-fancy font-semi-bold tracking-wider text-3xl">Create an Account</h3>
                        <p class="font-bold text-sm">Enter your detalis below</p>
                    </span>
                    <form @submit.prevent="handleSignUp"
                    class="flex flex-col gap-6 [&_input]:outline-0 [&_input]:text-sm 
                    [&_input]:border-b [&_input]:w-70">
                        <input type="text" placeholder="Name" v-model="name">
                        <input type="text" placeholder="Email" v-model="email">
                        <input type="text" placeholder="Password" v-model="password"
                        :class="{'border border-red-500': passwordError}" @input="validatePass">
                        <span :class="passwordError?'text-sm text-gray-500 w-full':'hidden'">
                            <ul class="list-disc ml-4 text-right">
                                <li :class="passwordCriteria.length? 'text-green-200':'text-red-500'">Min 8 Characters</li>
                                <li :class="passwordCriteria.uppercase? 'text-green-200':'text-red-500'">1 uppercase letter</li>
                                <li :class="passwordCriteria.number? 'text-green-200':'text-red-500'">1 number</li>
                                <li :class="passwordCriteria.symbol? 'text-green-200':'text-red-500'">1 symbol</li>
                            </ul>
                        </span>
                        <input type="password" placeholder="Comfirm Password" v-model="confirmPass"
                        :class="{'border-red-500 border': confirmPassError}">

                        <p v-if="generateError" class="text-red-500 text-sm mt-0 text-center w-70">{{ generateError }}</p>

                        <span class="flex flex-col justify-center gap-2 items-center w-full">
                            <Button> <span class="px-17">Create Account</span> </Button>
                            <Button customClass="px-14 py-3 rounded-sm border hover:bg-black hover:text-[#FAFAFA]"> 
                                <span class="flex gap-3 justify-center items-center">
                                    <img src="\src\assets\Auth\Icon-Google.svg" class="w-4" alt="">
                                    Sign up with Google
                                </span> 
                            </Button>
                            <span class="flex gap-5 text-sm mt-3">
                                <p>Already have an account? <router-link class="border-b cursor-pointer" :to="{name:'login'}">Login</router-link></p>
                            </span>
                            
                        </span>
                    </form>
                </div>
                
            </div>

        </section>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
import Button from '../Universal Comp/Button.vue';
export default {
    components:{Button},
    data() {
        return {
            name:'',
            email:'',
            password:'',
            confirmPass:'',
            generateError:'',
            passwordError:'',
            confirmPassError:'',
            passwordCriteria:{
                length: false,
                uppercase: false,
                number: false,
                symbol: false
            },

        }

    },

    methods: {
          ...mapActions('user',['signupUser']),

          validatePass(){
            const p = this.password

            this.passwordCriteria.length = p.length >= 8,
            this.passwordCriteria.uppercase = /[A-Z]/.test(p),
            this.passwordCriteria.number = /[0-9]/.test(p),
            this.passwordCriteria.symbol = /[]/.test(p),
            this.passwordError = !Object.values(this.passwordCriteria).every(v=> v === true),
            this.generateError=''
          },

          isFormValid(){
            if(!this.name || this.email || this.password || this.confirmPass){
                this.generateError="Please fill in the fields"
                return false;
            }

            if(this.passwordError){
                this.generateError = 'Password does not meet requirement';
                return false;
            }

            if(this.password !== this.confirmPass){
                this.generateError="Password does not match",
                this.confirmPassError = true;
                return false;
            }

            this.generateError =true;
            this.confirmPassError = false;
            return true;
          },

          async handleSignUp(){
            if(!this.isFormValid){
                return
            }

            try {
                await this.signupUser({
                    name: this.name,
                    email: this.email,
                    password: this.password
                });

                this.$router.push({name:'login'})
            } catch (error) {
                this.generateError = error.message
            }
          }
    },
}
</script>
<style lang="">
    
</style>