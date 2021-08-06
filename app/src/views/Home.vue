<template>
  <section class="home">
    <article class="home__presentation">
      <home-baner></home-baner>

      <!-- Div with containers slided over the home-banner -->
      <aside class="boxes">
         <basic-e>
           <template v-slot:image><img src="../assets/images/customer.png" width="90" alt="customer icon"></template>
           <template v-slot:text><p class="description">Customer Services</p></template>
         </basic-e>

          <basic-e>
            <template v-slot:image><img src="../assets/images/quality.png" width="90" alt="customer icon"></template>
            <template v-slot:text><p class="description">Continous Improvements</p></template>
         </basic-e>

          <basic-e>
            <template v-slot:image><img src="../assets/images/communication.png" width="90" alt="customer icon"></template>
            <template v-slot:text><p class="description">Communication Forum</p></template>
         </basic-e>
      </aside>

      <!-- Roules section -->
      <aside class="rules">
        <app-rules></app-rules>
      </aside>
    </article>
  </section>
</template>

<script>
// @ is an alias to /src

export default {

}
</script>


<style lang="scss" scoped>
@import '../assets/scss/_colors.scss';
@import '../assets/scss/_mixins.scss';
 
.home {
  height: calc(100vh - 60px);
}

.boxes {
  @include flexBasic (center, center);
  flex-wrap: wrap;
  margin-top: -50px;
}

.description {
  font-size: 1.3em;
}

.rules {

}

</style>