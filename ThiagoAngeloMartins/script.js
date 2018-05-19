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
currentSlide = 1;

$gameSlideShow = $('#gameSlideShow');
currentSlide2 = 1;

navItens = [$navInfo, $navBio, $navHobbies, $navAnimes, $navJogos, $navFilmes];
pageItens = [$pageInfo, $pageBio, $pageHobbies, $pageAnimes, $pageJogos, $pageFilmes];


// no comeco 
var pageAtual = 0;

pageWidth = $contentSub.width() / 3;

$content.scrollLeft(pageWidth);

for (var i = 0; i < 3; i++) {

    $('.subPage').each(function(indice) {

        if (indice == i) {

            $(this).html(pageItens[i].html());

        }



    });

}

function slideshow1() {


    if (pageAtual == 3) {

        $animeSlideshow = $('#animeSlideshow');

        currentSlide++;

        if (currentSlide > 10) {

            currentSlide = 1;
        }
        console.log(currentSlide);
        $animeSlideshow.animate({ opacity: 0 }, 200, function() {

            $animeSlideshow.css("background-image", 'url("img/slideshow1/' + currentSlide + '.jpg")');

            $animeSlideshow.animate({ opacity: 1 }, 200);

        });


    }

}

function slideshow2() {


    if (pageAtual == 4) {

        $gameSlideshow = $('#gameSlideShow');

        currentSlide2++;

        if (currentSlide2 > 10) {

            currentSlide2 = 1;
        }


        console.log(currentSlide);
        $gameSlideshow.animate({ opacity: 0 }, 200, function() {

            $gameSlideshow.css("background-image", 'url("img/slideshow2/' + currentSlide2 + '.jpg")');

            $gameSlideshow.animate({ opacity: 1 }, 200);

        });


    }

}

setInterval(slideshow1, 5000);
setInterval(slideshow2, 5000);

function MudarAtivo(elemento) {


    $('.navActive').removeClass('navActive');
    elemento.addClass('navActive');

}

function Navigate(elemento) {

    pageWidth = $contentSub.width() / 3;
    meio = pageWidth;
    final = pageWidth * 2;
    comeco = 0;
    console.log('tamanho: ' + pageWidth * 3);
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



        });





    }


}

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


$content.on("scroll", function() {

    console.log($content.scrollLeft());

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


$(window).on("load", function() {


    $loader = $('#loader');
    $main = $('#main');


    $loader.animate({ opacity: 0 }, 500, function() {

        $loader.css("display", "none");

        $main.css("display", "block");

        $main.addClass('getup');

    });
    $main.removeClass('getup');


});