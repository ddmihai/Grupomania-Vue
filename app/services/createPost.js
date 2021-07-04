import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(VueAxios, axios);


import store from '../src/store/index'

//GET ALL POSTS and store them in the store array
export function createPost(title, subtitle, context) {
    axios.post('http://localhost:3000/api/create/post',{
        emp_ID:         store.state.user[0].emp_ID,
        post_title:     title,
        post_subtitle:  subtitle,
        post_content:   context
    }, { headers:  { Authorization: `Bearer ${store.state.token}` }})
        .then(() => {
            console.log(store.state.user[0].emp_ID)
        })
}