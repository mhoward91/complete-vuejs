<!-- router-view dynamically updates to any valid routes entered in the url -->
<!-- router-link provides client side rendering of a route (so no refresh) -->
<template>
    <router-link to="/posts">
    Posts
    </router-link>

    <router-view/>
</template>

<script>
export default {
}
</script>

<style scoped>
</style>