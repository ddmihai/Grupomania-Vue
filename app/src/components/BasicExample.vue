<template>
    <figure>
        <div class="">
            <slot name="image"></slot>
        </div>
        <div class="">
            <slot name="text"></slot>
        </div>
    </figure>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors.scss';
@import '../assets/scss/_mixins.scss';

figure {
    width: 24rem;
    height: 200px;
    background: rgb(231, 231, 231);
    -webkit-box-shadow: 1px 8px 12px 7px rgba(0,0,0,0.59); 
    box-shadow: 1px 8px 12px 7px rgba(0,0,0,0.59);
    @include flexBasic(space-evenly, center);
    flex-direction: column;

    
}

</style>