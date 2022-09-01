<template>
<button
v-for="post in posts"
:key="post.id"
@click="click(post)"
>
{{ post.title }}
</button>

<div v-if="currentPost">
<h2>{{ currentPost.title }}</h2>
<h4> {{ currentPost.content }}</h4>
</div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'

export default {
    // pass in mutations (methods from store which modify state) with store.commit('{mutation name}')
    setup() {

        const click = (post) => {
            store.commit('posts/setPostId', post.id)  // looking within the posts module
        }

        const fetchData = () => {
            store.dispatch('posts/fetch')  // looking within the posts module
        }

        onMounted(() => {
            fetchData()
        })

        const store = useStore()

        return {
            postId: computed(() => store.state.postId),  // return only parts of store being used, instead of entire store -> computed as only entire store is reactive
            posts: computed(() => store.state.posts.all), // looking within posts module
            click,
            currentPost: computed(() => store.getters['posts/currentPost'])
            
        }
    }
}
</script>

<style scoped>
</style>