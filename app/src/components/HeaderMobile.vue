<template>
  <header class="header">
    <img class="logo" src="../assets/images/logo.png" alt="logo" height="30" width="30">
    <img @click="available = !available" class="menu" src="../assets/images/menu.png" alt="logo" height="25" width="25">

    <div v-if="available" class="nav">
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
        data() {
            return {
                available: false
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
</style>