<template>
    <section>
       <p>Create Post</p>
       <button @click="openModal">Create</button>
    </section>
</template>

<script>
export default {
    methods: {
        openModal() {
            this.$emit('openModal');
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors.scss';
@import '../assets/scss/_mixins.scss';

section {
    @include flexBasic (space-between, center);
    padding: 20px;
}

p {
    margin: 10px;
}

button {
    padding: 10px;
    width: 150px;
    background: transparent;
    border: none;
    background: $green;

    &:active {
        background: $lightgray;
    }
}
</style>