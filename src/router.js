import { createWebHistory, createRouter } from "vue-router";
import DetailPage from './components/DetailPage.vue';
import HomePage from "./components/HomePage.vue";
import DdetailPage from './components/DdetailPage.vue';
import AuthorPage from './components/AuthorPage.vue';
import CommentPage from './components/CommentPage.vue';

const routes = [
    {
        path: "/Detail",
        component: DetailPage,
    },
    {
        path: "/Detail/:id",
        component: DdetailPage,
        children : [
            { path : 'author', component : AuthorPage },
            { path : 'comment', component : CommentPage },
        ]
    },
    {
        path: "/",
        component: HomePage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 