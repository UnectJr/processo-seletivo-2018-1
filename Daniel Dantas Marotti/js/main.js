

//inicializando firebase
var config = {
    apiKey: "AIzaSyCohKVL1CUkZMy4cUO496zFVCbwFYNbcvM",
    authDomain: "contactform-portfolio.firebaseapp.com",
    databaseURL: "https://contactform-portfolio.firebaseio.com",
    projectId: "contactform-portfolio",
    storageBucket: "contactform-portfolio.appspot.com",
    messagingSenderId: "692556096608"
};
firebase.initializeApp(config);

var messagesRef = firebase.database().ref('messages');


//pegando os valores submetidos
document.getElementById('form-contact').addEventListener('submit', submitForm);


//submetendo o formulario
function submitForm(e) {
    e.preventDefault();

    var email = getInputVal('email');
    var mensagem = getInputVal('mensagem');


    //salvando mensagem
    saveMessage(email, mensagem);

    //mandando alerta de mensagem enviada
    document.querySelector('.alert').style.display = 'block';

    //fechando alerta apos 3s
    setTimeout(function () {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);


    //limpando o formulario
    document.getElementById('form-contact').reset();

}

// função para pegar os valores do formulario

function getInputVal(id) {
    return document.getElementById(id).value;
}


//salvando as mensagens do firebase
function saveMessage(email, mensagem) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        email: email,
        mensagem: mensagem
    });
}
//-----------------------------------------------------------------------------------------------------------------------------------------

// Smooth Scrolling
$(function () {

    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

//ANIMACAO NO SCROLL (scrollReveal)
window.sr = ScrollReveal();
sr.reveal('.navbar-nav', {
    duration: 2000,
    origin: 'bottom'
});
sr.reveal('.container .figure', {
    duration: 2000,
    origin: 'bottom'
});
sr.reveal('.landing-text', {
    duration: 2000,
    origin: 'top',
    distance: '300px'
});
sr.reveal('#sobre div', {
    duration: 2000,
    origin: 'bottom'
});
sr.reveal('.progress', {
    duration: 2000,
    origin: 'left',
    distance: '300px'
});
sr.reveal('.contact', {
    duration: 2000,
    origin: 'bottom'
});



//FUNCAO PARA DESABILITAR O NAVBAR-BRAND NA HOMEPAGE
$(function () {

    var navbar = $(".navbar-null");
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 700) {
            navbar.removeClass('navbar-null').addClass("navbar-brand");
        } else {
            navbar.removeClass("navbar-brand").addClass('navbar-null');
        }
    });
});



