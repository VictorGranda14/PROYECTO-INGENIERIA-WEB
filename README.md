# Proyecto app móvil para robot de control de incendios

## Integrantes
* Ramiro Magnatera
* Víctor Granda
* Benjamín Rojas
* Vicente Sarabia

<div align="center">

[![angular-badge-sm]][angular-web] [![css3-badge-sm]][css3-web] [![eslint-badge-sm]][eslint-web] [![express-badge-sm]][express-web] [![figma-badge-sm]][figma-web] [![git-badge-sm]][git-web] [![github-badge-sm]][github-web] [![html5-badge-sm]][html5-web] [![ionic-badge-sm]][ionic-web] [![js-badge-sm]][js-web] [![mongodb-badge-sm]][mongodb-web] [![mysql-badge-sm]][mysql-web] [![nodejs-badge-sm]][nodejs-web] [![npm-badge-sm]][npm-web] [![postgresql-badge-sm]][postgresql-web] [![prettier-badge-sm]][prettier-web] [![react-badge-sm]][react-web] [![tailwind-badge-sm]][tailwind-web] [![ts-badge-sm]][ts-web] [![vscode-badge-sm]][vscode-web] [![yarn-badge-sm]][yarn-web]

[![ios-development-badge-sm]][ios-development-web] [![android-development-badge-sm]][android-development-web]

</div>

## Instrucciones para ejecutar el proyecto

1. Instalar Node.js
2. Instalar todas las dependencias del proyecto con `npm install` en el directorio del proyecto (PROYECTO-INGENIERIA-WEB).
3. Para ejecutar el backend, se debe ingresar a la carpeta /backend, instalar las dependencias necesarias con `npm install` y luego ingresar el comando `node server.js` en el directorio del backend (PROYECTO-INGENIERIA-WEB/backend).
4. Para compilar la aplicación web de Ionic, se ingresa a la carpeta PROYECTO-INGENIERIA-WEB/IONIC y se utiliza el comando `npm run start`
5. Para ejecutar la API de Flask para poder leer los datos del robot mediante Bluetooth, se debe ingresar en la carpeta PROYECTO-INGENIERIA-WEB/sensorBackend y luego ingresar el comando `python api.py`. En caso de no tener el robot, se puede utilizar una versión de la API que genera datos aleatorios para los sensores, que se ejecuta con el comando `python app.py`
6. El boton superior derecho con icono de usuario actúa como logout
7. Usuario administrador para pruebas: `cristiano` contraseña: `comandantecr7`

## Descripción

Esta aplicación móvil funcionará como una interfaz amigable de visualización de datos que recoge un robot contra incendios. Por otro lado la aplicación también aportará ciertas funcionalidades relacionadas al monitoreo de los ajustes del mismo.  

### Funcionalidades

1. **Inicio de sesión:** Los usuarios pueden iniciar sesión en la aplicación.
2. **Registro de usuario:** Los usuarios pueden registrarse en la aplicación.
3. **Evaluación de temperaturas:** Dentro de la aplicación, el usuario podrá visualizar las temperaturas medidas por el robot durante las últimas horas.
   También podrá obtener un promedio de temperaturas según días, semanas y meses.
5. **Medición de gases:** Los usuarios pueden visualizar la calidad del aire del ambiente y ver en que rango se encuentra este valor. Además, se puede ver el detalle del análisis. 
6. **Información de monitoreo del robot:** Los usuarios pueden visualizar distintos apartados técnicos del robot, como la batería, versión actual, modelo, entre otras.

## Prototipo

<div align="center">

[![figma-prot-badge]][figma-prot-url] [![figma-dis-badge]][figma-dis-url]

</div>

## Maquetación web
En la carpeta 'maquetacion' se incluyen 3 carpetas:
* css, la cual contiene un único archivo main.css con los estilos aplicados a los elementos de las páginas.
* img, en la cual están las imágenes utilizadas en las paginas en formato png y svg.
* js, con un único script js que contiene las interacciones/validaciones de rut y contraseña.
* Por último se agregan los archivos html de cada una de las páginas de la app

[js-badge-sm]: https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=flat
[js-web]: https://developer.mozilla.org/es/docs/Web/JavaScript
[ts-badge-sm]: https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=flat
[ts-web]: https://www.typescriptlang.org/
[html5-badge-sm]: https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff&style=flat
[html5-web]: https://developer.mozilla.org/es/docs/Web/HTML
[css3-badge-sm]: https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff&style=flat
[css3-web]: https://developer.mozilla.org/es/docs/Web/CSS
[tailwind-badge-sm]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=fff&style=flat
[tailwind-web]: https://tailwindcss.com/
[react-badge-sm]: https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=fff&style=flat
[react-web]: https://reactjs.org/
[angular-badge-sm]: https://img.shields.io/badge/Angular-DD0031?logo=angular&logoColor=fff&style=flat
[angular-web]: https://angular.io/
[nodejs-badge-sm]: https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=fff&style=flat
[nodejs-web]: https://nodejs.org/
[express-badge-sm]: https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=fff&style=flat
[express-web]: https://expressjs.com/
[mongodb-badge-sm]: https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=fff&style=flat
[mongodb-web]: https://www.mongodb.com/
[postgresql-badge-sm]: https://img.shields.io/badge/PostgreSQL-336791?logo=postgresql&logoColor=fff&style=flat
[postgresql-web]: https://www.postgresql.org/
[mysql-badge-sm]: https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=fff&style=flat
[mysql-web]: https://www.mysql.com/
[git-badge-sm]: https://img.shields.io/badge/Git-F05032?logo=git&logoColor=fff&style=flat
[git-web]: https://git-scm.com/
[github-badge-sm]: https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=fff&style=flat
[github-web]: https://github.com
[npm-badge-sm]: https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=fff&style=flat
[npm-web]: https://www.npmjs.com/
[yarn-badge-sm]: https://img.shields.io/badge/Yarn-2C8EBB?logo=yarn&logoColor=fff&style=flat
[yarn-web]: https://yarnpkg.com/
[prettier-badge-sm]: https://img.shields.io/badge/Prettier-F7B93E?logo=prettier&logoColor=fff&style=flat
[prettier-web]: https://prettier.io/
[eslint-badge-sm]: https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=fff&style=flat
[eslint-web]: https://eslint.org/
[vscode-badge-sm]: https://img.shields.io/badge/Visual_Studio_Code-007ACC?logo=visual-studio-code&logoColor=fff&style=flat
[vscode-web]: https://code.visualstudio.com/
[ionic-badge-sm]: https://img.shields.io/badge/Ionic-3880FF?logo=ionic&logoColor=fff&style=flat
[ionic-web]: https://ionicframework.com/
[figma-badge-sm]: https://img.shields.io/badge/Figma-F24E1E?logo=figma&logoColor=fff&style=flat
[figma-web]: https://www.figma.com/
[ios-development-badge-sm]: https://img.shields.io/badge/iOS_Development-000000?logo=ios&logoColor=fff&style=flat
[ios-development-web]: https://developer.apple.com/ios/
[android-development-badge-sm]: https://img.shields.io/badge/Android_Development-3DDC84?logo=android&logoColor=fff&style=flat
[android-development-web]: https://developer.android.com/

[figma-prot-badge]: https://img.shields.io/badge/Ver%20prototipo%20en%20Figma-F24E1E?logo=figma&logoColor=fff&style=flat
[figma-prot-url]: https://www.figma.com/proto/JN3aRnQ74SNULshUk7bxof/Prototipo-app-m%C3%B3vil?type=design&node-id=22-861&t=BR6e5hE3HvCraGvc-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=22%3A861&mode=design
[figma-dis-badge]: https://img.shields.io/badge/Ver%20diseño%20UI%20en%20Figma-F24E1E?logo=figma&logoColor=fff&style=flat
[figma-dis-url]: https://www.figma.com/file/JN3aRnQ74SNULshUk7bxof/Prototipo-app-m%C3%B3vil?type=design&node-id=0%3A1&mode=design&t=usZsN6ZGvi7Php5k-1
