/*  
 * Biblioteca JavaScript geral
 * Feito para o site do Desafio Unect 2018/1
 *
 * Feito por Gabriel Sousa
 * https://gabrielsousa.me/
 *
 * Data: 21-05-2018 00:22
*/

// FAZ MENU APARECER/DESAPARECER COM SCROLL
// quando o usuario rolar para baixo, esconda o header-principal; quando rolar para cima, mostre-o
var posAntScroll = window.pageYOffset;
window.onscroll = function() {
    var posAtualScroll = window.pageYOffset;
    if (posAntScroll > posAtualScroll) {
        document.getElementById("header-principal").style.top = "0";
    } else {
        document.getElementById("header-principal").style.top = "-3.5rem";
    }
    posAntScroll = posAtualScroll;
}

// SCROLL SUAVE PARA TODOS OS LINKS
$(document).ready(function(){
    // Add scroll suave para todos os links
    $("a").on('click', function(event) {
        // Tenha certeza que this.hash tenha um valor antes de sobrepor o comportamento padrao
        if (this.hash !== "") {
            // Prevenir comportamento padrao do click ancora
            // para que nao exista smooth scroll no iframe, comentar a linha abaixo
            /* event.preventDefault(); */

            // Armazena o hash
            var hash = this.hash;

            // Usar o metodo animate() do jQuery para add scroll suave à pagina
            // O numero opicional (800) especifica o numero em milisegundos que vai levar para rolar para a area especifica
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
            
                // Add hash (#) à URL quando a rolagem terminar (comportamento padrao do clique)
                window.location.hash = hash;
            });
        } // Termina If
    });
});