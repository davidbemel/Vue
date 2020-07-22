<template>
  <div>
    <div v-if='login'>
      Bienvenido al Sistema {{usuario}}
    </div>
    <div id='ingresar'
      class='btn bg-color text-white font-weight-bold' 
      @click="manejarLogin($event)"
      v-if='!login' >
        <img class='boton-login pr-1' 
           src='https://es.facebookbrand.com/wp-content/uploads/2016/05/flogo_rgb_hex-brc-site-250.png'/>
           Iniciar sesión con Facebook
    </div>
    <div id='salir'
      class='btn bg-color text-white font-weight-bold' 
      @click="manejarLogin($event) "
      v-if='login' >Salir del Sistema</div>
  </div>
</template>

<script>

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1902117199876701',
      cookie     : true,
      xfbml      : true,
      version    : 'v3.1'
    });
      
    FB.AppEvents.logPageView(); 
    Window.FB=FB;  
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/es_LA/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

export default {

  name:'facebook-login',
  data: function () {
    return {
        login:false,
        usuario:''
    }
  },
  mounted: function(){
    this.FB=Window.FB
  },
  methods: {
    manejarLogin: function(e){
      if (!this.FB)
        this.FB=Window.FB
      if (e.target.id==='ingresar')
        FB.login(this.ingresar);
      else
        FB.logout(this.salir)
    },
    ingresar: function(response) {
      if (response.authResponse) {
        this.login=true
        var datoUsuario=''
        FB.api('/me', (response => {
          this.usuario=response.name
        }));
      }else {
        this.login=false
      }
    },
    salir: function(response){
      this.login=false
    }
  }
}
</script>

<style>
  .boton-login{
    float: left;
    width: 6%;
    height: 6%;
  }

  .bg-color{
    background-color: #4267B2;
  }

</style>
