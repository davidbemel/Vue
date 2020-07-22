<template>
  <div id="app">
    <div>Usuario: {{userData.usuario}} </div>
    <div>Tipo de gasto: {{userData.gastos.tipo}} </div>
    <div>Monto del Gastos: {{userData.gastos.monto}} </div>
  </div>
</template>

<script>

import firebase from 'firebase/app'
import 'firebase/firestore'

export default {
  name: 'app',
  data: function (){
    return {
      coleccionRaiz:'"usuarios',
      idUsuario:'estudiante@nextu.com',
      coleccionGastos:'gastos',
      userData:{}
    }
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

    const doc = db.collection(this.coleccionRaiz).doc(this.idUsuario)
    this.userData={usuario:doc.id,gastos:{}}
    const gastos = doc.collection(this.coleccionGastos)
    const alquilerCasa = gastos.doc('alquiler_casa')
    this.userData.gastos={tipo:alquilerCasa.id,monto:0}
    alquilerCasa.get().then((doc)=>{
      this.userData.gastos.monto=doc.data().monto
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
