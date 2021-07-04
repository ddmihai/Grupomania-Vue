<template>
    <section>
      <img class="icon" @click="openComm" src="../assets/images/message.png" alt="message icon" width="25" height="25">
      <input  v-if="openInput" type="text" v-model="commentText">
      <button @click="createComment" v-if="openInput">Comment</button>
    </section>

</template>

<script>
import { addComment } from '../../services/addComment.js';
import { inputSafe, } from '../../services/utils.js';

export default {

  props: ['postssID'],

  data() {
    return {
      commentText:  '',
      openInput:    false
    }
  },

   methods: {
     openComm() {
       this.openInput = !this.openInput;
     },

     createComment() {
       if (inputSafe(this.commentText)) {
         addComment(this.postssID, this.commentText);
         this.openComm();
       }
     }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors.scss';
@import '../assets/scss/_mixins.scss';

input {
  margin: 10px;
  width: 80%;
}

button {
   padding: 10px;
    width: 150px;
    background: transparent;
    border: none;
    background: $green;

    &:active {
        background: $lightgray;
    }
}

section {
  display: flex;
}
</style>