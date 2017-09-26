import Vue from 'vue';
import VueRouter from 'vue-router';
import VueImgInputer from 'vue-img-inputer';

import App from './App.vue';
import Reporte from './components/Reporte.vue';
import Cliente from './components/Cliente.vue';
import Categoria from './components/Categoria.vue';
import Empresa from './components/Empresa.vue';
import Contenido from './components/Contenido.vue';
import Login from './components/Login.vue';
import Nav from './components/Nav.vue';
import Inicio from './components/Inicio.vue';

import { store } from './store';

Vue.component('plaify-reporte', Reporte);
Vue.component('plaify-cliente', Cliente);
Vue.component('plaify-categoria', Categoria);
Vue.component('plaify-empresa', Empresa);
Vue.component('plaify-contenido', Contenido);
Vue.component('plaify-login', Login);
Vue.component('plaify-nav', Nav);
Vue.component('plaify-inicio', Inicio);

Vue.component('VueImgInputer', VueImgInputer);

Vue.use(VueRouter);
const routes = [
    {path: '/reportes', component: Reporte},
    {path: '/clientes', component: Cliente},
    {path: '/categorias', component: Categoria},
    {path: '/empresas', component: Empresa},
    {path: '/contenidos', component: Reporte},
    {path: '/', component: Inicio}
];

const router = new VueRouter({routes});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
