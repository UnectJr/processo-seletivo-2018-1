
//Inicio do código referente ao botão
$botao = $('#back-to-top');

$(document).ready(function() {

    $botao.hide();
});

$(window).scroll(function() {

    console.log($(window).scrollTop());
    if ($(window).scrollTop() > 100) { //Essa condição determina a partir de quantos pixels o botão aparecerá na tela
        $($botao).fadeIn(); //FadeIn (botão aparece)
    } else {
        $($botao).fadeOut(); //FadeOut (botão fica oculto)
    }
});

$botao.on("click", function(){	
	$('html,body').animate({ //Animação para ser abragente em todo o site
		scrollTop:0
	}, 800); //Velocidade com que a página sobe ao topo, quanado o botão é clicado (800 milisegundos)
});
//Fim do código referente ao botão

window.onSpotifyWebPlaybackSDKReady = () => {
  const token = 'BQA3YLIH7EYpefyp8-kbcU0U4i-dO0FwJQCljTfJb3RH9PC5NuGIwscen7eTH_1IR05RaWZSOXYZhlt1RqyR_Svrjc1G9_Y1mStUvMqRA8oCvjlZyIx2oTCp_xmBC9J-a7btiTN7bbhyQQOHNVK9pLemdWqQMdtwBz3G';
  const player = new Spotify.Player({
    name: 'Web Playback SDK Quick Start Player',
    getOAuthToken: cb => { cb(token); }
  });

  // Error handling
  player.addListener('initialization_error', ({ message }) => { console.error(message); });
  player.addListener('authentication_error', ({ message }) => { console.error(message); });
  player.addListener('account_error', ({ message }) => { console.error(message); });
  player.addListener('playback_error', ({ message }) => { console.error(message); });

  // Playback status updates
  player.addListener('player_state_changed', state => { console.log(state); });

  // Ready
  player.addListener('ready', ({ device_id }) => {
    console.log('Ready with Device ID', device_id);
  });

  // Not Ready
  player.addListener('not_ready', ({ device_id }) => {
    console.log('Device ID has gone offline', device_id);
  });

  // Connect to the player!
  player.connect();
};