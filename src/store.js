import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        autenticado: true,
        username: '',
        nombreEmpresa: '',
        inicio: true,
        contenido: false,
        reporte: false,
        cliente: false,
        categoria: false,
        empresa: false,
        tipos: false,
        baseUrl: 'http://localhost:8080/webAdmin/api/'
    },
    getters: {},
    mutations: {
        verInicio(state) {
            state.inicio = true;
            state.contenido = false;
            state.reporte = false;
            state.cliente = false;
            state.categoria = false;
            state.empresa = false;
            state.tipos = false;
        },
        verContenido(state) {
            state.inicio = false;
            state.contenido = true;
            state.reporte = false;
            state.cliente = false;
            state.categoria = false;
            state.empresa = false;
            state.tipos = false;
        },
        verReporte(state) {
            state.inicio = false;
            state.contenido = false;
            state.reporte = true;
            state.cliente = false;
            state.categoria = false;
            state.empresa = false;
            state.tipos = false;
        },
        verCliente(state) {
            state.inicio = false;
            state.contenido = false;
            state.reporte = false;
            state.cliente = true;
            state.categoria = false;
            state.empresa = false;
            state.tipos = false;
        },
        verCategoria(state) {
            state.inicio = false;
            state.contenido = false;
            state.reporte = false;
            state.cliente = false;
            state.categoria = true;
            state.empresa = false;
            state.tipos = false;
        },
        verEmpresa(state) {
            state.inicio = false;
            state.contenido = false;
            state.reporte = false;
            state.cliente = false;
            state.categoria = false;
            state.empresa = true;
            state.tipos = false;
        },
        verTipos(state) {
            state.inicio = false;
            state.contenido = false;
            state.reporte = false;
            state.cliente = false;
            state.categoria = false;
            state.empresa = false;
            state.tipos = true;
        },
    }
});