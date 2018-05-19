//VARIÁVEIS

// Guardando algumas referências do DOM 
$navInfo = $('#navInfo');
$navBio = $('#navBio');
$navHobbies = $('#navHobbies');
$navAnimes = $('#navAnimes');
$navJogos = $('#navJogos');
$navFilmes = $('#navFilmes');
$mobileNavInfo = $('#mobileNavInfo');
$mobileNavBio = $('#mobileNavBio');
$mobileNavHobbies = $('#mobileNavHobbies');
$mobileNavAnimes = $('#mobileNavAnimes');
$mobileNavJogos = $('#mobileNavJogos');
$mobileNavFilmes = $('#mobileNavFilmes');
$contentSub = $('#contentSub');
$content = $('#content');
$pageDelete = $('#content');
$pageInfo = $('#pageInfo');
$pageBio = $('#pageBio');
$pageHobbies = $('#pageHobbies');
$pageAnimes = $('#pageAnimes');
$pageJogos = $('#pageJogos');
$pageFilmes = $('#pageFilmes');
$navMobile = $('#navMobile');
$mobileMenu = $('#mobileMenu');
$cover = $('#cover');
$animeSlideshow = $('#animeSlideshow');
$gameSlideShow = $('#gameSlideShow');
$filmeSlideShow = $('#filmeSlideShow');
//Referencia do css
var cssVars = document.documentElement.style;
// Definindo dois arrays de referencias para melhor manipulação
navItens = [$navInfo, $navBio, $navHobbies, $navAnimes, $navJogos, $navFilmes];
pageItens = [$pageInfo, $pageBio, $pageHobbies, $pageAnimes, $pageJogos, $pageFilmes];

//Definindo algumas variáveis que serão utilizadas 
var pageAtual = 0;
currentSlide = 1;
currentSlide2 = 1;
currentSlide3 = 1;
pageWidth = 0;
var Acabou;


//FUNÇÕES

//Função para fazer a transição das imagens
function slideTransition(elemento, id, slide) {


    if (elemento.hasClass('animateSlideShow' + id)) {


        elemento.removeClass('animateSlideShow' + id);

        setTimeout(function() {

            cssVars.setProperty('--imagem', 'url("img/slideshow' + id + '/' + slide + '.jpg")');

            elemento.addClass('animateSlideShow2');

            elemento.css("background-image", 'url("img/slideshow' + id + '/' + slide + '.jpg")');

        }, 1);


    } else {

        cssVars.setProperty('--imagem', 'url("img/slideshow' + id + '/' + slide + '.jpg")');

        elemento.addClass('animateSlideShow' + id);

        elemento.css("background-image", 'url("img/slideshow' + id + '/' + slide + '.jpg")');



    }

}
//Função que controla a transição de imagens da página de animes
function slideshow1() {


    if (pageAtual == 3) {

        $animeSlideshow = $('#animeSlideshow');

        currentSlide++;

        if (currentSlide > 10) {

            currentSlide = 1;
        }


        slideTransition($animeSlideshow, 1, currentSlide);



    }

}
//Função que controla a transição de imagens da página de games
function slideshow2() {


    if (pageAtual == 4) {

        $gameSlideshow = $('#gameSlideShow');

        currentSlide2++;

        if (currentSlide2 > 10) {

            currentSlide2 = 1;
        }

        slideTransition($gameSlideshow, 2, currentSlide2);


    }

}
//Função que controla a transição de imagens da página de filmes
function slideshow3() {


    if (pageAtual == 5) {

        $filmeSlideshow = $('#filmeSlideShow');

        currentSlide3++;

        if (currentSlide3 > 10) {

            currentSlide3 = 1;
        }

        slideTransition($filmeSlideshow, 3, currentSlide3);

    }

}

//Função que muda o menu o menu que o usuário está
function MudarAtivo(elemento) {


    $('.navActive').removeClass('navActive');
    elemento.addClass('navActive');

}
//Função para fazer a transição das telas do menu
function Navigate(elemento) {

    pageWidth = $contentSub.width() / 3;
    meio = pageWidth;
    final = pageWidth * 2;
    comeco = 0;

    var ind = -1;

    for (var i = 0; i < navItens.length; i++) {

        if (elemento == navItens[i]) {

            ind = i;

        }
    }

    var value = pageAtual - ind;



    if (value < 0) {

        pageAtual = ind;

        $('.subPage').each(function(indice) {

            if (indice == 2) {

                $(this).html(pageItens[ind].html());

            }


        });

        $content.animate({ scrollLeft: final }, 230, function() {

            $content.scrollLeft(meio);
            $('.subPage').each(function(indice) {

                if (indice == 1) {

                    $pageDelete = $(this);
                }

            });

            var $tempPage = $pageDelete.detach();

            $contentSub.append($tempPage);

            $tempPage.html('');


        });




    } else if (value > 0) {


        pageAtual = ind;

        $('.subPage').each(function(indice) {

            if (indice == 0) {

                $(this).html(pageItens[ind].html());

            }


        });

        $content.animate({ scrollLeft: comeco }, 230, function() {



            $content.scrollLeft(meio);

            $('.subPage').each(function(indice) {

                if (indice == 1) {

                    $pageDelete = $(this);
                }

            });

            var $tempPage = $pageDelete.detach();

            $contentSub.prepend($tempPage);

            $tempPage.html('');



        });





    }
}

//Função para esconder o menu mobile
function HideMobileMenu(elemento) {

    if ($mobileMenu.hasClass("animateDisappearLeft")) {

        $mobileMenu.removeClass("animateDisappearLeft");
    }
    $mobileMenu.addClass("animateDisappearLeft");

    $cover.animate({ opacity: 0 }, 100, function() {

        $cover.css("display", "none");

        $(elemento).click();


    });


}
//Função para mover para algum menu quando o tamanho da tela for modificado
function MoveWindow() {


    if (pageAtual == 0) {

        $navBio.click();
    } else {

        $navInfo.click();
    }
}

//Definindo o intervalo de tempo que as funções irão ser disparadas novamente
setInterval(slideshow1, 5000);
setInterval(slideshow2, 5000);
setInterval(slideshow3, 5000);

// EVENTOS

//Eventos que disparam ao click do usario no determinado elemento
$navInfo.on("click", function() {
    MudarAtivo($navInfo);
    Navigate($navInfo, pageAtual);

});
$navBio.on("click", function() {
    MudarAtivo($navBio);
    Navigate($navBio, pageAtual);

});
$navHobbies.on("click", function() {
    MudarAtivo($navHobbies);
    Navigate($navHobbies, pageAtual);
});
$navAnimes.on("click", function() {
    MudarAtivo($navAnimes);
    Navigate($navAnimes, pageAtual);
});
$navJogos.on("click", function() {
    MudarAtivo($navJogos);
    Navigate($navJogos, pageAtual);
});
$navFilmes.on("click", function() {
    MudarAtivo($navFilmes);
    Navigate($navFilmes, pageAtual);
});
$mobileNavInfo.on("click", function() {

    HideMobileMenu($navInfo);

});
$mobileNavBio.on("click", function() {

    HideMobileMenu($navBio);

});
$mobileNavHobbies.on("click", function() {

    HideMobileMenu($navHobbies);

});
$mobileNavAnimes.on("click", function() {

    HideMobileMenu($navAnimes);

});
$mobileNavJogos.on("click", function() {

    HideMobileMenu($navJogos);

});
$mobileNavFilmes.on("click", function() {

    HideMobileMenu($navFilmes);

});
$navMobile.on("click", function() {


    if ($mobileMenu.hasClass("animateAppearLeft")) {

        $mobileMenu.removeClass("animateAppearLeft");
    }
    if ($mobileMenu.hasClass("animateDisappearLeft")) {

        $mobileMenu.removeClass("animateDisappearLeft");
    }
    $cover.css("display", "block");
    $cover.animate({ opacity: 1 }, 100, function() {

        $mobileMenu.addClass("animateAppearLeft");

    });

});

//Evento para exibir o conteúdo da página somente quando ela estier totalmente carregada
$(window).on("load", function() {


    $loader = $('#loader');
    $main = $('#main');


    $loader.animate({ opacity: 0 }, 500, function() {

        $loader.css("display", "none");

        $main.css("display", "block");

        $main.addClass('getup');

    });
    $main.removeClass('getup');

    pageWidth = $contentSub.width() / 3;

    $content.scrollLeft(pageWidth);

    for (var i = 0; i < 3; i++) {

        $('.subPage').each(function(indice) {

            if (indice == i) {

                $(this).html(pageItens[i].html());

            }



        });

    }

});

//Evento para mudar ajustar o conteúdo da tela sempre que o usuário terminar de redimensioná-la
$(window).resize(function() {


    clearTimeout(Acabou);

    Acabou = setTimeout(MoveWindow, 250);


});