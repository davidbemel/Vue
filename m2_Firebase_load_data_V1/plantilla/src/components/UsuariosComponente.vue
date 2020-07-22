<template>
  <div class='row lead my-1'>
    <div class='col-6'>{{usuario.id}}</div>
    <div class='col-4'>{{usuario.estado_civil}}</div>
    <div class='col-2'>
      <div id='eliminar'  class='btn btn-primary'
           v-on:click='manejarClick($event,indice)'>Eliminar</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'usuarios',
  props: ['usuario','id','indice'],
  data: function () {
    return {
      test: 'test'
    }
  },
  methods: {
    manejarClick: function (evento,indice) {
        console.log('ID: '+indice)
      if (evento.target.id==='eliminar'){
        this.$emit('eliminarUsuario',indice)
      }
    }
  }
}
</script>

<style>

</style>
