<template>
    <div>
        <div class="ui basic segment secondary paperviu-sky" style="margin-top: 0px; padding: 8px">
            <div class="ui container">
                <i class="dashboard large inverted icon"></i>
                <div class="ui breadcrumb">
                    <div class="ui header inverted section">Dashboard</div>
                    <div class="divider"><i class="right chevron inverted icon"></i></div>
                    <div class="ui small header large inverted section">M&oacute;dulo de Administraci&oacute;n</div>
                </div>
            </div>
        </div>
        <div class="ui container" style="padding-top: 32px; padding-bottom: 48px">
            <div class="ui stackable grid four column container">
                <div class="column">
                    <div class="ui one columns stackable grid container">
                        <div class="column">
                            <div class="ui fluid basic button" @click="vistaCategorias" style="padding: 33px">
                                <div class="ui icon large header text-paperviu-dark" style="margin:0px;">
                                    <i class="tags icon text-paperviu-sky"></i> Categor&iacute;as
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="ui fluid basic button" @click="vistaReportes" style="padding: 33px">
                                <div class="ui icon large header text-paperviu-dark" style="margin: 0px">
                                    <i class="pie chart icon text-paperviu-sky"></i> Reportes
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="ui fluid basic button" @click="vistaTipos" style="padding: 33px">
                                <div class="ui icon large header text-paperviu-dark" style="margin: 0px">
                                    <i class="sitemap icon text-paperviu-sky"></i> Tipos
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="ui segments" style="border: 0">
                        <div class="ui basic center aligned segment" style="background-color: #e3e9ed; padding: 0px">
                            <div class="ui secondary one item menu">
                                <div class="link item hover" @click="vistaContenidos" style="padding: 16px;">
                                    <div class="ui header icon large text-paperviu-dark" style="margin: 0px">
                                        <i class="film icon text-paperviu-sky"></i>Ver Contenidos
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ui segment border-top-paperviu-sky" style="padding: 16px; background-color: #f2f5f7">
                            <div class="ui one columns stackable center aligned grid container">
                                <div class="column" style="padding: 32px">
                                    <div class="ui grey statistic">
                                        <div class="value">x</div>
                                        <div class="label">total</div>
                                    </div>
                                </div>
                                <div class="column" style="padding: 32px">
                                    <div class="ui grey statistic">
                                        <div class="value">x</div>
                                        <div class="label">disponibles</div>
                                    </div>
                                </div>
                                <div class="column" style="padding: 32px">
                                    <div class="ui grey statistic">
                                        <div class="value">x</div>
                                        <div class="label">bloqueados</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="ui segments" style="border: 0">
                        <div class="ui basic center aligned segment" style="background-color: #e3e9ed; padding: 0px">
                            <div class="ui secondary one item menu">
                                <div class="link item" @click="vistaEmpresas" style="padding: 16px;">
                                    <div class="ui header icon large text-paperviu-dark" style="margin: 0px">
                                        <i class="industry icon text-paperviu-sky"></i>Ver Empresas
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ui segment border-top-paperviu-sky" style="padding: 16px;background-color: #f2f5f7">
                            <div class="ui one columns stackable center aligned grid container">
                                <div class="column" style="padding: 32px">
                                    <div class="ui grey statistic">
                                        <div class="value">x</div>
                                        <div class="label">total</div>
                                    </div>
                                </div>
                                <div class="column" style="padding: 32px">
                                    <div class="ui grey statistic">
                                        <div class="value">x</div>
                                        <div class="label">disponibles</div>
                                    </div>
                                </div>
                                <div class="column" style="padding: 32px">
                                    <div class="ui grey statistic">
                                        <div class="value">x</div>
                                        <div class="label">bloqueados</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="ui segments" style="border: 0">
                        <div class="ui basic center aligned segment" style="background-color: #e3e9ed; padding: 0px">
                            <div class="ui secondary one item menu">
                                <div class="link item" @click="vistaClientes" style="padding: 16px;">
                                    <div class="ui header icon large text-paperviu-dark" style="margin: 0px">
                                        <i class="users icon text-paperviu-sky"></i>Ver Clientes
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ui segment border-top-paperviu-sky" style="padding: 16px; background-color: #f2f5f7">
                            <div class="ui one columns stackable center aligned grid container">
                                <div class="column" style="padding: 32px">
                                    <div class="ui grey statistic">
                                        <div class="value">x</div>
                                        <div class="label">total</div>
                                    </div>
                                </div>
                                <div class="column" style="padding: 32px">
                                    <div class="ui grey statistic">
                                        <div class="value">x</div>
                                        <div class="label">disponibles</div>
                                    </div>
                                </div>
                                <div class="column" style="padding: 32px">
                                    <div class="ui grey statistic">
                                        <div class="value">x</div>
                                        <div class="label">bloqueados</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        created() {
            if (!this.$store.state.inicio) this.$store.commit('verInicio');
        },
        methods: {
            vistaCategorias() {
                $('#menuBtn').popup('hide');
                this.$store.commit('verCategoria');
                this.$router.push('categorias');
            },
            vistaReportes() {
                $('#menuBtn').popup('hide');
                this.$store.commit('verReporte');
                this.$router.push('reportes');
            },
            vistaTipos() {
                $('#menuBtn').popup('hide');
                this.$store.commit('verTipos');
                this.$router.push('tipos');
            },
            vistaContenidos() {
                $('#menuBtn').popup('hide');
                this.$store.commit('verContenido');
                this.$router.push('contenidos');
            },
            vistaEmpresas() {
                $('#menuBtn').popup('hide');
                this.$store.commit('verEmpresa');
                this.$router.push('empresas');
            },
            vistaClientes() {
                $('#menuBtn').popup('hide');
                this.$store.commit('verCliente');
                this.$router.push('clientes');
            }
        }
    }
</script>