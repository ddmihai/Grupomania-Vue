<template>
    <aside>
        <img @click="deletePosts" src="../assets/images/delete.png" alt="delete post" height="25" width="25">
    </aside>
</template>

<script>
import { deletePost } from '../../services/deletePost.js';

export default {

    props: ['postsID'],

    methods: {
        deletePosts() {
           deletePost(this.postsID);
        }
    }
}
</script>

<style lang="scss" scoped>
    aside {
        margin-left: 10px;
    }
</style>