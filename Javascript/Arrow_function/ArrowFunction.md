# Le Arrow Function

Le **"arrow function"** sono una modalità alternativa con cui scrivere le funzioni in Javascript moderno. 

Lo sviluppatore produce codice tecnicamente e qualitativamente performante, ma ambisce anche a ridurre la quantità fisica di codice necessario.

La scrittura di codice più conciso ed il risparmio di tempo sono le due caratteristiche principali offerte dalle arrow function.

---

## Sintassi

Sintassi di una Funzione tradizionale:

```Javascript
var somma = function(x, y) {
	return x + y;
};
```

Sintassi di una Arrow Function:
```Javascript
var somma = (x, y) => x + y;
```
---

## Quando utilizzare le arrow function?

Le Arrow Function sono in grado di semplificare e velocizzare il nostro lavoro e sono particolarmente indicate per creare le callback function, un tipo di funzione che in JavaScript viene largamente usato per generare una risposta a un determinato evento.