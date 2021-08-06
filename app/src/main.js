import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMq from 'vue-mq'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

// axios ussage globally import side functions
Vue.use(VueAxios, axios);

// imports
import HeaderDesktop        from './components/HeaderDesktop.vue';
import HeaderMobile         from './components/HeaderMobile.vue';
import HomeBaner            from './components/HomeBaner.vue';
import Titles               from './components/Titles.vue';
import LoginForm            from './components/LoginForm.vue';
import SignupForm           from './components/SignupForm.vue';
import UniversalButton      from './components/UniversalButton.vue';
import DropDown             from './components/DropDown.vue';
import ProfileInfo          from './components/ProfileInfo.vue';
import DeleteUser           from './components/DeleteUser.vue';
import CreatePost           from './components/CreatePost.vue';
import GoForum              from './components/GoForum.vue';
import PostsList            from './components/PostsList.vue';
import PostContainer        from './components/PostContainer.vue'
import Modal                from './components/Modal.vue';
import CommentList          from './components/CommentList.vue';
import DeleteComment        from './components/DeleteComment.vue';
import BasicExample         from './components/BasicExample.vue';
import Rules                from './components/Rules.vue';
import UpdatePost                from './components/UpdatePost.vue';


// components
Vue.component('basic-e',            BasicExample);
Vue.component('header-d',           HeaderDesktop);
Vue.component('home-baner',         HomeBaner);
Vue.component('header-m',           HeaderMobile);
Vue.component('titles',             Titles);
Vue.component('login-form',         LoginForm);
Vue.component('signup',             SignupForm);
Vue.component('app-btn',            UniversalButton);
Vue.component('dropdown',           DropDown);
Vue.component('profile-info',       ProfileInfo);
Vue.component('delete-user',        DeleteUser);
Vue.component('create-post',        CreatePost);
Vue.component('nav-forum',          GoForum);
Vue.component('posts-list',         PostsList);
Vue.component('post-container',     PostContainer);
Vue.component('app-modal',          Modal);
Vue.component('comm-list',          CommentList);
Vue.component('delete-comm',        DeleteComment);
Vue.component('app-rules',          Rules);
Vue.component('post-update',          UpdatePost);



// mediaqueryes
Vue.use(VueMq, {
  breakpoints: {
    md: 900,
    lg: Infinity,
  }
})


Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
