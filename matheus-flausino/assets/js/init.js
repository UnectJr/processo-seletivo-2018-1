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

    document.getElementsByTagName('form')[0].addEventListener('submit', function (e) {
    e.preventDefault();

    if(this.checkValidity()){

        console.log(email.value, message.value);
        firebase.database().ref().child('website').push({
        "message": message.value,
        "email": email.value
        });
    }
    });

}
