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

export default{
    namespaced:true,
    state:{
        user:null,
        isLoggedIn:false

    },

    getters: {
        getIsLoggedIn :(state)=> state.isLoggedIn,
        getUser :(state)=> state.user? state.user.name:'Guest'
    },

    mutations: {
        SET_USER_DATA(state, userData){
            state.user = userData;
            state.isLoggedIn = true;
        },

        CLEAR_USER_DATA(state){
            state.user = null;
            state.isLoggedIn = false;
        }
    },

    actions: {
        async signupUser({state, commit}, credentials){
            const storedUser = localStorage.getItem('localUsers');
            const users = storedUser ? JSON.parse(storedUser):[];

            const emailExist = users.some(user => user.email === credentials.email)
            
            if(emailExist){
                throw new Error('This email is already registered.')
            }

            users.push(credentials);
            localStorage.setItem('localUsers', JSON.stringify(users))
        },

        async loginUser({commit}, credentials){
            const storedUser = localStorage.getItem('localUsers');
            const users = storedUser ? JSON.parse(storedUser):[];

            const foundUser = users.find(user => user.email === credentials.email && user.password === credentials.password)

            if(!foundUser){
                throw new Error ('Invalid email or password')
            }

            commit('SET_USER_DATA', foundUser)
            localStorage.setItem('userSession', JSON.stringify(foundUser));
            toast.success("Login successful!", {duration: 2000});
        },

        initializeAuth({commit}){
            const storedSession = localStorage.getItem('userSession');

            if(storedSession){
                const userData = JSON.parse(storedSession)

                commit('SET_USER_DATA', userData)
            }
            
        },

        logoutUser({commit}){
            localStorage.removeItem('userSession');
            commit('CLEAR_USER_DATA')
            toast.success("Logged out successfully!", {duration: 2000});
        }

        

    },
}