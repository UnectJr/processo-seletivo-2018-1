// Initialize Firebase
var config = {
    apiKey: "AIzaSyCplrp9j4o82y62VkOzM1eu-P6SiOo6AxY",
    authDomain: "getform-email-website.firebaseapp.com",
    databaseURL: "https://getform-email-website.firebaseio.com",
    projectId: "getform-email-website",
    storageBucket: "getform-email-website.appspot.com",
    messagingSenderId: "32979660426"
};

firebase.initializeApp(config);
window.onload = function () {
    var email = document.getElementById('email');
    var message = document.getElementById('message');
    var alert = document.getElementById("snackbar");

    document.getElementsByTagName('form')[0].addEventListener('submit', function (e) {
    e.preventDefault();

    if(this.checkValidity()){

        console.log(email.value, message.value);
        firebase.database().ref().child('website').push({
        "message": message.value,
        "email": email.value
        })
        .then(function(e){
                alert.className = "show";
                setTimeout(function(){ alert.className = alert.className.replace("show", ""); }, 3000);
            }, 
            function(e){console.log(e)}
        );
    }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth', block:'start'
            });
        });
    });

}
