export { rellenarTablaClasificacionPilotos, crearTablaClasificacionPiloto };

/*-----------------------------------------------------------*/
/*-----------------TABLA CLASSIFCIACIO PILOTOS---------------*/
/*-----------------------------------------------------------*/
//Funcion para rellenar una tabla con la clasificacion de los pilotos
async function rellenarTablaClasificacionPilotos() {
    let pilotos_json;

    await fetch('json/Pilotos.json')
        .then(response => response.json())
        .then(data => pilotos_json = data);

    //Esta funcio ordena el json
    function ordenarJSON(data, key, orden) {
        return data.sort(function (a, b) {
            var x = a[key],
                y = b[key];

            if (orden === 'asc') {
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            }

            if (orden === 'desc') {
                return ((x > y) ? -1 : ((x < y) ? 1 : 0));
            }
        });width
    }

    // Ordenamos el json. Li pasem les dades, el atribut que volem ordenar. Per ultim si ascendent o descendent.
    //I ho guardem el json ordenat en una variable.
    var jsonOrdenadoPilotos = ordenarJSON(pilotos_json, 'posicion_actual_pilotos', 'asc'); //Funcio autoinvocada, perque guardem el resultat
    // de la funcio en una variable cridant a una funcio que esta declarada dalt. Despres el resultat guardat en jsonOrdenadoPilotos el gaste
    //per a mostrar x piloto ordenat

    var tablas2 = []; //Creamos el array tablas donde le meteremos con el forEach
    //cada uno de los equipos que tengamos
    let posicionActualTablaPilotos = 0;
    jsonOrdenadoPilotos.forEach(e => { //Al llamar a la variable equipos_json es llamar al mismo atributo y ya lo añade
        tablas2.push(`<tr>
            <td class="text-center">` + (++posicionActualTablaPilotos) + `</td>
            <td class="text-center">` + e.nombre + `</td>
            <td class="text-center">` + e.puntos_actuales_pilotos + `</td>
            <td class="text-center">` + e.escuderia_actual + `</td>
            <td class="text-center"> <img src="../imagenes/w80/`+ e.bandera + `.png" height="20px" width="30px"> </td>
            </tr>`);
    });

    return tablas2;
}


//Con esta funcion le añadimos las filas de cada piloto
async function crearTablaClasificacionPiloto() {
    let tablaPilotos;

    await rellenarTablaClasificacionPilotos().then(data => tablaPilotos = data);

    var tabla2 = `
        <div class="container crearTabla">
            <table class="table table-dark table-striped">
                <thead>
                    <tr>
                    <th class="text-center">Posicion Actual</th>
                    <th class="text-center">Piloto</th>
                    <th class="text-center">Puntos Actuales</th>
                    <th class="text-center">Escuderia</th>
                    <th class="text-center">Pais Nacimiento</th>
                    </tr>
                </thead>

                <tbody>
                    ` + tablaPilotos.join("") + `
                </tbody>
            </table>
        </div>`;

    document.body.innerHTML += tabla2; //Estaquem la tabla en el body
}

