<template>
    <section class="dropdown">
       <form @submit.prevent="promoteUsername">
           <input placeholder="Promote username" type="text" v-model="username">
           <app-btn className="buttonSignup" btnText="Promote"></app-btn>
       </form>
    </section>
</template>

<script>
import { promoteUser } from '../../services/userOps.js';
import { inputSafe, } from '../../services/utils.js';

export default {
    data() {
        return {
            username: ''
        }
    },

    methods: {
        promoteUsername() {
            if (inputSafe(this.username)) {
               return promoteUser(this.username);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors.scss';
@import '../assets/scss/_mixins.scss';

form {
    padding: 20px;
    @include flexBasic(space-between, center);
}

input {
    @include setTypo;
    margin: 10px;
}
    
</style>