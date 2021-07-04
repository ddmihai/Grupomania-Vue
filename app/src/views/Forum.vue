<template>
    <main>
        <posts-list></posts-list>
    </main>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors.scss';
@import '../assets/scss/_mixins.scss';

main {
    @include fixedDim(100%, 100vh);
    

}
</style>