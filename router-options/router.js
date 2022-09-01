import {
    createWebHistory,
    createRouter
} from 'vue-router'
import Hello from './Hello.vue'
import Posts from './Posts.vue'
import Post from './Post.vue'
import NewPost from './NewPost.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [   // define routes as objects with a number of properties
        {
            path: '/hello',  // url path for this route
            component: Hello  // component to be rendered at this route
        },
        {
            path: '/posts',  // url path for this route
            component: Posts,  // component to be rendered at this route
            children: [
                {
                    path: 'new',
                    component: NewPost
                },
                {
                    path: ':id',
                    component: Post
                }
            ]
        }
    ]
})

export { router }