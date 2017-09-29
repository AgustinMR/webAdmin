<template>

</template>
<script>
    export default {
        created(){
            if(!this.$store.state.reporte) this.$store.commit('verReporte');
        }
    }
</script>