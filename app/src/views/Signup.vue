<template>
    <section class="container">
        <signup></signup>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors.scss';
@import '../assets/scss/_mixins.scss';

.container {
    @include flexBasic(center, center);
    min-height: 100vh;
    
}

</style>