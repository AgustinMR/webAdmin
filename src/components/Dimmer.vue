<template>
    <div>
        <div id="dimmer" class="ui basic small modal">
            <div class="content">
                <div class="center">
                    <div class="ui one column stackable grid center aligned text container">
                        <div class="center aligned column" style="min-height: 120px">
                            <h1 id="empresaCreada" class="ui inverted header" v-show="empresaCreada"><i
                                    class="checkmark inverted green icon"></i>Empresa Creada Correctamente!</h1>
                            <h1 id="errorCrearEmpresa" class="ui inverted header" v-show="errorCrearEmpresa"><i
                                    class="warning circle inverted red icon"></i>No se ha podido crear la Empresa.</h1>
                            <button class="ui inverted large button" @click="ocultarModal" v-if="completado">Aceptar</button>
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
                        <button class="ui inverted large button" @click="ocultarModal" v-if="completado2">Aceptar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                mostrar: false,
                completado: false,
                completado2: false
            }
        },
        props: ['imagenSubida', 'imagenSubiendo', 'empresaCreando', 'empresaCreada', 'errorCrearEmpresa', 'errorGuardarImagen'],
        methods: {
            ocultarModal() {
                $('#dimmer').modal('hide');
            }
        },
        watch: {
            imagenSubiendo(newValue, oldValue) {
                if (newValue === true) {
                    $('#imagenSubiendo').transition('fade in');
                } else {
                    $('#imagenSubiendo').transition('fade out');
                }
            },
            errorCrearEmpresa(newValue, oldValue) {
                if (newValue === true) {
                    this.completado = true;
                }
            },
            errorGuardarImagen(newValue, oldValue) {
                if (newValue === true) {
                    this.completado = true;
                }
            },
            imagenSubida(newValue, oldValue) {
                if (newValue === true) {
                    alert();
                    $('#imagenSubida').transition('fade in');
                    this.completado2 = true;
                }
                else {
                    $('#imagenSubida').transition('fade out');
                }
            },
            empresaCreando(newValue, oldValue) {
                if (newValue === true) {
                    $('#empresaCreando').transition('fade in');
                    this.mostrar = true;
                }
                else {
                    $('#empresaCreando').transition('fade out');
                }
            },
            empresaCreada(newValue, oldValue) {
                if (newValue === true) {
                    $('#empresaCreada').transition('fade in');
                }
                else {
                    $('#empresaCreada').transition('fade out');
                }
            },
            mostrar(newValue, oldValue) {
                if (newValue === true) {
                    //$('#dimmer').dimmer({ opacity: 0.78, closable: false, blurring: true}).dimmer('show');
                    var _this = this;
                    $('#dimmer').modal({
                        closable: false,
                        transaction: 'fade'
                    }).modal('show');
                }
            }
        }
    }
</script>