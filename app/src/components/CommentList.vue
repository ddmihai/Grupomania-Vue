<template>
   <section>
       <div v-for="comm in commentsArray[0]" :key="comm.comm_ID" class="title">
           <delete-comm :commentID="comm.comm_ID" v-if="user[0].emp_admin == 1 || user[0].emp_username == comm.emp_username" />
            <aside>
                <p><em>{{ comm.comment_text }}</em></p>  
                <p>Author: {{ comm.emp_username }}</p>     
            </aside> 
       </div> 
   </section>
</template>

<script>
import { getData } from '../../services/getComments.js';
import { mapState } from 'vuex'

export default {
    props: ['postsID'],

    data() {
        return {
            commentsArray: []
        }
    },

    methods: {
        getComments() {
            getData(this.postsID, this.commentsArray);
        }
    },

      computed: {
    ...mapState(['user'])
},

    mounted() {
        this.getComments();
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors.scss';
@import '../assets/scss/_mixins.scss';

section {
    min-width: 100%;
}

.title {
    margin: 10px;
    @include flexBasic(unset, center)
}

</style>