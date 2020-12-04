import { getCookie } from "./views/cookies.js";
import { Page } from "./pages.js";
import { paginaLogin } from "./views/mostrarLogin.js"

window.addEventListener("load", main); //Quan carrega la pagina ejecutam el main

function main() {
    "use strict"; //si per exemple page no te var no va
    var page = new Page();

    //Entonces si la cookie no existix retorna "" entoces si no
    //existeix mostra el login, sino mostra el home cada vegada que recarregem.
    if (getCookie("username") == "") {
        page.mostrarPagina("Login"); //Login
    } else {
        page.mostrarPagina("HOME");
    }

}