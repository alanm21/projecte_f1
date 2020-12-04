export { simularCarrera, crearSimulacioClasificacionPiloto };
import { Page } from "../pages.js";

async function simularCarrera() {
    let pilotos_json;

    await fetch('json/Pilotos.json')
        .then(response => response.json())
        .then(data => pilotos_json = data);


    var tablaCarrera = []; //Creamos el array tablas donde le meteremos con el forEach
    //cada uno de los pilotos que tengamos


    //Array de jugadores para generar un ganador de la carrera.
    var numRepetit = [];
    var puntuacionsCarrera = [0, 25, 19, 15, 12, 10, 8, 6, 4, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var jugadores = [];

    //Asi simulem una carrera, al simularla ens trau cada jugador amb una posicio, el array esta desordenat
    pilotos_json.forEach(e => {

        do {                                              //max  min        min
            var posicionRandom = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
        } while (numRepetit.includes(posicionRandom));

        if (!numRepetit.includes(posicionRandom)) {

            let { nombre, escuderia_actual: escuderia, pais_nacimiento: pais, bandera: bandera_pais } = e

            let posicion = posicionRandom;
            let puntacion = puntuacionsCarrera[posicionRandom];

            jugadores.push({ posicion, nombre, puntacion, escuderia, pais, bandera_pais })

            numRepetit.push(posicion);
        }

    });


    //Ara ordenem el array anterior per a que ixquen per orde de posicio
    let jugadoresOrdenados = jugadores.sort((a, b) =>
        a.posicion - b.posicion
    );

    console.log(jugadoresOrdenados); //Mostrar el array

    //Una vegada ordenat ja ho clavem al array tablaCarrera per a imprimirho en la funcio de baix crearSimulacioClasificacionPiloto()
    jugadoresOrdenados.forEach(j => {


        tablaCarrera.push(`<tr>
        <td class="text-center">` + j.posicion + `</td>
        <td class="text-center">` + j.nombre + `</td>
        <td class="text-center">` + j.puntacion + `</td>
        <td class="text-center">` + j.escuderia + `</td>
        <td class="text-center"> <img src="../imagenes/w80/`+ j.bandera_pais + `.png" height="20px" width="30px"> </td>
        </tr>`);

    });


    console.log(jugadoresOrdenados);
    return tablaCarrera;

}


//Con esta funcion le añadimos las filas de cada piloto
async function crearSimulacioClasificacionPiloto() {
    let tablaPilotosCarrera;

    await simularCarrera().then(data => tablaPilotosCarrera = data);

    //console.log(tablaPilotosCarrera);

    var tabla2 = `
        <div class="container crearTabla">
            <table class="table table-dark table-striped">
                <thead>
                    <tr>
                    <th class="text-center">Posicion Final</th>
                    <th class="text-center">Piloto</th>
                    <th class="text-center">Puntos</th>
                    <th class="text-center">Escuderia</th>
                    <th class="text-center">Pais Nacimiento</th>
                    </tr>
                </thead>

                <tbody>
                    ` + tablaPilotosCarrera.join("") + `
                </tbody>
            </table>
        </div>`;

    document.body.innerHTML += tabla2; //Estaquem la tabla en el body
}
