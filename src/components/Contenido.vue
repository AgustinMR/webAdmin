<template>
    <div>
        <div class="ui basic segment secondary paperviu-sky" style="margin-top: 0px; padding: 8px">
            <div class="ui container">
                <i class="film large inverted icon"></i>
                <div class="ui breadcrumb">
                    <div class="ui header inverted section">Contenidos</div>
                    <div class="divider"><i class="right chevron inverted icon"></i></div>
                    <div class="ui small header large inverted section">Disponible en la plataforma</div>
                </div>
            </div>
        </div>
        <div class="ui basic segment secondary" id="menu2"
             style="background-color: #e0e7eb; margin-top: -14px; margin-left: -3px">
            <div class="ui container">
                <button class="ui active basic button" id="filtroBtn"><i class="filter icon"></i>Filtrar</button>
                <div class="ui icon input">
                    <i class="search text-paperviu-sky icon link"></i>
                    <input type="text" placeholder="Buscar por titulo...">
                </div>
                <div class="ui segments raised popup bottom left pointing transition hidden" id="popup"
                     style="padding: 0px">
                    <div class="ui basic grey segment center aligned" style="padding: 10px">
                        <div class="ui icon input">
                            <i class="search link text-paperviu-sky icon"></i>
                            <input type="text" placeholder="Buscar por empresa...">
                        </div>
                    </div>
                    <div class="ui center aligned segment" style="background-color: #f3f4f5; padding: 0px">
                        <div class="ui secondary two item pointing menu">
                            <a :class="{'text-paperviu-dark': viewTipos, 'border-bottom-paperviu-sky': viewTipos, active: viewTipos}" class="item" @click="mostrarTipos" id="tiposBtn">Tipos</a>
                            <a :class="{'text-paperviu-dark': viewCategorias, 'border-bottom-paperviu-sky': viewCategorias, active: viewCategorias}" class="item" id="catBtn" @click="mostrarCategorias">Categorias</a>
                        </div>
                    </div>
                    <div class="ui center aligned segment" style="background-color: #fafafa; padding: 0px">
                        <div class="row" v-show="viewTipos">
                            <div class="ui selection list" style="margin-bottom: 0px"></div>
                        </div>
                        <div class="row" v-show="viewCategorias">
                            <div class="ui selection list"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="ui container" style="padding-top: 12px" id="listado">
            <table class="ui very basic selectable table" style="padding: 17px">
                <thead>
                <tr class="ui small header">
                    <th class="ui header grey centered small">Estado</th>
                    <th class="ui header grey centered small">T&iacute;tulo</th>
                    <th class="ui header grey centered small">Empresa</th>
                    <th class="ui header grey centered small">Pay-Per-View</th>
                </tr>
                </thead>
                <tbody id="usuariosList"></tbody>
            </table>
            <div class="ui secondary bottom fixed menu">
                <div class="ui basic center aligned segment"
                     style="width: 100%; background-color: #e9eef1; border: 0px">
                    <div class="ui basic buttons">
                        <button class="ui labeled basic active icon button"><i class="left chevron icon"></i>Anterior</button>
                        <h3 class="ui basic active header" style="background-color: inherit; border: 0px; margin: 5px; padding-left: 7px; padding-right: 7px">1</h3>
                        <button class="ui basic active right labeled icon button">Siguiente<i class="right chevron icon"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        created() {
            if (!this.$store.state.contenido) this.$store.commit('verContenido');
        },
        data(){
            return {
                viewTipos: true,
                viewCategorias: false
            }
        },
        mounted() {
            $('#filtroBtn').popup({
                popup: $('#popup'),
                on: 'click',
                position: 'bottom left'
            });
        },
        methods: {
            mostrarCategorias() {
                this.viewTipos = false;
                this.viewCategorias = true;
            },
            mostrarTipos() {
                this.viewTipos = true;
                this.viewCategorias = false;
            }
        }
    }
</script>