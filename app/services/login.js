import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(VueAxios, axios);

// store
import store from '../src/store/index'

// login function expoorting
export function login(username, password) {
    axios.post('http://localhost:3000/api/login', {username, password})
         .then((data) => {
            if (data.data.message) {
               return alert('Wrong Credentials');
            }
            store.commit('ADD_USER_TO_STORE',   data.data.user);
            store.commit('ADD_TOKEN_TO_STORE',  data.data.token);
            window.location.href = 'http://localhost:8080/#/profile';
         })
         .catch((error) => console.log(error))
}

