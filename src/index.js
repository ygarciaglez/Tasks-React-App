import React from 'react'; //permite crear interfaces web; SIEMPRE SE IMPORTA
import ReactDOM from 'react-dom'; //BIBLIOTECA react enfocado al navegador; SIEMPRE SE IMPORTA
import './index.css'; //PARA IMPORTAR UN ARCHIVO CSS QUE AFECTA TODO EL ARCHIVO HTML
import App from './App'; //IMPORTANDO UNNA APLICACION DESDE APP.JS




import registerServiceWorker from './registerServiceWorker'; //PARA LAS APLICACIONES QUE SIMULAN DATOS DE MANERA LOCAL
//GUARDA DATOS EN LA MEMORIA LOCAL DEL SERVIDOR (PARA CUANDO NO HAY CONEXION DE INTERNET)

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
