import routerBlog1 from './components/routerBlog1.vue';
import loginForm from './components/loginForm.vue';
import menuTable from './components/menuTable.vue';

export default [
    { path: '/blog1', component: routerBlog1, name: 'blog1' },
    { path: '/', component: loginForm, name: 'login' },
    { path: '/home', component: menuTable, name: 'home' }
]