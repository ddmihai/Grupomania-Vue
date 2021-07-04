<template>
  <main>
      <section class="centered">
<!-- left side -->
          <aside class="profile" v-for="user in user" :key="user.emp_ID">
               <titles className="backgroundLightGray" text="Profile"></titles>
                <profile-info
                    :userID         ="user.emp_ID"
                    :userFname      ="user.emp_fname"
                    :userLname      ="user.emp_lname"
                    :userUsername   ="user.emp_username"
                    :userRank       ="user.emp_admin"
                ></profile-info>
          </aside>

<!-- right side -->
          <aside class="settings">
              <titles className="backgroundLightGray" text="Useful Links"></titles>
              <dropdown v-if="user[0].emp_admin == 1"></dropdown>
              <delete-user userID="user.emp_ID"></delete-user>

<!-- navigate to forum page, post to forum component  -->
              <nav-forum></nav-forum>
              <create-post @openModal="showModal"></create-post>
              <app-modal v-show="isModalVisible" @close="closeModal"></app-modal>
          </aside>
      </section>

  </main>
</template>

<script>
import { mapState } from 'vuex'

export default {

data() {
    return {
    isModalVisible: false
    }
},

methods: {
     showModal() {
        this.isModalVisible = true;
      },

      closeModal() {
        this.isModalVisible = false;
      }
},

computed: {
    ...mapState(['user'])
}
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors.scss';
@import '../assets/scss/_mixins.scss';

main {
    @include minDim;
    @include flexBasic (center, center);
    
}

.centered {
    flex: 1 1 200px;
    max-width: 1000px;
    @include flexBasic (unset, unset);
    padding: 10px;
    gap: 10px;
}

.profile {
    flex: 1 1 400px;
}

.settings {
    flex: 1 1 400px;
    border: 2px solid $lightgray;
}
</style>