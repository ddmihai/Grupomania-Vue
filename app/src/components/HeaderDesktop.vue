<template>

  <header class="app">
    <div class="nav">
        <img src="../assets/images/logo.png" alt="logo" height="30" width="30">
            <router-link to="/">Home</router-link> 
            <router-link to="/about">About</router-link>
            <router-link to="/signup">Signup</router-link>
            <router-link to="/login">Login</router-link>
    </div>
    <router-view/>
  </header>

</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors.scss';
@import '../assets/scss/_mixins.scss';

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

    a:last-of-type {
        margin-left: auto;
    }
</style>