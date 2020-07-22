<template>
  <div id='app' class='container'>
  <div class='text-primary'>
    <h1>Lista de documentos</h1>
  </div>
  <div>
    {{usuarios}}
   </div>
   <usuariosComponente 
      v-for="(usuario,index) in usuarios"
      v-bind:usuario='usuario'
      v-bind:id='usuario.id'
      v-bind:indice='index'
      v-bind:key='index'
      v-on:eliminarUsuario='eliminar($event)'  ></usuariosComponente>
  </div>
</template>

<script>

import firebase,{ functions } from 'firebase/app'
import 'firebase/firestore'
import usuariosComponente from './components/UsuariosComponente'

export default {
  name: 'app',
  data: function() {
    return {usuarios : []}
  },
  methods: {
    manejarClick: function (evento) {
      if (evento.target.id==='agregar'){
        this.usuarios.push({nombre:this.nombre,
                          estado_civil:this.estado_civil})
        this.nombre=''
        this.estado_civil=''
      }
      else if (evento.target.id==='eliminar')
      {
        alert('eliminar')
      }
    },
    eliminar: function (id){
      this.usuarios.splice(id,1)
    }
  },

   components: {
    usuariosComponente
  },

  beforeMount: function () {
    var config = {
      apiKey: "AIzaSyButBeA95taY_s4XBpGNnSp-wiIToqq1t4",
      authDomain: "spendings-db734.firebaseapp.com",
      databaseURL: "https://spendings-db734.firebaseio.com",
      projectId: "spendings-db734",
      storageBucket: "spendings-db734.appspot.com",
      messagingSenderId: "386495645135"
    };
    firebase.initializeApp(config);
    const db = firebase.firestore();
    const settings = {timestampsInSnapshots: true};
    db.settings(settings);

    const coleccion = db.collection('usuarios')
    coleccion.get()
      .then((usuarios)=>{
        usuarios.forEach((usuario) => {
          this.usuarios.push({id:usuario.id,nombre:usuario.data().nombre,estado_cil:usuario.data().estado_civil})
      })
    })
  }
}
</script>

<style>
#app {
  background-color: rgb(243, 145, 26);
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
