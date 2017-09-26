<template>
    <div>
        <div class="ui secondary inverted pointing menu grid"
             style="background-color: #5d6a7c; border: 0px; margin-bottom: 0px">
            <img src="src/assets/plaify-white.gif" style="height: 35px; margin-top: 7px; margin-left: 3px">
            <div class="right menu">
                <a class="item">
                    <i class="sign out large icon"></i>
                    <span class="ui sub header inverted" style="margin: 0px">Salir</span>
                </a>
            </div>
            <div class="row" style="padding: 0px; background-color: #5d6a7c; margin-top: 7px">
                <div class="ui small icon secondary pointing menu inverted"
                     style="width: 100%; border-top: 0px; border-left: 0px; border-right: 0px">
                    <a :class="{active: inicio}" @click="vistaInicio" class="item">
                        <i class="dashboard large icon"></i>
                    </a>
                    <a :class="{active: cliente}" @click="vistaCliente" class="item">
                        <i class="users large icon"></i>
                    </a>
                    <a :class="{active: empresa}" @click="vistaEmpresa" class="item">
                        <i class="industry icon large"></i>
                    </a>
                    <a :class="{active: contenido}" @click="vistaContenido" class="item">
                        <i class="film large icon"></i>
                    </a>
                    <a :class="{active: categoria}" @click="vistaCategoria" class="item">
                        <i class="tags large icon"></i>
                    </a>
                    <a :class="{active: tipos}" @click="vistaTipos" class="item">
                        <i class="sitemap large icon"></i>
                    </a>
                    <a :class="{active: reporte}" @click="vistaReporte" class="item">
                        <i class="pie chart large icon"></i>
                    </a>
                </div>
            </div>
        </div>

        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
    export default {
        computed: {
            inicio() {
                return this.$store.state.inicio;
            },
            reporte() {
                return this.$store.state.reporte;
            },
            cliente() {
                return this.$store.state.cliente;
            },
            empresa() {
                return this.$store.state.empresa;
            },
            contenido() {
                return this.$store.state.contenido;
            },
            categoria() {
                return this.$store.state.categoria;
            },
            tipos() {
                return this.$store.state.tipos;
            }
        },
        mounted() {
        },
        methods: {
            vistaInicio() {
                $('#menuBtn').popup('hide');
                this.$store.commit('verInicio');
                this.$router.push('/');
            },
            vistaContenido() {
                $('#menuBtn').popup('hide');
                this.$store.commit('verContenido');
                this.$router.push('contenidos');
            },
            vistaReporte() {
                $('#menuBtn').popup('hide');
                this.$store.commit('verReporte');
                this.$router.push('reportes');
            },
            vistaCliente() {
                $('#menuBtn').popup('hide');
                this.$store.commit('verCliente');
                this.$router.push('clientes');
            },
            vistaEmpresa() {
                $('#menuBtn').popup('hide');
                this.$store.commit('verEmpresa');
                this.$router.push('empresas');
            },
            vistaTipos() {
                $('#menuBtn').popup('hide');
                this.$store.commit('verTipos');
                this.$router.push('tipos');
            },
            vistaCategoria() {
                $('#menuBtn').popup('hide');
                this.$store.commit('verCategoria');
                this.$router.push('categorias');
                4
            }
        }
    }
</script>
<style scoped>
    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active {
        transition: opacity 0.200s ease;
    }

    .fade-leave {
    }

    .fade-leave-active {
        transition: opacity 0.200s ease;
        opacity: 0;
    }
</style>