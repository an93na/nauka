
//querySelectorAll znajduje elementy i zwraca tablice, czyli znajduje wszystkie elementy
const elementyTd = document.querySelectorAll('td');
let pierwszyElementTd = elementyTd[0];
let ostatniElementTd = elementyTd[elementyTd.length-1];
console.log('Bieżący dokument zawiera: '+ elementyTd.length + ' elementów td');
console.log("Pierwszy element to: ", pierwszyElementTd);
console.log("Ostatni element to: ", ostatniElementTd);
//querySelector znajduje i zwraca pierszy element (tylko jeden)
const pierwszyTd = document.querySelector("td");
console.log("Pierwszy element td to : ", pierwszyTd);

//getElementById wyszukuje po id
let elementId = document.getElementById('element2');
console.log('znaleziony element po Id: ', elementId);

//getElementsByClassName wyszukuje po nazwie klasy i zwraca kilka elementów
let klasy = document.getElementsByClassName("klasa1");
console.log("elementy znalezione po ElementsByClassName", klasy);

//getElementsByTagName wyszukuje po znacznikach i zwraca kilka elementow
let znacznik = document.getElementsByTagName("td");
console.log("Wyszukiwanie po getElementsByTagName ", znacznik);

//getElementsByName wyszukuje pole o danej nazwie w formularzu
let wartoscName = document.getElementsByName("imie");
let wartoscName2 = document.getElementsByName("nazwisko");
console.log("Szukanie po nazwie /imie/ w formularzu getElementsByName", wartoscName);
console.log("Szukanie po nazwie /nazwisko/ w formularzu getElementsByName", wartoscName2);