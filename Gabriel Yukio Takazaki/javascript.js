var slideIndex = 1;
showSlides(slideIndex);

$(document).ready(function() { 
    setTimeout(function() { 
        $("#botao").removeClass("displayNone"); 
    }, 4 * 1000); 
});

function wish() {
    $('#frase').removeClass("displayNone");    
    $('#imagem').removeClass("displayNone");
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = $(".slides");
    if (n > slides.length) {
        slideIndex = 1
    }    
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";
}