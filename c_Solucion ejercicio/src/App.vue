<template>
  <div id="app">
     <ul class="menu">
      <li v-for='(tab,index) in tabs'
          :key='index'
          :title='tab.name'>
          <a href='#'
             :ref='tab.name'
             :id='tab.name'
             :class='tab.className'
             @click='manejoClick($event)'
              >{{tab.name}}</a></li>
    </ul>
    
    <ul ref='menuBar' class="menu-bar">
        <li><a href="#" class="menu-button">Menú</a></li>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Perfil</a></li>
        <li><a href="#">Editorial</a></li>
        <li><a href="#">Acerca de</a></li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'app',
  data: function (){
    return {
      tabs: [{name:'Inicio',className:'menu-button home fa fa-bars'},
             {name:'Buscar',className:'search fa fa-search'},
             {name:'Escribir',className:'pencil fa fa-pencil'},
             {name:'Acerca',className:'about fa fa-user'},
             {name:'Almacenar',className:'archive fa fa-archive'},
             {name:'Contacto',className:'contact fa fa-envelope'}]
    }
  },
  methods: {
    manejoClick: function (evento) {
      if (evento.target.id==='Inicio'){
        if (this.$refs.menuBar.className==='menu-bar'){
          this.$refs.menuBar.className='menu-bar open'
          this.cambiarSelected(evento.target.id)}
        else{
          this.$refs.menuBar.className='menu-bar'}
      }
      else {
        this.$refs.menuBar.className='menu-bar'
        this.cambiarSelected(evento.target.id)
      }
    },
    cambiarSelected: function (id) {
      for (var tab of this.$data.tabs){
        if (tab.name===id){
          document.getElementById(id).className=tab.className+' selected'}
        else{
          document.getElementById(tab.name).className=tab.className}
      }
    }
  }
}
</script>

<style>
.menu, .menu-bar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    list-style-type: none;
    margin: 0;
    padding: 0;
    background: #f7f7f7;
    z-index:10;  
    overflow:hidden;
    box-shadow: 2px 0 18px rgba(0, 0, 0, 0.26);
}
.menu li a{
  display: block;
  text-indent: -500em;
  height: 5em;
  width: 5em;
  line-height: 5em;
  text-align:center;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  transition: background 0.1s ease-in-out;
}
.menu li a:before {
  font-family: FontAwesome;
  speak: none;
  text-indent: 0em;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 1.4em;
}
.menu-bar li a:hover,
.menu li a:hover {
  background: #267fdd;
  color: #fff;
}
.menu-bar{
    overflow:hidden;
    left:5em;
    z-index:5;
    width:0;
    height:0;
    transition: all 0.1s ease-in-out;
}
.menu-bar li a{
  display: block;
  height: 4em;
  line-height: 4em;
  text-align:center;
  color: #72739f;
  text-decoration:none;  
  position: relative;
  font-family:verdana;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  transition: background 0.1s ease-in-out;
}
.menu-bar li:first-child a{
    height:5em;
    background: #267fdd;
    color: #fff;    
    line-height:5
}

.para{
    color:#033f72;
    padding-left:100px;
    font-size:3em;
    margin-bottom:20px;
}

.open{
    width:10em;
    height:100%;
}
.openContenido{
    width:100%;
    height:100%;
}

.selected {
  background: #267fdd;
  color: #fff;
}

@media all and (max-width: 500px) {
    .container{
        margin-top:100px;
    }
    .menu{
        height:5em;
        width:100%;
    }
    .menu li{
        display:inline-block;
        float:left;
    }
    .menu-bar li a{
        width:100%;
    }
    .menu-bar{
        width:100%;
        left:0;
        height:0;
    }
    .open{
        width:100%;
        height:auto;
    }
    .para{
    padding-left:5px;
}  
}
@media screen and (max-height: 34em){
  .menu li,
  .menu-bar {
    font-size:70%;
  }
}
@media screen and (max-height: 34em) and (max-width: 500px){
  .menu{
        height:3.5em;
    }
}
</style>
