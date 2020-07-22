<template>
  <div id="app">
    <facebook-login></facebook-login>
  </div>
</template>

<script>
import FacebookLogin from './components/FacebookLogin.vue'

export default {
  name: 'app',
  components: {
    FacebookLogin
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
