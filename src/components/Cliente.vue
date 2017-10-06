<template>
    <div>
        <div class="ui basic segment secondary paperviu-sky" style="margin-top: 0px; padding: 8px">
            <div class="ui container">
                <i class="users large inverted icon"></i>
                <div class="ui breadcrumb">
                    <div class="ui header inverted section">Clientes</div>
                    <div class="divider"><i class="right chevron inverted icon"></i></div>
                    <div class="ui small header large inverted section">finales de la aplicaci&oacute;n</div>
                </div>
            </div>
        </div>
        <div class="ui basic segment secondary" id="menu2"
             style="background-color: #e0e7eb; margin-top: -14px; margin-left: -3px">
            <div class="ui container">
                <div class="ui icon input">
                    <i class="search grey icon link"></i>
                    <input type="text" placeholder="Buscar por username...">
                </div>
            </div>
        </div>
        <div class="ui container" style="padding-top: 12px" id="listado">
            <table class="ui very basic selectable table" style="padding: 17px">
                <thead>
                <tr class="ui small header">
                    <th class="ui header grey centered small">Estado</th>
                    <th class="ui header grey centered small">Username</th>
                    <th class="ui header grey centered small">Nombre</th>
                    <th class="ui header grey centered small">Apellido</th>
                    <th class="ui header grey centered small">Email</th>
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
    </div>
</template>
<script>
    export default {
        created() {
            if (!this.$store.state.cliente) this.$store.commit('verCliente');
        }
    }
</script>