<template>
    <section>
        <p class="title">Read posts</p>
        <app-btn @handleEvent="goForum" btnText="Forum" className="buttonSignup"></app-btn>
    </section>
</template>

<script>
export default {
    methods: {
        goForum() {
            window.location.href = 'http://localhost:8080/#/forum';
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors.scss';
@import '../assets/scss/_mixins.scss';

section {
    @include flexBasic(space-between, center);
    border-bottom: 2px solid $lightgray;
    padding: 20px;
}

p {
    margin: 10px;
}

</style>