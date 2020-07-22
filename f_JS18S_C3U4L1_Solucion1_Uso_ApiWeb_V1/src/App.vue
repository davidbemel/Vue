<template>
<div id="app" class="container">
	<div class="row main-container mx-auto">
		<div class="row title-container no-gutters">
			<div class="col-10">
				<h1 class="title">Convertidor de Monedas</h1>
			</div>
			<div class="col-2">
				<select id='paises' class="select-country" v-model="selected">
					<option v-for="(country, index) in countriesFromApi" 
							:value="country.id" 
							:key='index' >{{country.name}} - {{country.currencyId}} </option>
				</select>
			</div>
		</div>
		
		<div class="row">
			<div class="col">
				<img class="country-flag" :src="imageSrc+'us'+nameFile"/>
				<h2 class="country-name">Estados Unidos</h2>
				<p>Valor de cambio: 1 USD</p>
				<input id="currencyInput" class="currency-input" >
			</div>
			<div class="col">
				<template v-for="(country, index) in countriesFromApi">
					<template v-if="selected === country.id" v-bind="countryRate">
						<img class="country-flag" :src="imageSrc+country.id+nameFile" :key='"img-"+index' />
						<h2 class="country-name" :key='"h2-"+index' >{{country.name}}</h2>
						<p class="" :key='"p-"+index'  >Valor del cambio: 
							<span>{{countryRate.toFixed(2)}}</span> {{country.currencyId}} 
						</p>
						<input class="currency-input" :key='"input-"+index' >
						<span :key='"span-"+index' >{{country.money}}</span>
					</template>
				</template>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'app',
  data: function () {
	return {
	  	selected: "BR",
		countryRate: 1.00,
		imageSrc: 'https://www.countryflags.io/',
		nameFile: '/flat/64.png',
		firstInputSelected: true,
		input: document.getElementById("currencyInput"),
		countriesFromApi:[]
	}
  },
  mounted : function () {
	var results=[], i=0
	var paises = document.getElementById('paises')
	axios
	.get('https://free.currencyconverterapi.com/api/v6/countries')
	.then((response) => {
	  Object.entries(response.data.results).sort().forEach(([key, value])=>{
		console.log(key)
		this.countriesFromApi.push(value)
	  })
	})
  }
}
</script>

<style lang="scss">
$background: #93acd8;
$font-color: #000;
$blue-dark: #1d2f50;
$blue-med: #5980c3;
$blue-light: #cdd8ed;

@import url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/286148/Montserrat-Regular.ttf);
$font: 'Montserrat', sans-serif;

body{
  background: $background;
  color: $font-color;
}

.row{
	width: 100%;
}
.title-container{
	margin-bottom: 25px;
	margin-left: 0;
	text-align: center;
	.title{
		font-family: $font;
		margin-right: 15px;
		text-align: left;
		color: $blue-dark;
	}
}

.select-country{
	width: 100%;
	height: 100%;
	background: white;
}


h2{
	color: $blue-dark;
}

.country-name{
	display: inline-block;
}
.country-flag{
	display: inline-block;
	margin-right: 10px;
	margin-bottom: 12px;
}

.main-container{
	width: 800px;
	position: absolute;
	border-radius: 10px;
	padding: 50px;
	top: 40%;
	left: 50%;
	transform: translate(-50%,-40%);
	background: white;
	box-shadow: 0 12px 10px -6px $blue-dark;
}

.currency-input{
	width: 70%;
	margin-right: 5px;
	font-size: 20px;
	height: 40px;
	border-radius: 5px;
	border: 1px solid #CCC;
	padding-left: 10px;
}
</style>

