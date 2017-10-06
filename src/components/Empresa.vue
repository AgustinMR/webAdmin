<template>
    <div>
        <div class="ui basic segment secondary paperviu-sky" style="margin-top: 0px; padding: 8px">
            <div class="ui container">
                <i class="industry large inverted icon"></i>
                <div class="ui breadcrumb">
                    <div class="ui header inverted section">Empresas</div>
                    <div class="divider"><i class="right chevron inverted icon"></i></div>
                    <div class="ui small header large inverted section">Generadoras de Contenido</div>
                </div>
            </div>
        </div>
        <div class="ui basic segment secondary" id="menu2"
             style="background-color: #e0e7eb; margin-top: -14px; margin-left: -3px">
            <div class="ui secondary menu" style="margin: 0px">
                <div class="ui container">
                    <div class="ui icon input">
                        <i class="ui search grey link icon"></i>
                        <input type="text" placeholder="Buscar por nombre...">
                    </div>
                    <div class="right menu">
                        <button class="ui compact basic active button" @click="mostrarNueva"><i class="add icon"></i>Crear Empresa
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="ui container" style="padding-top: 12px" id="listado">
            <table class="ui very basic selectable table" style="padding: 17px">
                <thead>
                <tr class="ui small header">
                    <th class="ui header grey centered small">Estado</th>
                    <th class="ui header grey centered small">Nombre</th>
                    <th class="ui header grey centered small">Link</th>
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
        <div class="ui center aligned container" id="nueva" style="display: none; padding-bottom: 80px">
            <vue-snotify></vue-snotify>
            <div class="ui center aligned text container" style="padding: 20px; margin: 0px; padding-bottom: 32px">
                <h2 class="ui header large" style="padding: 16px; color: #5d6a7c">Empresa Nueva</h2>
                <VueImgInputer v-model="imagen" icon="img"
                               placeholder="Seleccione o arrastre una imagen de portada..."
                               style="background-color: #e9eef1; margin-top: 26px"></VueImgInputer>
                <div class="divider"></div>
                <div style="padding: 16px;">
                    <div class="ui toggle checkbox" style="margin-top: 16px">
                        <input v-model="estadoEmpresa" type="checkbox">
                        <label class="ui header small" style="margin: 0px">Habilitada <span
                                class="ui grey very tiny header">(No / Si)</span></label>
                    </div>
                    <div class="ui fluid labeled small input" style="margin-top: 16px">
                        <div class="ui basic label">Nombre</div>
                        <input v-model="nombreEmpresa" type="text"
                               placeholder="Ingrese el nombre de la empresa generadora...">
                    </div>
                    <div class="ui fluid labeled small input" style="margin-top: 16px">
                        <div class="ui basic label">Sitio web</div>
                        <input v-model="linkEmpresa" type="text"
                               placeholder="Ingrese un link al sitio web de la empresa...">
                    </div>
                    <div class="ui fluid labeled small input"
                         style="margin-top: 16px">
                        <div class="ui basic label">Email</div>
                        <input v-model="emailEmpresa" type="email" placeholder="Ingrese el email de la empresa...">
                    </div>
                    <h3 class="ui sub header small grey horizontal divider">administrador</h3>
                    <div class="ui fluid labeled small input"
                         style="margin-top: 16px; padding-left: 16px; padding-right: 16px">
                        <div class="ui basic label">Username</div>
                        <input v-model="usernameEmpresa" type="text"
                               placeholder="Ingrese username o nombre de usuario con cual ingresar...">
                    </div>
                    <div class="ui fluid labeled small input"
                         style="margin-top: 16px; padding-left: 16px; padding-right: 16px">
                        <div class="ui basic label">Password</div>
                        <input v-model="passwordEmpresa" type="password"
                               placeholder="Ingrese password con el cual autenticarse...">
                    </div>
                </div>
            </div>
            <div class="ui secondary bottom fixed menu">
                <div class="ui basic center aligned segment"
                     style="margin: 0px; padding: 16px; width: 100%; background-color: #e3e9ed">
                    <button class="ui grey left attached button" @click="mostrarListado"><i
                            class="cancel icon"></i>Cancelar
                    </button>
                    <button class="ui green right attached button" @click="crearEmpresa"><i class="checkmark icon"></i>Confirmar
                    </button>
                </div>
            </div>
            <paperviu-dimmer
                    :mostrar="modalEmpresa"
                    :imagenSubiendo="subiendoImagen"
                    :imagenSubida="imagenSubida"
                    :empresaCreando="empresaCreando"
                    :empresaCreada="empresaCreada"
                    :errorCrearEmpresa="errorCrearEmpresa"
                    :errorGuardarImagen="errorGuardarImagen"
            ></paperviu-dimmer>
        </div>
    </div>
</template>
<script>
    import {dropbox} from '../dropbox_token';

    export default {
        data() {
            return {
                imagen: Object,
                subiendoImagen: false,
                imagenSubida: false,
                empresaCreando: false,
                empresaCreada: false,
                completado: true,
                errorCrearEmpresa: false,
                modalEmpresa: false,
                errorGuardarImagen: false,
                nombreEmpresa: '',
                linkEmpresa: '',
                emailEmpresa: '',
                usernameEmpresa: '',
                passwordEmpresa: '',
                estadoEmpresa: true
            }
        },
        computed: {
            altaEmpresaURL() {
                return this.$store.state.baseUrl + 'empresas?nombre=' + this.nombreEmpresa + "&link=" + this.linkEmpresa + "&username=" + this.usernameEmpresa + "&password=" + this.passwordEmpresa + "&email=" + this.emailEmpresa + "&estado=" + this.estadoEmpresa;
            },
            guardarImagenURL() {
                return this.$store.state.baseUrl + "empresas/imagen?nombre=" + this.nombreEmpresa + "&imagen=";
            }
        },
        methods: {
            mostrarNueva() {
                $('#listado').transition({
                    animation: 'fade out',
                    onComplete: function () {
                        $('#nueva').transition('fade in');
                    }
                });
                $('#menu2').transition('fade out');
            },
            mostrarListado() {
                $('#nueva').transition({
                    animation: 'fade out',
                    onComplete: function () {
                        $('#listado').transition('fade in');
                    }
                });
                $('#menu2').transition('fade in');
            },
            guardarImagen() {
                var dpb = new Dropbox({accessToken: dropbox.token});
                var _this = this;
                dpb.filesUpload({
                    path: '/Aplicaciones/empresas/' + _this.nombreEmpresa + _this.imagen.name.substring(_this.imagen.name.lastIndexOf('.'), _this.imagen.name.length),
                    contents: _this.imagen,
                    mute: true,
                    mode: {'.tag': 'overwrite'}
                }).then(function (response) {
                    var x = JSON.parse(JSON.stringify(response));
                    $.ajax({
                        url: _this.guardarImagenURL + x.name,
                        type: 'PUT',
                        success: function (data) {
                            if (data === true || data === "true") {
                                _this.subiendoImagen = false;
                                _this.imagenSubida = true;
                                _this.modalEmpresa = false;
                            } else {
                                _this.subiendoImagen = false;
                                _this.errorGuardarImagen = true;
                                _this.modalEmpresa = false;
                            }
                        },
                        error: function (xhr, status, errorData) {
                            console.log(xhr + status + errorData);
                            _this.subiendoImagen = false;
                            _this.errorGuardarImagen = true;
                            _this.modalEmpresa = true;
                        }
                    });
                }).catch(function (error) {
                    console.log(error);
                    _this.subiendoImagen = false;
                    _this.errorGuardarImagen = true;
                    _this.modalEmpresa = false;
                });
            },
            crearEmpresa() {
                this.modalEmpresa = true;
                this.empresaCreando = true;
                var _this = this;
                $.post(this.altaEmpresaURL, function (response) {
                    if (response !== undefined) {
                        if (response === true || response === "true") {
                            _this.empresaCreando = false;
                            _this.empresaCreada = true;
                            _this.subiendoImagen = true;
                            _this.guardarImagen();
                        } else {
                            _this.empresaCreando = false;
                            _this.errorCrearEmpresa = true;
                            _this.modalEmpresa = false;
                        }
                    }
                });
            }
        },
        created() {
            if (!this.$store.state.empresa) this.$store.commit('verEmpresa');
        }
    }
</script>