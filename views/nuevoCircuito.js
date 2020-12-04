export { formularioCircuito };

import { Page } from "../pages.js";

function formularioCircuito() {
    
    var formCircuito =`
    <div class="login-form loginCentrado">
        <form name=form>

            <label>Nombre GP</label>
            <div class="form-group">
                <input type=text name=nombre_gp class="form-control input-lg" required="required">
            </div>

            <label>Nombre Circuito</label>
            <div class="form-group">
                <input type=text name=circuito class="form-control input-lg" required="required">
            </div>   

            <label>Pais Localizacion</label>
            <div class="form-group">
                <input type=text name=pais class="form-control input-lg" required="required">
            </div>   

            <!--
            <div class="custom-file">
                <input type="file" class="custom-file-input" id="customFileLang" lang="es">
                <label class="custom-file-label" for="customFileLang" name=imagen>Seleccionar Imagen</label>
            </div>-->

            <br>

            <div class="form-group">
                <input type=button class="btn btn-primary btn-lg btn-block login-btn" value="ACCEDER" id="botonLogin">
            </div>
        </form>
    </div>
    `;

    document.body.innerHTML += formCircuito;

    //Esperem a que carrege el html
    setTimeout(() => {
        let agafarBoto = document.getElementById("botonLogin");
        agafarBoto.addEventListener("click", () => {
            let nombre_gp = document.form.nombre_gp.value ;
            let circuito = document.form.circuito.value ;
            let pais = document.form.pais.value ;

            circuitoAdded(nombre_gp, circuito, pais);
        });
    }, 100);

}


function circuitoAdded(nombre_gp, circuito, pais) {

    new Page().paginaVacia();
    new Page().barraNavegacion();


    function numeroRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }    

    //Array de jugadores para generar un ganador de la carrera.
    var pilotosAleatorios = ["Valtteri Bottas", "Lewis Hamilton", "Charles Leclerc", "Sebastian Vettel", "Max Verstappen"];
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    console.log(pilotosAleatorios.length);

    var exito =`
    <div class="card-circuit">
        <div class="thumbnail"><img class="left" src="../imagenes/circuitos/prix`+[Math.floor(Math.random() * 10)]+`.jpg"/></div>
            <div class="right">
                <h1 p-2>`+ nombre_gp + `</h1>
                <div class="separator"></div>
                <div>

                <p>Pais Localizacion: `+ pais + ` </p>
                <p>Record Vuelta rapida: `+ pilotosAleatorios[Math.floor(Math.random() * pilotosAleatorios.length)] +` </p>
                <p>Ultimo Ganador: `+ pilotosAleatorios[Math.floor(Math.random() * pilotosAleatorios.length)] +`</p>
                <p>Longitud: `+ numeroRandom(4500,5000) +` m </p>
                <p>Ganador 2020: `+ pilotosAleatorios[Math.floor(Math.random() * pilotosAleatorios.length)] +` </p>
                </div>
            </div>
            
            <h6>Dia de la carrera: `+[Math.floor(Math.random() * 31)]+` de `+meses[Math.floor(Math.random() * 12)]+` de 2020 </h6>
        
        <div class="fab" style="background: url(../imagenes/circuitos/carrera_si_terminada.png) center/cover no-repeat;"><i class="fa fa-arrow-down fa-3x"> </i></div>
        
        <br><br><br><br><br><br><br><br>
        <h1 class="display-4 text-center" style="color: white;">¡ Circuito añadido con exito !</h1>
    </div>
    `;

    document.body.innerHTML += exito;

    new Page().piePagina();
}

