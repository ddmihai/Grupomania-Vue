<template>
    <section class="delete">
        <p class="title">Delete account</p>
        <form @submit.prevent="deleteUser">
                    <app-btn btnText="Delete" className="buttonSignup"></app-btn>
        </form>
    </section>
</template>

<script>
import { deleteU } from '../../services/userOps.js';

export default {
    props: ['userID'],

    methods: {
        deleteUser() {
            deleteU();
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors.scss';
@import '../assets/scss/_mixins.scss';

.delete {
    border-top: 2px solid $lightgray;
    border-bottom: 2px solid $lightgray;
    @include flexBasic (space-between, center);
    padding: 20px;

    & p {
        margin: 10px;
    }
}
</style>