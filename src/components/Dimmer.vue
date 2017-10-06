<template>
    <div>
        <div id="dimmer" class="ui page active dimmer" style="display: none;">
            <div class="content" v-if="mostrar">
                <div class="center">
                    <div class="ui one column stackable grid center aligned text container">
                        <div class="center aligned column" style="min-height: 120px">
                            <h1 id="empresaCreada" class="ui inverted header" v-show="empresaCreada"><i
                                    class="checkmark inverted green icon"></i>Empresa Creada Correctamente!</h1>
                            <h1 id="errorCrearEmpresa" class="ui inverted header" v-show="errorCrearEmpresa"><i
                                    class="warning circle inverted red icon"></i>No se ha podido crear la Empresa.</h1>
                            <h1 id="errorGuardarImagen" class="ui inverted header" v-show="errorGuardarImagen"><i
                                    class="warning circle inverted red icon"></i>No se ha podido Guardar la Imagen.</h1>
                            <h1 id="imagenSubida" class="ui inverted header" v-show="imagenSubida"><i
                                    class="checkmark inverted green icon"></i>Imagen Guardada!</h1>
                        </div>
                        <div class="center aligned column" style="min-height: 100px">
                            <div id="imagenSubiendo" v-show="imagenSubiendo" class="ui text actve large loader"><h2
                                    class="ui header small inverted">
                                Guardando imagen, por favor espere...</h2></div>
                        </div>
                        <div class="center aligned column" style="min-height: 100px">
                            <div id="empresaCreando" v-show="empresaCreando" class="ui text actve large loader"><h2
                                    class="ui header small inverted">
                                Creando Empresa, por favor espere...</h2></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['imagenSubida', 'imagenSubiendo', 'empresaCreando', 'empresaCreada', 'mostrar', 'errorCrearEmpresa', 'errorGuardarImagen'],
        watch: {
            imagenSubiendo(newValue, oldValue) {
                if (oldValue === false) {
                    $('#imagenSubiendo').transition('fade');
                }
                else {
                    $('#imagenSubiendo').transition('fade');
                }
            },
            imagenSubida(nueValue, oldValue) {
                if (oldValue === false) {
                    $('#imagenSubida').transition('fade down');
                }
                else {
                    $('#imagenSubida').transition('fade up');
                }
            },
            empresaCreando(newValue, oldValue) {
                if (oldValue === false) {
                    $('#empresaCreando').transition('fade');
                }
                else {
                    $('#empresaCreando').transition('fade');
                }
            },
            empresaCreada(nueValue, oldValue) {
                if (oldValue === false) {
                    $('#empresaCreada').transition('fade down');
                }
                else {
                    $('#empresaCreada').transition('fade up');
                }
            },
            mostrar(newValue, oldValue){
                if (oldValue === true) {
                    $('#dimmer').transition('fade out');
                }
                else {
                    $('#dimmer').transition('fade in');
                }
            }
        }
    }
</script>