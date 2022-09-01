<template>
    <h3>New Post</h3>
    <form @submit.prevent="submit">
        <input
        v-model="newPost.title"
        placeholder="Title"
        >
        <br/>
        <textarea
        cols="30" 
        rows="10"
        v-model="newPost.content"
        />
        <br/>
        <button>Submit</button>
    </form>
</template>

<script>

import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { usePosts } from './usePosts.js'
    
    export default {     
        setup() {
            const postStore = usePosts()
            const router = useRouter()  // useful functions from vue such as redirecting etc

            const newPost = reactive({
                title: '',
                content: ''
            })

            const submit = () => {
                const id = postStore.posts.value.length + 1
                postStore.addPost({
                    id,
                    title: newPost.title,
                    content: newPost.content
                })

                router.push(`/posts/${id}`)
            }

            return {
                newPost,
                submit
            }
        }
    }
</script>