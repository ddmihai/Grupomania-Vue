import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(VueAxios, axios);

import store from '../src/store/index'
//const headers =  { Authorization: `Bearer ${store.state.token}` }

// login function expoorting
export function promoteUser(username) {
    axios.post('http://localhost:3000/api/status/' + username, {
        adminUsername: store.state.user[0].emp_username,
        isAdmin: 1
    } , {
        headers:  { Authorization: `Bearer ${store.state.token}` }
    })
         .then((data) => {
            console.log(data);
         })
        }

// deleteUser
export function deleteU() {
    axios.delete('http://localhost:3000/api/delete/' + store.state.user[0].emp_username,
        {headers:  { Authorization: `Bearer ${store.state.token}` }}
    )
    .then(() => {
        alert('User deleted!');
        window.location.href = 'http://localhost:8080/#/home';
    })
}