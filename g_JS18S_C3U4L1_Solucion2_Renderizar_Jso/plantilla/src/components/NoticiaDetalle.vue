<template>
  <section>
  <div class="header">    
    <div class="circle"></div>
    <h1> Noticias </h1>
  </div>
  <div id="content">
     {{detalle}}
  </div>
</section>
</template>

<script>
export default {
  name: 'noticia-detalle',
  props: ['fecha','titulo','detalle','autor','imagen']
}
</script>
