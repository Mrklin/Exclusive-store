import toast from "vue3-hot-toast";

const DEFAULT_CREDENTIALS = {
    name:'Frank',
    email:'frank@gmail.com',
    password:'SecureP@ss123'
};

function InitializeLocalUser(){
    if(!localStorage.getItem('localUsers')){
        localStorage.setItem('localUsers', JSON.stringify([DEFAULT_CREDENTIALS]))
    }
}

InitializeLocalUser();

//Vuex
// export default{
//     namespaced:true,
//     state:{
//         user:null,
//         isLoggedIn:false

//     },

//     getters: {
//         getIsLoggedIn :(state)=> state.isLoggedIn,
//         getUser :(state)=> state.user? state.user.name:'Guest'
//     },

//     mutations: {
//         SET_USER_DATA(state, userData){
//             state.user = userData;
//             state.isLoggedIn = true;
//         },

//         CLEAR_USER_DATA(state){
//             state.user = null;
//             state.isLoggedIn = false;
//         }
//     },

//     actions: {
//         async signupUser({state, commit}, credentials){
//             const storedUser = localStorage.getItem('localUsers');
//             const users = storedUser ? JSON.parse(storedUser):[];

//             const emailExist = users.some(user => user.email === credentials.email)
            
//             if(emailExist){
//                 throw new Error('This email is already registered.')
//             }

//             users.push(credentials);
//             localStorage.setItem('localUsers', JSON.stringify(users))
//         },

//         async loginUser({commit}, credentials){
//             const storedUser = localStorage.getItem('localUsers');
//             const users = storedUser ? JSON.parse(storedUser):[];

//             const foundUser = users.find(user => user.email === credentials.email && user.password === credentials.password)

//             if(!foundUser){
//                 throw new Error ('Invalid email or password')
//             }

//             commit('SET_USER_DATA', foundUser)
//             localStorage.setItem('userSession', JSON.stringify(foundUser));
//             toast.success("Login successful!", {duration: 2000});
//         },

//         initializeAuth({commit}){
//             const storedSession = localStorage.getItem('userSession');

//             if(storedSession){
//                 const userData = JSON.parse(storedSession)

//                 commit('SET_USER_DATA', userData)
//             }
            
//         },

//         logoutUser({commit}){
//             localStorage.removeItem('userSession');
//             commit('CLEAR_USER_DATA')
//             toast.success("Logged out successfully!", {duration: 2000});
//         }

//     },
// }



import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useUserStore = defineStore("user", () => {

    const user = ref(null);
    const isLoggedIn = ref(false);

    
    const userName = computed(() => user.value ? user.value.name : 'Guest');

    const setUser = (data) => {
        user.value = data;
        isLoggedIn.value = true;
    };

    const clearUser = () => {
        user.value = null;
        isLoggedIn.value = false;
    };

    const signupUser = (credentials) => {
        const storedUser = localStorage.getItem('localUsers');
        const users = storedUser ? JSON.parse(storedUser) : [];

        const emailExist = users.some(user => user.email === credentials.email);

        if (emailExist) {
            throw new Error('This email is already registered.');
        }

        users.push(credentials);
        localStorage.setItem('localUsers', JSON.stringify(users));
    };


    const loginUser = (credentials) => {
        const storedUser = localStorage.getItem('localUsers');
        const users = storedUser ? JSON.parse(storedUser) : [];
        const foundUser = users.find(user => user.email === credentials.email && user.password === credentials.password);

        if (!foundUser) {
            throw new Error('Invalid email or password');
        }
        setUser(foundUser);
        toast.success("Login successful!", {duration: 2000});
    };

    // const initializeAuth = () => {
    //     const storedSession = localStorage.getItem('userSession');
    //     if (storedSession) {
    //         try {
    //             const userData = JSON.parse(storedSession);
    //             setUser(userData);
    //         } catch (e) {
    //             localStorage.removeItem('userSession');
    //         }
            
    //     }
    // };
    // initializeAuth();

    const logoutUser = () => {
        clearUser();
        toast.error("Logged out successfully!", {duration: 2000});
    };

    return { user, isLoggedIn, signupUser, loginUser, logoutUser, userName, setUser, clearUser };


},{
     persist: {
    key: 'userSession', 
    paths: ['user', 'isLoggedIn'], // Only persist these two
  }
});







// import { defineStore } from "pinia";
// import { ref } from "vue";
// import { useCounterStore } from "./counter";
// export const useUserStore = defineStore("user", () => {
//   const counterStore = useCounterStore();
//   const user = ref(null);
//   const updateUser = (data) => {
//     updateCounter()
//     user.value = data;
//   };
//   const updateCounter = () => {
//     counterStore.count++;
//   }
 
//   return { user, updateUser };
// });



//<template>
    // <div>
    //     <div class="text-2xl font-bold">User: {{ userStore.user ?? 'No User Found' }}</div>
    //     <div class="flex items-center space-x-4">
    //         <button class="px-6 py-2 mt-10 bg-green-600 text-white rounded-xl"
    //             @click="counterStore.updateCounter('decrement')">-</button>
    //         <CustomButton class="bg-green-500 text-white px-6 py-2 rounded-lg text-2xl">{{ counterStore.count }}
    //         </CustomButton>
    //         <button class="px-6 py-2 mt-10 bg-green-600 text-white rounded-xl"
    //             @click="counterStore.updateCounter('increment')">+</button>
    //     </div>
    //     <button class="px-6 py-2 mt-10 bg-green-600 text-white rounded-xl"
    //         @click="updateComponentUser(null)">Clear User</button>
    //     <button class="px-6 py-2 mt-10 bg-green-600 text-white rounded-xl"
    //         @click="updateComponentUser({ name: 'Funmi', age: 40, email: 'funmi@email.com' })">Update User</button>
 
    // </div>
//</template>
 

//<script setup>
// import CustomButton from '@/components/CustomButton.vue';
// import { useCounterStore } from '@/stores/counter';
// import { useUserStore } from '@/stores/user';
// //State
// const counterStore = useCounterStore();
// const userStore = useUserStore();
// // Methods
 
// const updateComponentUser = (data) => {
//     userStore.updateUser(data);
// }
//</script>