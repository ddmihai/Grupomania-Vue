<template>
        <h1 :class="className" > {{ text }}</h1>
</template>

<script>
    export default {
        props: ['text', 'className']  
    }
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors.scss';
@import '../assets/scss/_mixins.scss';

        h1 {
            @include typo(2em, black, normal);
            min-height: 50px;
            @include flexBasic (center, center);
        }

        .backgroundLightGray {
            background: $lightgray;
            margin: 0;
            height: 80px;
        }
</style>