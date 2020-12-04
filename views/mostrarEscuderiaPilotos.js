export { mostrarEscuderias, mostrarPilotosDeXEscuderia };

import { Page } from "../pages.js";

/*---------------------LOGOS ESCUDERIAS----------------------------*/
/*-------- Funcio per a mostrar tots els escuts dels equipos ------*/
/*------------------  MOSTRAR INFORMACION EQUIPO ------------------*/
/*-----------------------------------------------------------------*/
// Cada escuderia al apretar el escut mostrarem els dos pilotos de cada equip
//Funcion para rellenar una tabla con las fotos del equipo
async function mostrarEscuderias() {
    let escuderias_card_json;

    await fetch('json/Escuderias.json')
        .then(response => response.json())
        .then(data => escuderias_card_json = data);

    let i = 0; //Per a que cada card tinga una id

    let lista = document.createElement("div");
    lista.setAttribute("class", "cards-list");

    escuderias_card_json.forEach(e => { //Al llamar a la variable equipos_json es llamar al mismo atributo y ya lo añade

        var escuderiasTabla = `
            <div class="card ` + i + `">
                <div class="card_image"> <img src="` + e.logo_escuderia + `" /> </div>
                <div class="card_title title-white">
                    <p class=""></p> <!--pasarli els dos id dels pilotos-->
                </div>
            </div>
            `;

        lista.innerHTML += escuderiasTabla; //Estaquem la tabla en el body

        i++
    });

    document.body.appendChild(lista);

    /*Per a saber el numero de cada carta*/
    setTimeout(() => {
        //Fiquem el Array per a poder fer el foreach
        Array.from(document.querySelectorAll(".card")).forEach(element => {
            element.addEventListener("click", function irAEscuderia() {
                console.log(this.classList[1] + " <- numero escuderia que hem apretat.");
                //Falta agafar els ids

                //MostrarPagina x
                new Page().mostrarPagina("ESCUDERIA-2", this.classList[1]);
            })

        })

    }, 50);


}

//AL LLAMAR A UNA ESCUDERIA MOSTRAR LOS PILOTOS
async function mostrarPilotosDeXEscuderia(id_escuderia) {
    console.log("Ha entrat on mostrem els pilotos.");
    console.log(id_escuderia);

    let pilotos_card_json;

    await fetch('json/Pilotos.json')
        .then(response => response.json())
        .then(data => pilotos_card_json = data);


    //Este segon fetch es per a cuan pasem la escuderia busque el atribut de cada piloto, aixina ho guardem en una variable
    //i baix ja la podem utilitzar.
    let escuderias_json;

    await fetch('json/Escuderias.json')
        .then(response => response.json())
        .then(data => escuderias_json = data);

    var piloto_principal = escuderias_json[id_escuderia].id_piloto_principal;
    console.log(piloto_principal + " <- Piloto principal");

    var piloto_secundari = escuderias_json[id_escuderia].id_piloto_secundario;
    console.log(piloto_secundari + " <- Piloto secundari");


    //Ara agafant el numero que ens trau les dos variables anteriors ja busquem la informacio
    let atributs_piloto_principal = pilotos_card_json[piloto_principal - 1]; //Ens torna un objecte de X pilot, despres de ixe pilot
    let atributs_piloto_secundari = pilotos_card_json[piloto_secundari - 1]; //ja agafem les dades que ens interesen

    console.log(pilotos_card_json[piloto_principal - 1]);//Es per a vore que realment per consola mostra un Objecte
    console.log(pilotos_card_json[piloto_secundari - 1]);//Es per a vore que realment per consola mostra un Objecte

    var pilotitos = `
        <!-- Mapa amb la localitzacio del circuit -->
        <iframe class="mapaLocalizacionEscuderia" width="1000" height="200" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
        id="gmap_canvas" src="https://maps.google.com/maps?width=1000&amp;height=200&amp;hl=en&amp;q=%20`+ escuderias_json[id_escuderia].sede + `
        +()&amp;t=k&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"> </iframe> 
            

        <!-- Cartes dels pilotos de x escuderia -->
        <div class="row cartasPilotosCentrado">
        <div class="example-2 card2">
            <div class="wrapper" style="background: url(imagenes/imagenes-pilotos/`+ atributs_piloto_principal.imagen_piloto + `) center/cover no-repeat;">
                <div class="header">
                    <div class="date">
                        <span class="day">Debut `+ atributs_piloto_principal.debut + `</span>
                    </div>
                    <br>
                    <div class="date">
                        <span class="day">Titulos Mundiales `+ atributs_piloto_principal.titulos_mundiales + `</span>
                    </div>
                </div>
                <div class="data">
                    <div class="content">
                    <span class="author">`+ atributs_piloto_principal.escuderia_actual + `</span>
                    <h1 class="title"><a href="#">`+ atributs_piloto_principal.nombre + `</a></h1>
                    <p class="text">The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.</p>
                    <a href="#" class="button"> <img src="../imagenes/w80/`+ atributs_piloto_principal.bandera + `.png" height="20px" width="30px"> </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="example-2 card2">
        <div class="wrapper" style="background: url(/imagenes/imagenes-pilotos/`+ atributs_piloto_secundari.imagen_piloto + `) center/cover no-repeat;">
        <div class="header">
                    <div class="date">
                        <span class="day">Debut `+ atributs_piloto_secundari.debut + `</span>
                    </div>
                    <br>
                    <div class="date">
                        <span class="day">Titulos Mundiales `+ atributs_piloto_secundari.titulos_mundiales + `</span>
                    </div>
                </div>
                <div class="data">
                    <div class="content">
                    <span class="author">`+ atributs_piloto_secundari.escuderia_actual + `</span>
                    <h1 class="title"><a href="#">`+ atributs_piloto_secundari.nombre + `</a></h1>
                    <p class="text">The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.</p>
                    <a href="#" class="button"> <img src="../imagenes/w80/`+ atributs_piloto_secundari.bandera + `.png" height="20px" width="30px"> </a>
                    </div>
                </div>
            </div>
        </div>
    
        </div>

        <!-- Informacion Escuderia -->
        <div class="informacionEscuderiaCentrado alert alert-danger" role="alert">
            <h4 class="alert-heading">Escuderia `+ escuderias_json[id_escuderia].nombre + `</h4>
            <p class="text-center">`+ escuderias_json[id_escuderia].informacion + `</p>
            
            <hr>
            <p class="mb-0 text-center">Titulos de constructores  `+ escuderias_json[id_escuderia].titulos_constructores + ` </p>
            
            <hr>
            <p class="mb-0 text-center">Año de fundacion  `+ escuderias_json[id_escuderia].fecha_fundacion + ` </p>
        </div>

        `;

    return new Promise(async (resolve, reject) => {
        await new Page().pantallaCarga(); //Carrega els datos
        new Page().paginaVacia();

        new Page().barraNavegacion();
        document.body.innerHTML += pilotitos;
        new Page().piePagina();
        resolve();
    })

}
