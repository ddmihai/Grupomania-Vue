import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(VueAxios, axios);


import store from '../src/store/index'

//GET ALL POSTS and store them in the store array
export function deletePost(postID) {
    axios.delete('http://localhost:3000/api/delete/post/' + postID, { headers:  { Authorization: `Bearer ${store.state.token}` }})
        .then((data) => {
           alert(data.data);
           location.reload();
        })
}