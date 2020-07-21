# Vue
# Installing Vue projects - Config general
Instalar Vs code 
Con la finalidad de utilizar Visual Studio Code para el desarrollo de aplicaciones con Vue debemos agregar algunos plugins que permiten a este IDE entender la sintaxis del 
framework, aplicar correctamente la sangrías en el código y poder hacer depuración del desarrollo realizado. Para ello, es necesario agregar los plugins:
* Vetur -ESLint -Auto Close Tag - Npm Intellisense -Debugger for Chrome 

## Install globally Vue

>Examples of dependencies which would be required at runtime include React or Vue, Redux, Express, and Axios.
>Examples of when to install devDependencies would be Nodemon, Babel, ESLint, and testing frameworks like Chai, Mocha, 
Enzyme, etc…
Start by intalling Vue:
```
npm install -g vue
npm install -g @vue/cli  //Si molesta revisar//C:\Users\USER\AppData\Roaming\npm
```
## Plugins
```
npm install --save core-js@3.6.5
```
## Comandos para crear vue projects
Instalar una plantilla
```
vue create -d plantilla  
```
>*Arrancar la aplicacion **no es necesario** >

```      npm run serve  ```

> REVISAR EN [http://localhost:8081/]


moverse a carpeta
```
cd plantilla
```

```
npm i @vue/cli-service
npm i font-awesome
npm install bootstrap
```

## Otras Librerias para usar

>librerias para manejar errores y scss

```
npm install sass-loader node-sass webpack --save-dev

```

## Para manejar APIs

>Librerias de APIS
```
npm install --save axios
npm  install --save moment
```
-   [https://www.countryflags.io/]
-   [https://free.currencyconverterapi.com]

## Install firebase
```
npm install --firebase //no sirve
npm install --save firebase // pagina web 
npm install firebase // funciona
npm i firebase // oficial
```
## PARA COPIAR ARCHIVOS COMO EL MAIN.JS con robocopy
### COPIAR ARCHIVOS

```
Robocopy /S ..\src\components .\src\components 
Copy-Item ..\src\App.vue -Destination .\src\App.vue -Force
Add-Content -Path .\src\Main.js -Value "
`n import '../node_modules/bootstrap/dist/css/bootstrap.css'
`n import '../node_modules/font-awesome/css/font-awesome.css'"
```

### En caso de requerirlo instalar las librerias para depuraciones
>> ESLINT //**PARA DESINSTALAR** //

```
npm remove @vue/cli-plugin-eslint  // o usar npm unistall eslint
npm i eslint  
npm install eslint-loader
```
