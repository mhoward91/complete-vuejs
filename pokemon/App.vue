<!-- built-in slot component will render any content INSIDE of component passed down   -->
<!-- name slots by inserting content inside of a template tag
     using <template v-slot:{name} CONTENT </template> -->

<template>
    <pokemon-cards
    :pokemons="pokemons"
    @chosen="fetchEvolutions"
    :selectedId="selectedId"
    />
    <pokemon-cards
    :pokemons="evolutions"
    />
</template>

<script>
import PokemonCards from "./PokemonCards.vue"

const api = "https://pokeapi.co/api/v2/pokemon"
const IDS = [1, 4, 7]
// const IDS = [10, 13, 16]

export default {
    components: {
        PokemonCards,
    },

    data() {
        return {
            pokemons: [], 
            evolutions: [],
            selectedId: null
        }
    },

    async created() {     // lifecycle hook -> run when element created in memory
        this.pokemons = await this.fetchData(IDS)
    },

    mounted() {     // lifecycle hook -> run when element rendered
        console.log("Mounted")
    },

    methods: {

        async fetchEvolutions(pokemon) {
            this.evolutions = await this.fetchData([pokemon.id + 1, pokemon.id + 2])
            this.selectedId = pokemon.id
        },

        async fetchData(ids) {
            const responses = await Promise.all(
                ids.map(id => window.fetch(`${api}/${id}`))
            )
            const json = await Promise.all(
                responses.map(data => data.json())
            )

            return json.map(datum => ({
                id: datum.id,
                name: datum.name,
                sprite: datum.sprites.other['official-artwork'].front_default,
                types: datum.types.map(type => type.type.name)
            }))
        },
    },
}
</script>

<style scoped>
</style>