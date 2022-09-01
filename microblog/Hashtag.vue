<template>
<div
  class="hashtag"
  @click="setHashtag"
>
    #{{ hashtag }}
</div>
</template>

<script>
import { store } from './store.js'

export default {
    props: {  // props are automatically available on composition api without needing to return them in the setup method
        hashtag: {
            type: String,
            required: true,
        }
    },

    setup(props, ctx) {  // setup will always have props & ctx as args in the composition api
        const setHashtag = () => {
            store.setHashtag(props.hashtag)
            // ctx.emit('setHashtag', props.hashtag)  // emit an event with ctx.emit
        }
    
        return {
            setHashtag
        }
    },
}
</script>

<style scoped>
.hashtag {
    text-decoration: underline;
}
.hashtag:hover {
    color: cornflowerblue;
}
</style>