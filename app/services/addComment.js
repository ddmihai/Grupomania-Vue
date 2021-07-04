import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(VueAxios, axios);


import store from '../src/store/index'

//GET ALL POSTS and store them in the store array
export function addComment(postID, comment) {
    axios.post('http://localhost:3000/api/create/comment/' + postID, {
        author: store.state.user[0].emp_ID,
        comment: comment
    }, { headers:  { Authorization: `Bearer ${store.state.token}` }})
        .then(() => {
            console.log('Comment added');
        })
}