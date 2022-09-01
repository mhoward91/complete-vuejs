import { createStore } from 'vuex'
import { testPosts } from '../microblog/testPosts.js'

const delay = () => new Promise(res => setTimeout(res, 1000))

const posts = {  // this is a module, to logically separate stores
    namespaced: true,  // keeps objects separate from global
    
    state() {  // think of state like data() in options API -> returns an object of data
        return {
            postId: null,
            all: []
        }
    },

    // with vuex, mutations contain methods which update state, args are: state | payload
    // payload accesses the second argument of the commit method, passed when the mutation is called in the component
    // an object can be passed to the payload, and called with dot notation or destructuring 
    mutations: {  
        setPostId(state, postId) {
            state.postId = postId
        },

        setPosts(state, posts) {
            state.all = posts
        }
    },
    
    // actions used for async behaviour -> mutations should only be simple state changing
    // ctx argument gives access to commit mutations, or access the state
    // payload arg works in the same way as in mutations
    actions: {
        async fetch(ctx) {
            await delay()
            ctx.commit('setPosts', testPosts)
        }
    },

    getters: {
        currentPost(state) {
            return state.all.find(x => {
                return x.id === state.postId
            })
        }
    }
}

export const store = createStore({
    modules: {
        posts,
    }
})