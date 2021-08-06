<template>
    <section>
        <p> ID: {{ postID }}</p>
        <h3>Title: {{ title }}</h3>

        <aside :style="{backgroundImage: `url(${background})`}" class="background">
            
        </aside>

        <aside>
            <p>{{ postSubtitle }}</p>
            <p>{{ postContext }}</p>
        </aside>

        <p>Created by: <span>{{ author }}</span></p>

       <section class="aside">
        
        <aside>
            <add-comment
            :postssID="postID"
            ></add-comment>
        </aside>

        <aside>
            <delete-post
            v-if="user[0].emp_admin == 1 || user[0].emp_username == author"
            :postsID="postID"
            ></delete-post>
        </aside>

        <aside>
            <img class="iamgeComments" src="../assets/images/list.png" alt="Go to all comments icon" @click="getComments" width="25">
            <comm-list v-if="openedCommentsTab"  :postsID="postID" />
        </aside>

            <aside>
                <img v-if="user[0].emp_admin == 1 || user[0].emp_username == author" @click="updatePost" src="../assets/images/update.png" width="25">
                <post-update  :postsID="postID" v-if="isModalVisible"></post-update>
            </aside>
       </section>
    </section>
</template>

<script>
import AddComment from '../components/AddComment.vue';
import DeletePost from '../components/DeletePost.vue';
import { mapState } from 'vuex'

export default {
        components: {
        AddComment,
        DeletePost
  },

    props: ['postID', 'title', 'postSubtitle', 'postContext', 'author', 'background'],

  data() {
      return {
          openedCommentsTab: false,
          backgroundC: JSON.stringify(this.background),
          isModalVisible: false
      }
  },

  methods: {
      getComments() {
           this.openedCommentsTab = !this.openedCommentsTab;
      },
       
       updatePost() {
            this.isModalVisible = !this.isModalVisible;
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

    section {
        padding: 10px;
        border: none;
        
    }

    span {
        background: $lightgray;
        padding: 5px;
        border-radius: 5px;
    }

    .aside {
        @include flexBasic (flex-start, flex-start);
        flex-direction: column;
    }

    .iamgeComments {
        margin: 10px;
        cursor: pointer;
    }

    .background {
        max-height: 80vh;
        min-height: 300px;
        width: 100%;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }
</style>