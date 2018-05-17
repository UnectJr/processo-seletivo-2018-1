$botao = $('#back-to-top');

$(document).ready(function() {

    $botao.hide();
});

$(window).scroll(function() {

    console.log($(window).scrollTop());
    if ($(window).scrollTop() > 100) {
        $($botao).fadeIn();
    } else {
        $($botao).fadeOut();
    }
});

$botao.on("click", function(){	
	$('html,body').animate({
		scrollTop:0
	}, 800);
});

