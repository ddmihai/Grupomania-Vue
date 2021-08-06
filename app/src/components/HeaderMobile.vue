<template>
  <header class="header">
    <img class="logo" src="../assets/images/logo.svg" alt="logo" height="30" width="130">
    <img @click="available = !available" class="menu" src="../assets/images/menu.png" alt="logo" height="25" width="25">

    <div v-if="available" class="nav">
      <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link>
      <router-link to="/signup">Signup</router-link>
      <router-link v-if="userArray.length == 0" to="/login">Login</router-link>

        <button @click="logout" v-if="userArray.length > 0">Logout</button>
    </div>

    <router-view/>
  </header>
</template>     

<script>
import store from '../store/index';

    export default {
        data() {
            return {
                available: false,
                userArray: store.state.user
            }
        },

        methods: {
            logout() {
                store.commit('LOGOUT');
                window.location.href = 'http://localhost:8080/#/';
                console.log(this.userArray);
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors.scss';
@import '../assets/scss/_mixins.scss';
    .nav {
        height: inherit;
        width: 100%;
        border-top: 1px solid gray;
        border-bottom: 1px solid gray;
        @include flexBasic (unset, center);
        flex-direction: column;
        background: $lightgray;
       

    & a {
        @include typo(20px, black, bold );
        font-family: monospace;
        margin: 20px;
    }
}

    .menu {
        position: absolute;
        top: 20px;
        right: 20px;
    }

    .logo {
        margin: 20px;
        
    }

        button {
        background: transparent;
        outline: none;
        padding: 5px;
        width: 120px;
        font-weight: 600;
        font-size: 1.5em;
        border: none;
        margin: 10px 0 20px 0;
    }

   
</style>