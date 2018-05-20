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
function submitForm(e){
    e.preventDefault();

    var email = getInputVal('email');  
    var mensagem = getInputVal('mensagem');


    //salvando mensagem
    saveMessage(email, mensagem);

    //mandando alerta de mensagem enviada
    document.querySelector('.alert').style.display = 'block';

    //fechando alerta apos 3s
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);
    

    //limpando o formulario
    document.getElementById('form-contact').reset();

}

// função para pegar os valores do formulario

function getInputVal(id){
    return document.getElementById(id).value;
}


//salvando as mensagens do firebase
function saveMessage(email, mensagem){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        email: email,
        mensagem: mensagem
    });
}