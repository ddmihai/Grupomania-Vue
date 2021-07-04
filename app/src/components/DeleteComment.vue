<template>
   <img src="../assets/images/del.png" @click="deleteC" alt="delete comment icon" width="25">
</template>

<script>
import deleteComment  from '../../services/deleteComments';

export default {

    props: ['commentID'],

    methods: {
        deleteC() {
            deleteComment(this.commentID);
            location.reload();
        }
    }
}
</script>

<style scoped>
img {
    margin: 20px;
}

</style>