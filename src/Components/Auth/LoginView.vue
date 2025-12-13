<template >
    <div>
        <div><Toaster position="top-center" :reverseOrder="false"/></div>
        <section class="mt-10 mb-20 flex justify-between  items-center">

            <div >
                <img src="\src\assets\Auth\Side Image.png" class="h-screen" alt="">
            </div>

            <div class="flex w-[50%] ">
                <div class="flex flex-col justify-center pl-50 items-start gap-8 w-full ">
                    <span class="flex flex-col  gap-4">
                        <h3 class="font-fancy font-semi-bold tracking-wider text-3xl">Log in to Exclusive</h3>
                        <p class="font-bold text-sm">Enter your detalis below</p>
                    </span>
                    <form @submit.prevent="handleLogin" class="flex flex-col gap-8 [&_input]:outline-0 [&_input]:text-sm
                    [&_input]:border-b [&_input]:w-70">
                        <span>
                            <input type="email" placeholder="Enter your email" v-model="email">
                        </span>
                        
                        <span class="flex  items-center ">
                            <input :type="passwordType"  placeholder="Enter your password" v-model="password">
                            <img src="\src\assets\icons\eye.svg" class="cursor-pointer" @click="passType" />
                        </span>
                        <p v-if="error" class="text-red-500 text-sm mt-0">{{ error }}</p>

                        <span class="flex justify-between items-center ">
                            <Button> Log in </Button>

                            <router-link class="text-[#DB4444] cursor-pointer hover:text-[#E07575] font-light" :to="{name:'reset'}">Forgot Password?</router-link>
                            <a href="#" ></a>
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
import toast,{Toaster} from 'vue3-hot-toast';
export default {
    components:{Button, Toaster},

    data() {
        return {
            email:'',
            password:'',
            error: '',
            passwordType: "password"
        }
    },

    methods: {
        ...mapActions('user',['loginUser']),

        async handleLogin() {
            this.error = '';

            try {
                await this.loginUser({
                    email: this.email,
                    password: this.password
                });

                this.$router.push({name:'landing'})
                
            } catch (error) {
                this.error = error.message
            }

        },

        passType(){
            this.passwordType = this.passwordType === "password" ? "text" : "password";
        }
    },
}
</script>
<style lang="">
    
</style>