<template>
    <section class="sectionForm">
       <div>
            <form @submit.prevent="login">
            <div class="form__username">
                <input v-model="username" type="text" placeholder="Username">
            </div>
            <div class="form__password">
                <input v-model="password" type="password" placeholder="Password">
            </div>

            <button type="submit">Login</button>
        </form>
       </div>
    </section>
</template>

<script>
import { login } from '../../services/login.js';
import { inputSafe, } from '../../services/utils.js';

    export default {
        data() {
            return {
                username:       this.username,
                password:       this.password,
            }
        },

        methods: {
            login() {
                if (inputSafe(this.username) && inputSafe(this.password)) {
                 return login(this.username, this.password);
                }
                console.log('Error');

            }
        }
    }
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors.scss';
@import '../assets/scss/_mixins.scss';

    .sectionForm {
       max-height: 300px;
       width: inherit;
       @include flexBasic(center, center);
    }

    form {
        @include flexBasic(center, center);
        flex-direction: column; 
       
        flex: 1 1 200px;
       
       & input {
           outline: none;
           border: 1px solid black;
           @include fixedDim(250px, 35px);
            margin-top: 30px;
        
        &::placeholder {
                font-size: 16px;
                padding-left: 20px;
            }
       }
    }

    button {
       margin: 20px auto;
       height: 35px;
       outline: none;
        background: $green;
        border: none;
        cursor: pointer;
        width: 130px;

        &:active {
            background: $lightGreen;
        }
    }
</style>