import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(VueAxios, axios);


// login function expoorting
export function signup(fname, lname, username, password) {
    axios.post('http://localhost:3000/api/signup', {fname, lname, username, password})
         .then(() => {
            window.location.href = 'http://localhost:8080/#/login'
         })
         .catch((error) => console.log(error))
}

