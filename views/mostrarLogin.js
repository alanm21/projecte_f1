export { paginaLogin };

import { Page } from "../pages.js";

/*--------------------------------------------------------*/
/*---------------------- L O G I N -----------------------*/
function paginaLogin() {

    var loginpag = `
        <div class="login-form loginCentrado">
            <form name=form>
                <div class="avatar">
                    <img src="/imagenes/img/F1-logo.png" alt="Avatar">
                </div>           
                <div class="form-group">
                    <input type=text name="login" class="form-control input-lg" placeholder="Usuario" required="required">
                </div>
                <div class="form-group">
                    <input type=password name="password" class="form-control input-lg" placeholder="Contraseña" required="required">
                </div>        
                <div class="form-group">
                    <input type=button class="btn btn-primary btn-lg btn-block login-btn" value="ACCEDER" id="botonLogin">
                </div>
                <p class="hint-text">¿No tienes una cuenta? <a href="#">Registrate aqui</a></p>
            </form>
        </div>
        `;

    document.body.innerHTML += loginpag;


    //Esperem a que carrege el html
    setTimeout(() => {
        let agafarBoto = document.getElementById("botonLogin");
        agafarBoto.addEventListener("click", () => { //Un altre addEventListener en este cas al fer login 
            //Iterator, el .value es un iterator en aquest cas el gaste per agafar el valor del imput per a fer login

            var formData = new FormData(document.getElementsByTagName("form")[0]);
            //console.log(formData.get("login"));

            if (formData.get("login") == 'alan' && formData.get("password") == '123') {
                document.cookie = 'username=alan';

                return new Promise(async (resolve, reject) => {
                    await new Page().pantallaCarga();
                    new Page().mostrarPagina("HOME"); //Mostrem la pagina que ixira si el login es correcte
                    resolve();
                })

            } else {
                alert("Porfavor ingrese, nombre de usuario y contraseña correctos.");
            }
        });
    }, 100);

}
