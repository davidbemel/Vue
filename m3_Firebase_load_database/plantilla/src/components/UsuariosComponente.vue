<template>
  <div class='row lead my-1'>
    <div class='col-6'>{{usuario.id}}</div>
    <div class='col-4'>{{usuario.clave}}</div>
    <div class='col-2'>
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

    }
  }
</script>

<style>

</style>
