export { mostrarCircuits };

/*------------------------ CIRCUITS -------------------------------*/
/*-------- Funcio per a mostrar tots els escuts dels equipos ------*/
/*------------------  MOSTRAR INFORMACION EQUIPO ------------------*/
/*-----------------------------------------------------------------*/
// Cada escuderia al apretar el escut mostrarem els dos pilotos de cada equip
//Funcion para rellenar una tabla con las fotos del equipo
async function mostrarCircuits() {

    var req = new XMLHttpRequest();
    function circuits() { //closure perque te una variable fora pero la utilitza dins

        req.open('GET', 'json/Circuitos.json', true);
        req.onreadystatechange = function (aEvt) {
            if (this.readyState == 4 && this.status == 200) {
                var datosDelJson = JSON.parse(this.responseText);
                imprimirCircuitos(datosDelJson);
            }
        };
        req.send(null);

        function imprimirCircuitos(datosDelJson) {
            var circuitos = []; //Creamos el array tablas donde le meteremos con el forEach
            //cada uno de los equipos que tengamos
            let x = 0; //Per a que cada card tinga una id

            let lista1 = document.createElement("div");

            console.log(datosDelJson);

            datosDelJson.forEach(e => { //Al llamar a la variable equipos_json es llamar al mismo atributo y ya lo añade

                var circuitosTabla = `
            <div class="card-circuit">
            <div class="thumbnail"><img class="left" src="../imagenes/circuitos/`+ e.imagen_circuito + `"/></div>
            <div class="right">
            <h1 p-2>`+ e.circuito + `</h1>
            <div class="separator"></div>
            <div><!--It contributes to the development of bones and most importantly it is responsible for synthesis of your DNA and RNA...-->
            <p>Pais Localizacion: `+ e.pais_localizacion + ` </p>
            <p>Record Vuelta rapida: `+ e.record_vuelta_rapida + ` </p>
            <p>Ultimo Ganador: `+ e.ganador_ultimo_gp + ` </p>
                    <p>Longitud:  `+ e.longitud_circuito + ` </p>
                    <p>Ganador 2020:  `+ e.ganador_actual + ` </p>
                    </div>
                    </div>
                    <h6>Dia de la carrera: `+ e.dia_de_la_carrera + `</h6>
                    
                    <div class="fab" style="background: url(`+ e.carrera_disputada + `) center/cover no-repeat;"><i class="fa fa-arrow-down fa-3x"> </i></div>
                    </div>
                    `;

                lista1.innerHTML += circuitosTabla; //Estaquem la tabla en el body
            });

            document.body.appendChild(lista1);

            return circuitos;
        }

    }//Tanca la function circuits

    circuits();//Cridem la funcio altra volta

};//Tanca la gran