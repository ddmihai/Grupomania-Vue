<template>
    <section>
       <div class="main">
            <aside class="main__right">
                <titles text="Wellcome"></titles>
                <login-form></login-form>
            </aside>
       </div>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors.scss';
@import '../assets/scss/_mixins.scss';

section {
    @include flexBasic(center, center);
    height: 100vh;
   

}

.main {
    height: 400px;
    flex: 1 1 200px;
    max-width: 400px;
    background: $lightgray;
}

</style>