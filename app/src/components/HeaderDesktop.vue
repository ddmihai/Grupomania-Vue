<template>

  <header class="app">
    <div class="nav">
        <img src="../assets/images/logo.svg" alt="logo" height="30" width="130">
            <router-link to="/">Home</router-link> 
            <router-link disabled="disabled" to="#">About</router-link>
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

    button {
        background: transparent;
        outline: none;
        border: 2px solid black;
        padding: 5px;
        width: 120px;
        font-weight: 600;
        font-size: 1.4em;
        margin-right: 30px;
        margin-left: auto;
    }

    .nav {
        min-height: 60px;
        width: 100%;
        @include flexBasic (unset, center);
        background: $lightgray;

        & img {
            margin: 0 20px;
        }

    & a {
        @include typo(20px, black, bold );
        font-family: monospace;
        margin: 0 30px;
    }
    }

    a:nth-child(5) {
        margin-left: auto;
    }

</style>