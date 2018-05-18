
//Inicio do código referente ao botão
$botao = $('#back-to-top');

$(document).ready(function() {

    $botao.hide();
});

$(window).scroll(function() {

    console.log($(window).scrollTop());
    if ($(window).scrollTop() > 100) { //Essa condição determina a partir de quantos pixels o botão aparecerá na tela
        $($botao).fadeIn(); //FadeIn (botão aparece)
    } else {
        $($botao).fadeOut(); //FadeOut (botão fica oculto)
    }
});

$botao.on("click", function(){	
	$('html,body').animate({ //Animação para ser abragente em todo o site
		scrollTop:0
	}, 800); //Velocidade com que a página sobe ao topo, quanado o botão é clicado (800 milisegundos)
});
//Fim do código referente ao botão

jQuery(document).ready(function($) { 
    $(".scroll").click(function(event){        
        event.preventDefault();
        $('html,body').animate({
        	scrollTop:$(this.hash).offset().top}, 2000);
   });
});