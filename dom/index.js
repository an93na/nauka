const elementyTd = document.querySelectorAll('td');
let pierwszyElementTd = elementyTd[0];
let ostatniElementTd = elementyTd[elementyTd.length-1];
console.log('Bieżący dokument zawiera: '+ elementyTd.length + ' elementów td');
console.log("Pierwszy element to: ", pierwszyElementTd);
console.log("Ostatni element to: ", ostatniElementTd);