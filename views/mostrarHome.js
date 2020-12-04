export { paginaHome };

/*--------------------------------------------------------*/
/*---------------------- H O M E -------------------------*/
function paginaHome() {
    // Set the count down timer

    var pagHome = `
        <!-- ======= Header ======= -->
        <header id="header" class="d-flex align-items-center">
          <div class="container d-flex flex-column align-items-center">
      
            <h1 style="color: #212529;">BIENVENIDOS A RESULT F1</h1>
            <h2 style="color: #212529;">¡Bienvenido al mundo de la Formula 1!</h2>
            <h2 style="color: #212529;">Tiempo restante de la competicion</h2>
            <div class="countdown d-flex justify-content-center" data-count="2021/02/21">
              <div>
                <h3>%D</h3>
                <h4>Dias</h4>
              </div>
              <div>
                <h3>%H</h3>
                <h4>Horas</h4>
              </div>
              <div>
                <h3>%M</h3>
                <h4>Minutos</h4>
              </div>
              <div>
                <h3>%S</h3>
                <h4>Segundos</h4>
              </div>
            </div>
      
            <div class="subscribe">
              <h4>Suscribete ahora para recibir las ultimas noticias!</h4>
              <form action="forms/notify.php" method="post" role="form" class="php-email-form">
                <div class="subscribe-form">
                  <input type="email" name="email"><input type="submit" value="Suscribirse">
                </div>
                <div class="mt-2">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">Your notification request was sent. Thank you!</div>
                </div>
              </form>
            </div>
      
            <div class="social-links text-center">
              <a href="#" class="twitter"><i class="icofont-twitter"></i></a>
              <a href="#" class="facebook"><i class="icofont-facebook"></i></a>
              <a href="#" class="instagram"><i class="icofont-instagram"></i></a>
            </div>
      
          </div>
        </header><!-- End #header -->
        `;

    document.body.innerHTML += pagHome;
    setTimeout(() => { //Funcio fletxa, dins establim el contador
        if ($('.countdown').length) {
            var count = $('.countdown').data('count');
            var template = $('.countdown').html();
            $('.countdown').countdown(count, function (event) {
                $(this).html(event.strftime(template));
            });
        }
    }, 50);
}
