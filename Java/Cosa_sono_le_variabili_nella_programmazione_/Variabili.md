# Cosa sono le variabili nella programmazione

Una **variabile** è una locazione di memoria nel quale viene salvato un determinato dato.

Una **variabile** viene identificata attraverso un nome, esso rappresenta l'indirizzo fisico in memoria in quella locazione.

Una **variabile** per essere utilizzata deve essere sempre **dichiarata** e **inizializzata**.

## Dichiarazione

Per allocare in memoria una variabile bisogna dichiararla.

Lo spazio di memoria occupato varia in funzione del tipo di dato. Una variabile dichiarata inizialmente sarà senza valore.

## Inizializzazione

L'assegnazione di un valore predefinito alla variabile si chiama inizializzazione di quella variabile. Una variabile può essere inizializzata sia durante la dichiarazione che durante le fasi successive del programma.

---

La sintassi è la seguente:

```Java
tipo nomeVariabile = valore;

int numero = 100;

String testo = “Ciao mondo!”;
```

## Tipi di variabile

- **Variabili Locali**: Definite all’interno di un metodo. Create quando un metodo viene chiamato e cancellate dalla memoria quando il metodo termina

- **Variabili di istanza**: Sono definite all’interno di una classe, ma fuori dai metodi della classe stessa.

- **Variabili di Classe**: Sono variabili di istanzsa ma nella loro definizione viene usato il modificatore **static**.

- **Parametri**: Vengono dichiarati all’interno delle parentesi tonde di un determinato metodo.

```Java
package it.corso.java;

public class VitaDaCoder {
	public int a = 10; // Variabile di istanza
	public static String myString = "CIAO"; // Variabile di classe
	
	public static void main(String[] args) {

		VitaDaCoder v1 = new CorsoJava(); // istanza
		v1.a = 10;
		
		System.out.println(VitaDaCoder.myString); // Posso chiamare la variabile di classe senza istanziarla
		int b = 10; // Variabile locale
	}

	public String concatena(String stringa1, String stringa2) { // Parametri (stringa1 e 2)
		return stringa1.concat(stringa2);
	}

}
```

