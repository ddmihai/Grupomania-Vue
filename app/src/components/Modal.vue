<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          <h2>Create post</h2>
          <button class="btn-close" @click="close"> x </button>
        </slot>
      </header>

      <section class="modal-body">
        <slot name="body">
            <form method="POST" action="/create/post" @submit.prevent="createPost" enctype="multipart/form-data">
                <input placeholder="Title" v-model="title" type="text" />
                <input placeholder="Subtitle" v-model="subtitle" type="text" />
                <input placeholder="Content" v-model="content" type="text" />

                <input @change="onFileSelected" name="image" type="file" />
                <button type="submit"> Proceed </button>
            </form>
        </slot>
       </section>

    </div>
  </div>
</template>

<script>
import { createPostNew } from '../../services/createPost.js';
  export default {

    data() {
        return {
            title:      '',
            subtitle:   '',
            content:    '',
            selectedFile: null
        }
    },      

    name: 'Modal',

    methods: {
      close() {
        this.$emit('close');
      },

      onFileSelected(event) {
        this.selectedFile = event.target.files[0];
      },

      createPost() {
          let formData = new FormData();
          formData.append('image', this.selectedFile);
          formData.append('title', this.title);
          formData.append('subtitle', this.subtitle);
          formData.append('content', this.content);
          formData.append('emp_ID', this.$store.state.user[0].emp_ID);
        console.log(formData)
          createPostNew(formData);
         // createPost(this.title, this.subtitle, this.content, this.selectedFile);

          this.close();
      },

    },
  };
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors.scss';
@import '../assets/scss/_mixins.scss';

  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
      flex: 1 1 300px;
      max-width: 700px;
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    width: 250px;
    height: 30px;
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }

  input {
      margin: 10px auto;
      width: 80%;
      height: 40px;
  }

  button {
    padding: 10px;
    width: 150px;
    background: transparent;
    border: none;
    background: $green;
    margin: 4px auto;

    &:active {
        background: $lightgray;
    }
}
</style>
