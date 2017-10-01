<template>
    <div>
        <div class="ui basic segment secondary paperviu-sky" style="margin-top: 0px; padding: 8px">
            <div class="ui container">
                <i class="sitemap large inverted icon"></i>
                <div class="ui breadcrumb">
                    <div class="ui header inverted section">Tipos de Contenido</div>
                </div>
            </div>
        </div>
        <div class="ui basic segment secondary" id="menu2"
             style="background-color: #e0e7eb; margin-top: -14px; margin-left: -3px">
            <div class="ui secondary menu" style="margin: 0px">
                <div class="ui container">
                    <div class="ui icon input">
                        <i class="ui search link text-paperviu-sky icon"></i>
                        <input type="text" placeholder="Buscar por nombre...">
                    </div>
                    <div class="right menu">
                        <button class="ui compact active basic button" @click="mostrarNuevo"><i class="add icon"></i>Crear Tipo
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="ui container" style="padding-top: 12px" id="listado">
            <table class="ui very basic selectable table" style="padding: 17px">
                <thead>
                <tr class="ui small header">
                    <th class="ui header grey centered small">Nombre</th>
                    <th class="ui header grey centered small">Descripci&oacute;n</th>
                </tr>
                </thead>
                <tbody id="usuariosList"></tbody>
            </table>
            <div class="ui secondary bottom fixed menu">
                <div class="ui basic center aligned segment"
                     style="width: 100%; background-color: #e9eef1; border: 0px">
                    <div class="ui basic buttons">
                        <button class="ui labeled basic active icon button"><i class="left chevron icon"></i>Anterior
                        </button>
                        <h3 class="ui basic active header"
                            style="background-color: inherit; border: 0px; margin: 5px; padding-left: 7px; padding-right: 7px">
                            1</h3>
                        <button class="ui basic active right labeled icon button">Siguiente<i
                                class="right chevron icon"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="ui center aligned container" id="nueva" style="display: none">
            <div class="ui center aligned text container" style="padding: 20px; margin: 0px; padding-bottom: 32px">
                <h2 class="ui header large" style="padding: 16px; color: #5d6a7c">Tipo de Contenido Nuevo</h2>
                <div class="ui fluid labeled small input" style="margin-top: 16px">
                    <div class="ui basic label">Nombre</div>
                    <input type="text" placeholder="Ingrese el nombre del tipo de contenido">
                </div>
                <div class="ui reply form" style="margin-top: 16px">
                    <div class="field">
                        <textarea id="descripcion" cols="30" style="min-height: 100px; max-width: 100%; min-width: 100%; max-height: 150px" maxlength="1024" placeholder="Escriba una descripcion para el tipo..."></textarea>
                    </div>
                </div>
                <h3 class="ui sub header small grey horizontal divider">atributos</h3>
                <div class="ui basic right aligned segment" style="margin-bottom: 0px">
                    <button class="ui blue circular icon button" onclick="agregarAtributo()"><i class="add large icon"></i></button>
                </div>
            </div>
            <div class="ui secondary bottom fixed menu">
                <div class="ui basic center aligned segment"
                     style="margin: 0px; padding: 16px; width: 100%; background-color: #e3e9ed">
                    <button class="ui grey left attached button" @click="mostrarListado"><i
                            class="cancel icon"></i>Cancelar
                    </button>
                    <button class="ui green right attached button"><i class="checkmark icon"></i>Confirmar
                    </button>
                </div>
            </div>
        </div>
        <div class="ui page dimmer">
            <div class="content">
                <div class="center">
                    <div class="ui basic secondary inverted segment">
                        <div class="ui text container">
                            <h3 class="ui header icon small inverted text">
                                <i class="ui circular green inverted checkmark icon"></i>
                                <div class="ui content header inverted large" style="margin: 0px">
                                    Usuario ingresado con exito!
                                </div>
                            </h3>
                            <div class="ui center aligned basic segment">
                                <button class="ui inverted button">Aceptar</button>
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
            if(!this.$store.state.tipos) this.$store.commit('verTipos');
        },
        methods: {
            mostrarNuevo() {
                $('#listado').transition({
                    animation: 'fade',
                    onComplete: function() {
                        $('#nueva').transition('fade');
                    }
                });
                $('#menu2').transition('fade');
            },
            mostrarListado() {
                $('#nueva').transition({
                    animation: 'fade',
                    onComplete: function() {
                        $('#listado').transition('fade');
                    }
                });
                $('#menu2').transition('fade');
            }
        }
    }
</script>