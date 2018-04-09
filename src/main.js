import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import CreatePost from './CreatePostComponent.vue'
import EditPost from './EditPostComponent.vue'

const routes = [
    {
        path: '/',
        components: {
            postsIndex: App
        }

    },
    {path: '/posts/create', component: CreatePost, name: 'createPost'},
    {path: '/posts/edit/:id', component: EditPost, name: 'editPost'},

];



const router = new VueRouter({
    routes: routes
});

const app = new Vue({ router }).$mount('#app');

