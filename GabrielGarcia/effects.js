///Gabriel Garcia


    /*$("#imgIniciais").owlCarousel({	//Perceba que eu usei .thumbnails e não # pois não é ID. Usado para criar o slide de efeito

		loop: true,	//mesmo clicando sempre no botão próximo nunca para, afinal está em um loop
        items:1,
        singleItem: true,
        loop:true,
        autoWidth: true,
        autoplay:true,
        autoplayTimeout:1000,
        responsive: {	//Configuração vinda da URL: https://owlcarousel2.github.io/OwlCarousel2/demos/responsive.html
			0:{	//Para celular
				items: 1
			},
			480:{	//Para tablet
				items: 1
			},
			1000:{	//Para uma tela maior que tablet
				items: 1
			},
			1200:{	//Para uma tela ainda maior	(é o meu caso)
				items: 1
			}
		}
//link útil: https://stackoverflow.com/questions/10475058/slowly-change-fade-animate-an-image-changing-with-jquery
	})
*/
/*
$(document).ready(function () {
    $("#imgIniciais .thumbnail").mouseenter(function (e) {
        e.preventDefault();
        $(".product-images-cover").fadeOut(250).attr("src", $(this).attr('src')).fadeIn(250);
    });
});*/


  //link topper: http://jonraasch.com/blog/a-simple-jquery-slideshow
  //outro link: https://drupal.stackexchange.com/questions/207801/how-to-change-transition-to-fade-on-boostrap-carousel-module
/*
  function slideSwitch() {
    var $active = $('#imgIniciais IMG.active');

    if ( $active.length == 0 ) $active = $('#imgIniciais IMG:last');

    var $next =  $active.next().length ? $active.next()
        : $('#imgIniciais IMG:first');

    $active.addClass('last-active');
        
    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
}

$(function() {
    setInterval( "slideSwitch()", 5000 );
});*/


//O exemplo de cima é o mais ideal para o que quero ^
$(document).ready(function() {
	$("#imgIniciais").owlCarousel({
	  loop: true,
	  items: 1,
	  singleItem: true,
	  autoplay: true,
	  autoplayTimeout:2000
	});
  });//para remover os botões basta dar um inspecionar elemento nos pontos

//Criando um carousel para minha lista de games
$(document).ready(function() {
	$("#imgGames").owlCarousel({
	  loop: true,
	  items: 3,
	  autoplay: true,
	  autoplayTimeout:2500
	});
  });