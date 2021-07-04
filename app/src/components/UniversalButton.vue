<template>
    <button @click="handleClick" :class="className"> {{ btnText }} </button>
</template>

<script>
export default {
    props: ['btnText', 'className'],

    methods: {
        handleClick() {
            this.$emit('handleEvent');
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors.scss';
@import '../assets/scss/_mixins.scss';

.buttonSignup {
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