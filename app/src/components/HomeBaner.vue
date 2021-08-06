<template>
    <section class="presentation">
        <article>
            <h2>Wellcome to Grupomania Ltd</h2>
            <h3>We offer HR sollutions</h3>

            <button @click="signup">Signup</button>
        </article>

        <!-- Three containers with details -->
    <section>
        
    </section>
    </section>
</template>

<script>
    export default {
        methods: {
            signup() {
                window.location.href = 'http://localhost:8080/#/signup';
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors.scss';
@import '../assets/scss/_mixins.scss';

.presentation {
    margin: 0 auto;
    height: 500px;

    background: url('../assets/images/dots.jpg');
    background-size: cover;
}

article {
    height: inherit;
    @include flexBasic(center, center);
    flex-direction: column;
    background: rgba(0, 0, 0, 0.513);
    padding: 10px;
    text-align: center;
}

h2 {
    color: white;
    font-size: 2.3em;
}

h3 {
    color: white;
    font-size: 1.6em;
}

button {
    background: transparent;
    width: 140px;
    border: 2px solid white;
    color: white;
    margin-top: 20px;
    font-size: 1.2em;
    height: 40px;
    cursor: pointer;
}
</style>