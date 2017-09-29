<template>
    <div id="app">
        <div id="navComponent" style="display:block">
            <paperviu-nav v-if="autenticado"></paperviu-nav>
        </div>
        <div id="loginComponent">
            <paperviu-login v-if="!autenticado"></paperviu-login>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            autenticado() {
                return this.$store.state.autenticado;
            }
        },
        data() {
            return {}
        },
        methods: {
            onLogin() {
                var _this = this;
                $('#loginComponent').transition({
                    animation: 'fade',
                    onComplete: function () {
                        _this.autenticado = true;
                        $('#navComponent').transition('fade');
                    }
                });
            },
            onLogout() {
                var _this = this;
                $('#navComponent').transition({
                    animation: 'fade',
                    onComplete: function () {
                        _this.autenticado = false;
                        $('#loginComponent').transition('fade');
                    }
                });
            }
        }
    }
</script>

<style>

</style>
