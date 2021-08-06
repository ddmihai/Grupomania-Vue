<template>
    <section>
        <titles text="Posts" className="backgroundLightGray"></titles>
        <aside>
           <div class="parent" v-for="post in reversedArrayPosts[0]" :key="post.post_ID">
             <post-container
                :postID             ="post.post_ID"
                :title              ="post.post_title"
                :postSubtitle       ="post.post_subtitle"
                :postContext        ="post.post_content"
                :author             ="post.emp_username"
                :background         ="post.imagesLink"
             ></post-container>
           </div>
        </aside>
    </section>
</template>

<script>
import { getPosts } from '../../services/getPosts.js';

export default {

    data() {
        return {
            postsArray : [],
            reversedArrayPosts: [],
            isModalVisible: false
        }
    },

    methods: {
        getPostsFunction() {
            getPosts(this.postsArray);
            this.$mount();
        },

        reverseArray() {
            this.reversedArrayPosts = this.postsArray.reverse();
            console.log(this.reversedArrayPosts);
        }
    },

    mounted() {
        this.getPostsFunction(this.postsArray);
        this.reverseArray();

    }

}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors.scss';
@import '../assets/scss/_mixins.scss';

    section {
        border: 2px solid $lightgray;
        max-width: 1000px;
        margin: 20px auto;
    }

    .parent {
        border-bottom: 2px solid $lightgray;
        padding: 10px;
    }
</style>