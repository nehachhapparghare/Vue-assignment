import routerBlog1 from './components/routerBlog1.vue';
import routerBlog2 from './components/routerBlog2.vue';
import loginForm from './components/loginForm.vue';
import menuTable from './components/menuTable.vue';

export default [
    { path: '/blog1', component: routerBlog1, name: 'blog1' },
    { path: '/blog2', component: routerBlog2, name: 'blog2' },
    { path: '/', component: loginForm, name: 'login' },
    { path: '/menu', component: menuTable, name: 'menu' }
]