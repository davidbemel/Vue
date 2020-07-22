<template>
  <div class="object">
    <div><img class='imagen' :src='imagen ? imagen:imagenDefecto'/></div>
    <div class="context"><b>{{titulo}} 
        <br/>{{fecha | formatoFecha}} </b></div>
    <div class="detalle"> {{detalle}} Fuente: {{fuente}} 
        <a v-if='url' :href='url' target='_blank' >Leer detalle...</a> </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'noticia-componente',
  props: ['fecha','imagen','titulo','detalle','url','fuente'],
  data: function () {
    return {
      imagenDefecto: "http://icons.iconarchive.com/icons/pelfusion/long-shadow-ios7/128/News-icon.png"}
  },
  filters: {
    formatoFecha: function (fecha) {
     moment.locale(navigator.language);
     return moment(fecha).format('dddd, D MMMM hh:mm:ss')
    }
  }
}
</script>

<style lang="scss">

  $color-primary: #3498db;	
  $color-secondary: #f1c40f;

  .imagen{
      float: left;
      width: 18%;
      height: 18%;
      margin: 20px;
      color: #fff;
      border-radius: 10px;
      text-align: center;
      line-height: 1.9em;
      font-size: 1.1em;
    }

  .detalle{
      float: left;
      color: #666;
      width: 60%;
      min-height: 40px;
      margin: 0px 0 0px 0px;      
      padding: 0px 0px 20px 20px;
      line-height: 1.5em;
    }

</style>
