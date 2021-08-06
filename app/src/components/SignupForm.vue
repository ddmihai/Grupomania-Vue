<template>
    <section class="container">
        <form @submit.prevent="signup">
            <titles :className="'backgroundLightGray'" text="Signup"></titles>

            <div class="input margintop">
                <input placeholder="First Name" v-model="fname" type="text">
            </div>

            <div class="input">
                <input placeholder="Last Name" v-model="lname" type="text">
            </div>

            <div class="input">
                <input placeholder="Username" v-model="username" type="text">
            </div>

            <div class="input">
                <input placeholder="Password" v-model="password" type="password">
            </div>

            <div class="input">
                <app-btn type="submit" className="buttonSignup" btnText="Signup"></app-btn>
            </div>
        </form>
    </section>
</template>

<script>
import { signup } from '../../services/signup.js';
import { inputSafe, } from '../../services/utils.js';

export default {
data() {
    return {
        fname:      '',
        lname:      '',
        username:   '',
        password:   ''
    }
},

methods: {
    signup() {
        if (inputSafe(this.fname) && inputSafe(this.lname) && inputSafe(this.username) && inputSafe(this.password)) {
           signup(this.fname, this.lname, this.username, this.password);
        }
    }
}
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors.scss';
@import '../assets/scss/_mixins.scss';

.container {
    flex: 1 1 200px;
}

form {
    max-width: 500px;
    flex: 1 1 200px;
    padding: 0;
    border: 2px solid $lightgray;
}

.input {
    padding: 20px;
    @include flexBasic (center,center);
}

input {
    flex: 1 1 200px;
    max-width: 300px;
    height: 40px;

    &::placeholder {
        font-size: 1.2em;
    }
}

.margintop {
    margin-top: 40px;
}
</style>