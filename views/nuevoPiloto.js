export { formularioPiloto };

import { Page } from "../pages.js";

function formularioPiloto() {
    
    var formPiloto =`
    <div class="login-form loginCentrado">
        <form name=form>

            <label>Nombre Piloto</label>
            <div class="form-group">
                <input type=text name=nombre_piloto class="form-control input-lg" required="required">
            </div>

            <label>Escuderia</label>
            <div class="form-group">
                <input type=text name=escuderia class="form-control input-lg" required="required">
            </div>   

            <label>Pais Nacimiento</label>
            <div class="form-group">
                <input type=text name=pais class="form-control input-lg" required="required">
            </div>   

            <label>Año Debut</label>
            <div class="form-group">
                <input type=text name=añodebut class="form-control input-lg" required="required">
            </div>   

            <label>Titulos Mundiales</label>
            <div class="form-group">
                <input type=text name=titulos class="form-control input-lg" required="required">
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

    document.body.innerHTML += formPiloto;

    //Esperem a que carrege el html
    setTimeout(() => {
        let agafarBoto = document.getElementById("botonLogin");
        agafarBoto.addEventListener("click", () => { //Mateixa al fer click de crear nou usuari agafa ixes dades per a ser tractades despres
            let nombre_piloto = document.form.nombre_piloto.value ;
            let escuderia = document.form.escuderia.value ;
            let pais = document.form.pais.value ;
            let añodebut = document.form.añodebut.value ;
            let titulos = document.form.titulos.value ;

            pilotoAdded(nombre_piloto, escuderia, pais, añodebut, titulos);
        });
    }, 100);

}


function pilotoAdded(nombre_piloto, escuderia, pais, añodebut, titulos) {

    new Page().paginaVacia();
    new Page().barraNavegacion();

    var exito =`
    <h1 class="display-4" style="color: white;text-align: center;padding-top: 120px;">¡ Piloto añadido con exito !</h1>
    
    <div class="example-2 card2 cartasPilotoCentrado">
        <div class="wrapper" style="background: url(imagenes/imagenes-pilotos/piloto`+[Math.floor(Math.random() * 20)]+`.jpg) center/cover no-repeat;">
        <div class="header">
                    <div class="date">
                        <span class="day">Debut `+ añodebut +`</span>
                    </div>
                    <br>
                    <div class="date">
                        <span class="day">Titulos Mundiales `+ titulos +` </span>
                    </div>
                </div>
                <div class="data">
                    <div class="content">
                    <span class="author"> `+ escuderia +` </span>
                    <h1 class="title"><a href="#"> `+ nombre_piloto +` </a></h1>
                    <p class="text">The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.</p>
                    <a href="#" class="button"> `+ pais +` </a>
                    </div>
                </div>
            </div>
    </div>
    `;

    document.body.innerHTML += exito;

    new Page().piePagina();
}

