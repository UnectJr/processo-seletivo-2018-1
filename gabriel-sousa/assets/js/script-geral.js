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