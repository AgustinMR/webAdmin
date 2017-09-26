<template>
    <div>
        <div class="ui basic segment secondary" style="background-color: #bb7648; margin-top: 0px; padding: 8px">
            <div class="ui container">
                <i class="industry large inverted icon"></i>
                <div class="ui breadcrumb">
                    <div class="ui header inverted section">Empresas</div>
                    <div class="divider"><i class="right chevron inverted icon"></i></div>
                    <div class="ui small header large inverted section">Generadoras de Contenido</div>
                </div>
            </div>
        </div>
        <div class="ui basic segment secondary" id="menu2" style="background-color: #e0e7eb; margin-top: -14px; margin-left: -3px">
            <div class="ui secondary menu" style="margin: 0px">
                <div class="ui container">
                    <div class="ui icon input">
                        <i class="ui search link icon"></i>
                        <input type="text" placeholder="Buscar por nombre...">
                    </div>
                    <div class="right menu">
                        <button class="ui compact green button" onclick="mostrarNueva()"><i class="add icon"></i>Crear Empresa</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        }
    }
</script>