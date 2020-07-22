<template>
  <div id='app' class='container'>
  <div class='text-primary'>
    <h1>Lista de libros a leer</h1>
  </div>
  <div class='row border rounded text-primary lead p-2 mt-3'>
    <div class='col-2'>
      Nombre del libro
    </div>
    <div class='col-3'>
      <input v-model='nombreLibro' class='text-primary' type='text'>
    </div>
    <div class='col-2'>
      Autor del libro
    </div>
    <div class='col-3'>
      <input v-model='autorLibro' class='text-primary' type='text'>
    </div>
    <div class='col-2'>
      <div id='agregar' class='btn btn-primary' 
           v-on:click='manejarClick($event)'>Agregar Libro</div>
    </div>
  </div>
  <div class='container border rounded text-primary mt-4'>
    <div class='row lead border rounded font-weight-bold'>
      <div class='col-6'>
        Nombre del Libro
      </div>
      <div class='col-6'>
        Autor del Libro
      </div>
    </div>
    <librosComponente 
      v-for="(libro,index) in libros"
      v-bind:libro='libro'
      v-bind:id='libro.id'
      v-bind:indice='index'
      v-bind:key='index'
      v-on:eliminarLibro='eliminar($event)' ></librosComponente>
  </div>
</div>


</template>

<script>

import firebase from 'firebase/app'
import 'firebase/firestore'
import librosComponente from './components/LibrosComponente.vue'

export default {
  name: 'app',
  data: function() {
    return {libros : [],
    nombreLibro:'',
    autorLibro:'',
    coleccion:{}
    }
  },
  methods: {
    manejarClick: function (evento) {
      if (evento.target.id==='agregar'){
        const libroData = {nombre:this.nombreLibro,
                          autor:this.autorLibro}
        this.coleccion.add(libroData)
        .then((docReference) => {
          this.libros.unshift({id:docReference.id, nombre: libroData.nombre, autor: libroData.autor})
        })
        .catch((Errro) => {
          alert('No se pudo agregar el libro al sistema. Error: '+Errro.message)
        })
        this.nombreLibro=''
        this.autorLibro=''
      }
    },
    eliminar: function (libroID){
      this.coleccion.doc(libroID.id).delete()
      this.libros.splice(libroID.indice,1)
    }
  },
  components: {
    librosComponente
  },
  beforeMount: function () {
    var config = {
      apiKey: "AIzaSyBh2WLh1cv9_l_5juyFadNU4RoI1Ba3QR8",
      authDomain: "vue-datastore.firebaseapp.com",
      databaseURL: "https://vue-datastore.firebaseio.com",
      projectId: "vue-datastore",
      storageBucket: "vue-datastore.appspot.com",
      messagingSenderId: "9302196982"
    };
    firebase.initializeApp(config);
    const db = firebase.firestore();
    const settings = {timestampsInSnapshots: true};
    db.settings(settings);

    this.coleccion = db.collection('libros')
    this.coleccion.get()
      .then((libros)=>{
        libros.forEach((libro) => {
          this.libros.push({id:libro.id,nombre:libro.data().nombre,autor:libro.data().autor})
      })
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
