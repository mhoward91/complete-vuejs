<template>
<button>Like</button>
{{ post.likes }}
<hashtag
  v-for="hashtag in post.hashtags"
  :key="hashtag"
  :hashtag="hashtag"
/>
</template>

<script>
import Hashtag from './Hashtag.vue'

export default {
    components: { Hashtag },

    props: {
        post: {
            type: Object,
            required: true
        }
    },

    setup(props) {  // with composition api, props are accessibile through the first argument to setup
    }
}
</script>

<style scoped>
</style>