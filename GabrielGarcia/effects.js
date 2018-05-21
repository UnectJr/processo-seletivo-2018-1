///Gabriel Garcia

//Criando um carousel para imagens do header
$(document).ready(function() {
	$("#imgIniciais").owlCarousel({
	  loop: true,
	  items: 1,
	  singleItem: true,
	  autoplay: true,
	  autoplayTimeout:2000
	});
});

//Criando um carousel para minha lista de games
$(document).ready(function() {
	$("#imgGames").owlCarousel({
	  loop: true,
	  items: 3,
	  autoplay: true,
	  autoplayTimeout:2500
	});
});