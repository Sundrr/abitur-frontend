import { createRouter, createWebHistory } from 'vue-router';

import StartPage from '@/components/pages/StartPage.vue';
import RegisterPage from '@/components/pages/RegisterPage.vue';
import ProgramPage from '@/components/pages/ProgramPage.vue';
import AdminPage from '@/components/pages/AdminPage.vue';
import NotFound from '@/components/pages/NotFoundPage.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            name: 'index',
            component: StartPage,
        },
        {
            path: '/register',
            name: 'register',
            component: RegisterPage,
        },
        {
            path: '/programs',
            name: 'programs',
            component: ProgramPage,
        },
        {
            path: '/admin',
            name: 'admin',
            component: AdminPage,
        },
        {
            path: '/:notFound(.*)',
            component: NotFound,
        },
    ]
});

export default router;
