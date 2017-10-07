<template>
    <div>
        <div class="ui basic segment paperviu-sky" style="padding: 16px; margin-bottom: 0px">
            <div class="ui center aligned text container">
                <img src="src/assets/paperviu-darkblue.gif" style="height: 50px">
            </div>
        </div>
        <div class="ui basic segment" style="background-color: #5D6A7C; padding: 32px; margin: 0px; min-height: 260px">
            <div class="ui center aligned text container">
                <div class="ui header inverted" style="margin: 0px">
                    <h1 style="margin-bottom: 0px" class="content">Iniciar Sesi&oacute;n</h1>
                    <div class="ui sub header text-paperviu-sky large">m&oacute;dulo de administraci&oacute;n</div>
                </div>
                <div id="login" class="row" style="padding-top: 18px; display: block;">
                    <div class="ui left icon inverted input" style="margin-bottom: 16px">
                        <i class="user icon"></i>
                        <input v-model="username" type="text" placeholder="Ingrese su username...">
                    </div>
                    <div class="divider"></div>
                    <div class="ui left icon input inverted">
                        <i class="privacy icon"></i>
                        <input v-model="password" type="password" placeholder="Ingrese su password...">
                    </div>
                    <div class="divider" style="padding: 16px"></div>
                    <button class="ui button inverted big compact" @click="autenticar"><i class="sign in icon"></i>Ingresar</button>
                </div>
                <div id="loader" class="row" style="display: none;">
                    <div class="ui active text loader big inverted" style="margin-top: 30px">
                        <h2 class="ui sub header small inverted">Por favor, espere...</h2>
                    </div>
                </div>
                <div id="exito" class="row" style="display: none;">
                    <div class="ui icon header tiny" style="margin-top: 25px; margin-bottom: 0px"><i
                            class="checkmark green inverted icon"></i></div>
                    <h2 class="ui inverted header" style="margin-top: 0px">Autenticado con &eacute;xito!.</h2>
                </div>
                <div id="error" class="row" style="display: none;">
                    <div class="ui icon header small" style="margin-top: 25px; margin-bottom: 0px"><i
                            class="warning circle red inverted icon"></i></div>
                    <h2 class="ui inverted header" style="margin-top: 0px">
                        Error en autenticaci&oacute;n, o Credenciales inv&aacute;lidas.</h2>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                username: '',
                password: ''
            }
        },
        computed: {
            autenticarURL() {
                return this.$store.state.baseUrl + "/login?username=" + this.username + "&password=" + this.password + "&tipo=1";
            }
        },
        methods: {
            autenticar() {
                if (this.username !== '' && this.password !== '') {
                    this.mostrarLoader();
                    var _this = this;
                    $.ajax({
                        url: _this.autenticarURL,
                        type: 'GET',
                        success: function (response) {
                            if (response === true || response === "true") {
                                setTimeout(function(){
                                    _this.mostrarExitoAutenticacion();
                                    setTimeout(function(){
                                        _this.$store.commit('setUsuario', _this.username);
                                        _this.$store.commit('setAutenticado', true);
                                    }, 2000);
                                }, 2000);

                            }
                            else {
                                _this.mostrarErrorAutenticacion();
                                setTimeout(function(){
                                    _this.mostrarLogin();
                                }, 2000);
                            }
                        },
                        error: function (xhr, status, errorData) {
                            _this.mostrarErrorAutenticacion();
                            setTimeout(function(){
                                _this.mostrarLogin();
                            }, 2000);
                        }
                    });
                }
            },
            mostrarLoader() {
                $('#login').transition({
                    animation: 'fade out',
                    onComplete: function () {
                        $('#loader').transition('fade in');
                    }
                });
            },
            mostrarLogin(){
                $('#error').transition({
                    animation: 'fade out',
                    onComplete: function () {
                        $('#login').transition('fade in');
                    }
                });
            },
            mostrarErrorAutenticacion() {
                $('#loader').transition({
                    animation: 'fade out',
                    onComplete: function () {
                        $('#error').transition('fade in');
                    }
                });
            },
            mostrarExitoAutenticacion() {
                $('#loader').transition({
                    animation: 'fade out',
                    onComplete: function () {
                        $('#exito').transition('fade in');
                    }
                });
            }
        }
    }
</script>