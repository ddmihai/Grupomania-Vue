import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(VueAxios, axios);


import store from '../src/store/index'

//GET ALL POSTS and store them in the store array
export function getPosts(array) {
    axios.get('http://localhost:3000/api/get/posts', { headers:  { Authorization: `Bearer ${store.state.token}` }})
        .then((data) => {
            array.push(data.data);
        })
}