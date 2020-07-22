<template>
  <div id="app" class="container">
    <div class="text-primary">
      <h1>Lista de documentos</h1>
    </div>
    <div>
      {{usuarios}}
    </div>
    <usuariosComponente
      v-for="(usuario, index) in usuarios"
      v-bind:usuario="usuario"
      v-bind:id="usuario.id"
      v-bind:indice="index"
      v-bind:key="index"
    ></usuariosComponente>
  </div>
</template>

<script>
import firebase, { functions } from "firebase/app";
import "firebase/firestore";
import usuariosComponente from "./components/UsuariosComponente";

export default {
  name: "app",
  data: function() {
    return { usuarios: [] };
  },

  components: {
    usuariosComponente,
  },

beforeMount: function () {
    var config = {
      apiKey: "AIzaSyDHgEM1IjPtxQK6gKPSJYWdrpXsAWovypE",
      authDomain: "gastos-561c8.firebaseapp.com",
      databaseURL: "https://gastos-561c8.firebaseio.com",
      projectId: "gastos-561c8",
      storageBucket: "gastos-561c8.appspot.com",
      messagingSenderId: "487601555675"
    };
    firebase.initializeApp(config);
    const db = firebase.firestore();
    const settings = {timestampsInSnapshots: true};
    db.settings(settings);

    const coleccion = db.collection('usuarios')
    coleccion.get()
      .then((usuarios)=>{
        usuarios.forEach((usuario) => {
          this.usuarios.push({id:usuario.id,clave:usuario.data().clave})
      })
    })
  }
}
</script>

<style>
#app {
  background-color: rgb(243, 145, 26);
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
