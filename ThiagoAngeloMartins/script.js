$navInfo = $('#navInfo');
$navBio = $('#navBio');
$navHobbies = $('#navHobbies');
$navAnimes = $('#navAnimes');
$navFilmes = $('#navFilmes');



function MudarAtivo(elemento) {


    $('.navActive').removeClass('navActive');
    elemento.addClass('navActive');



}


$navInfo.on("click", function() {
    MudarAtivo($navInfo);
});
$navBio.on("click", function() {
    MudarAtivo($navBio);
});
$navHobbies.on("click", function() {
    MudarAtivo($navHobbies);
});
$navAnimes.on("click", function() {
    MudarAtivo($navAnimes);
});
$navFilmes.on("click", function() {
    MudarAtivo($navFilmes);
});