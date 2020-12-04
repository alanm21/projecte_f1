export { rellenarTablaClasificacionEscuderias, crearTablaClasificacionEscuderias };

/*-----------------------------------------------------------*/
/*--------TABLA CLASSIFCIACIO ESCUDERIAS/CONSTRUCTORES-------*/
/*-----------------------------------------------------------*/
//Funcion para rellenar una tabla con la clasificacion de las escuderias
async function rellenarTablaClasificacionEscuderias() {
    let escuderias_json;

    await fetch('json/Escuderias.json')
        .then(response => response.json())
        .then(data => escuderias_json = data);

    //Esta funcio ordena el json
    function ordenarJSONEscuderias(data, key, orden) {
        return data.sort(function (a, b) {
            var z = a[key],
                w = b[key];

            if (orden === 'asc') {
                return ((z < w) ? -1 : ((z > w) ? 1 : 0));
            }

            if (orden === 'desc') {
                return ((z > w) ? -1 : ((z < w) ? 1 : 0));
            }
        });
    }

    // Ordenamos el json. Li pasem les dades, el atribut que volem ordenar. Per ultim si ascendent o descendent.
    //I ho guardem el json ordenat en una variable.
    //la variable jsonOrdenadoEscuderias llama a la funcion ordenarJSONEscuderias()
    var jsonOrdenadoEscuderias = ordenarJSONEscuderias(escuderias_json, 'puntos_actuales', 'desc');

    var tablas = []; //Creamos el array tablas donde le meteremos con el forEach
    //cada uno de los equipos que tengamos
    let posicionActualTabla = 0; //Per a que cada vega que imprimix una fila indique la posicio en la que esta.

    jsonOrdenadoEscuderias.forEach(e => { //Al llamar a la variable equipos_json es llamar al mismo atributo y ya lo añade
        tablas.push(`<tr>
            <td class="text-center">` + (++posicionActualTabla) + `</td>
            <td class="text-center">` + e.nombre + `</td>
            <td class="text-center"> <img src="../imagenes/w80/`+ e.bandera_escuderia + `.png" height="20px" width="30px"> </td>
            <td class="text-center">` + e.puntos_actuales + `</td>
            </tr>`);
    });

    return tablas;
}


//Con esta funcion le añadimos las filas de cada equipo
async function crearTablaClasificacionEscuderias() {
    let tablaEscuderias;

    await rellenarTablaClasificacionEscuderias().then(data => tablaEscuderias = data);

    var tabla = `
        <div class="container crearTabla">
            <table class="table table-dark table-striped">
                <thead>
                    <tr>
                    <th class="text-center">Posicion Actual</th>
                    <th class="text-center">Escuderia</th>
                    <th class="text-center">Pais Escuderia</th>
                    <th class="text-center">Puntos Actuales Jugados</th>
                    </tr>
                </thead>

                <tbody>
                    ` + tablaEscuderias.join("") + `
                </tbody>
            </table>
        </div>`;

    document.body.innerHTML += tabla; //Estaquem la tabla en el body
}

