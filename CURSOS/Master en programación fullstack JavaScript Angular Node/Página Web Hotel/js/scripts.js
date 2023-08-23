$(document).ready(function() {

    // Cambio del header
    $(window).on('scroll', function() {
        let posicion = $('#primera').offset();
        if ($(window).scrollTop() >= posicion.top - 85) {
            $('header').removeClass('transparente');
        } else {
            $('header').addClass('transparente');
        }
    });

    // Accionamiento del menú lateral
    $('#burger').click(function() {
        $('#burger').toggleClass('abierto');
        $('.menu').toggleClass('abierto');
    });

    // Smooth scroll
    $('a').on('click', function() {
        if (this.hash !== '') {
            let hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800); 
        }
    });

});