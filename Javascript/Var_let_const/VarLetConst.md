# Var, let & const

## Let

Let è una variabile che può mutare il suo valore durante l'esecuzione di un programma.

Noi possiamo dichiarare la variabile let in un blocco ed assegnare il valore nello stesso scope o in uno scope inner.

## Const

Const è una keyword che serve a dichiarare variabili che non necessitano di cambiare valore in futuro.

Le variabili const sono immutabili.

## Var

Una dichiarazione "Var" può essere globally scoped, o function scoped.

Lo scope è globale quando una variabile var viene dichiarata fuori da una funzione.

Var è function scoped quando viene dichiarata all'interno di una funzione.

Con ES6 è una best practice usare let e const.

---

Esempio

```Javascript
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
```