/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

let sum = 10 + 20;
//verifico il risultato
console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
            //*21 per includere anche il 20
let random = Math.floor(Math.random() * 21);
console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

let me = {
  name: "Francesco",
  surname: "Scozzaro",
  age: 21
}

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

//delete" per rimuovere la proprietà
delete me.age;
console.log(me);
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = ["HTML", "CSS", "JavaScript"];
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

//.push() per aggiungere un elemento all'array
me.skills.push("Python");
console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

//.pop() per rimuovere l'ultimo elemento dell'array
me.skills.pop();
console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

const dice = () => {
  //+1 per includere anche il 6
  return Math.floor(Math.random() * 6) + 1;
}

console.log(dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

const whoIsBigger = (a, b) => {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log(whoIsBigger(10, 20));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

const splitMe = (string) => {
  //.split() per dividere la stringa in un array con " " come separatore
  return string.split(" ");
}
//splitMe splitta la stringa dell'array
console.log(splitMe("I learning coding"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

const deleteOne = (string, boolean) => {
  if (boolean) {
    return string.slice(1);
  } else {
    return string.slice(0, -1);
  }
}

//deleteOne ritorna la stringa senza il primo o l'ultimo carattere
console.log(deleteOne("Hello", true));
console.log(deleteOne("Hello", false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

const onlyLetters = (string) => {
  let result = "";
  //ciclo for per scorrere la stringa
  for (let i = 0; i < string.length; i++) {
    //isNaN() per verificare se il carattere è una cifra numerica
    if (isNaN(parseInt(string[i]))) {
      result += string[i];
    }
  }
  return result;
}

//onlyLetters rimuove le cifre numeriche dalla stringa
console.log(onlyLetters("The heart is a 142 muscle"));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

const isThisAnEmail = (string) => {
  //.includes() per verificare se la stringa contiene un "@"
  return string.includes("@");
}

//isThisAnEmail verifica se la stringa è un valido indirizzo email
console.log(isThisAnEmail("gigio@gmail.com"));
console.log(isThisAnEmail("gigio.gmail.com"));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
const whatDayIsIt = () => {
  //days per ottenere il giorno della settimana in stringa
  const days = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"];
  const date = new Date();
  //getDay() per ottenere il giorno della settimana (-1 per ottenere il giorno giusto in stringa)
  const day = date.getDay() - 1;
  return days[day];
}

//whatDayIsIt ritorna il giorno della settimana corrente
console.log(whatDayIsIt());


 
  //Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  //Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  //il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  //L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

 // Example:
 // rollTheDices(3) => ritorna {
  //    sum: 10
  //    values: [3, 3, 4]
  // }
//*/


//scopo del codice, chiamare numeri casuali  da dice() e sommarli

const rollTheDices = (num) => {
  //oggetto per contenere la somma e i valori
  let sum = 0;
  let values = [];
  //ciclo for per invocare la funzione dice() il numero di volte all'interno dell'oggetto
  for (let i = 0; i < num; i++) {
    //dice() per ottenere un numero casuale
    const value = dice();
    //somma dei valori
    sum += value;
    //aggiunta dei valori all'array
    values.push(value);
  }
  //ritorno con la somma e i valori
  return {
    sum: sum,
    values: values
  }
}

console.log(rollTheDices(3));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
const howManyDays = (date) => {
  //new Date() per ottenere la data corrente
  const currentDate = new Date();
  //getTime() per ottenere il numero di ms trascorsi dalla data passata
  const pastDate = date.getTime();
  //Math.abs() per ottenere il valore della sottrazione
  const diffTime = Math.abs(currentDate - pastDate);
  //Math.ceil() per arrotondare il numero di giorni
  //1000 * 3600 * 24 per ottenere il numero di ms in un giorno
  return Math.ceil(diffTime / (1000 * 3600 * 24));
}
console.log(howManyDays(new Date("2024-01-01")));

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

const isTodayMyBirthday = (date) => {
  //getMonth() per ottenere il mese della data passata
  const month = date.getMonth();
  //getDate() e getMonth() per ottenere il giorno e il mese della data passata
  const day = date.getDate();
  const currentMonth = new Date().getMonth();
  const currentDay = new Date().getDate();
  //se il mese e il giorno sono uguali, ritorna true
  return month === currentMonth && day === currentDay;
}

console.log(isTodayMyBirthday(new Date("2024-01-01")));

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

const deleteProp = (obj, prop) => {
  //delete per rimuovere la proprietà
  delete obj[prop];
  //ritorno dell'oggetto senza la proprietà
  return obj;
}

//deleteProp rimuove la proprietà dall'oggetto, in questo caso "age"
console.log(deleteProp({name: "Francesco", age: 21}, "age"));






//ho spostato array di oggetti per far funzionare le funzioni sottostanti come esercizio 12/13 etc..

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/


//moviesArray è l'array di oggetti
const newestMovie = (movies) => {
  // 2 variabili per il film più recente e il numero di date presenti
  let newestFilm = movies[0];
  let presentDatesCounter = 0;

  //ciclo for per scorrere l'array
  for (let i = 0; i < movies.length; i++) {
    //isNaN() per verificare se l'anno è un numero
    if (movies[i].Year && !isNaN(movies[i].Year)) {
      presentDatesCounter++;
      //parseInt() per convertire l'anno in un numero
      if (parseInt(movies[i].Year) > parseInt(newestFilm.Year)) {
        newestFilm = movies[i];
      }
    }
  }
  //ritorno del film più recente
  return newestFilm;
}

console.log(newestMovie(movies));




/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

const countMovies = (movies) => {
  //.length per ottenere il numero di film
  return movies.length;
}

console.log(countMovies(movies));


/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

const onlyTheYears = (movies) => {
  //.map() per creare un nuovo array con gli anni di uscita dei film
  //(movie) => movie.Year per ottenere l'anno di uscita dei film
  return movies.map((movie) => movie.Year);
}

console.log(onlyTheYears(movies));

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

const onlyInLastMillennium = (movies) => {
  //filtrare i film prodotti nel millennio scorso
  //parseInt() per convertire l'anno in un numero
  return movies.filter((movie) => parseInt(movie.Year) < 2000);
}

console.log(onlyInLastMillennium(movies));

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

const sommaAnniFilm = (films) => {
  let somma = 0;
  //ciclo for per scorrere l'array  
  for (let i = 0; i < films.length; i++) {
    //somma degli anni di uscita dei film
    somma = somma + Number(films[i].Year);
  }
  return somma;
}

console.log(sommaAnniFilm(movies));

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

const searchByTitle = (title) => {
  //array per i risultati
  let results = [];
  
  //ciclo for per scorrere l'array
  for (let i = 0; i < movies.length; i++) {
    //.includes() per verificare se il titolo del film contiene la stringa
    if (movies[i].Title.toLowerCase().includes(title.toLowerCase())) {
      //aggiunta del film ai risultati
      results.push(movies[i]);
    }
  }
  
  //ritorno dell'array dei risultati
  return results;
}

//test della funzione
console.log(searchByTitle("Avengers"));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

const searchAndDivide = (title) => {
  //array per i film match e unmatch
  let match = [];
  let unmatch = [];
  
  //ciclo for per scorrere l'array
  for (let i = 0; i < movies.length; i++) {
    //.includes() per verificare se il titolo del film contiene la stringa
    if (movies[i].Title.toLowerCase().includes(title.toLowerCase())) {
      //aggiunta del film ai risultati
      match.push(movies[i]);
    } else {
      //aggiunta del film ai risultati
      unmatch.push(movies[i]);
    }
  }

  //ritorno dell'oggetto contenente i film match e unmatch
  return {
    match: match,
    unmatch: unmatch
  };
}

//test della funzione
console.log(searchAndDivide("Tarzan"));

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

const removeIndex = (index) => {
  //.splice() per rimuovere l'elemento dall'array
  //index è la posizione dell'elemento da rimuovere
  //1 è il numero di elementi da rimuovere
  return movies.splice(index, 1);
}

console.log(removeIndex(1));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

const selectContainer = () => {
  //getElementById per selezionare l'elemento con l'id "container"
  return document.getElementById("container");
}

console.log(selectContainer());

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

const selectTd = () => {
  //getElementsByTagName per selezionare tutti i tag <td>
  return document.getElementsByTagName("td");
}

console.log(selectTd());

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

const printTd = () => {
  //getElementsByTagName per selezionare tutti i tag <td>
  let tds = document.getElementsByTagName("td");
  //ciclo for per scorrere l'array
  for (let i = 0; i < tds.length; i++) {
    //textContent per ottenere il testo contenuto nel tag <td>
    console.log(tds[i].textContent);
  }
}

printTd();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

const addRedBackground = () => {
  //getElementsByTagName per selezionare tutti i link
  let links = document.getElementsByTagName("a");
  //ciclo for per scorrere l'array
  for (let i = 0; i < links.length; i++) {
    //style per aggiungere un background di colore rosso
    links[i].style.backgroundColor = "red";
  }
}

addRedBackground();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

const addNewElement = () => {
  // Verifica se l'elemento con id "myList" esiste
  const ul = document.getElementById("myList");
  if (!ul) {
    console.error("Elemento con id 'myList' non trovato");
    return;
  }
  // Crea un nuovo elemento <li>
  const li = document.createElement("li");
  
  // Aggiunge il testo al nuovo elemento
  li.innerText = "numeri";
  
  // Aggiunge il nuovo elemento <li> all'interno di <ul>
  ul.appendChild(li);
  
  // Visualizza la lista aggiornata nella pagina HTML
  document.getElementById("containerul").style.display = "block";
}

// Chiama la funzione quando la pagina è completamente caricata
//window e load per assegnare un evento al caricamento della pagina
//addNewElement per chiamare la funzione
window.addEventListener("load", addNewElement);

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

const emptyList = () => {
  //getElementById per selezionare l'elemento con l'id "myList"
  let list = document.getElementById("myList");
  //innerHTML = "" per svuotare la lista
  list.innerHTML = "";
}

emptyList();

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

const addClass = () => {
  //getElementsByTagName per selezionare tutti i tag <tr>
  let trs = document.getElementsByTagName("tr");
  //ciclo for per scorrere l'array
  for (let i = 0; i < trs.length; i++) {
    //classList.add per aggiungere la classe CSS "test"
    trs[i].classList.add("test");
  }
}

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

const halfTree = (height) => {
  //ciclo for per costruire l'albero
  for (let i = 1; i <= height; i++) {
    //repeat() per aggiungere gli asterischi
    console.log("*".repeat(i));
  }
}

halfTree(3);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

const tree = (height) => {
  // costruire l'albero completo
  for (let i = 1; i <= height; i++) {
    // Calcola gli spazi prima degli asterischi
    //height - i per ottenere il numero di spazi
    let spazi = " ".repeat(height - i);
    // Calcola gli asterischi per ogni riga
    //2 * i - 1 per ottenere il numero di asterischi
    let asterischi = "*".repeat(2 * i - 1);
    // Stampa la riga completa
    console.log(spazi + asterischi);
  }
}

tree(3);

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

const isItPrime = (number) => {
  // Verifica se il numero è minore di 2
  //se il numero è minore di 2, non è primo
  if (number <= 1) {
    return false;
  }
  // Ciclo per verificare se il numero è divisibile per qualche numero da 2 a sqrt(number)
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  // Se il numero non è divisibile per nessun numero, è primo
  return true;
}

// Esempi di utilizzo
console.log(isItPrime(2)); // true


