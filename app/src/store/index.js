import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  plugins: [createPersistedState()],

  modules: {
  },
  
  // ------------------STATE---------------
  state: {
    user:       [],
    token:      [],
    array:      []
  },

  mutations: {
    STORE_POSTS (state, posts) {
      state.array.push(posts);
      state.array.flat();
    },

    LOGOUT (state) {
      state.user.pop();
      console.log(state.user + 'This is the user');
    },

    ADD_USER_TO_STORE (state, user) {
      state.user.pop();
      state.user.push(user);
    },

    ADD_TOKEN_TO_STORE (state, token) {
      state.token = '';
      state.token = token;
    }
  },

  actions: {

  }
})

export default store
