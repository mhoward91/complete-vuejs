<template>
<div class="hashtag">
    #{{ hashtag }}
</div>
</template>

<script>
export default {
    props: {  // props are automatically available on composition api without needing to return them in the setup method
        hashtag: {
            type: String
        }
    }
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