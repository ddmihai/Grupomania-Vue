<template>
    <section>
        <titles text="Basic Rules" className="backgroundLightGray" />
            <main>
                <aside class="rules">
                    <h2>Grupomania</h2>
                    <div class="rules__text">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur debitis 
                            consequuntur beatae expedita, nam et repudiandae nulla 
                            sit explicabo porro est illum veritatis nobis quo a quod vel fugit odit.
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur debitis 
                            consequuntur beatae expedita, nam et repudiandae nulla 
                            sit explicabo porro est illum veritatis nobis quo a quod vel fugit odit.
                        </p>
                    </div>
                </aside>
                <aside v-if="$mq === 'lg'" class="happy"></aside>
            </main>
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
    margin-top: 30px;
    min-height: 400px;
}

main {
    min-height: inherit;
    @include flexBasic(unset, unset);
    flex-wrap: wrap;
}

.happy {
    flex: 1 1 200px;
    background: url('../assets/images/happy.jpg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}

.rules {
    flex: 1 1 400px;
    padding: 20px;
    @include flexBasic(space-evenly, center);
    flex-direction: column;

    &__text p {
        font-size: 1.4em;
    }
}

h2 {
    font-size: 2em;
}


</style>