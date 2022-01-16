let age = 0; // Dichiarazione di let
age = 30; // Modifica del valore

const birthYear = 1991; // Corretto
birthYear = 1990; // Sbagliato

var morning = "Good Morning";

function func1() {
    var night = "Good Night";
    morning = "Morning";
    console.log(night);
    console.log(morning);
}

funct1(); // Stamperà Good Night    Morning

console.log(night); // Errore
console.log(morning); // Good Morning