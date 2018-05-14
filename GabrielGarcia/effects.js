///Gabriel Garcia


    $("#imgIniciais").owlCarousel({	//Perceba que eu usei .thumbnails e não # pois não é ID. Usado para criar o slide de efeito

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
