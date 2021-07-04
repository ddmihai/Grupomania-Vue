<template>
  <section class="about__container">
      <article class="about__presentation">
           <titles text="Wellcome to Grupomania" className="backgroundLightGray"></titles>
           <h2>Forum rules</h2>
           <ul>
             <li><h3>Please keep an adequate language</h3></li>
             <li><h3>Respect your colleagues</h3></li>
             <li><h3>For any problems or questions please rise a forum ticket</h3></li>
           </ul>
      </article>
  </section>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors.scss';
@import '../assets/scss/_mixins.scss';
 
 .about__container {
   height: calc(100vh - 60px);
  @include flexBasic(center, center);
 }

 .about__presentation {
   border: 2px solid $lightgray;
    flex: 1 1 200px;
    max-width: 800px;
 }

 h2, h3 {
  padding: 10px;
}

</style>