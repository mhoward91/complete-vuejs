<template>
<layout>
    <template v-slot:header>
        {{ selectedAlbum }}
    </template>

    <template v-slot:sidebar>
        <album
        v-for="album in albums"
        :key="album.id"
        :album="album"
        />
    </template>

    <template v-slot:content>
        <router-view/>
    </template>
</layout>
</template>

<script>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
import Layout from './Layout.vue'
import Album from './Album.vue'

export default {
    components: {
        Layout,
        Album,
    },

    setup() {
        const store = useStore()

        onMounted(() => {
            store.dispatch('albums/fetch')
        })

        const selectedAlbum = computed(() => {
            if (!store.state.photos.albumId) {
                return 'Select an album below'
            }
            return `You're viewing album #${store.state.photos.albumId}`
        })
        const albums = computed(() => {
            return store.state.albums.all
        })

        const photos = computed(() => {
            return store.state.photos.all
        })

        return {
            albums,
            photos,
            selectedAlbum
        }
    }
}
</script>

<style>
* {
    box-sizing: border-box;
}

body {
    margin: 0;
}
</style>