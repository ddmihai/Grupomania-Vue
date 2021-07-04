
import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(VueAxios, axios);

const url = 'http://localhost:3000/api/delete/comment/';

import store from '../src/store/index'

//GET ALL POSTS and store them in the store array
 function deleteComment(postID) {
    axios.delete(url + postID, { headers:  { Authorization: `Bearer ${store.state.token}` }})
        .then((data) => {
           console.log(data)
        })
}

export default deleteComment;

