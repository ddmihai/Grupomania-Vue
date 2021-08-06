<template>
    <section>
        
            <form @submit.prevent="updatePost" enctype="multipart/form-data">
                <input placeholder="Title" v-model="title" type="text" />
                <input placeholder="Subtitle" v-model="subtitle" type="text" />
                <input placeholder="Content" v-model="content" type="text" />

                <input @change="onFileSelected" name="image" type="file" />
                <button type="submit"> Proceed </button>
            </form>
     
    </section>
</template>

<script>
import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(VueAxios, axios);
import store from '../../src/store/index'

    export default {
        props: ['postsID'],

        data() {
            return {
                title:      '',
                subtitle:   '',
                content:    '',
                selectedFile: null
            }
        },

        methods: {
            updatePost() {
                let formData = new FormData();
                formData.append('image', this.selectedFile);
                formData.append('title', this.title);
                formData.append('subtitle', this.subtitle);
                formData.append('content', this.content);

                //================================

                axios.put('http://localhost:3000/api/update/' + this.postsID,
                formData
                , { headers: 
                    { Authorization: `Bearer ${store.state.token}`}
                })
                    .then(() => {
                        location.reload();
                    })
                //=================================
            },

            onFileSelected(event) {
                this.selectedFile = event.target.files[0];
      }
        }
    }
</script>

<style lang="scss" scoped>

</style>