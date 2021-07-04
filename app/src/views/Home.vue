<template>
  <section class="home">
    <article class="home__presentation">
      <titles text="Wellcome to Grupomania" className="backgroundLightGray"></titles>
      <h2>We are pleased to wellcome you to our organisation</h2>
      <h3>Our benefits: </h3>
      <ul>
        <li><h3>Anual refresh training</h3></li>
        <li><h3>Paid deducted pension </h3></li>
        <li><h3>Work from home flexible</h3></li>
        <li><h3>Unpaid holliday</h3></li>
      </ul>
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
  @include flexBasic(center, center);
  
;

  &__presentation {
    border: 2px solid $lightgray;
    flex: 1 1 200px;
    max-width: 800px;
  }
}

h2, h3 {
  padding: 10px;
}

</style>