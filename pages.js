export { Page };

import { mostrarCircuits } from "./views/mostrarCircuitos.js";
import { rellenarTablaClasificacionEscuderias, crearTablaClasificacionEscuderias } from "./views/mostrarClasifEscuderias.js";
import { rellenarTablaClasificacionPilotos, crearTablaClasificacionPiloto } from "./views/mostrarClasifPilotos.js";
import { mostrarEscuderias, mostrarPilotosDeXEscuderia } from "./views/mostrarEscuderiaPilotos.js";
import { paginaHome } from "./views/mostrarHome.js";
import { paginaLogin } from "./views/mostrarLogin.js";
import { formularioCircuito } from "./views/nuevoCircuito.js"
import { formularioPiloto } from "./views/nuevoPiloto.js"
import { simularCarrera, crearSimulacioClasificacionPiloto } from "./views/simularCarrera.js"

class Page {

    constructor() {

    }

    /*---------------------------------------*/
    /*-------- ON MOSTREM LES PAGINES -------*/
    mostrarPagina(nombrePagina, id_escuderia) {
        this.paginaVacia();
        this.barraNavegacion();

        if (nombrePagina == "CLASIFICACION CONSTRUCTORES") {
            rellenarTablaClasificacionEscuderias();
            crearTablaClasificacionEscuderias();

        } else if (nombrePagina == "CLASIFICACION PILOTOS") {
            rellenarTablaClasificacionPilotos();
            crearTablaClasificacionPiloto();

        } else if (nombrePagina == "HOME") {
            paginaHome();

        } else if (nombrePagina == "ESCUDERIAS") {
            mostrarEscuderias();

        } else if (nombrePagina == "CIRCUITOS") {
            mostrarCircuits();

        } else if (nombrePagina == "LOGOUT") { //Login
            this.logout();
            this.mostrarBarraNavegacion(false);
            paginaLogin();

        } else if (nombrePagina == "Login") { //Login
            this.mostrarBarraNavegacion(false);
            paginaLogin();

        //SUB PAGiNES
        } else if (nombrePagina == "ESCUDERIA-2") { //Mostrar els pilotos
            mostrarPilotosDeXEscuderia(id_escuderia);
        
        } else if (nombrePagina == "NUEVO CIRCUITO") { //Añadir nou circuit
            formularioCircuito();

        } else if (nombrePagina == "NUEVO PILOTO") { //Añadir nou piloto
            formularioPiloto();
        
        } else if (nombrePagina == "SIMULAR CARRERA") { //Simular carrera
            simularCarrera();
            crearSimulacioClasificacionPiloto();
        }



        this.piePagina();

        console.log(nombrePagina);
    }






    //Les coses basiques com la barra de navegacio i footer.. les deixe
    //de moment.

    /*-----------------------------------------------------*/
    /*--------------------C A R G A N D O -----------------*/
    cargando() {
        var cargandoDibujo = `
        <div class="container">
            <section>
                <div class="loader loader-1">
                    <div class="loader-outter"></div>
                    <div class="loader-inner"></div>
                </div>
            </section>
        </div>
        `;

        document.body.innerHTML += cargandoDibujo;
    }
    
    pantallaCarga() {
        return new Promise((resolve, reject) => {
            this.paginaVacia();
            this.cargando();
            setTimeout(() => {
                resolve();
            }, 1500);
        })
    }


    /*-----------------------------------------------------*/
    /*------------------- PAGINA VACIA --------------------*/
    paginaVacia() {
        var pagvacia = ``;

        document.body.innerHTML = pagvacia;
    }


    /*-------------------------------------------------------*/
    /*----------------- BARRA DE NAVEGACION -----------------*/
    mostrarBarraNavegacion(mostrar) {
        if (mostrar) {
            document.getElementsByTagName("nav")[0].style.display = "block";
        } else {
            document.getElementsByTagName("nav")[0].style.display = "none";
        }
    }

    barraNavegacion() {

        var barranav = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" style="background-color: #212529!important; cursor: pointer;">
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
            <a class="navbar-brand" style="color: #f50000!important;">HOME</a>
            <a class="navbar-brand" style="padding-left: 15px!important;">CIRCUITOS</a>
            <a class="navbar-brand" style="padding-left: 15px!important;">ESCUDERIAS</a>
            <a class="navbar-brand" style="padding-left: 15px!important;">CLASIFICACION CONSTRUCTORES</a>
            <a class="navbar-brand" style="padding-left: 15px!important;">CLASIFICACION PILOTOS</a>
            <a class="navbar-brand" style="padding-left: 15px!important;">NUEVO CIRCUITO</a>
            <a class="navbar-brand" style="padding-left: 15px!important;">NUEVO PILOTO</a>
            <a class="navbar-brand" style="padding-left: 15px!important;">SIMULAR CARRERA</a>
            <a class="navbar-brand" style="padding-left: 15px!important;">LOGOUT</a>

            </div>
        </div>
        </nav>
        `;

        document.body.innerHTML += barranav; //Estaquem el nav en el body

        //Una vegada estiga la barra carregada li fem a cada link un addEventListener
        setTimeout(() => {
            //Array.from perque es un array de les clases que te
            Array.from(document.getElementsByClassName('navbar-brand')).forEach(element => {
                element.addEventListener('click', function (e) {
                    console.log(e);//Mostra la pagina en la que esta
                    new Page().mostrarPagina(this.innerHTML);
                })
            })
        }, 50);
    }


    /*-----------------------------------------------------*/
    /*--------------------- L O G O U T---------------------*/
    //Al apretar al log out que redirigisxca asi i torne al login
    logout() {
        document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }

    /*-----------------------------------------------------*/
    /*------------------- PIE DE PAGINA -------------------*/
    piePagina() {

        var piePag = `
        <footer class="page-footer font-small special-color-dark fixed-bottom">
            <div class="footer-copyright text-center py-3">© 2020 Copyright:
                <a href="https://linktr.ee/alanm"> Alan Inc.</a>
            </div>
        </footer>
        `;

        document.body.innerHTML += piePag; //Estaquem el footer en el body
    }

}
