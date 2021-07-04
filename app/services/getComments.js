import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(VueAxios, axios);

const url = 'http://localhost:3000/api/get/comments/';

import store from '../src/store/index'

//GET ALL POSTS and store them in the store array
export function getData(postID, array) {
    axios.get(url + postID, { headers:  { Authorization: `Bearer ${store.state.token}` }})
        .then((data) => {
           array.push(data.data);
        })
}

